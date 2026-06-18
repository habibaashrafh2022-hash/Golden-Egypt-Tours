// ─── BookingModal.jsx — Aurevian Tours ────────────────────────
// Drop-in replacement for the inline BookingModal in CityPage.jsx.
// 3-step flow:  1. Guest info  →  2. Trip & locations  →  3. Success
// Mirrors the booking.model.js schema exactly.
// Sends to POST /api/bookings/create and opens WhatsApp on success.

import { useState } from "react";
import "./BookingForm.css";
// ── Constants (keep in sync with booking.model.js) ───────────
const TOUR_LANGUAGES = [
  "English","Spanish","French","Italian","German",
  "Portuguese","Chinese","Dutch","Japanese","Arabic",
];

const PICKUP_LOCATIONS = [
  "Cairo","Giza","Luxor","Aswan","Hurghada",
  "Sharm El Sheikh","Alexandria","New Cairo",
  "Heliopolis","6th of October City","Other",
];

const DROPOFF_LOCATIONS = [
  "Cairo","Giza","Luxor","Aswan","Hurghada",
  "Sharm El Sheikh","Alexandria","New Cairo",
  "Heliopolis","6th of October City","Hotel","Other",
];

// ── Inline styles ─────────────────────────────────────────────
const S = {
  overlay:{position:"fixed",inset:0,background:"rgba(28,16,4,.75)",backdropFilter:"blur(18px)",zIndex:3000,display:"flex",alignItems:"center",justifyContent:"center",padding:16,animation:"fadeIn .22s ease"},
  modal:{background:"linear-gradient(145deg,#FAF6ED,#F3ECD8)",border:"1.5px solid rgba(193,156,60,.35)",borderRadius:22,width:"min(580px,97vw)",maxHeight:"93vh",overflowY:"auto",boxShadow:"0 60px 140px rgba(28,16,4,.4)",animation:"slideD .28s ease"},
  head:{padding:"22px 28px 16px",borderBottom:"1px solid rgba(193,156,60,.18)",display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12},
  body:{padding:"24px 28px 30px"},
  label:{fontSize:9,color:"#A07828",letterSpacing:".2em",textTransform:"uppercase",display:"block",marginBottom:6,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"},
  inp:{background:"rgba(201,168,76,.06)",border:"1.5px solid rgba(193,156,60,.25)",borderRadius:10,padding:"11px 13px",color:"#2C1A06",fontSize:13,outline:"none",width:"100%",fontFamily:"'Cormorant Garamond',serif",transition:"border-color .2s,box-shadow .2s"},
  sel:{background:"rgba(201,168,76,.06)",border:"1.5px solid rgba(193,156,60,.25)",borderRadius:10,padding:"11px 13px",color:"#2C1A06",fontSize:13,outline:"none",width:"100%",fontFamily:"'Josefin Sans',sans-serif",cursor:"pointer"},
  err:{fontSize:11,color:"#C0405A",marginTop:5,fontFamily:"'Josefin Sans',sans-serif"},
  grid2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14},
  full:{gridColumn:"1/-1"},
  btnGold:{width:"100%",background:"linear-gradient(135deg,#A07828,#C9A84C,#E8C96D)",color:"#2C1A06",border:"none",borderRadius:11,padding:"13px 0",cursor:"pointer",fontWeight:700,fontSize:11,letterSpacing:".16em",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",boxShadow:"0 6px 24px rgba(160,120,40,.3)",display:"flex",alignItems:"center",justifyContent:"center",gap:9,transition:"all .2s"},
  btnGhost:{background:"rgba(44,26,6,.06)",border:"1px solid rgba(44,26,6,.1)",color:"#9C7A3C",borderRadius:11,padding:"13px 18px",cursor:"pointer",fontSize:12,fontFamily:"'Josefin Sans',sans-serif"},
  btnWa:{background:"#25D366",color:"#fff",border:"none",borderRadius:11,padding:"13px 18px",cursor:"pointer",fontSize:18,textDecoration:"none",display:"flex",alignItems:"center"},
};

function inp(extra={}){ return {...S.inp,...extra}; }
function sel(extra={}){ return {...S.sel,...extra}; }

// ── Step indicator ────────────────────────────────────────────
function StepBar({step}){
  const labels = ["Personal Info","Trip Details","Confirmed"];
  return(
    <div style={{display:"flex",alignItems:"center",gap:0,marginBottom:24}}>
      {labels.map((l,i)=>{
        const n = i+1;
        const done = step>n, active = step===n;
        return(
          <div key={l} style={{display:"flex",alignItems:"center",flex:i<labels.length-1?1:"auto"}}>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
              <div style={{width:28,height:28,borderRadius:"50%",background:done||active?"linear-gradient(135deg,#A07828,#C9A84C)":"rgba(201,168,76,.12)",border:done||active?"none":"1.5px solid rgba(193,156,60,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:done||active?"#FAF6ED":"#A07828",transition:"all .3s"}}>
                {done ? "✓" : n}
              </div>
              <span style={{fontSize:9,color:active?"#A07828":"#9C7A3C",fontFamily:"'Josefin Sans',sans-serif",fontWeight:active?700:400,letterSpacing:".05em",whiteSpace:"nowrap"}}>{l}</span>
            </div>
            {i<labels.length-1 && <div style={{flex:1,height:1,background:step>n+1?"rgba(160,120,40,.45)":"rgba(193,156,60,.2)",margin:"0 8px",marginBottom:14}}/>}
          </div>
        );
      })}
    </div>
  );
}

// ── Field wrapper ──────────────────────────────────────────────
function Field({label, error, children, style={}}){
  return(
    <div style={style}>
      <label style={S.label}>{label}</label>
      {children}
      {error && <div style={S.err}>⚠ {error}</div>}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────
export default function BookingModal({ tour, cityName, formatPrice, onClose }) {
  const [step, setStep]   = useState(1);
  const [busy, setBusy]   = useState(false);
  const [apiErr, setApiErr] = useState("");
  const [result, setResult] = useState(null); // { reference, whatsappLink }

  const [f, setF] = useState({
    // Step 1 — guest
    name:"", email:"", age:"", nationality:"", whatsapp:"",
    // Step 2 — trip
    date:"", numberOfGuests:"2", tourLanguage:"English",
    pickupLocation:"Cairo", pickupSpecific:"",
    dropoffLocation:"Hotel", dropoffSpecific:"",
    hotelName:"", hotelAddress:"",
    specialRequests:"",
  });
  const [errs, setErrs] = useState({});

  const upd = k => e => { setF(p=>({...p,[k]:e.target.value})); setErrs(p=>({...p,[k]:""})); };

  const price = tour?.price?.discounted ?? tour?.price?.original ?? 0;
  const total = price * Math.max(1, parseInt(f.numberOfGuests)||1);

  // ── Validation per step ──────────────────────────────────────
  function validate1(){
    const e = {};
    if(!f.name.trim())       e.name        = "Required";
    if(!f.email.includes("@")) e.email     = "Valid email required";
    if(!f.age || f.age<1)    e.age         = "Required (1–120)";
    if(!f.nationality.trim()) e.nationality = "Required";
    if(!f.whatsapp.trim())   e.whatsapp    = "Required (include country code)";
    setErrs(e);
    return Object.keys(e).length === 0;
  }

  function validate2(){
    const e = {};
    if(!f.date)                                                 e.date           = "Required";
    if(!f.numberOfGuests || parseInt(f.numberOfGuests)<1)       e.numberOfGuests = "At least 1 guest";
    if(f.pickupLocation==="Other" && !f.pickupSpecific.trim())  e.pickupSpecific = "Please specify pickup location";
    if(f.dropoffLocation==="Other" && !f.dropoffSpecific.trim()) e.dropoffSpecific = "Please specify drop-off location";
    if(f.dropoffLocation==="Hotel" && !f.hotelName.trim())      e.hotelName      = "Hotel name required";
    setErrs(e);
    return Object.keys(e).length === 0;
  }

  // ── Submit ───────────────────────────────────────────────────
  async function submit(){
    if(!validate2()) return;
    setBusy(true); setApiErr("");
    try {
      const payload = {
        guest:{
          name:        f.name.trim(),
          email:       f.email.trim(),
          age:         parseInt(f.age),
          nationality: f.nationality.trim(),
          whatsapp:    f.whatsapp.trim(),
        },
        tour:{
          tourId:   tour._id,
          tourName: tour.title,
          city:     cityName,
          price,
        },
        details:{
          date:           f.date,
          numberOfGuests: parseInt(f.numberOfGuests),
          tourLanguage:   f.tourLanguage,
        },
        locations:{
          pickupLocation:  f.pickupLocation,
          pickupSpecific:  f.pickupSpecific,
          dropoffLocation: f.dropoffLocation,
          dropoffSpecific: f.dropoffSpecific,
          hotelName:       f.hotelName,
          hotelAddress:    f.hotelAddress,
        },
        specialRequests: f.specialRequests,
        totalPrice:      total,
        currency:        "USD",
      };

      const res  = await fetch("/api/bookings/create", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(payload),
      });
      const data = await res.json();

      if(!res.ok) throw new Error(data.errors?.join(", ") || data.message || "Server error");

      setResult({ reference: data.reference, whatsappLink: data.whatsappLink });
      setStep(3);
    } catch(err){
      setApiErr(err.message);
    } finally {
      setBusy(false);
    }
  }

  // ── Shared input focus style ──────────────────────────────────
  const fi = e => { e.target.style.borderColor="rgba(160,120,40,.7)"; e.target.style.boxShadow="0 0 0 3px rgba(201,168,76,.1)"; };
  const fo = e => { e.target.style.borderColor="rgba(193,156,60,.25)"; e.target.style.boxShadow="none"; };

  if(!tour) return null;

  return(
    <div style={S.overlay} onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={S.modal}>

        {/* HEADER */}
        <div style={S.head}>
          <div>
            <div style={{fontSize:9,color:"#A07828",letterSpacing:".22em",textTransform:"uppercase",marginBottom:7,fontWeight:700,fontFamily:"'Josefin Sans',sans-serif"}}>✦ Aurevian Tours · {cityName}</div>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:15,fontWeight:700,color:"#2C1A06",lineHeight:1.35,maxWidth:400}}>{tour.title}</div>
            <div style={{marginTop:6,display:"flex",gap:12,flexWrap:"wrap"}}>
              {tour.duration && <span style={{fontSize:11,color:"#9C7A3C"}}>⏱ {tour.duration}</span>}
              <span style={{fontSize:11,color:"#A07828",fontWeight:700}}>{formatPrice(price)} / person</span>
            </div>
          </div>
          <button onClick={onClose} style={{background:"rgba(44,26,6,.06)",border:"1px solid rgba(44,26,6,.1)",color:"#9C7A3C",borderRadius:8,width:32,height:32,cursor:"pointer",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>✕</button>
        </div>

        {/* BODY */}
        <div style={S.body}>
          {step < 3 && <StepBar step={step}/>}

          {/* ── STEP 1 — Personal Info ── */}
          {step===1 && (
            <div style={{...S.grid2,animation:"fadeIn .25s ease"}}>
              <Field label="Full Name *" error={errs.name} style={S.full}>
                <input style={inp()} value={f.name} onChange={upd("name")} placeholder="As on your passport" onFocus={fi} onBlur={fo}/>
              </Field>

              <Field label="Email Address *" error={errs.email} style={S.full}>
                <input style={inp()} type="email" value={f.email} onChange={upd("email")} placeholder="your@email.com" onFocus={fi} onBlur={fo}/>
              </Field>

              <Field label="WhatsApp Number *" error={errs.whatsapp}>
                <input style={inp()} type="tel" value={f.whatsapp} onChange={upd("whatsapp")} placeholder="+1 234 567 8900" onFocus={fi} onBlur={fo}/>
              </Field>

              <Field label="Age *" error={errs.age}>
                <input style={inp()} type="number" min="1" max="120" value={f.age} onChange={upd("age")} placeholder="e.g. 35" onFocus={fi} onBlur={fo}/>
              </Field>

              <Field label="Nationality *" error={errs.nationality} style={S.full}>
                <input style={inp()} value={f.nationality} onChange={upd("nationality")} placeholder="e.g. American, British, French…" onFocus={fi} onBlur={fo}/>
              </Field>

              <div style={S.full}>
                <button style={S.btnGold} onClick={()=>validate1()&&setStep(2)}>
                  Continue — Trip Details →
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 2 — Trip Details ── */}
          {step===2 && (
            <div style={{...S.grid2,animation:"fadeIn .25s ease"}}>

              <Field label="Tour Date *" error={errs.date}>
                <input style={inp({colorScheme:"light"})} type="date" value={f.date} min={new Date().toISOString().split("T")[0]} onChange={upd("date")} onFocus={fi} onBlur={fo}/>
              </Field>

              <Field label="Number of Guests *" error={errs.numberOfGuests}>
                <input style={inp()} type="number" min="1" value={f.numberOfGuests} onChange={upd("numberOfGuests")} onFocus={fi} onBlur={fo}/>
              </Field>

              <Field label="Tour Language *" style={S.full}>
                <select style={sel()} value={f.tourLanguage} onChange={upd("tourLanguage")}>
                  {TOUR_LANGUAGES.map(l=><option key={l}>{l}</option>)}
                </select>
              </Field>

              {/* Pickup */}
              <Field label="Pickup Location *" style={S.full}>
                <select style={sel()} value={f.pickupLocation} onChange={upd("pickupLocation")}>
                  {PICKUP_LOCATIONS.map(l=><option key={l}>{l}</option>)}
                </select>
              </Field>
              {f.pickupLocation==="Other" && (
                <Field label="Specify Pickup *" error={errs.pickupSpecific} style={S.full}>
                  <input style={inp()} value={f.pickupSpecific} onChange={upd("pickupSpecific")} placeholder="Hotel name / full address" onFocus={fi} onBlur={fo}/>
                </Field>
              )}

              {/* Drop-off */}
              <Field label="Drop-off Location *" style={S.full}>
                <select style={sel()} value={f.dropoffLocation} onChange={upd("dropoffLocation")}>
                  {DROPOFF_LOCATIONS.map(l=><option key={l}>{l}</option>)}
                </select>
              </Field>
              {f.dropoffLocation==="Hotel" && (
                <>
                  <Field label="Hotel Name *" error={errs.hotelName}>
                    <input style={inp()} value={f.hotelName} onChange={upd("hotelName")} placeholder="e.g. Four Seasons Cairo" onFocus={fi} onBlur={fo}/>
                  </Field>
                  <Field label="Hotel Address">
                    <input style={inp()} value={f.hotelAddress} onChange={upd("hotelAddress")} placeholder="Street / area" onFocus={fi} onBlur={fo}/>
                  </Field>
                </>
              )}
              {f.dropoffLocation==="Other" && (
                <Field label="Specify Drop-off *" error={errs.dropoffSpecific} style={S.full}>
                  <input style={inp()} value={f.dropoffSpecific} onChange={upd("dropoffSpecific")} placeholder="Hotel name / full address" onFocus={fi} onBlur={fo}/>
                </Field>
              )}

              <Field label="Special Requests" style={S.full}>
                <textarea style={{...inp(),resize:"vertical"}} rows={2} value={f.specialRequests} onChange={upd("specialRequests")} placeholder="Dietary needs, accessibility, preferences…" onFocus={fi} onBlur={fo}/>
              </Field>

              {/* Price summary */}
              <div style={{...S.full,background:"rgba(201,168,76,.08)",border:"1px solid rgba(193,156,60,.2)",borderRadius:10,padding:"11px 15px",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"#6B4E1A"}}>
                <span>{f.numberOfGuests} × {formatPrice(price)}</span>
                <strong style={{color:"#A07828",fontSize:18,fontFamily:"'Cinzel',serif"}}>{formatPrice(total)}</strong>
              </div>

              {apiErr && <div style={{...S.full,background:"rgba(192,64,90,.07)",border:"1px solid rgba(192,64,90,.25)",borderRadius:9,padding:"10px 14px",fontSize:12,color:"#C0405A",fontFamily:"'Josefin Sans',sans-serif"}}>⚠ {apiErr}</div>}

              <div style={{...S.full,display:"flex",gap:9}}>
                <button style={S.btnGhost} onClick={()=>setStep(1)}>← Back</button>
                <button style={{...S.btnGold,flex:1,opacity:busy?.5:1}} onClick={submit} disabled={busy}>
                  {busy
                    ? <><div style={{width:14,height:14,border:"2px solid rgba(44,26,6,.3)",borderTop:"2px solid #2C1A06",borderRadius:"50%",animation:"spin .7s linear infinite"}}/> Processing…</>
                    : "✈ Confirm Booking"}
                </button>
              </div>

              <div style={{...S.full,textAlign:"center",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:12,color:"#9C7A3C"}}>
                Free cancellation up to 24 hours before · No charge until confirmed
              </div>
            </div>
          )}

          {/* ── STEP 3 — Success ── */}
          {step===3 && result && (
            <div style={{textAlign:"center",padding:"16px 0",animation:"fadeIn .35s ease"}}>
              <div style={{fontSize:58,marginBottom:14}}>✅</div>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:22,color:"#A07828",marginBottom:8}}>Booking Confirmed!</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:"#9C7A3C",lineHeight:1.85,marginBottom:6}}>
                A confirmation email has been sent to <strong style={{color:"#2C1A06"}}>{f.email}</strong>.<br/>
                Our team will contact you within <strong>2 hours</strong>.
              </div>

              {/* Reference */}
              <div style={{background:"linear-gradient(135deg,rgba(201,168,76,.12),rgba(232,201,109,.07))",border:"1.5px solid rgba(193,156,60,.35)",borderRadius:14,padding:"16px 24px",margin:"18px auto",maxWidth:300}}>
                <div style={{fontSize:9,color:"#9C7A3C",letterSpacing:".2em",textTransform:"uppercase",marginBottom:4}}>Booking Reference</div>
                <div style={{fontFamily:"'Cinzel',serif",fontSize:22,fontWeight:700,color:"#A07828",letterSpacing:".1em"}}>{result.reference}</div>
                <div style={{fontSize:10,color:"#9C7A3C",marginTop:4}}>Keep this for your records</div>
              </div>

              <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap",marginTop:20}}>
                <a href={result.whatsappLink} target="_blank" rel="noreferrer"
                  style={{background:"#25D366",color:"#fff",borderRadius:11,padding:"13px 22px",textDecoration:"none",fontWeight:700,fontSize:12,display:"inline-flex",alignItems:"center",gap:8,fontFamily:"'Josefin Sans',sans-serif"}}>
                  💬 Chat on WhatsApp
                </a>
                <button onClick={onClose}
                  style={{background:"rgba(44,26,6,.06)",border:"1px solid rgba(44,26,6,.1)",color:"#9C7A3C",borderRadius:11,padding:"13px 22px",cursor:"pointer",fontSize:12,fontFamily:"'Josefin Sans',sans-serif"}}>
                  Close
                </button>
              </div>

              <div style={{marginTop:20,padding:"12px 16px",background:"rgba(82,183,136,.07)",borderRadius:10,border:"1px solid rgba(82,183,136,.2)",fontSize:12,color:"#2F8F63"}}>
                ✓ Free cancellation up to 24 hours before the tour date
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}