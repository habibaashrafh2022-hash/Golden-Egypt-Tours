// ============================================================
//  cancellation-policy.jsx — Aurevian Tours
// ============================================================
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  SHARED_CSS, Nav, MobileMenu, Footer, FloatingButtons,
  HieroglyphFrieze, waLink, useGoogleTranslate,
} from "./SharedLayout";

const POLICIES = [
  {
    icon: "↩️",
    title: "Standard Cancellation — Day Tours",
    color: "#52B788",
    rows: [
      { timing: "72+ hours before tour", refund: "100% Full Refund", note: "No questions asked" },
      { timing: "48–72 hours before tour", refund: "75% Refund", note: "Processing fee applies" },
      { timing: "24–48 hours before tour", refund: "50% Refund", note: "Half refund issued" },
      { timing: "Less than 24 hours", refund: "No Refund", note: "Tour fee is non-refundable" },
      { timing: "No-show", refund: "No Refund", note: "Full charge applies" },
    ],
  },
  {
    icon: "🚢",
    title: "Nile Cruise Cancellation Policy",
    color: "#7CB9E8",
    rows: [
      { timing: "30+ days before departure", refund: "100% Full Refund", note: "Full deposit returned" },
      { timing: "15–30 days before departure", refund: "75% Refund", note: "25% admin fee retained" },
      { timing: "7–14 days before departure", refund: "50% Refund", note: "50% cancellation charge" },
      { timing: "Less than 7 days", refund: "No Refund", note: "Full amount forfeited" },
      { timing: "No-show / Early departure", refund: "No Refund", note: "No partial refund for unused nights" },
    ],
  },
  {
    icon: "🗓️",
    title: "Multi-Day Package Cancellation",
    color: "#C9A84C",
    rows: [
      { timing: "45+ days before start", refund: "100% Full Refund", note: "Deposit fully returned" },
      { timing: "30–44 days before start", refund: "80% Refund", note: "20% admin fee retained" },
      { timing: "15–29 days before start", refund: "50% Refund", note: "50% cancellation charge" },
      { timing: "7–14 days before start", refund: "25% Refund", note: "75% forfeited" },
      { timing: "Less than 7 days", refund: "No Refund", note: "Full package cost retained" },
    ],
  },
];

const EXCEPTIONS = [
  { icon:"🏥", title:"Medical Emergency", desc:"Full refund with official medical documentation from a licensed physician. Must be submitted within 7 days of the tour date." },
  { icon:"✈️", title:"Flight Cancellation", desc:"If your flight is cancelled by the airline due to reasons beyond your control, we offer a full credit or free rebooking within 12 months." },
  { icon:"🌪️", title:"Force Majeure", desc:"In cases of natural disasters, government travel restrictions, civil unrest, or pandemic-related closures, full refunds or free rebooking are offered." },
  { icon:"🔒", title:"Site Closure", desc:"If a booked site closes unexpectedly on your tour day, we replace it with an equal alternative or issue a partial refund for the affected portion." },
  { icon:"🛫", title:"Our Cancellation", desc:"If Aurevian Tours cancels your tour for any reason, you receive a 100% full refund within 3–5 business days, plus a 10% discount voucher for a future booking." },
];

export default function CancellationPolicy() {
  const navigate = useNavigate();
  const [scrolled, setSc]    = useState(false);
  const [mMenu,    setMMenu] = useState(false);
  const langProps = useGoogleTranslate();

  useEffect(() => {
    const fn = () => setSc(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const Badge = ({ text, color }) => (
    <span style={{ background:`${color}22`, border:`1px solid ${color}55`, color, borderRadius:6, padding:"3px 10px", fontSize:11, fontWeight:700, fontFamily:"'Josefin Sans',sans-serif", whiteSpace:"nowrap" }}>{text}</span>
  );

  return (
    <div style={{ background:"#FAF6ED", color:"#231A0E", minHeight:"100vh", overflowX:"hidden", fontFamily:"'Josefin Sans',sans-serif" }}>
      <style>{SHARED_CSS}</style>
      <div id="gt-hidden" style={{ display:"none" }}/>

      <Nav scrolled={scrolled} mMenu={mMenu} setMMenu={setMMenu} activePath="/cancellation-policy" langProps={langProps}/>
      <MobileMenu open={mMenu} setMMenu={setMMenu} activePath="/cancellation-policy" langProps={langProps}/>

      {/* HERO */}
      <section style={{ background:"linear-gradient(135deg,#171009 0%,#1e1508 55%,#171009 100%)", padding:"clamp(56px,10vw,96px) clamp(20px,5vw,56px)", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:.07, backgroundImage:"repeating-linear-gradient(135deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 50%)", backgroundSize:"22px 22px" }}/>
        <div style={{ position:"relative" }}>
          <span style={{ fontSize:10, color:"#E8C96D", letterSpacing:"0.35em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif", display:"block", marginBottom:16 }}>Policies & Refunds</span>
          <h1 style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(28px,5vw,50px)", fontWeight:700, color:"#FAF6ED", marginBottom:16, lineHeight:1.15 }}>
            Cancellation <span style={{ color:"#E8C96D" }}>Policy</span>
          </h1>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"clamp(14px,1.7vw,17px)", color:"rgba(250,246,237,.72)", maxWidth:520, margin:"0 auto 24px", lineHeight:1.75 }}>
            We believe in fair, transparent, and hassle-free cancellations. Your peace of mind matters to us.
          </p>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(82,183,136,.15)", border:"1px solid rgba(82,183,136,.35)", borderRadius:30, padding:"8px 20px" }}>
            <span style={{ fontSize:14 }}>✅</span>
            <span style={{ fontSize:11, color:"#52B788", letterSpacing:"0.12em", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>FREE CANCELLATION on most tours up to 72 hours before</span>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY */}
      <div style={{ background:"#fff", borderBottom:"1px solid rgba(193,156,60,.15)", padding:"clamp(24px,4vw,36px) clamp(16px,4vw,48px)" }}>
        <div style={{ maxWidth:1180, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
          {[
            { icon:"✅", color:"#52B788", title:"Free Cancellation", desc:"Cancel 72+ hours before any day tour for a full refund" },
            { icon:"🔄", color:"#C9A84C", title:"Easy Rebooking", desc:"Change your date any time — no fees if 48+ hours notice" },
            { icon:"💳", color:"#7CB9E8", title:"Fast Refunds", desc:"Refunds processed within 3–7 business days" },
          ].map((s,i) => (
            <div key={i} style={{ display:"flex", gap:14, alignItems:"flex-start", padding:"4px 0" }}>
              <div style={{ width:40, height:40, borderRadius:10, background:`${s.color}18`, border:`1px solid ${s.color}44`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0 }}>{s.icon}</div>
              <div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:13, fontWeight:700, color:"#231A0E", marginBottom:4 }}>{s.title}</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:13, color:"#9C7A3C" }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POLICIES */}
      <section className="av-section">
        <div style={{ maxWidth:1060, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"clamp(32px,5vw,56px)" }}>
            <span className="av-eyebrow">By Tour Type</span>
            <h2 className="av-title">Cancellation Schedules</h2>
          </div>

          {POLICIES.map((pol, pi) => (
            <div key={pi} style={{ marginBottom:40, background:"#fff", borderRadius:18, border:"1px solid rgba(35,26,14,.08)", overflow:"hidden", boxShadow:"0 8px 30px rgba(35,26,14,.07)" }}>
              <div style={{ background:`linear-gradient(135deg,${pol.color}18,${pol.color}08)`, borderBottom:`1px solid ${pol.color}33`, padding:"20px 28px", display:"flex", alignItems:"center", gap:12 }}>
                <span style={{ fontSize:24 }}>{pol.icon}</span>
                <h3 style={{ fontFamily:"'Cinzel',serif", fontSize:16, fontWeight:700, color:"#231A0E" }}>{pol.title}</h3>
              </div>
              <div style={{ overflowX:"auto" }}>
                <table style={{ width:"100%", borderCollapse:"collapse" }}>
                  <thead>
                    <tr style={{ background:"rgba(201,168,76,.06)" }}>
                      <th style={{ padding:"12px 24px", textAlign:"left", fontSize:9, letterSpacing:"0.2em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", color:"#8B6010", fontWeight:700, borderBottom:"1px solid rgba(193,156,60,.15)" }}>Timing</th>
                      <th style={{ padding:"12px 24px", textAlign:"left", fontSize:9, letterSpacing:"0.2em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", color:"#8B6010", fontWeight:700, borderBottom:"1px solid rgba(193,156,60,.15)" }}>Refund</th>
                      <th style={{ padding:"12px 24px", textAlign:"left", fontSize:9, letterSpacing:"0.2em", textTransform:"uppercase", fontFamily:"'Josefin Sans',sans-serif", color:"#8B6010", fontWeight:700, borderBottom:"1px solid rgba(193,156,60,.15)" }}>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pol.rows.map((row, ri) => (
                      <tr key={ri} style={{ borderBottom:"1px solid rgba(193,156,60,.08)", background: ri%2===0 ? "transparent" : "rgba(201,168,76,.02)" }}>
                        <td style={{ padding:"14px 24px", fontFamily:"'Cormorant Garamond',serif", fontSize:14, color:"#231A0E" }}>{row.timing}</td>
                        <td style={{ padding:"14px 24px" }}>
                          <Badge text={row.refund} color={row.refund.includes("100") ? "#52B788" : row.refund.includes("No") ? "#E63946" : "#C9A84C"}/>
                        </td>
                        <td style={{ padding:"14px 24px", fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:13, color:"#9C7A3C" }}>{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXCEPTIONS */}
      <section style={{ background:"var(--cream2)", padding:"clamp(48px,7vw,80px) clamp(16px,4vw,48px)" }}>
        <div style={{ maxWidth:1060, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"clamp(28px,4vw,48px)" }}>
            <span className="av-eyebrow">Special Circumstances</span>
            <h2 className="av-title">Exceptions & Special Cases</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20 }}>
            {EXCEPTIONS.map((ex, i) => (
              <div key={i} style={{ background:"#fff", borderRadius:14, border:"1px solid rgba(35,26,14,.08)", padding:"24px 22px", boxShadow:"0 6px 20px rgba(35,26,14,.06)" }}>
                <div style={{ fontSize:26, marginBottom:12 }}>{ex.icon}</div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:14, fontWeight:700, color:"#231A0E", marginBottom:9 }}>{ex.title}</div>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:13.5, color:"rgba(35,26,14,.68)", lineHeight:1.75 }}>{ex.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO CANCEL */}
      <section className="av-section">
        <div style={{ maxWidth:860, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <span className="av-eyebrow">Step by Step</span>
            <h2 className="av-title">How to Cancel Your Booking</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:20, marginBottom:48 }}>
            {[
              { step:"01", icon:"💬", title:"Contact Us", desc:"WhatsApp, email, or call us with your booking reference number (AUR-XXXXXX)." },
              { step:"02", icon:"✅", title:"Confirm Cancellation", desc:"Our team processes your request and sends a cancellation confirmation within 2 hours." },
              { step:"03", icon:"💳", title:"Receive Refund", desc:"Refunds are issued to the original payment method within 3–7 business days." },
              { step:"04", icon:"📧", title:"Get Email Confirmation", desc:"You'll receive an email confirmation of your cancellation and refund amount." },
            ].map((s, i) => (
              <div key={i} style={{ background:"#fff", borderRadius:14, border:"1px solid rgba(35,26,14,.08)", padding:"24px 20px", textAlign:"center", boxShadow:"0 6px 20px rgba(35,26,14,.06)" }}>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:28, fontWeight:700, color:"rgba(193,156,60,.25)", marginBottom:10 }}>{s.step}</div>
                <div style={{ fontSize:26, marginBottom:10 }}>{s.icon}</div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:13, fontWeight:700, color:"#231A0E", marginBottom:8 }}>{s.title}</div>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:13, color:"rgba(35,26,14,.65)", lineHeight:1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background:"linear-gradient(135deg,#241A0E,#171009)", borderRadius:18, padding:"clamp(28px,5vw,44px)", textAlign:"center", border:"1px solid rgba(193,156,60,.25)" }}>
            <HieroglyphFrieze tone="dark"/>
            <h3 style={{ fontFamily:"'Cinzel',serif", fontSize:20, color:"#FAF6ED", margin:"20px 0 10px" }}>Need to Cancel or Modify?</h3>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"rgba(250,246,237,.65)", fontSize:14, marginBottom:24 }}>Our team is available 24/7 to assist with cancellations and changes.</p>
            <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
              <a href={waLink("I need to cancel my booking. Reference: AUR-")} target="_blank" rel="noreferrer" style={{ background:"#25D366", color:"#fff", borderRadius:10, padding:"13px 24px", textDecoration:"none", fontWeight:700, fontSize:12, fontFamily:"'Josefin Sans',sans-serif", display:"flex", alignItems:"center", gap:8 }}>💬 Cancel via WhatsApp</a>
              <a href="mailto:aureviantours@gmail.com?subject=Cancellation Request" style={{ background:"rgba(201,168,76,.12)", border:"1.5px solid rgba(193,156,60,.3)", color:"#E8C96D", borderRadius:10, padding:"13px 24px", textDecoration:"none", fontWeight:700, fontSize:12, fontFamily:"'Josefin Sans',sans-serif" }}>✉️ Cancel via Email</a>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
      <FloatingButtons/>
    </div>
  );
}
