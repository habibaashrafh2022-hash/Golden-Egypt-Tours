// ============================================================
//  terms.jsx — Aurevian Tours · Terms & Conditions
// ============================================================
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  SHARED_CSS, Nav, MobileMenu, Footer, FloatingButtons,
  HieroglyphFrieze, waLink, useGoogleTranslate,
} from "./SharedLayout";

const SECTIONS = [
  {
    id:"acceptance",
    title:"1. Acceptance of Terms",
    content:`By booking a tour, package, transfer, or any service with Aurevian Tours ("we," "us," "our"), you ("the Client," "you") agree to be bound by these Terms & Conditions in full. These terms apply to all bookings made via our website, WhatsApp, email, phone, or any third-party platform.

If you do not agree to these terms, please do not proceed with a booking. We reserve the right to update these terms at any time; the version in force at the time of your booking confirmation will apply to your reservation.`,
  },
  {
    id:"booking",
    title:"2. Booking & Confirmation",
    content:`2.1 A booking is confirmed only upon receipt of a written confirmation from Aurevian Tours and payment of the required deposit.

2.2 The client is responsible for providing accurate personal information at the time of booking, including full legal name, nationality, contact details, and any relevant health or dietary requirements.

2.3 All group bookings must be made by a single responsible party (group leader) who accepts these terms on behalf of all travelers in the group.

2.4 Aurevian Tours reserves the right to decline any booking at its sole discretion without obligation to provide a reason.

2.5 A booking confirmation email will be sent within 30 minutes of deposit receipt. Please check your spam folder if you do not receive it promptly.`,
  },
  {
    id:"payment",
    title:"3. Payment Terms",
    content:`3.1 A non-refundable deposit of 20–30% is required to confirm a booking, depending on the tour type. The remaining balance is due 7 days before the tour start date.

3.2 For bookings made within 7 days of the tour, full payment is required at the time of booking.

3.3 All prices are quoted in USD unless otherwise specified. Currency conversion rates are approximate and subject to change.

3.4 Aurevian Tours is not responsible for any bank charges, foreign exchange fees, or transaction fees imposed by the client's payment provider.

3.5 We accept Visa, Mastercard, PayPal, Apple Pay, and bank transfer. Cash payments (USD or EGP) are accepted for in-person bookings.

3.6 Prices are subject to change without notice. The price quoted at the time of booking confirmation is guaranteed for that booking.`,
  },
  {
    id:"changes",
    title:"4. Changes & Modifications",
    content:`4.1 Clients may request changes to a confirmed booking (dates, group size, tour type) at any time. Changes are subject to availability and may incur additional charges.

4.2 Date changes requested 48+ hours before the tour start are free of charge. Changes within 48 hours may be treated as a cancellation and rebooking.

4.3 Aurevian Tours reserves the right to modify itineraries, sites visited, or accommodations due to unforeseen circumstances including weather, site closures, road conditions, or government regulations. Reasonable alternatives of equal or greater value will be provided.

4.4 Any modifications made by Aurevian Tours that materially affect the nature of your tour will be communicated immediately, with the option of a full refund if the modified itinerary is not acceptable.`,
  },
  {
    id:"cancellation",
    title:"5. Cancellation Policy",
    content:`5.1 All cancellations must be submitted in writing via WhatsApp (+20 106 825 4454) or email (aureviantours@gmail.com).

5.2 Cancellation fees apply as follows for Day Tours: 72+ hours = full refund; 48–72 hours = 75% refund; 24–48 hours = 50% refund; under 24 hours = no refund.

5.3 For Nile Cruises: 30+ days = full refund; 15–30 days = 75% refund; 7–14 days = 50% refund; under 7 days = no refund.

5.4 For Multi-Day Packages: 45+ days = full refund; 30–44 days = 80% refund; 15–29 days = 50% refund; 7–14 days = 25% refund; under 7 days = no refund.

5.5 Refunds are processed within 3–7 business days to the original payment method.

5.6 In cases of documented medical emergency, force majeure, or airline cancellation, special refund consideration applies. See our full Cancellation Policy at /cancellation-policy.`,
  },
  {
    id:"liability",
    title:"6. Liability & Responsibility",
    content:`6.1 Aurevian Tours acts as an organizer of tours and travel experiences. We work with licensed guides, reputable transport operators, and quality accommodation providers. We cannot be held liable for acts, omissions, or negligence of third-party service providers.

6.2 Aurevian Tours is not liable for any loss, damage, injury, illness, death, or additional expenses arising from circumstances beyond our control, including but not limited to: weather events, natural disasters, acts of terrorism, civil unrest, strikes, government actions, or pandemic-related disruptions.

6.3 Clients are responsible for their own safety at all times. Always follow the instructions of your guide. Aurevian Tours is not liable for injuries or incidents resulting from a client's failure to follow guide instructions.

6.4 Clients are responsible for ensuring they are physically capable of participating in the activities booked. We strongly recommend consulting a physician before undertaking strenuous activities.

6.5 Our maximum liability in any event shall not exceed the total amount paid by the client for the specific tour or service giving rise to the claim.`,
  },
  {
    id:"health",
    title:"7. Health, Safety & Special Requirements",
    content:`7.1 Clients must disclose any medical conditions, allergies, dietary requirements, or mobility limitations at the time of booking. Failure to do so may result in reduced service or exclusion from certain activities for safety reasons.

7.2 Egypt requires certain vaccinations for entry from some countries. It is the client's sole responsibility to obtain all required vaccinations, medications, and travel health advice before travel.

7.3 Aurevian Tours strongly recommends comprehensive travel insurance covering medical expenses, emergency evacuation, trip cancellation, and lost luggage for all tours.

7.4 All Aurevian Tours guides are trained in basic first aid. Emergency medical services in Egypt's major tourist centers are available 24/7.`,
  },
  {
    id:"conduct",
    title:"8. Client Conduct",
    content:`8.1 Clients are expected to behave respectfully toward guides, drivers, fellow travelers, and local communities at all times.

8.2 Aurevian Tours reserves the right to exclude any client from a tour at any point without refund if their behavior is deemed disruptive, dangerous, offensive, or incompatible with the group's enjoyment.

8.3 Clients must respect local laws, customs, and dress codes, particularly at religious sites. Our guides will always advise on appropriate conduct.

8.4 Damage to archaeological sites, monuments, or historical artifacts is illegal under Egyptian law and may result in arrest and prosecution. Aurevian Tours will cooperate fully with Egyptian authorities in any such case.`,
  },
  {
    id:"privacy",
    title:"9. Privacy & Data Protection",
    content:`9.1 Aurevian Tours collects personal information solely for the purpose of processing bookings and delivering services. We do not sell or share your data with third parties for marketing purposes.

9.2 Booking data (name, email, phone, nationality) is securely stored and used only for tour coordination, communication, and legal compliance.

9.3 Photos or videos taken during tours by Aurevian Tours staff may be used for promotional purposes on our website and social media. If you prefer not to be photographed, please inform your guide at the start of the tour.

9.4 By booking with us, you consent to receiving booking-related communications via email and WhatsApp. You may opt out of marketing communications at any time.`,
  },
  {
    id:"disputes",
    title:"10. Disputes & Governing Law",
    content:`10.1 In the event of any complaint or dispute, clients should first contact Aurevian Tours directly at aureviantours@gmail.com. We will make every effort to resolve complaints within 48 hours.

10.2 If a satisfactory resolution cannot be reached, disputes shall be governed by and construed in accordance with the laws of the Arab Republic of Egypt.

10.3 These Terms & Conditions constitute the entire agreement between the client and Aurevian Tours and supersede all prior discussions, representations, or agreements.

10.4 If any provision of these terms is found to be unenforceable, the remaining provisions continue in full force and effect.

Last Updated: January 2026 | Aurevian Tours — Cairo, Egypt`,
  },
];

export default function Terms() {
  const navigate = useNavigate();
  const [scrolled, setSc]     = useState(false);
  const [mMenu,    setMMenu]  = useState(false);
  const [activeS,  setActiveS]= useState("acceptance");
  const langProps = useGoogleTranslate();

  useEffect(() => {
    const fn = () => setSc(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    setActiveS(id);
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" });
  };

  return (
    <div style={{ background:"#FAF6ED", color:"#231A0E", minHeight:"100vh", overflowX:"hidden", fontFamily:"'Josefin Sans',sans-serif" }}>
      <style>{SHARED_CSS}</style>
      <div id="gt-hidden" style={{ display:"none" }}/>

      <Nav scrolled={scrolled} mMenu={mMenu} setMMenu={setMMenu} activePath="/terms" langProps={langProps}/>
      <MobileMenu open={mMenu} setMMenu={setMMenu} activePath="/terms" langProps={langProps}/>

      {/* HERO */}
      <section style={{ background:"linear-gradient(135deg,#171009 0%,#1e1508 55%,#171009 100%)", padding:"clamp(56px,10vw,96px) clamp(20px,5vw,56px)", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:.06, backgroundImage:"repeating-linear-gradient(135deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 50%)", backgroundSize:"22px 22px" }}/>
        <div style={{ position:"relative" }}>
          <span style={{ fontSize:10, color:"#E8C96D", letterSpacing:"0.35em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif", display:"block", marginBottom:16 }}>Legal</span>
          <h1 style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(28px,5vw,50px)", fontWeight:700, color:"#FAF6ED", marginBottom:16, lineHeight:1.15 }}>
            Terms & <span style={{ color:"#E8C96D" }}>Conditions</span>
          </h1>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"clamp(13px,1.6vw,16px)", color:"rgba(250,246,237,.65)", maxWidth:480, margin:"0 auto" }}>
            Please read these terms carefully before booking. By completing a reservation, you agree to all conditions below.
          </p>
          <p style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:11, color:"rgba(250,246,237,.4)", marginTop:16, letterSpacing:"0.1em" }}>Last Updated: January 2026</p>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <section className="av-section">
        <div style={{ maxWidth:1120, margin:"0 auto", display:"grid", gridTemplateColumns:"260px 1fr", gap:48, alignItems:"start" }}>

          {/* SIDEBAR NAV */}
          <div style={{ position:"sticky", top:100 }}>
            <div style={{ background:"#fff", borderRadius:14, border:"1px solid rgba(35,26,14,.08)", overflow:"hidden", boxShadow:"0 6px 20px rgba(35,26,14,.06)" }}>
              <div style={{ background:"linear-gradient(135deg,#241A0E,#171009)", padding:"16px 18px" }}>
                <div style={{ fontSize:10, color:"#E8C96D", letterSpacing:"0.2em", textTransform:"uppercase", fontWeight:700, fontFamily:"'Josefin Sans',sans-serif" }}>Contents</div>
              </div>
              {SECTIONS.map(s => (
                <button key={s.id} onClick={() => scrollTo(s.id)} style={{ display:"block", width:"100%", textAlign:"left", padding:"11px 18px", background: activeS===s.id ? "rgba(201,168,76,.1)" : "transparent", border:"none", borderLeft: activeS===s.id ? "3px solid #A07828" : "3px solid transparent", cursor:"pointer", fontSize:12, color: activeS===s.id ? "#8B6010" : "rgba(35,26,14,.65)", fontFamily:"'Josefin Sans',sans-serif", fontWeight: activeS===s.id ? 700 : 400, lineHeight:1.4, transition:"all .2s", borderBottom:"1px solid rgba(193,156,60,.08)" }}>
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div>
            {SECTIONS.map((s, i) => (
              <div key={s.id} id={s.id} style={{ marginBottom:48, scrollMarginTop:100 }}>
                <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(16px,2vw,22px)", fontWeight:700, color:"#231A0E", marginBottom:18, paddingBottom:14, borderBottom:"1px solid rgba(193,156,60,.2)" }}>{s.title}</h2>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:15, color:"rgba(35,26,14,.75)", lineHeight:1.9, whiteSpace:"pre-line" }}>{s.content}</div>
                {i < SECTIONS.length - 1 && <div style={{ height:1, background:"linear-gradient(90deg,rgba(193,156,60,.2),transparent)", marginTop:40 }}/>}
              </div>
            ))}

            {/* CONTACT BOX */}
            <div style={{ background:"linear-gradient(135deg,#241A0E,#171009)", borderRadius:18, padding:"clamp(24px,4vw,36px)", border:"1px solid rgba(193,156,60,.25)", textAlign:"center" }}>
              <HieroglyphFrieze tone="dark"/>
              <h3 style={{ fontFamily:"'Cinzel',serif", fontSize:18, color:"#FAF6ED", margin:"20px 0 10px" }}>Questions About Our Terms?</h3>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"rgba(250,246,237,.6)", fontSize:14, marginBottom:24 }}>Our team is happy to clarify any of the above. Contact us any time.</p>
              <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
                <a href={waLink("I have a question about the Terms & Conditions")} target="_blank" rel="noreferrer" style={{ background:"#25D366", color:"#fff", borderRadius:10, padding:"12px 22px", textDecoration:"none", fontWeight:700, fontSize:12, fontFamily:"'Josefin Sans',sans-serif" }}>💬 WhatsApp</a>
                <a href="mailto:aureviantours@gmail.com?subject=Terms Question" style={{ background:"rgba(201,168,76,.12)", border:"1.5px solid rgba(193,156,60,.3)", color:"#E8C96D", borderRadius:10, padding:"12px 22px", textDecoration:"none", fontWeight:700, fontSize:12, fontFamily:"'Josefin Sans',sans-serif" }}>✉️ Email Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
      <FloatingButtons/>
    </div>
  );
}

