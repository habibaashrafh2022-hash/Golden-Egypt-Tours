import { createContext, useContext, useState, useEffect, useCallback } from "react";

// ========== LANGUAGES CONFIG ==========
export const LANGUAGES = [
  { code: "en", name: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "ar", name: "العربية", flag: "🇸🇦", dir: "rtl" },
  { code: "es", name: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "fr", name: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "it", name: "Italiano", flag: "🇮🇹", dir: "ltr" },
  { code: "pt", name: "Português", flag: "🇵🇹", dir: "ltr" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "zh", name: "中文", flag: "🇨🇳", dir: "ltr" },
  { code: "ja", name: "日本語", flag: "🇯🇵", dir: "ltr" },
  { code: "ru", name: "Русский", flag: "🇷🇺", dir: "ltr" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱", dir: "ltr" },
  { code: "he", name: "עברית", flag: "🇮🇱", dir: "rtl" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳", dir: "ltr" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷", dir: "ltr" },
  { code: "ko", name: "한국어", flag: "🇰🇷", dir: "ltr" },
  { code: "pl", name: "Polski", flag: "🇵🇱", dir: "ltr" },
];

// ========== CURRENCIES CONFIG ==========
export const CURRENCIES = [
  { code: "USD", symbol: "$", name: "US Dollar", flag: "🇺🇸" },
  { code: "EUR", symbol: "€", name: "Euro", flag: "🇪🇺" },
  { code: "GBP", symbol: "£", name: "British Pound", flag: "🇬🇧" },
  { code: "EGP", symbol: "ج.م", name: "Egyptian Pound", flag: "🇪🇬" },
  { code: "KWD", symbol: "د.ك", name: "Kuwaiti Dinar", flag: "🇰🇼" },
  { code: "SAR", symbol: "ر.س", name: "Saudi Riyal", flag: "🇸🇦" },
  { code: "BRL", symbol: "R$", name: "Brazilian Real", flag: "🇧🇷" },
  { code: "MXN", symbol: "MX$", name: "Mexican Peso", flag: "🇲🇽" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen", flag: "🇯🇵" },
  { code: "INR", symbol: "₹", name: "Indian Rupee", flag: "🇮🇳" },
  { code: "ILS", symbol: "₪", name: "Israeli Shekel", flag: "🇮🇱" },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham", flag: "🇦🇪" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan", flag: "🇨🇳" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar", flag: "🇨🇦" },
  { code: "CHF", symbol: "Fr", name: "Swiss Franc", flag: "🇨🇭" },
  { code: "TRY", symbol: "₺", name: "Turkish Lira", flag: "🇹🇷" },
];

const GlobalContext = createContext(null);

// ========== CLAUDE TRANSLATION CACHE ==========
const translationCache = {};

async function translateWithClaude(text, targetLang) {
  if (targetLang === "en") return text;
  const cacheKey = `${targetLang}:${text}`;
  if (translationCache[cacheKey]) return translationCache[cacheKey];

  const langName = LANGUAGES.find((l) => l.code === targetLang)?.name || targetLang;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [
          {
            role: "user",
            content: `Translate the following text to ${langName}. Return ONLY the translated text, no explanations, no quotes:\n\n${text}`,
          },
        ],
      }),
    });
    const data = await response.json();
    const translated = data.content?.[0]?.text?.trim() || text;
    translationCache[cacheKey] = translated;
    return translated;
  } catch {
    return text;
  }
}

// ========== EXCHANGE RATE FETCH ==========
async function fetchExchangeRates(baseCurrency = "USD") {
  try {
    const res = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
    );
    const data = await res.json();
    return data.rates || {};
  } catch {
    // Fallback static rates if API fails
    return {
      USD: 1, EUR: 0.92, GBP: 0.79, EGP: 48.5, KWD: 0.31,
      SAR: 3.75, BRL: 4.97, MXN: 17.2, JPY: 149.5, INR: 83.1,
      ILS: 3.7, AED: 3.67, CNY: 7.24, CAD: 1.36, CHF: 0.9, TRY: 32.1,
    };
  }
}

// ========== PROVIDER ==========
export function GlobalProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem("app_language") || "en";
  });
  const [currency, setCurrencyState] = useState(() => {
    return localStorage.getItem("app_currency") || "USD";
  });
  const [exchangeRates, setExchangeRates] = useState({});
  const [ratesLoading, setRatesLoading] = useState(true);
  const [translating, setTranslating] = useState(false);

  // Load exchange rates on mount and when base currency changes
  useEffect(() => {
    setRatesLoading(true);
    fetchExchangeRates("USD").then((rates) => {
      setExchangeRates(rates);
      setRatesLoading(false);
    });
  }, []);

  // Apply language direction to document
  useEffect(() => {
    const lang = LANGUAGES.find((l) => l.code === language);
    document.documentElement.lang = language;
    document.documentElement.dir = lang?.dir || "ltr";
    localStorage.setItem("app_language", language);
  }, [language]);

  // Save currency preference
  useEffect(() => {
    localStorage.setItem("app_currency", currency);
  }, [currency]);

  const setLanguage = useCallback((code) => {
    setLanguageState(code);
  }, []);

  const setCurrency = useCallback((code) => {
    setCurrencyState(code);
  }, []);

  // Convert price from USD to selected currency
  const convertPrice = useCallback(
    (priceInUSD) => {
      const rate = exchangeRates[currency] || 1;
      return (priceInUSD * rate).toFixed(2);
    },
    [exchangeRates, currency]
  );

  // Format price with currency symbol
  const formatPrice = useCallback(
    (priceInUSD) => {
      const curr = CURRENCIES.find((c) => c.code === currency);
      const converted = convertPrice(priceInUSD);
      // For JPY and similar, no decimals
      const formatted =
        currency === "JPY"
          ? Math.round(priceInUSD * (exchangeRates["JPY"] || 1)).toLocaleString()
          : parseFloat(converted).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            });
      return `${curr?.symbol || "$"}${formatted}`;
    },
    [currency, convertPrice, exchangeRates]
  );

  // Translate a single string
  const translate = useCallback(
    async (text) => {
      if (!text || language === "en") return text;
      setTranslating(true);
      const result = await translateWithClaude(text, language);
      setTranslating(false);
      return result;
    },
    [language]
  );

  const currentLang = LANGUAGES.find((l) => l.code === language);
  const currentCurrency = CURRENCIES.find((c) => c.code === currency);

  return (
    <GlobalContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        exchangeRates,
        ratesLoading,
        translating,
        convertPrice,
        formatPrice,
        translate,
        currentLang,
        currentCurrency,
        LANGUAGES,
        CURRENCIES,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const ctx = useContext(GlobalContext);
  if (!ctx) throw new Error("useGlobal must be used inside GlobalProvider");
  return ctx;
}