import { useState, useEffect, useRef } from "react";
import { useGlobal } from "../context/GlobalContext";

/**
 * useTranslation Hook
 * -------------------
 * Automatically translates a map of text keys when the language changes.
 *
 * Usage:
 *   const { t, loading } = useTranslation({
 *     title: "Welcome to our store",
 *     subtitle: "Find the best products",
 *     cta: "Shop Now",
 *   });
 *
 *   return <h1>{t.title}</h1>
 */
export function useTranslation(texts) {
  const { language } = useGlobal();
  const [translated, setTranslated] = useState(texts);
  const [loading, setLoading] = useState(false);
  const prevLang = useRef(language);

  useEffect(() => {
    if (language === "en") {
      setTranslated(texts);
      return;
    }

    // Avoid re-translating if language hasn't changed
    if (prevLang.current === language && Object.keys(translated).length > 0) {
      return;
    }

    setLoading(true);
    prevLang.current = language;

    const entries = Object.entries(texts);
    const batchText = entries.map(([, v]) => v).join("\n|||SPLIT|||\n");

    const langName =
      {
        ar: "Arabic", es: "Spanish", fr: "French", it: "Italian",
        pt: "Portuguese", de: "German", zh: "Chinese (Simplified)",
        ja: "Japanese", ru: "Russian", nl: "Dutch", he: "Hebrew",
        hi: "Hindi", tr: "Turkish", ko: "Korean", pl: "Polish",
      }[language] || language;

    fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [
          {
            role: "user",
            content: `Translate each of the following texts to ${langName}.
Keep each translation on its own block separated by |||SPLIT|||.
Return ONLY the translated texts in the same order, separated by |||SPLIT|||. No extra text, no numbering.

${batchText}`,
          },
        ],
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        const raw = data.content?.[0]?.text?.trim() || "";
        const parts = raw.split("|||SPLIT|||").map((s) => s.trim());
        const result = {};
        entries.forEach(([key], i) => {
          result[key] = parts[i] || texts[key];
        });
        setTranslated(result);
      })
      .catch(() => setTranslated(texts))
      .finally(() => setLoading(false));
  }, [language]);

  return { t: translated, loading };
}

/**
 * useTranslateText Hook
 * ---------------------
 * Translates a single string reactively.
 *
 * Usage:
 *   const { text, loading } = useTranslateText("Hello World");
 */
export function useTranslateText(text) {
  const { language } = useGlobal();
  const [result, setResult] = useState(text);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!text || language === "en") {
      setResult(text);
      return;
    }

    const cached = sessionStorage.getItem(`tr_${language}_${text}`);
    if (cached) {
      setResult(cached);
      return;
    }

    setLoading(true);
    const langName =
      {
        ar: "Arabic", es: "Spanish", fr: "French", it: "Italian",
        pt: "Portuguese", de: "German", zh: "Chinese (Simplified)",
        ja: "Japanese", ru: "Russian", nl: "Dutch", he: "Hebrew",
        hi: "Hindi", tr: "Turkish", ko: "Korean", pl: "Polish",
      }[language] || language;

    fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 500,
        messages: [
          {
            role: "user",
            content: `Translate to ${langName}. Return ONLY the translation:\n${text}`,
          },
        ],
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        const translated = data.content?.[0]?.text?.trim() || text;
        sessionStorage.setItem(`tr_${language}_${text}`, translated);
        setResult(translated);
      })
      .catch(() => setResult(text))
      .finally(() => setLoading(false));
  }, [text, language]);

  return { text: result, loading };
}