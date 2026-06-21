// ============================================================
//  FAQ.jsx — Aurevian Tours
//  Built fresh on the shared SharedLayout system (same nav,
//  footer, translate, fonts/colors as Terms / Custom Trips /
//  Nile Cruises). Accordion list — naturally mobile-friendly,
//  no horizontal "view all" scroll anywhere.
// ============================================================
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav, Footer, FloatingButtons, MobileMenu, HieroglyphFrieze,
  waLink, useGoogleTranslate, SHARED_CSS,
} from "./SharedLayout";

const FAQ_GROUPS = [
  {
    title: "Booking & Reservations",
    icon: "📋",
    items: [
      {
        q: "How do I book a tour?",
        a: "Choose any tour or destination, fill in the booking form with your details and travel date, and submit. You'll instantly receive a booking reference, and our team will confirm everything with you by email and WhatsApp within 2 hours.",
      },
      {
        q: "Do I need to pay the full amount upfront?",
        a: "No. Submitting the form only reserves your spot — no charge is taken until you actively confirm payment, either online or via WhatsApp/bank transfer with our team.",
      },
      {
        q: "Can I book for a group?",
        a: "Yes — simply enter the number of guests when booking. Group discounts are applied automatically: 10% off for 2 people, 15% for 3, and 20% for 4 or more.",
      },
      {
        q: "How far in advance should I book?",
        a: "We recommend booking at least 3–5 days ahead for standard tours, and 2–3 weeks ahead for multi-day packages or peak season (October–April) to guarantee availability.",
      },
    ],
  },
  {
    title: "Payments",
    icon: "💳",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept secure online payment by credit/debit card, as well as bank transfer and cash payment arranged directly with our team via WhatsApp.",
      },
      {
        q: "Is my payment information secure?",
        a: "Yes. Online payments are processed through an encrypted, PCI-compliant payment gateway. We never store your card details on our own servers.",
      },
      {
        q: "Will I get a receipt?",
        a: "Yes — a confirmation email with your booking reference and full price breakdown is sent automatically the moment your booking is received.",
      },
    ],
  },
  {
    title: "Cancellations & Changes",
    icon: "🔄",
    items: [
      {
        q: "Can I cancel my booking?",
        a: "Yes, free of charge up to 24 hours before your scheduled tour date. Cancellations made later may be subject to a partial charge — see our Cancellation Policy page for full details.",
      },
      {
        q: "Can I change my tour date?",
        a: "Absolutely — message our team on WhatsApp with your booking reference and we'll happily reschedule, subject to availability.",
      },
      {
        q: "What if the weather is bad on my tour day?",
        a: "For weather-dependent activities (hot air balloons, boat trips), we'll proactively offer a free reschedule or full refund if conditions aren't safe.",
      },
    ],
  },
  {
    title: "On Your Tour",
    icon: "🧭",
    items: [
      {
        q: "Will I have a private guide?",
        a: "Most of our tours include a licensed, English-speaking Egyptologist guide. Other languages are available — just select your preferred tour language when booking.",
      },
      {
        q: "What should I bring?",
        a: "Comfortable shoes, sun protection, a hat, water, and a valid photo ID. For desert or boat excursions, we'll send specific packing tips after booking.",
      },
      {
        q: "Is pickup included?",
        a: "Yes — pickup and drop-off from your hotel or chosen location in the same city is included in almost all our tours, and is selected directly in the booking form.",
      },
      {
        q: "Are your tours suitable for children and elderly travelers?",
        a: "Most tours are family-friendly. For tours involving long walks, desert safaris, or diving, please mention ages and any mobility needs in the special requests field — we'll recommend the best fit.",
      },
    ],
  },
  {
    title: "About Aurevian Tours",
    icon: "🏛️",
    items: [
      {
        q: "Are you a licensed tour operator?",
        a: "Yes, Aurevian Tours is a fully licensed Egyptian tour operator with years of experience crafting private and group journeys across the country.",
      },
      {
        q: "Do you offer custom itineraries?",
        a: "Yes — visit our Custom Trips page to tell us your dates, interests, and budget, and our specialists will design a tailor-made itinerary just for you.",
      },
      {
        q: "How can I contact you directly?",
        a: "You can reach us anytime on WhatsApp, by email, or through our Contact page — we're available 24/7.",
      },
    ],
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      style={{
        border: "1.5px solid rgba(193,156,60,.22)",
        borderRadius: 14,
        background: isOpen ? "rgba(201,168,76,.05)" : "#FFFFFF",
        marginBottom: 12,
        overflow: "hidden",
        transition: "background .2s",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
          padding: "16px 18px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontWeight: 600,
            fontSize: "clamp(14px,1.6vw,16px)",
            color: "#231A0E",
            lineHeight: 1.4,
          }}
        >
          {item.q}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: isOpen ? "linear-gradient(135deg,#A07828,#C9A84C)" : "rgba(201,168,76,.12)",
            color: isOpen ? "#FAF6ED" : "#A07828",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 700,
            transition: "all .25s",
            transform: isOpen ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div
          style={{
            padding: "0 18px 18px",
            fontFamily: "'Josefin Sans',sans-serif",
            fontSize: 13.5,
            color: "rgba(35,26,14,.7)",
            lineHeight: 1.75,
            animation: "fadeUp .25s ease both",
          }}
        >
          {item.a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const langProps = useGoogleTranslate();
  const [mMenu, setMMenu] = useState(false);
  const [activeGroup, setActiveGroup] = useState(0);
  const [openKey, setOpenKey] = useState("0-0");
  const [search, setSearch] = useState("");

  const toggle = (key) => setOpenKey((p) => (p === key ? "" : key));

  const filteredGroups = search.trim()
    ? FAQ_GROUPS
        .map((g) => ({
          ...g,
          items: g.items.filter(
            (it) =>
              it.q.toLowerCase().includes(search.toLowerCase()) ||
              it.a.toLowerCase().includes(search.toLowerCase())
          ),
        }))
        .filter((g) => g.items.length > 0)
    : [FAQ_GROUPS[activeGroup]];

  return (
    <div style={{ background: "#FAF6ED", minHeight: "100vh" }}>
      <style>{SHARED_CSS}</style>
      <div id="gt-hidden" />

      <Nav scrolled mMenu={mMenu} setMMenu={setMMenu} activePath="/faq" langProps={langProps} />
      <MobileMenu open={mMenu} setMMenu={setMMenu} activePath="/faq" langProps={langProps} />

      {/* ── HERO ── */}
      <section
        style={{
          padding: "clamp(48px,8vw,84px) clamp(16px,4vw,48px) clamp(36px,5vw,56px)",
          textAlign: "center",
          background: "linear-gradient(180deg,#FBF3DD,#FAF6ED)",
          borderBottom: "1px solid rgba(193,156,60,.18)",
        }}
      >
        <span className="av-eyebrow" style={{ textAlign: "center" }}>✦ Help Center</span>
        <h1 className="av-title" style={{ marginBottom: 14 }}>Frequently Asked Questions</h1>
        <p
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontStyle: "italic",
            color: "rgba(35,26,14,.6)",
            fontSize: "clamp(13px,1.6vw,16px)",
            maxWidth: 520,
            margin: "0 auto 28px",
          }}
        >
          Everything you need to know before, during, and after your Egypt journey.
        </p>

        {/* Search */}
        <div style={{ maxWidth: 460, margin: "0 auto", position: "relative" }}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search a question…"
            style={{
              width: "100%",
              padding: "13px 18px",
              borderRadius: 30,
              border: "1.5px solid rgba(193,156,60,.3)",
              background: "#FFFDF8",
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: 13,
              color: "#231A0E",
              outline: "none",
            }}
          />
        </div>
      </section>

      <HieroglyphFrieze />

      {/* ── CATEGORY TABS (wrap on mobile — never a horizontal scroll) ── */}
      {!search.trim() && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
            padding: "28px clamp(16px,4vw,48px) 0",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {FAQ_GROUPS.map((g, i) => (
            <button
              key={g.title}
              onClick={() => { setActiveGroup(i); setOpenKey(`${i}-0`); }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                padding: "9px 16px",
                borderRadius: 24,
                border: `1.5px solid ${activeGroup === i ? "rgba(160,120,40,.55)" : "rgba(193,156,60,.22)"}`,
                background: activeGroup === i ? "rgba(201,168,76,.16)" : "rgba(201,168,76,.04)",
                color: activeGroup === i ? "#8B6010" : "rgba(35,26,14,.6)",
                fontWeight: activeGroup === i ? 700 : 500,
                fontSize: 12.5,
                fontFamily: "'Josefin Sans',sans-serif",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              <span>{g.icon}</span>{g.title}
            </button>
          ))}
        </div>
      )}

      {/* ── ANSWER LIST — single vertical column, same on phone & desktop ── */}
      <section className="av-section" style={{ maxWidth: 720, margin: "0 auto" }}>
        {filteredGroups.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px 0", color: "rgba(35,26,14,.5)", fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic" }}>
            No questions match “{search}” — try a different word, or message us directly below.
          </div>
        )}

        {filteredGroups.map((g, gi) => {
          const groupIndex = search.trim() ? FAQ_GROUPS.findIndex((og) => og.title === g.title) : activeGroup;
          return (
            <div key={g.title} style={{ marginBottom: 30 }}>
              {search.trim() && (
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, color: "#8B6010", fontFamily: "'Cinzel',serif", fontSize: 13, fontWeight: 700 }}>
                  <span>{g.icon}</span>{g.title}
                </div>
              )}
              {g.items.map((item, ii) => {
                const key = `${groupIndex}-${ii}`;
                return (
                  <FaqItem key={key} item={item} isOpen={openKey === key} onToggle={() => toggle(key)} />
                );
              })}
            </div>
          );
        })}
      </section>

      {/* ── STILL NEED HELP ── */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 clamp(16px,4vw,48px) clamp(56px,7vw,84px)",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg,#1E1206,#2C1A06)",
            borderRadius: 20,
            padding: "clamp(28px,4vw,40px)",
            textAlign: "center",
          }}
        >
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(18px,2.4vw,24px)", fontWeight: 700, color: "#F3ECD8", marginBottom: 8 }}>
            Still have a question?
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", color: "rgba(243,236,216,.6)", fontSize: 14, marginBottom: 22 }}>
            Our travel specialists are online 24/7 and happy to help.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={waLink("Hi! I have a question about booking a tour with Aurevian Tours.")}
              target="_blank"
              rel="noreferrer"
              style={{ background: "#25D366", color: "#fff", borderRadius: 10, padding: "12px 22px", textDecoration: "none", fontWeight: 700, fontSize: 12, fontFamily: "'Josefin Sans',sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              💬 Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              style={{ background: "rgba(201,168,76,.14)", border: "1.5px solid rgba(201,168,76,.35)", color: "#E8C96D", borderRadius: 10, padding: "12px 22px", textDecoration: "none", fontWeight: 700, fontSize: 12, fontFamily: "'Josefin Sans',sans-serif" }}
            >
              ✉ Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}