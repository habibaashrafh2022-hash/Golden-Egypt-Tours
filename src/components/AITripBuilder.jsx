import { useState } from "react";

const QUICK_PROMPTS = [
  { label: "5 Days Cairo & Pyramids",     icon: "🏛️", prompt: "Plan a 5-day luxury trip to Cairo focusing on the Pyramids, Egyptian Museum, and Islamic Cairo with hotel recommendations and daily budget" },
  { label: "7 Days Nile Cruise",          icon: "⛵", prompt: "Plan a 7-day Nile cruise from Luxor to Aswan including Valley of the Kings, Karnak Temple, Abu Simbel with cruise ship options and prices" },
  { label: "10 Days Full Egypt",          icon: "🗺️", prompt: "Plan a 10-day complete Egypt tour covering Cairo, Luxor, Aswan, and Hurghada with flights, hotels, and tours with total budget" },
  { label: "Honeymoon in Egypt",          icon: "💍", prompt: "Plan a 7-day romantic honeymoon in Egypt with luxury hotels, private tours, Nile cruise and special experiences for couples with prices" },
  { label: "Family Trip with Kids",       icon: "👨‍👩‍👧‍👦", prompt: "Plan a 8-day family-friendly Egypt trip with activities suitable for children, including pyramids, Luxor, and Red Sea with family hotel packages and prices" },
  { label: "Red Sea Diving Week",         icon: "🤿", prompt: "Plan a 7-day diving and snorkeling trip in Hurghada and Sharm El Sheikh with dive sites, equipment rental, accommodations and total budget" },
  { label: "Budget Egypt 2 Weeks",        icon: "💰", prompt: "Plan a 14-day budget-friendly Egypt backpacker trip covering Cairo, Luxor, Aswan, and Dahab with cheapest options and total cost under $1000" },
  { label: "Luxury 5-Star Experience",   icon: "⭐", prompt: "Plan a 10-day ultra-luxury Egypt experience with 5-star hotels, private Egyptologist guides, private Nile cruise, and exclusive experiences with VIP pricing" },
];

const SYSTEM_PROMPT = `You are an expert Egypt travel planner for Golden Egypt Tours, a luxury travel company established in 1995.

When creating itineraries, ALWAYS include:

## 🗓️ DAY-BY-DAY ITINERARY
Format each day clearly with:
- Day number and title
- Morning / Afternoon / Evening activities
- Specific sites, monuments, and experiences
- Meal recommendations (breakfast/lunch/dinner spots)
- Travel logistics between locations

## 💰 DETAILED PRICING
Always provide realistic USD prices for:
- Hotel options (Budget / Mid-range / Luxury tiers)
- Tour entrance fees
- Transport costs (domestic flights, trains, taxis)
- Meals budget per day
- Total trip cost estimate (3 tiers: Budget / Standard / Luxury)

## 🏨 ACCOMMODATION RECOMMENDATIONS
For each city, recommend:
- Budget option ($30-80/night)
- Mid-range option ($80-200/night)  
- Luxury option ($200-500+/night)

## ✈️ PRACTICAL TIPS
- Best time to visit
- What to pack
- Local customs and etiquette
- Health and safety tips
- Visa information

## 📋 WHAT'S INCLUDED vs NOT INCLUDED
List clearly what Golden Egypt Tours includes in their packages.

## 📱 BOOKING INFORMATION
End with: "Ready to book? Contact Golden Egypt Tours: WhatsApp +20 106 825 7754 | Email: goldenegypttours26@gmail.com"

Use emojis throughout for visual appeal.
Be enthusiastic, detailed, and professional.
Respond in the SAME language as the user's message.`;

export default function AITripBuilder({ lang = "en", currency = "USD" }) {
  const [input, setInput]       = useState("");
  const [result, setResult]     = useState("");
  const [loading, setLoading]   = useState(false);
  const [phase, setPhase]       = useState("idle"); // idle | thinking | result
  const [adults, setAdults]     = useState(2);
  const [children, setChildren] = useState(0);
  const [duration, setDuration] = useState(7);
  const [budget, setBudget]     = useState("standard");
  const [showForm, setShowForm] = useState(false);

  const LABELS = {
    en: { title:"AI Trip Builder", sub:"Design your perfect Egypt itinerary in seconds", placeholder:"Describe your dream Egypt trip...", generate:"Generate My Itinerary", thinking:"Crafting your perfect Egypt itinerary...", adults:"Adults", children:"Children", days:"Days", budget:"Budget Level", budgets:["Budget","Standard","Luxury"], quick:"Quick Inspiration", customize:"Customize Trip", copy:"Copy Itinerary", book:"Book This Trip", new:"Plan New Trip" },
    ar: { title:"منشئ الرحلات بالذكاء الاصطناعي", sub:"صمم رحلتك المثالية في مصر في ثوانٍ", placeholder:"صف رحلة أحلامك في مصر...", generate:"إنشاء برنامجي", thinking:"جاري إنشاء برنامج رحلتك المثالي...", adults:"بالغين", children:"أطفال", days:"أيام", budget:"مستوى الميزانية", budgets:["اقتصادي","عادي","فاخر"], quick:"إلهام سريع", customize:"تخصيص الرحلة", copy:"نسخ البرنامج", book:"احجز هذه الرحلة", new:"تخطيط رحلة جديدة" },
    es: { title:"Constructor de Viajes IA", sub:"Diseña tu itinerario perfecto en Egipto en segundos", placeholder:"Describe tu viaje soñado a Egipto...", generate:"Generar Mi Itinerario", thinking:"Creando tu itinerario perfecto...", adults:"Adultos", children:"Niños", days:"Días", budget:"Nivel de Presupuesto", budgets:["Económico","Estándar","Lujo"], quick:"Inspiración Rápida", customize:"Personalizar Viaje", copy:"Copiar Itinerario", book:"Reservar Este Viaje", new:"Planear Nuevo Viaje" },
    fr: { title:"Créateur de Voyage IA", sub:"Concevez votre itinéraire parfait en Égypte en secondes", placeholder:"Décrivez votre voyage de rêve en Égypte...", generate:"Générer Mon Itinéraire", thinking:"Création de votre itinéraire parfait...", adults:"Adultes", children:"Enfants", days:"Jours", budget:"Niveau de Budget", budgets:["Économique","Standard","Luxe"], quick:"Inspiration Rapide", customize:"Personnaliser le Voyage", copy:"Copier l'Itinéraire", book:"Réserver ce Voyage", new:"Planifier un Nouveau Voyage" },
    de: { title:"KI-Reiseplaner", sub:"Gestalten Sie Ihr perfektes Ägypten-Reiseprogramm in Sekunden", placeholder:"Beschreiben Sie Ihre Traumreise nach Ägypten...", generate:"Mein Reiseprogramm erstellen", thinking:"Ihr perfektes Reiseprogramm wird erstellt...", adults:"Erwachsene", children:"Kinder", days:"Tage", budget:"Budgetniveau", budgets:["Budget","Standard","Luxus"], quick:"Schnelle Inspiration", customize:"Reise anpassen", copy:"Reiseprogramm kopieren", book:"Diese Reise buchen", new:"Neue Reise planen" },
    it: { title:"Costruttore di Viaggi AI", sub:"Progetta il tuo itinerario perfetto in Egitto in secondi", placeholder:"Descrivi il tuo viaggio da sogno in Egitto...", generate:"Genera il Mio Itinerario", thinking:"Creazione del tuo itinerario perfetto...", adults:"Adulti", children:"Bambini", days:"Giorni", budget:"Livello di Budget", budgets:["Economico","Standard","Lusso"], quick:"Ispirazione Rapida", customize:"Personalizza Viaggio", copy:"Copia Itinerario", book:"Prenota Questo Viaggio", new:"Pianifica Nuovo Viaggio" },
    pt: { title:"Construtor de Viagens IA", sub:"Projete seu itinerário perfeito no Egito em segundos", placeholder:"Descreva sua viagem dos sonhos ao Egito...", generate:"Gerar Meu Itinerário", thinking:"Criando seu itinerário perfeito...", adults:"Adultos", children:"Crianças", days:"Dias", budget:"Nível de Orçamento", budgets:["Econômico","Padrão","Luxo"], quick:"Inspiração Rápida", customize:"Personalizar Viagem", copy:"Copiar Itinerário", book:"Reservar Esta Viagem", new:"Planejar Nova Viagem" },
  };
  const L = LABELS[lang] || LABELS.en;

  const buildPrompt = () => {
    const budgetMap = { budget:"budget-friendly (under $50/day per person)", standard:"mid-range ($100-200/day per person)", luxury:"luxury (over $300/day per person)" };
    return `${input}\n\nTrip details: ${adults} adults, ${children} children, ${duration} days, ${budgetMap[budget]} budget, currency preference: ${currency}`;
  };

  const handleGenerate = async () => {
    const query = input.trim();
    if (!query) return;
    setLoading(true);
    setPhase("thinking");
    setResult("");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: buildPrompt() }],
        }),
      });
      const data = await res.json();
      const text = data.content?.map(i => i.text || "").join("\n") || "Could not generate itinerary. Please try again.";
      setResult(text);
      setPhase("result");
    } catch (e) {
      setResult("⚠️ Connection error. Please check your internet and try again.\n\nFor immediate assistance:\n📱 WhatsApp: +20 106 825 7754\n📧 Email: goldenegypttours26@gmail.com");
      setPhase("result");
    }
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
  };

  const handleBook = () => {
    const msg = encodeURIComponent(`🏛️ *AI Trip Builder Request*\n\n*Trip:* ${input}\n*Adults:* ${adults}\n*Children:* ${children}\n*Duration:* ${duration} days\n*Budget:* ${budget}\n\nPlease help me book this trip!\n\n---\n${result.slice(0, 500)}...`);
    window.open(`https://wa.me/201068257754?text=${msg}`, "_blank");
  };

  const S = {
    wrap: { background:"linear-gradient(135deg,rgba(26,18,8,0.95),rgba(10,7,4,0.98))", border:"1px solid rgba(212,168,71,0.2)", borderRadius:"20px", padding:"clamp(1.5rem,4vw,3rem)", position:"relative", overflow:"hidden" },
    deco1: { position:"absolute",top:"-40px",right:"-40px",width:"200px",height:"200px",background:"radial-gradient(circle,rgba(212,168,71,0.08),transparent)",borderRadius:"50%",pointerEvents:"none" },
    deco2: { position:"absolute",bottom:"-30px",left:"-30px",width:"150px",height:"150px",background:"radial-gradient(circle,rgba(212,168,71,0.05),transparent)",borderRadius:"50%",pointerEvents:"none" },
    header: { marginBottom:"1.5rem" },
    eyebrow: { fontSize:"0.65rem",color:"#D4A847",letterSpacing:"4px",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px" },
    title: { fontSize:"clamp(1.4rem,2.5vw,2rem)",fontWeight:700,color:"#D4A847",display:"flex",alignItems:"center",gap:"10px",fontFamily:"'Cinzel Decorative',serif" },
    sub: { color:"#9A7B3C",fontSize:"0.9rem",marginTop:"4px",fontFamily:"'Josefin Sans',sans-serif" },
    quickWrap: { marginBottom:"1.2rem" },
    quickLabel: { fontSize:"0.65rem",color:"#9A7B3C",letterSpacing:"3px",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",marginBottom:"8px" },
    quickGrid: { display:"flex",flexWrap:"wrap",gap:"6px" },
    quickBtn: { background:"rgba(212,168,71,0.06)",border:"1px solid rgba(212,168,71,0.18)",borderRadius:"20px",padding:"6px 14px",color:"#C8B89A",fontSize:"0.78rem",cursor:"pointer",transition:"all .2s",fontFamily:"'Josefin Sans',sans-serif",display:"flex",alignItems:"center",gap:"5px" },
    formToggle: { background:"transparent",border:"1px dashed rgba(212,168,71,0.25)",borderRadius:"8px",padding:"7px 14px",color:"#9A7B3C",fontSize:"0.75rem",cursor:"pointer",fontFamily:"'Josefin Sans',sans-serif",marginBottom:"10px",display:"flex",alignItems:"center",gap:"6px",transition:"all .2s" },
    formRow: { display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(130px,1fr))",gap:"10px",marginBottom:"12px",padding:"14px",background:"rgba(212,168,71,0.04)",borderRadius:"10px",border:"1px solid rgba(212,168,71,0.1)" },
    formField: { display:"flex",flexDirection:"column",gap:"4px" },
    formLabel: { fontSize:"0.6rem",color:"#9A7B3C",letterSpacing:"2px",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif" },
    formInput: { background:"rgba(212,168,71,0.06)",border:"1px solid rgba(212,168,71,0.2)",borderRadius:"6px",padding:"7px 10px",color:"#F5E6C8",fontSize:"0.85rem",outline:"none",fontFamily:"'Cormorant Garamond',Georgia,serif" },
    inputWrap: { display:"flex",gap:"10px",marginBottom:"10px" },
    input: { flex:1,background:"rgba(212,168,71,0.06)",border:"1px solid rgba(212,168,71,0.25)",borderRadius:"10px",padding:"14px 18px",color:"#F5E6C8",fontSize:"0.95rem",outline:"none",fontFamily:"'Cormorant Garamond',Georgia,serif",resize:"vertical",minHeight:"60px",lineHeight:1.5 },
    btn: { background:"linear-gradient(135deg,#D4A847,#8B6914)",color:"#0A0704",border:"none",borderRadius:"10px",padding:"14px 24px",cursor:"pointer",fontWeight:700,fontSize:"0.82rem",letterSpacing:"1.5px",textTransform:"uppercase",whiteSpace:"nowrap",fontFamily:"'Josefin Sans',sans-serif",transition:"all .2s",boxShadow:"0 4px 20px rgba(212,168,71,0.3)" },
    thinking: { display:"flex",alignItems:"center",gap:"14px",padding:"1.5rem",background:"rgba(212,168,71,0.05)",borderRadius:"12px",border:"1px solid rgba(212,168,71,0.15)",marginTop:"1rem" },
    spinner: { width:"28px",height:"28px",border:"2px solid rgba(212,168,71,0.2)",borderTop:"2px solid #D4A847",borderRadius:"50%",animation:"spin .8s linear infinite",flexShrink:0 },
    thinkingTxt: { color:"#D4A847",fontFamily:"'Josefin Sans',sans-serif",fontSize:"0.85rem",letterSpacing:"1px" },
    result: { marginTop:"1.2rem",background:"rgba(212,168,71,0.04)",border:"1px solid rgba(212,168,71,0.18)",borderRadius:"14px",overflow:"hidden" },
    resultHeader: { display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 18px",borderBottom:"1px solid rgba(212,168,71,0.12)",background:"rgba(212,168,71,0.06)" },
    resultTitle: { color:"#D4A847",fontSize:"0.75rem",letterSpacing:"2px",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",display:"flex",alignItems:"center",gap:"6px" },
    resultActions: { display:"flex",gap:"8px" },
    resultBtn: { background:"rgba(212,168,71,0.1)",border:"1px solid rgba(212,168,71,0.2)",borderRadius:"6px",padding:"5px 12px",color:"#D4A847",fontSize:"0.72rem",cursor:"pointer",fontFamily:"'Josefin Sans',sans-serif",letterSpacing:"1px",transition:"all .2s" },
    resultBody: { padding:"1.5rem",color:"#F5E6C8",fontSize:"0.9rem",lineHeight:1.85,whiteSpace:"pre-wrap",maxHeight:"500px",overflowY:"auto",fontFamily:"'Cormorant Garamond',Georgia,serif" },
    resultFooter: { display:"flex",gap:"10px",padding:"14px 18px",borderTop:"1px solid rgba(212,168,71,0.12)",flexWrap:"wrap" },
    bookBtn: { background:"linear-gradient(135deg,#25D366,#1da851)",color:"#fff",border:"none",borderRadius:"8px",padding:"10px 20px",cursor:"pointer",fontWeight:700,fontSize:"0.8rem",letterSpacing:"1.5px",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif",display:"flex",alignItems:"center",gap:"8px",boxShadow:"0 4px 16px rgba(37,211,102,0.3)",flex:1 },
    newBtn: { background:"rgba(212,168,71,0.1)",border:"1px solid rgba(212,168,71,0.25)",color:"#D4A847",borderRadius:"8px",padding:"10px 20px",cursor:"pointer",fontSize:"0.8rem",letterSpacing:"1.5px",textTransform:"uppercase",fontFamily:"'Josefin Sans',sans-serif" },
  };

  return (
    <div style={S.wrap}>
      <style>{`
        @keyframes spin { to{transform:rotate(360deg)} }
        @keyframes pulse2 { 0%,100%{opacity:1} 50%{opacity:0.5} }
        .ai-qbtn:hover { background:rgba(212,168,71,0.14)!important; color:#D4A847!important; border-color:rgba(212,168,71,0.35)!important; }
        .ai-rbtn:hover { background:rgba(212,168,71,0.18)!important; }
        .ai-fbtn:hover { background:rgba(212,168,71,0.08)!important; border-color:rgba(212,168,71,0.3)!important; color:#D4A847!important; }
        .ai-result-body::-webkit-scrollbar { width:4px }
        .ai-result-body::-webkit-scrollbar-track { background:transparent }
        .ai-result-body::-webkit-scrollbar-thumb { background:rgba(212,168,71,0.3); border-radius:2px }
        .thinking-dots::after { content:''; animation:pulse2 1.2s infinite }
      `}</style>
      <div style={S.deco1} /><div style={S.deco2} />

      {/* Header */}
      <div style={S.header}>
        <div style={S.eyebrow}>✨ Powered by Claude AI</div>
        <div style={S.title}>🤖 {L.title}</div>
        <div style={S.sub}>{L.sub}</div>
      </div>

      {phase !== "result" && (
        <>
          {/* Quick prompts */}
          <div style={S.quickWrap}>
            <div style={S.quickLabel}>⚡ {L.quick}</div>
            <div style={S.quickGrid}>
              {QUICK_PROMPTS.map((q, i) => (
                <button key={i} className="ai-qbtn" style={S.quickBtn}
                  onClick={() => setInput(q.prompt)}>
                  {q.icon} {q.label}
                </button>
              ))}
            </div>
          </div>

          {/* Customize toggle */}
          <button className="ai-fbtn" style={S.formToggle} onClick={() => setShowForm(!showForm)}>
            ⚙️ {L.customize} {showForm ? "▲" : "▼"}
          </button>

          {/* Customize form */}
          {showForm && (
            <div style={S.formRow}>
              <div style={S.formField}>
                <span style={S.formLabel}>{L.adults}</span>
                <input type="number" min={1} max={20} value={adults}
                  onChange={e => setAdults(+e.target.value)}
                  style={S.formInput} />
              </div>
              <div style={S.formField}>
                <span style={S.formLabel}>{L.children}</span>
                <input type="number" min={0} max={10} value={children}
                  onChange={e => setChildren(+e.target.value)}
                  style={S.formInput} />
              </div>
              <div style={S.formField}>
                <span style={S.formLabel}>{L.days}</span>
                <input type="number" min={1} max={30} value={duration}
                  onChange={e => setDuration(+e.target.value)}
                  style={S.formInput} />
              </div>
              <div style={S.formField}>
                <span style={S.formLabel}>{L.budget}</span>
                <select value={budget} onChange={e => setBudget(e.target.value)} style={S.formInput}>
                  <option value="budget">{L.budgets[0]}</option>
                  <option value="standard">{L.budgets[1]}</option>
                  <option value="luxury">{L.budgets[2]}</option>
                </select>
              </div>
            </div>
          )}

          {/* Main input */}
          <div style={S.inputWrap}>
            <textarea
              style={S.input}
              placeholder={L.placeholder}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter" && e.ctrlKey) handleGenerate(); }}
            />
          </div>
          <button style={{ ...S.btn, width:"100%", opacity: loading || !input.trim() ? 0.6 : 1 }}
            onClick={handleGenerate} disabled={loading || !input.trim()}>
            ✨ {L.generate}
          </button>
        </>
      )}

      {/* Thinking */}
      {phase === "thinking" && (
        <div style={S.thinking}>
          <div style={S.spinner} />
          <div>
            <div style={S.thinkingTxt} className="thinking-dots">{L.thinking}</div>
            <div style={{ color:"#9A7B3C", fontSize:"0.75rem", marginTop:"4px", fontFamily:"'Josefin Sans',sans-serif" }}>
              Building day-by-day itinerary, pricing & recommendations...
            </div>
          </div>
        </div>
      )}
      {/* Result */}
      {phase === "result" && result && (
        <div style={S.result}>
          <div style={S.resultHeader}>
            <span style={S.resultTitle}>✦ Your Egypt Itinerary · {adults + children} Travelers · {duration} Days</span>
            <div style={S.resultActions}>
              <button className="ai-rbtn" style={S.resultBtn} onClick={handleCopy}>📋 {L.copy}</button>
            </div>
          </div>
          <div className="ai-result-body" style={S.resultBody}>{result}</div>
          <div style={S.resultFooter}>
            <button style={S.bookBtn} onClick={handleBook}>
              💬 {L.book} — WhatsApp Us
            </button>
            <button style={S.newBtn} onClick={() => { setPhase("idle"); setResult(""); setInput(""); }}>
              🔄 {L.new}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}