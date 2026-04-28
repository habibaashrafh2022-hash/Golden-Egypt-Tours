import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTourById, getRelatedTours } from "../data/tours";

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&display=swap');

    :root {
      --gold:#C9A84C; --gold-light:#E8C96D; --gold-pale:#F5E6B8;
      --gold-dim:rgba(201,168,76,0.12); --gold-dim2:rgba(201,168,76,0.22);
      --gold-border:rgba(201,168,76,0.22);
      --obsidian:#07050D; --deep:#0C0A14; --surface:#121019;
      --surface2:#191624; --surface3:#201D2E;
      --text:#EDE8D9; --text-dim:rgba(237,232,217,0.75); --muted:#7A7264;
      --fd:'Cinzel Decorative',serif; --ft:'Cinzel',serif; --fb:'Cormorant Garamond',Georgia,serif;
    }
    *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{background:var(--obsidian);color:var(--text);font-family:var(--fb);overflow-x:hidden}
    ::-webkit-scrollbar{width:5px}
    ::-webkit-scrollbar-track{background:var(--obsidian)}
    ::-webkit-scrollbar-thumb{background:var(--gold-border);border-radius:3px}
    ::-webkit-scrollbar-thumb:hover{background:var(--gold)}

    .tp-bg{position:fixed;inset:0;pointer-events:none;z-index:0;background-size:200px 200px}
    .tp-nav{position:fixed;top:0;left:0;right:0;z-index:990;height:68px;display:flex;align-items:center;padding:0 48px;gap:14px;background:rgba(7,5,13,0.97);backdrop-filter:blur(24px);border-bottom:1px solid var(--gold-border)}
    .tp-back{display:flex;align-items:center;gap:7px;background:var(--gold-dim);border:1px solid var(--gold-border);color:var(--gold);border-radius:6px;padding:8px 16px;font-family:var(--ft);font-size:9px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:all .2s;text-decoration:none;white-space:nowrap}
    .tp-back:hover{background:var(--gold-dim2)}
    .tp-brand{font-family:var(--fd);font-size:13px;color:var(--gold);letter-spacing:2px;font-weight:700}
    .tp-brand span{font-family:var(--ft);font-size:9px;color:var(--muted);letter-spacing:3px;margin-left:10px}
    .tp-nav-r{margin-left:auto;display:flex;gap:10px;align-items:center}
    .tp-wa-nav{display:flex;align-items:center;gap:7px;background:#25D366;color:#fff;border:none;border-radius:6px;padding:9px 16px;font-family:var(--ft);font-size:9px;letter-spacing:1.5px;font-weight:700;text-transform:uppercase;cursor:pointer;text-decoration:none;transition:all .2s}
    .tp-wa-nav:hover{background:#1fb558}
    .tp-booknow{background:linear-gradient(135deg,var(--gold),var(--gold-light));color:#0B0900;border:none;border-radius:6px;padding:9px 22px;font-family:var(--ft);font-size:9px;letter-spacing:2px;font-weight:700;text-transform:uppercase;cursor:pointer;box-shadow:0 4px 20px rgba(201,168,76,.3);transition:all .25s}
    .tp-booknow:hover{box-shadow:0 6px 30px rgba(201,168,76,.5);transform:translateY(-1px)}

    .tp-hero{position:relative;height:100vh;min-height:580px;max-height:860px;margin-top:68px;overflow:hidden;display:flex;align-items:flex-end}
    .tp-hero-bg{position:absolute;inset:0;background-size:cover;background-position:center}
    .tp-hero-ov{position:absolute;inset:0;z-index:2;background:linear-gradient(to top,rgba(7,5,13,1) 0%,rgba(7,5,13,.65) 35%,rgba(7,5,13,.1) 70%,transparent 100%),linear-gradient(to right,rgba(7,5,13,.65) 0%,rgba(7,5,13,.15) 45%,transparent 75%)}
    
    .tp-htitle{font-family:var(--fd);font-size:clamp(28px,4.8vw,62px);font-weight:900;line-height:1.08;margin-bottom:10px;background:linear-gradient(135deg,#F0DC8A 0%,#C9A84C 35%,#FFE599 65%,#B8902E 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;filter:drop-shadow(0 3px 24px rgba(201,168,76,.35))}
    .tp-htagline{font-family:var(--fb);font-style:italic;font-size:clamp(16px,2vw,22px);color:var(--text-dim);font-weight:300;margin-bottom:22px;letter-spacing:.5px}
    
    .tp-hero-cnt{position:relative;z-index:4;padding:0 48px 52px;width:100%;max-width:820px;animation:fadeU .8s ease both}
    @keyframes fadeU{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
    
    .tp-hrating{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
    .tp-hstars{color:var(--gold);font-size:16px;letter-spacing:2px}
    .tp-hscore{font-family:var(--fd);font-size:22px;color:var(--gold);font-weight:700}
    
    .tp-bookbtn{background:linear-gradient(135deg,var(--gold),var(--gold-light));color:#0B0900;border:none;border-radius:8px;padding:17px 32px;font-family:var(--ft);font-weight:700;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;cursor:pointer;margin-top:20px;box-shadow:0 6px 24px rgba(201,168,76,.32);transition:all .3s}
    .tp-bookbtn:hover{box-shadow:0 10px 36px rgba(201,168,76,.55);transform:translateY(-2px)}
    
    .tp-body{display:grid;grid-template-columns:1fr;padding:56px 48px;position:relative;z-index:5;max-width:1400px;margin:0 auto}
    @media(max-width:1100px){.tp-body{padding:36px 22px}}
  `}</style>
);

function BookingWidget({ tour, onBook }) {
  const navigate = useNavigate();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [date, setDate] = useState("");

  const total = (adults * tour.price) + (children * (tour.price * 0.5));

  return (
    <div>
      <button className="tp-bookbtn" 
        onClick={() => navigate(`/booking/${tour.id}`)}>
        🎫 احجزي الآن
      </button>
    </div>
  );
}

export default function TourPage() {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const tour = getTourById(tourId);
  const [heroImg, setHeroImg] = useState(0);

  useEffect(() => { window.scrollTo({ top:0, behavior:"auto" }); }, [tourId]);

  useEffect(() => {
    if (!tour?.images?.length) return;
    const id = setInterval(() => setHeroImg(i => (i+1) % tour.images.length), 5500);
    return () => clearInterval(id);
  }, [tour]);

  if (!tour) return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"100vh", background:"var(--obsidian)", gap:20 }}>
      <GlobalStyles />
      <div style={{ fontFamily:"var(--fd)", fontSize:52, color:"var(--gold)" }}>𓂀</div>
      <div style={{ fontFamily:"var(--ft)", fontSize:13, letterSpacing:3, color:"var(--text)" }}>TOUR NOT FOUND</div>
      <button onClick={() => navigate("/")} style={{ background:"var(--gold-dim)", border:"1px solid var(--gold-border)", color:"var(--gold)", borderRadius:6, padding:"10px 24px", fontFamily:"var(--ft)", fontSize:10, letterSpacing:2, cursor:"pointer", textTransform:"uppercase" }}>
        ← Return Home
      </button>
    </div>
  );

  const related = getRelatedTours(tour.relatedTours || []);

  const handleBook = booking => {
    alert(`✦ Booking Received!\n\n${tour.name}\nDate: ${booking.date || "TBD"}\nGuests: ${booking.adults} adults, ${booking.children} children\nTotal: $${booking.total.toFixed(0)}\n\nOur team will contact you soon!`);
  };

  return (
    <div style={{ background:"var(--obsidian)", minHeight:"100vh", position:"relative" }}>
      <GlobalStyles />
      <div className="tp-bg" />

      {/* NAVBAR */}
      <nav className="tp-nav">
        <button className="tp-back" onClick={() => navigate(`/city/${tour.cityId}`)}>
          ← {tour.cityName}
        </button>
        <span className="tp-brand">GOLDEN <span>Egypt Tours</span></span>
        <div className="tp-nav-r">
          <button className="tp-booknow" onClick={() => navigate(`/booking/${tour.id}`)}>
            احجزي الآن
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="tp-hero">
        <div className="tp-hero-bg" style={{ backgroundImage:`url(${tour.images[heroImg]})` }} />
        <div className="tp-hero-ov" />

        <div className="tp-hero-cnt">
          <h1 className="tp-htitle">{tour.name}</h1>
          <p className="tp-htagline">{tour.tagline}</p>

          <div className="tp-hrating">
            <span className="tp-hstars">{"★".repeat(Math.floor(tour.rating))}</span>
            <span className="tp-hscore">{tour.rating}</span>
            <span style={{ fontFamily:"var(--fb)", fontSize:15, color:"var(--muted)" }}>
              ({tour.reviewCount?.toLocaleString()})
            </span>
          </div>

          <BookingWidget tour={tour} onBook={handleBook} />
        </div>
      </section>

      {/* BODY */}
      <div className="tp-body">
        <h1 style={{ fontFamily:"var(--fd)", fontSize:"clamp(20px,3vw,34px)", color:"var(--text)", fontWeight:700, lineHeight:1.2, marginBottom:18 }}>
          {tour.name}
        </h1>

        <p style={{ fontFamily:"var(--fb)", fontSize:18, color:"var(--text-dim)", lineHeight:1.85, marginBottom:36, fontWeight:300 }}>
          {tour.overview}
        </p>

        {tour.highlights && (
          <div style={{ marginBottom:36 }}>
            <div style={{ fontFamily:"var(--ft)", fontSize:10, letterSpacing:3.5, color:"var(--gold)", textTransform:"uppercase", marginBottom:18, display:"flex", alignItems:"center", gap:14 }}>
              ✦ Tour Highlights
            </div>
            {(tour.highlights||[]).map((h,i) => (
              <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:13, padding:"12px 0", borderBottom:"1px solid rgba(201,168,76,.06)" }}>
                <div style={{ color:"var(--gold)", fontSize:11, marginTop:5 }}>◆</div>
                <div style={{ fontFamily:"var(--fb)", fontSize:17, color:"var(--text-dim)", lineHeight:1.5 }}>{h}</div>
              </div>
            ))}
          </div>
        )}

        {tour.includes && (
          <div style={{ marginBottom:36 }}>
            <div style={{ fontFamily:"var(--ft)", fontSize:10, letterSpacing:3.5, color:"var(--gold)", textTransform:"uppercase", marginBottom:18 }}>
              ✦ What's Included
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:12 }}>
              {(tour.includes||[]).map((inc,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:12, background:"var(--surface2)", border:"1px solid var(--gold-border)", borderRadius:10, padding:"14px 16px" }}>
                  <span style={{ fontSize:20, flexShrink:0 }}>{inc.icon}</span>
                  <span style={{ fontFamily:"var(--ft)", fontSize:9, color:"var(--text)", textTransform:"uppercase" }}>{inc.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer style={{ textAlign:"center", padding:20, background:"#111", marginTop:40 }}>
        © 2026 Golden Egypt Tours — All Rights Reserved
      </footer>
    </div>
  );
}
