// ─── ai.controller.js — Aurevian Tours ─────────────────────────
// Proxies AI Trip Builder requests to Anthropic from the server,
// so the API key never reaches the browser.
//
// Set in your backend .env:
//   ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
// (the same key you already have set up on Vercel/your server —
// move it here so it's only ever used server-side)

export async function generateTripPlan(req, res) {
  try {
    const { system, query } = req.body;

    if (!query || typeof query !== "string" || !query.trim()) {
      return res.status(400).json({ success: false, message: "A trip query is required." });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      console.error("ANTHROPIC_API_KEY is not set on the server.");
      return res.status(500).json({ success: false, message: "AI service is not configured. Please contact support." });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type":     "application/json",
        "x-api-key":         process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model:      "claude-sonnet-4-6",
        max_tokens: 2000,
        system:     system || "You are a helpful Egypt travel planning assistant.",
        messages:   [{ role: "user", content: query }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Anthropic API error:", data);
      return res.status(response.status).json({
        success: false,
        message: data.error?.message || "AI service error. Please try again.",
      });
    }

    const text = data.content?.map((c) => c.text || "").join("\n") ||
      "⚠️ Could not generate itinerary. Please try again.";

    res.json({ success: true, text, content: data.content });
  } catch (err) {
    console.error("generateTripPlan error:", err);
    res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
}