// ============================================================
//  Hotels.jsx — Golden Egypt Tours
//  Ultra-Pro Pharaonic Luxury Hotels Page
//  Route: /hotels
//  3 Tiers: Standard · Superior · Luxury
//  10 Governorates with real hotel data
// ============================================================

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&display=swap');

    :root {
      --gold:#C9921A; --gl:#E8B84B; --gd:#7A5A0E;
      --gdim:rgba(201,146,26,0.12); --gdim2:rgba(201,146,26,0.22);
      --gbr:rgba(201,146,26,0.22);
      --obs:#07050D; --deep:#0C0A14; --srf:#111019; --srf2:#18151F;
      --txt:#EDE8D9; --tdim:rgba(237,232,217,0.72); --mut:#7A7060;
      --fd:'Cinzel Decorative',serif; --ft:'Cinzel',serif; --fb:'Cormorant Garamond',Georgia,serif;
    }
    *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{background:var(--obs);color:var(--txt);font-family:var(--fb);overflow-x:hidden}
    ::-webkit-scrollbar{width:5px}
    ::-webkit-scrollbar-track{background:var(--obs)}
    ::-webkit-scrollbar-thumb{background:var(--gbr);border-radius:3px}
    ::-webkit-scrollbar-thumb:hover{background:var(--gold)}
    ::selection{background:rgba(201,146,26,0.22);color:var(--txt)}

    /* ── HIERO WATERMARK ── */
    .h-bg{
      position:fixed;inset:0;pointer-events:none;z-index:0;
      background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Ctext x='10' y='60' font-size='32' fill='rgba(201,146,26,0.022)'%3E𓂀𓃭𓆑%3C/text%3E%3Ctext x='10' y='120' font-size='32' fill='rgba(201,146,26,0.016)'%3E𓇋𓅓𓂋%3C/text%3E%3Ctext x='10' y='180' font-size='32' fill='rgba(201,146,26,0.022)'%3E𓏏𓈖𓃀%3C/text%3E%3C/svg%3E");
      background-size:200px 200px;
    }

    /* ── KEYFRAMES ── */
    @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
    @keyframes fadeIn{from{opacity:0}to{opacity:1}}
    @keyframes shimmer{0%{background-position:-300% 0}100%{background-position:300% 0}}
    @keyframes kbz{0%{transform:scale(1)}100%{transform:scale(1.06)}}
    @keyframes marquee{0%{transform:translateX(60vw)}100%{transform:translateX(-100%)}}
    @keyframes spin{to{transform:rotate(360deg)}}
    @keyframes goldPulse{0%,100%{box-shadow:0 0 0 0 rgba(201,146,26,0)}50%{box-shadow:0 0 28px 6px rgba(201,146,26,0.18)}}
    @keyframes slideDown{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:none}}

    /* ── NAV ── */
    .h-nav{
      position:fixed;top:0;left:0;right:0;z-index:990;height:68px;
      display:flex;align-items:center;padding:0 48px;gap:14px;
      background:rgba(7,5,13,0.97);backdrop-filter:blur(24px);
      border-bottom:1px solid var(--gbr);
    }
    .h-nav::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;
      background:linear-gradient(90deg,transparent,var(--gold),var(--gl),var(--gold),transparent);opacity:.5}
    .h-back{display:flex;align-items:center;gap:7px;background:var(--gdim);
      border:1px solid var(--gbr);color:var(--gold);border-radius:6px;
      padding:8px 16px;font-family:var(--ft);font-size:9px;letter-spacing:2px;
      text-transform:uppercase;cursor:pointer;transition:all .2s;text-decoration:none}
    .h-back:hover{background:var(--gdim2)}
    .h-brand{font-family:var(--fd);font-size:13px;color:var(--gold);letter-spacing:2px;font-weight:700}
    .h-brand span{font-family:var(--ft);font-size:9px;color:var(--mut);letter-spacing:3px;margin-left:10px}
    .h-nav-r{margin-left:auto;display:flex;gap:10px;align-items:center}
    .h-wa{display:flex;align-items:center;gap:7px;background:#25D366;color:#fff;
      border:none;border-radius:6px;padding:9px 16px;font-family:var(--ft);font-size:9px;
      letter-spacing:1.5px;font-weight:700;text-transform:uppercase;cursor:pointer;
      text-decoration:none;transition:all .2s}
    .h-wa:hover{background:#1fb558}
    .h-booknow{background:linear-gradient(135deg,var(--gold),var(--gd));color:#0B0900;
      border:none;border-radius:6px;padding:9px 22px;font-family:var(--ft);font-size:9px;
      letter-spacing:2px;font-weight:700;text-transform:uppercase;cursor:pointer;
      box-shadow:0 4px 20px rgba(201,146,26,.3);transition:all .25s}
    .h-booknow:hover{box-shadow:0 6px 30px rgba(201,146,26,.5);transform:translateY(-1px)}
    /* ── HERO ── */
    .h-hero{position:relative;height:52vh;min-height:400px;margin-top:68px;
      overflow:hidden;display:flex;align-items:flex-end}
    .h-hero-bg{position:absolute;inset:0;background-size:cover;background-position:center;
      animation:kbz 14s ease-in-out infinite alternate}
    .h-hero-ov{position:absolute;inset:0;
      background:linear-gradient(to top,rgba(7,5,13,1) 0%,rgba(7,5,13,.6) 40%,rgba(7,5,13,.1) 80%,transparent 100%),
                 linear-gradient(to right,rgba(7,5,13,.55) 0%,transparent 55%)}
    .h-hero-grid{position:absolute;inset:0;pointer-events:none;
      background:repeating-linear-gradient(90deg,transparent,transparent 99px,rgba(201,146,26,.04) 99px,rgba(201,146,26,.04) 100px),
                 repeating-linear-gradient(0deg,transparent,transparent 99px,rgba(201,146,26,.04) 99px,rgba(201,146,26,.04) 100px)}
    .h-band{position:absolute;top:28%;left:0;right:0;height:42px;pointer-events:none;
      border-top:1px solid rgba(201,146,26,.15);border-bottom:1px solid rgba(201,146,26,.15);
      background:rgba(7,5,13,.28);display:flex;align-items:center;overflow:hidden}
    .h-band-txt{font-family:var(--ft);font-size:10px;letter-spacing:7px;
      color:rgba(201,146,26,.4);white-space:nowrap;text-transform:uppercase;
      animation:marquee 30s linear infinite}
    .h-hero-cnt{position:relative;z-index:3;padding:0 56px 44px;animation:fadeUp .8s ease both}
    .h-eyebrow{font-family:var(--ft);font-size:9px;letter-spacing:5px;color:var(--gold);
      text-transform:uppercase;margin-bottom:12px;display:flex;align-items:center;gap:12px}
    .h-eyebrow::before{content:'';width:28px;height:1px;background:var(--gold)}
    .h-title{font-family:var(--fd);font-size:clamp(32px,5vw,58px);font-weight:900;line-height:1.08;
      background:linear-gradient(135deg,#F0DC8A,var(--gold),#FFE599,#B8902E);
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      filter:drop-shadow(0 3px 24px rgba(201,146,26,.35));margin-bottom:10px}
    .h-sub{font-family:var(--fb);font-style:italic;font-size:18px;color:var(--tdim);font-weight:300}

    /* ── BREADCRUMB ── */
    .h-crumb{padding:12px 56px;background:var(--srf);border-bottom:1px solid var(--gbr);
      display:flex;align-items:center;gap:8px;font-family:var(--ft);font-size:9px;
      letter-spacing:1.5px;color:var(--mut);position:relative;z-index:5}
    .h-crumb a{color:var(--mut);text-decoration:none;transition:color .2s}
    .h-crumb a:hover{color:var(--gold)}
    .h-crumb .sep{color:rgba(201,146,26,.25)}
    .h-crumb .cur{color:var(--gold)}

    /* ── FILTER BAR ── */
    .h-filters{
      position:sticky;top:68px;z-index:100;
      background:rgba(7,5,13,0.97);backdrop-filter:blur(20px);
      border-bottom:1px solid var(--gbr);
      padding:16px 56px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;
    }
    .h-filt-label{font-family:var(--ft);font-size:9px;letter-spacing:2px;color:var(--gold);text-transform:uppercase}
    .h-filt-btn{font-family:var(--ft);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;
      background:transparent;border:1px solid var(--gbr);color:var(--mut);
      border-radius:20px;padding:6px 16px;cursor:pointer;transition:all .2s}
    .h-filt-btn:hover{background:var(--gdim);color:var(--gold);border-color:var(--gold)}
    .h-filt-btn.on{background:var(--gdim2);color:var(--gold);border-color:var(--gold)}
    .h-sort{margin-left:auto;background:var(--srf2);border:1px solid var(--gbr);
      color:var(--mut);border-radius:6px;padding:7px 12px;font-family:var(--ft);
      font-size:9px;letter-spacing:1px;cursor:pointer;outline:none}

    /* ── MAIN BODY ── */
    .h-body{padding:48px 56px;position:relative;z-index:5}

    /* ── TIER SELECTOR ── */
    .h-tiers{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-bottom:52px}
    .h-tier-card{
      position:relative;border-radius:16px;overflow:hidden;cursor:pointer;
      border:2px solid rgba(201,146,26,0.15);
      transition:all .35s cubic-bezier(.25,.8,.25,1);
      aspect-ratio:16/9;
    }
    .h-tier-card.on{border-color:var(--gold);box-shadow:0 0 0 1px var(--gold),0 20px 60px rgba(201,146,26,0.25)}
    .h-tier-card:hover{transform:translateY(-5px);box-shadow:0 20px 60px rgba(0,0,0,0.6)}
    .h-tier-img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s}
    .h-tier-card:hover .h-tier-img,.h-tier-card.on .h-tier-img{transform:scale(1.06)}
    .h-tier-ov{position:absolute;inset:0;
      background:linear-gradient(to top,rgba(7,5,13,0.92) 0%,rgba(7,5,13,0.3) 55%,transparent 100%)}
    .h-tier-card.on .h-tier-ov{background:linear-gradient(to top,rgba(7,5,13,0.88) 0%,rgba(201,146,26,0.08) 60%,transparent 100%)}
    .h-tier-body{position:absolute;bottom:0;left:0;right:0;padding:18px 20px}
    .h-tier-tag{display:inline-block;background:rgba(7,5,13,0.8);backdrop-filter:blur(8px);
      border:1px solid var(--gbr);border-radius:4px;padding:3px 10px;
      font-family:var(--ft);font-size:7px;letter-spacing:2px;color:var(--gold);
      text-transform:uppercase;margin-bottom:8px}
    .h-tier-card.on .h-tier-tag{background:rgba(201,146,26,0.2);border-color:var(--gold)}
    .h-tier-name{font-family:var(--fd);font-size:22px;color:var(--txt);font-weight:700;line-height:1.1;margin-bottom:4px}
    .h-tier-desc{font-family:var(--fb);font-size:13px;color:var(--tdim);font-style:italic}
    .h-tier-stars{display:flex;gap:2px;margin-top:6px}
    .h-tier-stars span{color:var(--gold);font-size:13px}
    .h-tier-check{
      position:absolute;top:14px;right:14px;
      width:30px;height:30px;border-radius:50%;
      background:var(--gold);display:flex;align-items:center;justify-content:center;
      font-size:14px;transform:scale(0);transition:transform .3s cubic-bezier(.34,1.56,.64,1);
      color:#0B0900;font-weight:700;
    }
    .h-tier-card.on .h-tier-check{transform:scale(1)}

    /* ── SECTION HEADER ── */
    .h-sec-ey{font-family:var(--ft);font-size:9px;letter-spacing:4px;color:var(--gold);text-transform:uppercase;margin-bottom:6px}
    .h-sec-title{font-family:var(--fd);font-size:clamp(18px,2.5vw,28px);color:var(--txt);font-weight:700;margin-bottom:28px}

    /* ── GOVERNORATE TABS ── */
    .h-gov-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:36px}
    .h-gov-btn{font-family:var(--ft);font-size:8px;letter-spacing:1.5px;text-transform:uppercase;
      background:transparent;border:1px solid var(--gbr);color:var(--mut);
      border-radius:6px;padding:8px 16px;cursor:pointer;transition:all .2s;
      display:flex;align-items:center;gap:6px}
    .h-gov-btn:hover{background:var(--gdim);color:var(--gold);border-color:rgba(201,146,26,0.4)}
    .h-gov-btn.on{background:var(--gdim2);color:var(--gold);border-color:var(--gold)}

    /* ── HOTEL GRID ── */
    .h-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
    @media(max-width:1100px){.h-grid{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:700px){.h-grid{grid-template-columns:1fr}}
    /* ── HOTEL CARD ── */
    .h-card{
      background:var(--srf);border:1px solid rgba(201,146,26,0.14);
      border-radius:14px;overflow:hidden;cursor:pointer;
      transition:all .3s cubic-bezier(.25,.8,.25,1);
      display:flex;flex-direction:column;
      animation:fadeUp .4s ease both;
    }
    .h-card:hover{transform:translateY(-6px);border-color:var(--gold);
      box-shadow:0 20px 60px rgba(0,0,0,0.65)}
    .h-card-img-wrap{position:relative;height:200px;overflow:hidden}
    .h-card-img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}
    .h-card:hover .h-card-img{transform:scale(1.07)}
    .h-card-img-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(7,5,13,.75) 0%,transparent 55%)}
    .h-card-badges{position:absolute;top:10px;left:10px;display:flex;gap:6px;flex-wrap:wrap}
    .h-cbadge{background:rgba(7,5,13,.82);backdrop-filter:blur(8px);
      border:1px solid var(--gbr);border-radius:4px;padding:3px 9px;
      font-family:var(--ft);font-size:7px;letter-spacing:1.5px;color:var(--gold);text-transform:uppercase}
    .h-cbadge.hot{background:rgba(180,35,35,.75);border-color:rgba(220,60,60,.4);color:#fff}
    .h-cbadge.new{background:rgba(28,90,55,.75);border-color:rgba(42,160,100,.4);color:#fff}
    .h-card-fav{position:absolute;top:10px;right:10px;width:30px;height:30px;border-radius:50%;
      background:rgba(7,5,13,.75);border:1px solid var(--gbr);
      display:flex;align-items:center;justify-content:center;
      cursor:pointer;font-size:14px;transition:all .2s;color:var(--mut)}
    .h-card-fav:hover{color:#e44;border-color:#e44;background:rgba(220,50,50,.15)}
    .h-stars-ov{position:absolute;bottom:10px;left:12px;color:var(--gold);font-size:12px;letter-spacing:2px}
    .h-card-body{padding:16px;flex:1;display:flex;flex-direction:column}
    .h-card-loc{font-family:var(--ft);font-size:8px;letter-spacing:2px;color:var(--mut);text-transform:uppercase;margin-bottom:6px;display:flex;align-items:center;gap:5px}
    .h-card-name{font-family:var(--ft);font-size:13px;color:var(--txt);font-weight:600;letter-spacing:.5px;margin-bottom:6px;line-height:1.4}
    .h-card-tagline{font-family:var(--fb);font-size:14px;color:var(--tdim);font-style:italic;line-height:1.5;margin-bottom:10px;flex:1}
    .h-card-amenities{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}
    .h-amenity{font-family:var(--ft);font-size:7px;letter-spacing:1px;color:var(--mut);
      background:rgba(255,255,255,.04);border:1px solid rgba(201,146,26,.1);
      border-radius:4px;padding:3px 8px;text-transform:uppercase}
    .h-card-footer{display:flex;align-items:center;justify-content:space-between;
      padding-top:12px;border-top:1px solid rgba(201,146,26,.09)}
    .h-price-from{font-family:var(--ft);font-size:8px;letter-spacing:1.5px;color:var(--mut);text-transform:uppercase}
    .h-price-val{font-family:var(--fd);font-size:22px;color:var(--gold);font-weight:700;line-height:1}
    .h-price-pp{font-family:var(--fb);font-size:12px;color:var(--mut)}
    .h-card-btn{background:linear-gradient(135deg,var(--gold),var(--gl));color:#0B0900;
      border:none;border-radius:6px;padding:9px 18px;
      font-family:var(--ft);font-size:8px;letter-spacing:1.5px;font-weight:700;
      cursor:pointer;text-transform:uppercase;transition:all .25s;
      box-shadow:0 4px 16px rgba(201,146,26,.25)}
    .h-card-btn:hover{box-shadow:0 6px 24px rgba(201,146,26,.45)}

    /* ── HOTEL MODAL ── */
    .h-modal-bg{position:fixed;inset:0;background:rgba(7,5,13,.88);
      backdrop-filter:blur(18px);z-index:800;
      display:flex;align-items:center;justify-content:center;
      padding:20px;animation:fadeIn .25s ease both}
    .h-modal{background:var(--srf2);border:1px solid var(--gbr);border-radius:18px;
      width:min(860px,96vw);max-height:90vh;overflow-y:auto;
      box-shadow:0 40px 120px rgba(0,0,0,.8),0 0 0 1px rgba(201,146,26,.06);
      animation:slideDown .3s ease both;position:relative}
    .h-modal-hero{position:relative;height:280px;overflow:hidden;border-radius:18px 18px 0 0}
    .h-modal-hero img{width:100%;height:100%;object-fit:cover;display:block}
    .h-modal-hero-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(7,5,13,.9) 0%,transparent 60%)}
    .h-modal-close{position:absolute;top:16px;right:16px;width:36px;height:36px;
      border-radius:50%;background:rgba(7,5,13,.8);border:1px solid var(--gbr);
      color:var(--gold);cursor:pointer;font-size:16px;
      display:flex;align-items:center;justify-content:center;transition:all .2s;z-index:1}
    .h-modal-close:hover{background:var(--gdim2)}
    .h-modal-hero-info{position:absolute;bottom:0;left:0;right:0;padding:20px 24px}
    .h-modal-name{font-family:var(--fd);font-size:26px;color:var(--txt);font-weight:700}
    .h-modal-loc{font-family:var(--fb);font-size:15px;color:rgba(201,146,26,.8);font-style:italic;margin-top:4px}
    .h-modal-body{padding:28px 28px}
    .h-modal-grid{display:grid;grid-template-columns:1fr 320px;gap:28px}
    @media(max-width:700px){.h-modal-grid{grid-template-columns:1fr}}
    .h-modal-sec{font-family:var(--ft);font-size:9px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;margin-bottom:12px;margin-top:20px}
    .h-modal-desc{font-family:var(--fb);font-size:16px;color:var(--tdim);line-height:1.8;margin-bottom:20px}
    .h-amenity-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:20px}
    .h-am-item{display:flex;align-items:center;gap:8px;padding:9px 12px;
      background:rgba(201,146,26,.05);border:1px solid rgba(201,146,26,.1);border-radius:8px;
      font-family:var(--ft);font-size:8px;letter-spacing:1px;color:var(--tdim);text-transform:uppercase}
    .h-modal-widget{background:var(--srf);border:1px solid var(--gbr);border-radius:14px;
      overflow:hidden;position:sticky;top:20px}
    .h-mw-header{background:linear-gradient(135deg,var(--gold),var(--gl));padding:20px 22px}
    .h-mw-from{font-family:var(--ft);font-size:8px;letter-spacing:3px;color:rgba(11,9,0,.65);text-transform:uppercase}
    .h-mw-price{font-family:var(--fd);font-size:38px;color:#0B0900;font-weight:900;line-height:1}
    .h-mw-pp{font-family:var(--fb);font-size:13px;color:rgba(11,9,0,.6);margin-top:2px}
    .h-mw-body{padding:20px}
    .h-mw-field{margin-bottom:12px}
    .h-mw-label{font-family:var(--ft);font-size:8px;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:5px}
    .h-mw-input{width:100%;background:rgba(255,255,255,.05);border:1px solid var(--gbr);
      border-radius:7px;color:var(--txt);padding:10px 13px;font-family:var(--fb);
      font-size:15px;outline:none;transition:border-color .2s;color-scheme:dark}
    .h-mw-input:focus{border-color:var(--gold)}
    .h-mw-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .h-mw-book{width:100%;background:linear-gradient(135deg,var(--gold),var(--gl));
      color:#0B0900;border:none;border-radius:8px;padding:14px;
      font-family:var(--ft);font-weight:700;font-size:10px;letter-spacing:2px;
      text-transform:uppercase;cursor:pointer;margin-bottom:8px;
      box-shadow:0 6px 22px rgba(201,146,26,.3);transition:all .3s}
    .h-mw-book:hover{box-shadow:0 10px 34px rgba(201,146,26,.5);transform:translateY(-2px)}
    .h-mw-wa{width:100%;background:#25D366;color:#fff;border:none;border-radius:8px;
      padding:12px;font-family:var(--ft);font-weight:700;font-size:9px;letter-spacing:2px;
      text-transform:uppercase;cursor:pointer;transition:all .2s;display:block;text-align:center;text-decoration:none}
    .h-mw-wa:hover{background:#1fb558}
    .h-trust{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:14px;
      border-top:1px solid rgba(201,146,26,.08);padding-top:14px}
    .h-trust-i{text-align:center;padding:0 4px;border-right:1px solid rgba(201,146,26,.1);
      font-family:var(--ft);font-size:7px;letter-spacing:1px;color:var(--mut);text-transform:uppercase;line-height:1.4}
    .h-trust-i:last-child{border-right:none}
    .h-trust-ic{font-size:14px;display:block;margin-bottom:3px;color:var(--gold)}

    /* ── EMPTY STATE ── */
    .h-empty{text-align:center;padding:80px 20px;color:var(--mut);font-family:var(--fb);font-size:18px;font-style:italic}

    /* ── FLOATING ── */
    .h-wafloat{position:fixed;right:20px;bottom:76px;z-index:900;display:flex;align-items:center;gap:8px;
      background:#25D366;color:#fff;border-radius:30px;padding:11px 18px;text-decoration:none;
      font-family:var(--ft);font-weight:700;font-size:10px;letter-spacing:1px;text-transform:uppercase;
      box-shadow:0 6px 28px rgba(37,211,102,.45);transition:all .25s}
    .h-wafloat:hover{box-shadow:0 8px 36px rgba(37,211,102,.6);transform:translateY(-2px)}
    .h-scrolltop{position:fixed;right:20px;bottom:22px;z-index:900;width:40px;height:40px;
      border-radius:8px;background:var(--gdim);border:1px solid var(--gold);color:var(--gold);
      cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;transition:all .25s}
    .h-scrolltop:hover{background:var(--gdim2)}

    @media(max-width:1000px){
      .h-body{padding:36px 22px}
      .h-filters{padding:14px 22px}
      .h-hero-cnt{padding:0 22px 36px}
      .h-crumb{padding:12px 22px}
      .h-tiers{grid-template-columns:1fr}
      .h-nav{padding:0 22px}
    }
  `}</style>
);
// ─── TIER DATA ─────────────────────────────────────────────────────────────────
const TIERS = [
  {
    id: "standard",
    name: "Standard",
    label: "Classic Comfort",
    tag: "3 Stars",
    stars: 3,
    desc: "Comfortable, well-located hotels with essential amenities for the discerning traveller",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=85",
    priceRange: "$45 – $90",
  },
  {
    id: "superior",
    name: "Superior",
    label: "Elevated Experience",
    tag: "4 Stars",
    stars: 4,
    desc: "Upscale hotels with premium facilities, exceptional service and signature Egyptian hospitality",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=85",
    priceRange: "$90 – $200",
  },
  {
    id: "luxury",
    name: "Luxury",
    label: "Pharaonic Indulgence",
    tag: "5 Stars",
    stars: 5,
    desc: "World-class resorts and palace hotels delivering the ultimate Egyptian luxury experience",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&q=85",
    priceRange: "$200 – $600+",
  },
];

// ─── GOVERNORATES ─────────────────────────────────────────────────────────────
const GOVERNORATES = [
  { id: "cairo",      name: "Cairo",           ar: "القاهرة",      icon: "🏙️" },
  { id: "giza",       name: "Giza",            ar: "الجيزة",       icon: "🔺" },
  { id: "luxor",      name: "Luxor",           ar: "الأقصر",        icon: "🏛️" },
  { id: "aswan",      name: "Aswan",           ar: "أسوان",         icon: "⚓" },
  { id: "hurghada",   name: "Hurghada",        ar: "الغردقة",       icon: "🌊" },
  { id: "sharm",      name: "Sharm El Sheikh", ar: "شرم الشيخ",    icon: "🤿" },
  { id: "alexandria", name: "Alexandria",      ar: "الإسكندرية",   icon: "🌅" },
  { id: "fayoum",     name: "Fayoum",          ar: "الفيوم",        icon: "🌿" },
  { id: "marsa",      name: "Marsa Alam",      ar: "مرسى علم",      icon: "🐠" },
  { id: "sokhna",     name: "Ain Sokhna",      ar: "العين السخنة", icon: "🏖️" },
];

// ─── HOTEL DATABASE ───────────────────────────────────────────────────────────
const HOTELS_DB = {

  // ══════════════ CAIRO ══════════════
  cairo: {
    standard: [
      {
        id:"cai-s-1", name:"Lotus Hotel Cairo", location:"Downtown Cairo",
        stars:3, price:52, originalPrice:68,
        rating:7.8, reviews:1240,
        tagline:"Charming downtown hotel steps from Tahrir Square",
        badges:["Free Breakfast"],
        amenities:["Free WiFi","Air Con","Restaurant","24/7 Reception","City View","Parking"],
        img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
        description:"A comfortable three-star hotel in the heart of Cairo's vibrant downtown district. Ideal for travellers who want to be close to major sights including the Egyptian Museum and the Nile Corniche. Simply decorated rooms with modern amenities and a rooftop terrace with city views.",
        checkIn:"14:00", checkOut:"12:00",
        highlights:["10 min walk to Egyptian Museum","Rooftop terrace","Free airport shuttle (6am–10pm)"],
      },
      {
        id:"cai-s-2", name:"Cairo International Hotel", location:"Garden City",
        stars:3, price:58, originalPrice:75,
        rating:7.5, reviews:890,
        tagline:"Classic Garden City location near the Nile",
        badges:["Nile Views"],
        amenities:["Free WiFi","Air Con","Restaurant","Pool","Bar","Room Service"],
        img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
        description:"Located in the prestigious Garden City district along the Nile, this reliable three-star hotel offers clean, comfortable rooms with partial Nile views from upper floors. A solid base for exploring Islamic Cairo, Coptic Cairo, and the Egyptian Museum.",
        checkIn:"14:00", checkOut:"12:00",
        highlights:["Garden City location","Partial Nile views","Walking distance to embassies"],
      },
      {
        id:"cai-s-3", name:"Windsor Hotel Cairo", location:"Alfi Bey Street",
        stars:3, price:45, originalPrice:60,
        rating:7.2, reviews:650,
        tagline:"Historic 1900s hotel in the heart of old Cairo",
        badges:["Historic","Budget Friendly"],
        amenities:["Free WiFi","Bar","Restaurant","Terrace","Vintage Charm"],
        img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
        description:"A beloved Cairo institution since the early 1900s, the Windsor Hotel exudes colonial charm with its original wooden staircase, antique furnishings, and legendary rooftop bar. Its central location makes it popular with backpackers and lovers of vintage hospitality.",
        checkIn:"14:00", checkOut:"12:00",
        highlights:["Built 1900 — full of history","Famous rooftop bar","Near Khan El Khalili"],
      },
    ],
    superior: [
      {
        id:"cai-sup-1", name:"Kempinski Nile Hotel", location:"Garden City",
        stars:4, price:185, originalPrice:240,
        rating:8.7, reviews:2340,
        tagline:"Boutique luxury on the Nile in Garden City",
        badges:["Best Seller","Nile Views"],
        amenities:["Free WiFi","Spa","Pool","3 Restaurants","Bar","Concierge","Valet","Gym"],
        img:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
        description:"The Kempinski Nile Hotel is one of Cairo's finest boutique properties, combining Swiss precision with Egyptian warmth. Set in the diplomatic Garden City quarter, its spacious rooms offer sweeping Nile views. The rooftop pool and exceptional dining make this a top choice for discerning travellers.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Direct Nile views","Rooftop infinity pool","Award-winning Osmanly Restaurant"],
      },
      {
        id:"cai-sup-2", name:"Novotel Cairo Airport", location:"Cairo Airport",
        stars:4, price:110, originalPrice:145,
        rating:8.1, reviews:1890,
        tagline:"Premium comfort connected directly to the terminal",
        badges:["Airport Connected"],
        amenities:["Free WiFi","Pool","Restaurant","Bar","Gym","Business Centre","24/7 Service"],
        img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
        description:"The only hotel directly connected to Cairo International Airport via an air-conditioned walkway. Modern, well-designed rooms with excellent soundproofing and blackout curtains. The outdoor pool and full-service restaurant make extended layovers genuinely enjoyable.",
        checkIn:"14:00", checkOut:"12:00",
        highlights:["Direct airport connection","Soundproofed rooms","24h checkout available"],
      },
      {
        id:"cai-sup-3", name:"Cairo Marriott Hotel & Omar Khayyam Casino", location:"Zamalek Island",
        stars:4, price:165, originalPrice:210,
        rating:8.3, reviews:3100,
        tagline:"A palace hotel on Nile's exclusive Zamalek Island",
        badges:["Palace Building","Island Location"],
        amenities:["Free WiFi","Pool","8 Restaurants","Casino","Spa","Garden","Gym","Valet"],
        img:"https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80",
        description:"Built around the original Khedivial palace of the 19th century, the Cairo Marriott occupies an extraordinary position on Zamalek Island. The original palace wing retains its magnificent ballrooms and gardens. Eight dining outlets, two pools, and a casino set within a lush 6-acre garden.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Original 1869 Khedivial Palace","6-acre garden","2 outdoor pools"],
      },
    ],
    luxury: [
      {
        id:"cai-lux-1", name:"Four Seasons Hotel Cairo at Nile Plaza", location:"Garden City",
        stars:5, price:420, originalPrice:520,
        rating:9.2, reviews:4200,
        tagline:"The pinnacle of Cairo luxury overlooking the Nile",
        badges:["#1 Cairo","Iconic"],
        amenities:["Free WiFi","Infinity Pool","Spa","5 Restaurants","Butler Service","Private Beach","Gym","Valet"],
        img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
        description:"Standing as the most celebrated hotel in Cairo, the Four Seasons at Nile Plaza commands 30 floors above the river with unobstructed views across the pyramids on clear days. All rooms feature floor-to-ceiling windows, marble bathrooms, and 600-thread Egyptian cotton sheets. The 40-metre infinity pool, award-winning Zitouni restaurant, and legendary Sunday brunch have earned it permanent place in Cairo society.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Pyramid views on clear days","40m infinity pool","Butler service on all floors"],
      },
      {
        id:"cai-lux-2", name:"Sofitel Cairo Nile El Gezirah", location:"Zamalek, Cairo",
        stars:5, price:310, originalPrice:390,
        rating:8.9, reviews:3100,
        tagline:"French elegance meets Egyptian splendour on the Nile",
        badges:["Panoramic Views"],
        amenities:["Free WiFi","Pool","Spa","4 Restaurants","Rooftop Bar","Gym","Concierge","Valet"],
        img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
        description:"Sofitel El Gezirah rises 28 floors above the northern tip of Zamalek Island, offering 360-degree panoramic views of Cairo and the Nile from virtually every room. The CELLAR restaurant, Sky Pool Lounge, and Sofitel SO SPA deliver French luxury with an Egyptian soul.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["360° panoramic Nile views","Sky Pool Lounge","CELLAR wine restaurant"],
      },
      {
        id:"cai-lux-3", name:"St. Regis Cairo", location:"Downtown Cairo",
        stars:5, price:380, originalPrice:480,
        rating:9.0, reviews:1800,
        tagline:"New York sophistication in the heart of Egypt",
        badges:["New","Butler Service"],
        amenities:["Free WiFi","Pool","Spa","3 Restaurants","Butler","Sky Bar","Ballroom","Valet"],
        img:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
        description:"The newest ultra-luxury hotel in Cairo, the St. Regis brings its legendary butler service and signature Bloody Mary tradition to Egypt. Occupying a prime tower in downtown Cairo, the hotel's Observatory sky bar at the summit provides the finest vantage point in the city, while the Maison Boulud restaurant brings acclaimed French cuisine to Cairo.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Observatory sky bar","Maison Boulud fine dining","24h St. Regis Butler Service"],
      },
    ],
  },

  // ══════════════ GIZA ══════════════
  giza: {
    standard: [
      {
        id:"giz-s-1", name:"Panorama Pyramids Inn", location:"Giza Plateau",
        stars:3, price:55, originalPrice:72,
        rating:7.9, reviews:890,
        tagline:"Wake up to pyramid views every single morning",
        badges:["Pyramid Views"],
        amenities:["Free WiFi","Rooftop Terrace","Restaurant","Air Con","Breakfast","Family Rooms"],
        img:"https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&q=80",
        description:"The best budget option for pyramid access in all of Giza. The rooftop terrace offers one of the most photographed views in Egypt — the Great Pyramid framed against the sunset sky. Basic but well-maintained rooms with enthusiastic family management who genuinely love sharing Egypt.",
        checkIn:"13:00", checkOut:"11:00",
        highlights:["Rooftop pyramid view","5 min walk to plateau entrance","Horse & camel stable nearby"],
      },
      {
        id:"giz-s-2", name:"Hotel Pyramids Park Resort", location:"Giza Pyramids Road",
        stars:3, price:62, originalPrice:80,
        rating:7.6, reviews:1100,
        tagline:"Family resort opposite the Pyramids",
        badges:["Family Friendly","Pool"],
        amenities:["Free WiFi","Pool","Restaurant","Bar","Garden","Playground","Shuttle"],
        img:"https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600&q=80",
        description:"A spacious resort-style property on the Pyramids Road, ideal for families. The large outdoor pool, playground, and buffet restaurant with pyramid views make this a comfortable and affordable option for those prioritising proximity to the Giza Plateau.",
        checkIn:"14:00", checkOut:"12:00",
        highlights:["Large outdoor pool","Pyramid Road location","Free shuttle to plateau"],
      },
    ],
    superior: [
      {
        id:"giz-sup-1", name:"Le Méridien Pyramids Hotel & Spa", location:"Giza Pyramids",
        stars:4, price:145, originalPrice:185,
        rating:8.3, reviews:2200,
        tagline:"Sophisticated comfort at the foot of the ancient world",
        badges:["Pyramid Views","Spa"],
        amenities:["Free WiFi","Pool","Spa","3 Restaurants","Bar","Gym","Tennis","Garden"],
        img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
        description:"Set in extensive gardens just 300 metres from the Giza Plateau entrance, Le Méridien delivers polished four-star comfort with excellent pyramid views from its upper floors. The Desert Wind pool and spa, combined with three restaurants and a poolside bar, make for a complete resort experience.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["300m from plateau entrance","Garden pool with pyramid view","Full-service spa"],
      },
    ],
    luxury: [
      {
        id:"giz-lux-1", name:"Marriott Mena House", location:"Giza, opposite Great Pyramid",
        stars:5, price:295, originalPrice:375,
        rating:9.1, reviews:5600,
        tagline:"The world's most legendary pyramid hotel, since 1869",
        badges:["#1 Giza","Historic Palace","Iconic"],
        amenities:["Free WiFi","3 Pools","Spa","7 Restaurants","Golf Course","Butler","Valet","Garden"],
        img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
        description:"There is only one Mena House. Built as a royal hunting lodge in 1869 and hosting Winston Churchill, Franklin Roosevelt, and countless heads of state, this extraordinary palace sits in 40 acres of jasmine-scented gardens directly opposite the Great Pyramid. The view from the Moghul Room restaurant — arguably the most famous dining view on earth — remains one of travel's defining experiences. The pyramid-view rooms and suites are a once-in-a-lifetime stay.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Moghul Room — pyramid-view dining","Palace rooms with direct pyramid views","40 acres of royal gardens"],
      },
      {
        id:"giz-lux-2", name:"Four Seasons Hotel Cairo at The First Residence", location:"Giza",
        stars:5, price:350, originalPrice:440,
        rating:9.0, reviews:2800,
        rating:9.0,
        tagline:"Nile-front luxury steps from the Giza Plateau",
        badges:["Nile Views","Spa"],
        amenities:["Free WiFi","Nile Pool","Spa","5 Restaurants","Butler","Gym","Valet","Golf Access"],
        img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
        description:"The First Residence Four Seasons occupies one of the finest addresses in Giza, set directly on the Nile with sweeping river views and a 10-minute drive to the Pyramids. The Zitouni restaurant and legendary weekend brunch, Nile-front pool, and full-service Six Senses Spa deliver the Four Seasons standard in Giza.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Direct Nile frontage","Six Senses Spa","Weekend brunch institution"],
      },
    ],
  },
  // ══════════════ LUXOR ══════════════
  luxor: {
    standard: [
      {
        id:"lux-s-1", name:"Nefertiti Hotel", location:"Luxor City Centre",
        stars:3, price:40, originalPrice:55,
        rating:7.8, reviews:980,
        tagline:"Rooftop Nile views in the heart of Luxor",
        badges:["Rooftop Terrace","Nile Views"],
        amenities:["Free WiFi","Rooftop Restaurant","Air Con","Breakfast","Bicycle Hire","Tour Desk"],
        img:"https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80",
        description:"A consistently well-reviewed budget hotel in central Luxor, the Nefertiti has earned its reputation through genuine hospitality and a spectacular rooftop restaurant with unobstructed Nile views. The helpful tour desk organises reliable trips to both the East and West Banks at fair prices.",
        checkIn:"13:00", checkOut:"11:00",
        highlights:["Rooftop Nile panorama","Reliable tour desk","Walking distance to Luxor Temple"],
      },
      {
        id:"lux-s-2", name:"Pyramisa Luxor Hotel & Resort", location:"Luxor East Bank",
        stars:3, price:48, originalPrice:62,
        rating:7.5, reviews:760,
        tagline:"Comfortable East Bank resort with pool access",
        badges:["Pool","Resort"],
        amenities:["Free WiFi","Pool","Restaurant","Bar","Garden","Air Con","Breakfast"],
        img:"https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80",
        description:"A well-maintained three-star resort on Luxor's East Bank with a welcome outdoor pool — essential for Egypt's summer heat. Clean, air-conditioned rooms with good breakfasts and a range of West Bank excursions bookable at the front desk.",
        checkIn:"14:00", checkOut:"12:00",
        highlights:["Outdoor pool & garden","East Bank location","Affordable excursion packages"],
      },
    ],
    superior: [
      {
        id:"lux-sup-1", name:"Hilton Luxor Resort & Spa", location:"Luxor, East Bank",
        stars:4, price:155, originalPrice:195,
        rating:8.5, reviews:2890,
        tagline:"Premium Nile resort with the finest views in Luxor",
        badges:["Best Seller","Nile Views","Spa"],
        amenities:["Free WiFi","Nile Pool","Spa","3 Restaurants","Bar","Gym","Felucca","Sunset Deck"],
        img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
        description:"Stretching along the Nile's eastern bank, the Hilton Luxor offers an exceptional pool and dining experience with direct Nile frontage. Rooms in the Nile Wing command sweeping river views. The full-service spa, pool bar, and Sunset Restaurant specialising in modern Egyptian cuisine make this the top four-star choice in Luxor.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Nile-front pool","Sunset Restaurant","Private felucca berth"],
      },
      {
        id:"lux-sup-2", name:"Steigenberger Nile Palace", location:"Luxor Corniche",
        stars:4, price:140, originalPrice:180,
        rating:8.2, reviews:2100,
        tagline:"Palace-style Nile hotel on the Luxor Corniche",
        badges:["Nile Corniche","Palace Style"],
        amenities:["Free WiFi","Pool","Spa","2 Restaurants","Bar","Gym","Rooftop Terrace","Concierge"],
        img:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
        description:"The Steigenberger Nile Palace commands a prime position on the Luxor Corniche directly opposite Luxor Temple. The illuminated temple view from the rooftop terrace after dark is one of Egypt's most romantic sights. Elegantly decorated rooms, a large Nile-view pool, and a comprehensive spa.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Opposite Luxor Temple","Rooftop Nile terrace","Temple view at night"],
      },
    ],
    luxury: [
      {
        id:"lux-lux-1", name:"Sofitel Winter Palace Luxor", location:"Luxor Corniche",
        stars:5, price:320, originalPrice:410,
        rating:9.3, reviews:4100,
        tagline:"Agatha Christie's favourite hotel — a Victorian masterpiece",
        badges:["#1 Luxor","Historic Palace","Iconic"],
        amenities:["Free WiFi","Nile Pool","Palace Garden","3 Restaurants","Bar","Spa","Butler","Tennis"],
        img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
        description:"The Winter Palace is Luxor's greatest institution — a Victorian colonial masterpiece built in 1886 that has hosted Agatha Christie (who wrote Death on the Nile here), Howard Carter, and every royal and dignitary of the 20th century. The original Palace Wing features soaring ceilings, period furniture, and four-poster beds. The Victorian garden with its ancient flame trees and Nile-front pool provide an atmosphere of timeless, unhurried grandeur.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Original 1886 Victorian Palace Wing","The garden where Agatha Christie wrote","Nile pool within royal gardens"],
      },
      {
        id:"lux-lux-2", name:"Al Moudira Hotel", location:"Luxor West Bank",
        stars:5, price:280, originalPrice:360,
        rating:9.1, reviews:1200,
        tagline:"The world's most romantic boutique hotel — West Bank bliss",
        badges:["Boutique","West Bank","Intimate"],
        amenities:["Free WiFi","Pool","Garden","Restaurant","Bar","Courtyard","Library","Art"],
        img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
        description:"Al Moudira is arguably Egypt's most beautiful small hotel — a hand-built palace of domes and arches set in the sugar cane fields of the West Bank, a 10-minute felucca ride from Luxor. Each of the 54 rooms is individually decorated with antiques and textiles from across the Orient. The pool, garden restaurant, and breathtaking silence make this a transformative stay.",
        checkIn:"14:00", checkOut:"12:00",
        highlights:["Completely hand-built unique property","West Bank — near Valley of Kings","54 individually designed rooms"],
      },
    ],
  },

  // ══════════════ ASWAN ══════════════
  aswan: {
    standard: [
      {
        id:"asw-s-1", name:"Nubian Oasis Hotel", location:"Aswan Corniche",
        stars:3, price:38, originalPrice:52,
        rating:7.9, reviews:720,
        tagline:"Nubian hospitality on the Aswan Corniche",
        badges:["Corniche Location","Nile Views"],
        amenities:["Free WiFi","Rooftop Terrace","Restaurant","Air Con","Breakfast","Tour Desk"],
        img:"https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&q=80",
        description:"A warm and colourful hotel run by a genuine Nubian family on the Aswan Corniche, offering the most authentic hospitality in the city at a genuinely affordable price. The rooftop terrace with its views across the Nile to Elephantine Island is outstanding at sunset.",
        checkIn:"13:00", checkOut:"11:00",
        highlights:["Nubian family-run authenticity","Rooftop Nile-Elephantine view","Best location on the Corniche"],
      },
    ],
    superior: [
      {
        id:"asw-sup-1", name:"Movenpick Resort Aswan", location:"Elephantine Island",
        stars:4, price:168, originalPrice:215,
        rating:8.6, reviews:2600,
        tagline:"A Nile island resort of extraordinary serenity",
        badges:["Island Location","River Access"],
        amenities:["Free WiFi","Nile Pool","Spa","3 Restaurants","Bar","Gym","Boat Service","Felucca"],
        img:"https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80",
        description:"The Mövenpick Aswan occupies the southern tip of Elephantine Island, accessible only by the hotel's private boat — creating an unmatched sense of seclusion in the middle of the Nile. Rooms with wrap-around Nile terraces, a superb outdoor pool, and an on-site archaeological site make this one of Egypt's most distinctive hotel experiences.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Private island — reached by boat","Wrap-around Nile terraces","On-site Elephantine Island ruins"],
      },
    ],
    luxury: [
      {
        id:"asw-lux-1", name:"Sofitel Legend Old Cataract Aswan", location:"Aswan",
        stars:5, price:420, originalPrice:530,
        rating:9.4, reviews:3800,
        tagline:"Egypt's most romantic hotel — Agatha Christie's masterpiece",
        badges:["#1 Egypt","Historic Legend","Iconic"],
        amenities:["Free WiFi","Nile Pool","Luxury Spa","3 Restaurants","Bar","Garden","Butler","Private Terraces"],
        img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
        description:"Perched on a granite outcrop above the First Cataract, the Old Cataract is without question one of the world's legendary hotels. Built in 1899, it has hosted Agatha Christie, Winston Churchill, the Aga Khan, and dozens of heads of state. The original Victorian building, with its sweeping Nile terraces, pink granite arches, and views across to Elephantine Island, creates an atmosphere that is simply unlike anywhere else on earth. Book a terrace room in the Palace Wing.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Agatha Christie wrote here","Palace Wing terrace rooms are unmatched","1899 Victorian granite palace"],
      },
    ],
  },

  // ══════════════ HURGHADA ══════════════
  hurghada: {
    standard: [
      {
        id:"hur-s-1", name:"Jasmine Palace Resort", location:"Dahar, Hurghada",
        stars:3, price:44, originalPrice:58,
        rating:7.4, reviews:1100,
        tagline:"Budget-friendly resort with pool in central Hurghada",
        badges:["Pool","All Inclusive Option"],
        amenities:["Free WiFi","Pool","Restaurant","Bar","Beach Access","Air Con","Entertainment"],
        img:"https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=600&q=80",
        description:"A well-priced resort hotel in the Dahar district offering clean, comfortable rooms with pool access. Ideal for travellers who want Red Sea access without the premium price tag. All-inclusive option available for families.",
        checkIn:"14:00", checkOut:"12:00",
        highlights:["All-inclusive option","15 min drive to reef","Nightly entertainment"],
      },
    ],
    superior: [
      {
        id:"hur-sup-1", name:"Steigenberger Pure Lifestyle", location:"Sahl Hasheesh, Hurghada",
        stars:4, price:175, originalPrice:220,
        rating:8.8, reviews:3200,
        tagline:"Adults-only lifestyle resort with private Red Sea access",
        badges:["Adults Only","Private Beach","All Inclusive"],
        amenities:["Free WiFi","3 Pools","Private Beach","Spa","5 Restaurants","Bar","Watersports","Gym"],
        img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
        description:"The Steigenberger Pure Lifestyle is consistently rated among Egypt's top four-star all-inclusive resorts. Set in the upscale Sahl Hasheesh bay with its own private beach and house reef, the hotel offers an adults-only atmosphere of refined relaxation. Five restaurants, a full-service spa, and extensive watersports.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Private house reef snorkelling","Adults-only serenity","Sahl Hasheesh bay location"],
      },
    ],
    luxury: [
      {
        id:"hur-lux-1", name:"Oberoi Sahl Hasheesh", location:"Sahl Hasheesh, Hurghada",
        stars:5, price:480, originalPrice:600,
        rating:9.5, reviews:2100,
        tagline:"Egypt's finest beach resort — pure Oberoi perfection",
        badges:["#1 Red Sea","Private Beach","Oberoi"],
        amenities:["Free WiFi","4 Pools","Spa","5 Restaurants","Private Beach","Butler","Watersports","Tennis"],
        img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
        description:"The Oberoi Sahl Hasheesh represents the absolute pinnacle of Red Sea luxury. Set in a private bay 18km from Hurghada, the hotel's domed whitewashed villas line the beach and marina. The infinity pools, Zarqa spa, and five signature restaurants make this a destination in itself. The private house reef offers world-class snorkelling from the hotel's private beach.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Domed private beach villas","Zarqa spa — Egypt's finest","Private house reef 50m offshore"],
      },
    ],
  },

  // ══════════════ SHARM EL SHEIKH ══════════════
  sharm: {
    standard: [
      {
        id:"sha-s-1", name:"Iberotel Palace", location:"Naama Bay, Sharm",
        stars:3, price:52, originalPrice:68,
        rating:7.6, reviews:1400,
        tagline:"Well-priced Naama Bay resort with Red Sea access",
        badges:["Naama Bay","Pool"],
        amenities:["Free WiFi","Pool","Restaurant","Bar","Beach Access","Air Con","Snorkelling"],
        img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
        description:"A reliable three-star resort in prime Naama Bay, walking distance from Sharm's famous promenade and dive centres. Well-maintained rooms with good pool and direct beach access.",
        checkIn:"14:00", checkOut:"12:00",
        highlights:["Naama Bay promenade walk","10m to PADI dive centres","Pool & beach combo"],
      },
    ],
    superior: [
      {
        id:"sha-sup-1", name:"Rixos Premium Seagate", location:"Nabq Bay, Sharm",
        stars:4, price:190, originalPrice:245,
        rating:8.9, reviews:4500,
        tagline:"Ultra all-inclusive resort redefined for Sharm's elite",
        badges:["Best Seller","All Inclusive","Private Beach"],
        amenities:["Free WiFi","5 Pools","Private Beach","Spa","8 Restaurants","Bar","Waterpark","Kids Club"],
        img:"https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80",
        description:"The Rixos Premium Seagate is the benchmark all-inclusive resort in Sharm El Sheikh — consistently ranking among Egypt's top resort hotels. Its ultra all-inclusive concept includes all restaurants, bars, motorised watersports, and evening entertainment. The private beach, waterpark, and world-class spa complete a genuinely luxurious resort experience.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Ultra all-inclusive (watersports included)","Private sandy beach","Waterpark for families"],
      },
    ],
    luxury: [
      {
        id:"sha-lux-1", name:"Four Seasons Resort Sharm El Sheikh", location:"Sharm El Sheikh",
        stars:5, price:520, originalPrice:650,
        rating:9.4, reviews:3200,
        tagline:"Sinai's greatest resort, carved into the coral cliffs",
        badges:["#1 Sharm","Coral Cliffs","Iconic"],
        amenities:["Free WiFi","4 Pools","Spa","6 Restaurants","Private Beach","Butler","Dive Centre","Tennis"],
        img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
        description:"The Four Seasons Sharm El Sheikh cascades down the coral cliffs of the Gulf of Aqaba in a series of Arabian-inspired villas and pool terraces. The visual drama — turquoise water, ochre cliffs, azure sky — is unlike any other resort in the world. An exceptional dive centre, six world-class restaurants, and Four Seasons legendary service make this Egypt's most spectacular hotel.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Carved into coral cliffs — architectural wonder","PADI Gold Palm dive centre","The Reef kitchen restaurant"],
      },
    ],
  },
  // ══════════════ ALEXANDRIA ══════════════
  alexandria: {
    standard: [
      {
        id:"ale-s-1", name:"Union Hotel Alexandria", location:"Corniche, Alexandria",
        stars:3, price:42, originalPrice:56,
        rating:7.3, reviews:680,
        tagline:"Classic Corniche hotel with Mediterranean views",
        badges:["Sea Views","Historic"],
        amenities:["Free WiFi","Restaurant","Bar","Sea View","Air Con","24/7 Reception"],
        img:"https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80",
        description:"A long-standing institution on Alexandria's famous Corniche, the Union Hotel occupies a historic early 20th-century building with stunning Mediterranean sea views from its upper floors. Simple but characterful rooms, a legendary bar with a naval history, and the best location in the city.",
        checkIn:"13:00", checkOut:"11:00",
        highlights:["Corniche location — sea views","Historic bar since 1938","Walking to all Alexandria sights"],
      },
    ],
    superior: [
      {
        id:"ale-sup-1", name:"Hilton Alexandria Corniche", location:"Alexandria Corniche",
        stars:4, price:138, originalPrice:175,
        rating:8.2, reviews:1900,
        tagline:"Modern Corniche luxury with Mediterranean panoramas",
        badges:["Sea Views","Corniche"],
        amenities:["Free WiFi","Pool","Spa","3 Restaurants","Bar","Gym","Conference","Sea View Rooms"],
        img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
        description:"The Hilton Alexandria Corniche offers the finest four-star experience in Egypt's second city. Its elevated position provides sweeping Mediterranean views from most rooms. The rooftop pool and seafood restaurant with panoramic sea views are particular highlights.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Mediterranean panorama","Rooftop pool","Award-winning seafood restaurant"],
      },
    ],
    luxury: [
      {
        id:"ale-lux-1", name:"Four Seasons Hotel Alexandria at San Stefano", location:"San Stefano, Alexandria",
        stars:5, price:360, originalPrice:455,
        rating:9.2, reviews:2400,
        tagline:"Mediterranean grandeur in Egypt's most cosmopolitan city",
        badges:["#1 Alexandria","Beachfront"],
        amenities:["Free WiFi","Beach","4 Pools","Spa","6 Restaurants","Bar","Butler","Marina","Casino"],
        img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
        description:"The Four Seasons San Stefano stands on Alexandria's most prestigious beachfront address, combining the city's legendary cosmopolitan elegance with Four Seasons' contemporary luxury. Private beach, six restaurants ranging from Italian to Egyptian seafood, an exceptional spa, and the glittering San Stefano Grand Plaza casino make this Egypt's finest Mediterranean resort.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Private Mediterranean beach","San Stefano Grand Plaza Casino","Six dining concepts"],
      },
    ],
  },

  // ══════════════ MARSA ALAM ══════════════
  marsa: {
    standard: [
      {
        id:"mar-s-1", name:"Marsa Alam Village Hotel", location:"Marsa Alam Town",
        stars:3, price:38, originalPrice:50,
        rating:7.2, reviews:420,
        tagline:"Affordable access to Egypt's last unspoiled Red Sea coast",
        badges:["Beach Access","Snorkelling"],
        amenities:["Free WiFi","Pool","Restaurant","Beach Access","Diving","Air Con","Breakfast"],
        img:"https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=600&q=80",
        description:"A simple but comfortable base for exploring the extraordinary Marsa Alam coast — home to dugongs, sea turtles, and pristine coral untouched by mass tourism. The hotel offers direct beach access and affordable dive packages.",
        checkIn:"13:00", checkOut:"11:00",
        highlights:["Access to pristine reefs","Dugong watching site nearby","Affordable diving packages"],
      },
    ],
    superior: [
      {
        id:"mar-sup-1", name:"Shams Alam Beach Resort", location:"Wadi Lahami, Marsa Alam",
        stars:4, price:148, originalPrice:188,
        rating:8.6, reviews:1800,
        tagline:"Eco-luxury on the most pristine Red Sea coast in Egypt",
        badges:["Eco-Resort","Turtle Beach","Private"],
        amenities:["Free WiFi","Pools","Private Beach","Dive Centre","4 Restaurants","Spa","Snorkelling","Nature"],
        img:"https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80",
        description:"Shams Alam is among the finest eco-resort experiences in Egypt — remote, unspoiled, and biologically extraordinary. Set 150km south of Marsa Alam town in the Wadi Lahami protected area, the resort's house reef is home to sea turtles, dugongs, and leopard sharks. Guests report regularly swimming alongside sea turtles from the beach.",
        checkIn:"14:00", checkOut:"12:00",
        highlights:["Sea turtles nesting on hotel beach","Premier Egypt eco-resort","Remote — truly pristine reef"],
      },
    ],
    luxury: [
      {
        id:"mar-lux-1", name:"Marsa Shagra Eco Village & Liveaboard Base", location:"Marsa Shagra, Marsa Alam",
        stars:5, price:260, originalPrice:340,
        rating:9.0, reviews:980,
        tagline:"The world's finest dive resort on Egypt's Red Sea frontier",
        badges:["Divers Paradise","Eco-Luxury","Remote"],
        amenities:["Free WiFi","Private Beach","PADI Dive Centre","Restaurant","Bar","Yoga","Liveaboard","Nature"],
        img:"https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=600&q=80",
        description:"Marsa Shagra is a legend in the global dive community — a boutique eco-resort where guests sleep in chalets, tents, or luxury cabins, metres from one of the Red Sea's finest coral gardens. The house reef drops to 40 metres just 50 metres from shore. The liveaboard base allows access to the Brothers Islands and Elphinstone Reef — among the world's top ten dive sites.",
        checkIn:"14:00", checkOut:"12:00",
        highlights:["Top 10 Red Sea dive resort globally","Brothers Islands liveaboard base","Coral garden 50m from shore"],
      },
    ],
  },

  // ══════════════ FAYOUM ══════════════
  fayoum: {
    standard: [
      {
        id:"fay-s-1", name:"Zad El-Mosafer Hotel", location:"Fayoum City",
        stars:3, price:35, originalPrice:48,
        rating:7.5, reviews:380,
        tagline:"Peaceful Fayoum base with garden setting",
        badges:["Garden","Nature Access"],
        amenities:["Free WiFi","Garden","Restaurant","Air Con","Breakfast","Tour Desk","Bicycle"],
        img:"https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&q=80",
        description:"A simple and welcoming hotel set in a lush garden in Fayoum City, convenient for exploring the oasis's natural wonders: Lake Qarun, Wadi El-Rayan waterfalls, and the Whale Valley. The helpful tour desk organises reliable day excursions.",
        checkIn:"13:00", checkOut:"11:00",
        highlights:["Garden setting — peaceful oasis feel","Access to Wadi El-Rayan","Bicycle hire for lake circuit"],
      },
    ],
    superior: [
      {
        id:"fay-sup-1", name:"Helnan Auberge Fayoum", location:"Lake Qarun, Fayoum",
        stars:4, price:125, originalPrice:165,
        rating:8.1, reviews:890,
        tagline:"A 1930s royal hunting lodge on the edge of Lake Qarun",
        badges:["Historic","Lake Views","Royal Lodge"],
        amenities:["Free WiFi","Lake Terrace","Restaurant","Bar","Garden","Birdwatching","Fishing","Horses"],
        img:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
        description:"The Auberge du Lac Fayoum was built in the 1930s as a hunting lodge for King Farouk of Egypt and his guests. Set directly on the shores of Lake Qarun, it retains its royal furniture, wood-panelled bar, and colonial atmosphere entirely. The flamingo-watched sunsets over the lake from the terrace are among Egypt's great hidden experiences.",
        checkIn:"14:00", checkOut:"12:00",
        highlights:["Original King Farouk hunting lodge","Flamingo sunset on Lake Qarun","Royal colonial atmosphere intact"],
      },
    ],
    luxury: [
      {
        id:"fay-lux-1", name:"Fayoum Panorama Hotel", location:"Lake Qarun Edge",
        stars:5, price:220, originalPrice:285,
        rating:8.8, reviews:650,
        tagline:"The finest lakeside luxury retreat near Cairo",
        badges:["Lake Panorama","Private","Retreat"],
        amenities:["Free WiFi","Lake Pool","Spa","Restaurant","Bar","Birdwatching","Nature Guide","Kayak"],
        img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
        description:"A sophisticated lakeside retreat offering the finest accommodation in Fayoum, with panoramic lake views from every suite. The lakeside pool, nature guide service, and spa make this an ideal escape from Cairo — just 90 minutes away. Complimentary kayaking, birdwatching tours, and sunrise desert walks.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["90 minutes from Cairo","Flamingo & migratory bird watching","Sunrise desert walk excursions"],
      },
    ],
  },

  // ══════════════ AIN SOKHNA ══════════════
  sokhna: {
    standard: [
      {
        id:"sok-s-1", name:"Ain Sokhna Village Resort", location:"Ain Sokhna",
        stars:3, price:48, originalPrice:62,
        rating:7.4, reviews:560,
        tagline:"Weekend escape from Cairo with Red Sea beach",
        badges:["Beach","Weekend Escape"],
        amenities:["Free WiFi","Pool","Restaurant","Beach","Air Con","Breakfast","Water Sports"],
        img:"https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80",
        description:"A popular weekend destination for Cairo families, Ain Sokhna Village Resort offers a reliable Red Sea beach experience just 120km from the capital. Comfortable rooms, a good pool, and direct beach access with basic water sports.",
        checkIn:"14:00", checkOut:"12:00",
        highlights:["120km from Cairo — easy escape","Red Sea beach access","Water sports included"],
      },
    ],
    superior: [
      {
        id:"sok-sup-1", name:"Stella Di Mare Beach Hotel & Spa", location:"Ain Sokhna",
        stars:4, price:145, originalPrice:185,
        rating:8.3, reviews:2100,
        tagline:"Premium Red Sea weekend resort near Cairo",
        badges:["Best Seller","Spa","All Inclusive"],
        amenities:["Free WiFi","3 Pools","Spa","Private Beach","4 Restaurants","Bar","Tennis","Gym"],
        img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
        description:"Stella Di Mare is the benchmark resort in Ain Sokhna — a sprawling beachfront complex with three pools, a full spa, and direct Red Sea beach access. The all-inclusive option is exceptional value and popular with Cairo residents seeking a premium coastal escape.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Best resort in Ain Sokhna","All-inclusive option","120km from central Cairo"],
      },
    ],
    luxury: [
      {
        id:"sok-lux-1", name:"Sheraton Soma Bay Resort", location:"Soma Bay, Ain Sokhna",
        stars:5, price:280, originalPrice:355,
        rating:9.0, reviews:1800,
        tagline:"The ultimate Gulf of Suez luxury retreat near Cairo",
        badges:["#1 Ain Sokhna","Golf","Private Peninsula"],
        amenities:["Free WiFi","4 Pools","Spa","Golf Course","5 Restaurants","Private Beach","Butler","Tennis"],
        img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
        description:"The Sheraton Soma Bay occupies a private peninsula with the Gulf of Suez on three sides — a location of extraordinary natural drama. The on-site Gary Player-designed golf course, 18-hole championship layout, four pools, and full-service spa make this the finest resort destination near Cairo, beloved by Egypt's elite.",
        checkIn:"15:00", checkOut:"12:00",
        highlights:["Gary Player 18-hole golf course","Private peninsula — 3-sided sea views","90-minute drive from Cairo"],
      },
    ],
  },
};

// ─── STARS COMPONENT ──────────────────────────────────────────────────────────
const Stars = ({ n, size = 12 }) => (
  <span style={{ color:"var(--gold)", fontSize:size, letterSpacing:2 }}>
    {"★".repeat(n)}{"☆".repeat(5-n)}
  </span>
);

// ─── HOTEL MODAL ──────────────────────────────────────────────────────────────
function HotelModal({ hotel, onClose }) {
  const [checkin,  setCheckin]  = useState("");
  const [checkout, setCheckout] = useState("");
  const [nights,   setNights]   = useState(3);
  const [guests,   setGuests]   = useState(2);
  const total = hotel.price * nights;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const waMsg = encodeURIComponent(
    `Hi! I'd like to book ${hotel.name}\nCheck-in: ${checkin||"TBD"}, Check-out: ${checkout||"TBD"}\nGuests: ${guests}, Nights: ${nights}\nTotal: $${total}`
  );

  return (
    <div className="h-modal-bg" onClick={onClose}>
      <div className="h-modal" onClick={e => e.stopPropagation()}>
        {/* Hero */}
        <div className="h-modal-hero">
          <img src={hotel.img} alt={hotel.name}
            onError={e=>{e.target.src=`https://placehold.co/860x280/111019/C9921A?text=${encodeURIComponent(hotel.name)}`}} />
          <div className="h-modal-hero-ov"/>
          <button className="h-modal-close" onClick={onClose}>✕</button>
          <div className="h-modal-hero-info">
            <Stars n={hotel.stars} size={14}/>
            <div className="h-modal-name">{hotel.name}</div>
            <div className="h-modal-loc">📍 {hotel.location}</div>
          </div>
        </div>

        {/* Body */}
        <div className="h-modal-body">
          <div className="h-modal-grid">
            {/* Left */}
            <div>
              <div className="h-modal-sec">About This Hotel</div>
              <p className="h-modal-desc">{hotel.description}</p>

              {/* Highlights */}
              <div className="h-modal-sec">Why Choose This Hotel</div>
              <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:20}}>
                {(hotel.highlights||[]).map((h,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"flex-start",gap:10,
                    fontFamily:"var(--fb)",fontSize:15,color:"var(--tdim)",lineHeight:1.5}}>
                    <span style={{color:"var(--gold)",marginTop:2}}>◆</span> {h}
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <div className="h-modal-sec">Amenities & Facilities</div>
              <div className="h-amenity-grid">
                {(hotel.amenities||[]).map((a,i)=>(
                  <div key={i} className="h-am-item">✓ {a}</div>
                ))}
              </div>

              {/* Details */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                {[
                  {l:"Check-in",v:hotel.checkIn||"15:00"},
                  {l:"Check-out",v:hotel.checkOut||"12:00"},
                  {l:"Rating",v:`${hotel.rating}/10 · ${hotel.reviews?.toLocaleString()} reviews`},
                  {l:"Category",v:`${hotel.stars}-Star Hotel`},
                ].map(d=>(
                  <div key={d.l} style={{background:"rgba(201,146,26,0.05)",border:"1px solid rgba(201,146,26,.1)",
                    borderRadius:8,padding:"12px 14px"}}>
                    <div style={{fontFamily:"var(--ft)",fontSize:8,letterSpacing:2,color:"var(--gold)",
                      textTransform:"uppercase",marginBottom:4}}>{d.l}</div>
                    <div style={{fontFamily:"var(--fb)",fontSize:15,color:"var(--txt)"}}>{d.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Widget */}
            <div>
              <div className="h-modal-widget">
                <div className="h-mw-header">
                  <div className="h-mw-from">From</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:8}}>
                    <div className="h-mw-price">${hotel.price}</div>
                    {hotel.originalPrice&&<span style={{fontFamily:"var(--fb)",fontSize:14,
                      color:"rgba(11,9,0,.5)",textDecoration:"line-through"}}>${hotel.originalPrice}</span>}
                  </div>
                  <div className="h-mw-pp">per room / night</div>
                </div>
                <div className="h-mw-body">
                  {/* Nights selector */}
                  <div className="h-mw-field">
                    <div className="h-mw-label">Nights</div>
                    <div style={{display:"flex",alignItems:"center",gap:14}}>
                      <button style={{width:28,height:28,borderRadius:"50%",background:"var(--gdim)",
                        border:"1px solid var(--gbr)",color:"var(--gold)",cursor:"pointer",fontSize:16}}
                        onClick={()=>setNights(n=>Math.max(1,n-1))}>−</button>
                      <span style={{fontFamily:"var(--ft)",fontSize:16,color:"var(--gold)",minWidth:24,textAlign:"center"}}>{nights}</span>
                      <button style={{width:28,height:28,borderRadius:"50%",background:"var(--gdim)",
                        border:"1px solid var(--gbr)",color:"var(--gold)",cursor:"pointer",fontSize:16}}
                        onClick={()=>setNights(n=>n+1)}>+</button>
                      <span style={{fontFamily:"var(--fb)",fontSize:14,color:"var(--mut)"}}>nights</span>
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="h-mw-row">
                    <div className="h-mw-field">
                      <div className="h-mw-label">Check-in</div>
                      <input type="date" className="h-mw-input" value={checkin}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={e=>setCheckin(e.target.value)}/>
                    </div>
                    <div className="h-mw-field">
                      <div className="h-mw-label">Check-out</div>
                      <input type="date" className="h-mw-input" value={checkout}
                        min={checkin||new Date().toISOString().split("T")[0]}
                        onChange={e=>setCheckout(e.target.value)}/>
                    </div>
                  </div>
                  {/* Guests */}
                  <div className="h-mw-field">
                    <div className="h-mw-label">Guests</div>
                    <select className="h-mw-input" value={guests} onChange={e=>setGuests(+e.target.value)}
                      style={{cursor:"pointer"}}>
                      {[1,2,3,4,5,6].map(n=><option key={n} value={n}>{n} Guest{n>1?"s":""}</option>)}
                    </select>
                  </div>

                  {/* Total */}
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",
                    padding:"12px 0",borderTop:"1px solid rgba(201,146,26,.1)",
                    borderBottom:"1px solid rgba(201,146,26,.1)",margin:"12px 0"}}>
                    <span style={{fontFamily:"var(--ft)",fontSize:9,letterSpacing:2,
                      color:"var(--mut)",textTransform:"uppercase"}}>Total ({nights} nights)</span>
                    <span style={{fontFamily:"var(--fd)",fontSize:22,color:"var(--gold)",fontWeight:700}}>${total}</span>
                  </div>

                  <button className="h-mw-book"
                    onClick={()=>alert(`✦ Booking request sent!\n${hotel.name}\nTotal: $${total}\nOur team will confirm within 2 hours.`)}>
                    ✦ Book This Hotel
                  </button>
                  <a href={`https://wa.me/201068257754?text=${waMsg}`}
                    target="_blank" rel="noreferrer" className="h-mw-wa">
                    💬 Book via WhatsApp
                  </a>

                  {/* Trust */}
                  <div className="h-trust">
                    {[["🔒","Secure","Payment"],["✓","Free","Cancel"],["⭐","Best","Price"]].map(([ic,l1,l2])=>(
                      <div key={l1} className="h-trust-i">
                        <span className="h-trust-ic">{ic}</span>{l1}<br/>{l2}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── HOTEL CARD ───────────────────────────────────────────────────────────────
function HotelCard({ hotel, delay = 0, onSelect }) {
  const [fav, setFav] = useState(false);
  return (
    <div className="h-card" style={{ animationDelay:`${delay}ms` }} onClick={()=>onSelect(hotel)}>
      <div className="h-card-img-wrap">
        <img src={hotel.img} alt={hotel.name} className="h-card-img"
          onError={e=>{e.target.src=`https://placehold.co/400x200/111019/C9921A?text=${encodeURIComponent(hotel.name)}`}}/>
        <div className="h-card-img-ov"/>
        <div className="h-card-badges">
          {(hotel.badges||[]).map(b=>(
            <span key={b} className={`h-cbadge${b.toLowerCase().includes("sell")?" hot":b==="New"?" new":""}`}>{b}</span>
          ))}
        </div>
        <button className="h-card-fav" onClick={e=>{e.stopPropagation();setFav(v=>!v)}}
          style={{color:fav?"#e44":"var(--mut)"}}>
          {fav?"♥":"♡"}
        </button>
        <div className="h-stars-ov">{"★".repeat(hotel.stars)}</div>
      </div>

      <div className="h-card-body">
        <div className="h-card-loc">📍 {hotel.location}</div>
        <div className="h-card-name">{hotel.name}</div>
        <div className="h-card-tagline">{hotel.tagline}</div>
        <div className="h-card-amenities">
          {(hotel.amenities||[]).slice(0,5).map(a=>(
            <span key={a} className="h-amenity">{a}</span>
          ))}
        </div>
        <div className="h-card-footer">
          <div>
            <div className="h-price-from">From</div>
            <div style={{display:"flex",alignItems:"baseline",gap:6}}>
              <span className="h-price-val">${hotel.price}</span>
              <span className="h-price-pp">/ night</span>
            </div>
            {hotel.originalPrice&&(
              <div style={{fontFamily:"var(--fb)",fontSize:12,color:"rgba(42,160,100,.85)",marginTop:2}}>
                Save ${hotel.originalPrice - hotel.price}
              </div>
            )}
          </div>
          <button className="h-card-btn" onClick={e=>{e.stopPropagation();onSelect(hotel)}}>
            View Hotel ›
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function HotelsPage() {
  const navigate = useNavigate();
  const [selectedTier, setSelectedTier] = useState(null);
  const [selectedGov,  setSelectedGov]  = useState("cairo");
  const [sort,         setSort]          = useState("popular");
  const [filterBadge,  setFilterBadge]  = useState("All");
  const [modalHotel,   setModalHotel]   = useState(null);
  const contentRef = useRef(null);

  // Get hotels for current selection
  const govData   = HOTELS_DB[selectedGov] || {};
  const tierHotels = selectedTier ? (govData[selectedTier] || []) : [];

  const filtered = filterBadge === "All"
    ? tierHotels
    : tierHotels.filter(h => (h.badges||[]).some(b=>b.toLowerCase().includes(filterBadge.toLowerCase())));

  const sorted = [...filtered].sort((a,b) =>
    sort === "price-asc"  ? a.price - b.price :
    sort === "price-desc" ? b.price - a.price :
    sort === "rating"     ? b.rating - a.rating :
    b.reviews - a.reviews
  );

  const handleTierSelect = (tierId) => {
    setSelectedTier(tierId);
    setTimeout(()=>contentRef.current?.scrollIntoView({behavior:"smooth",block:"start"}),100);
  };

  // Unique badges from current hotels for filter
  const allBadges = ["All", ...new Set(tierHotels.flatMap(h=>h.badges||[]))];

  return (
    <div style={{background:"var(--obs)",minHeight:"100vh",position:"relative"}}>
      <GlobalStyles/>
      <div className="h-bg"/>

      {/* ── NAV ── */}
      <nav className="h-nav">
        <button className="h-back" onClick={()=>navigate("/")}>← Home</button>
        <span className="h-brand">GOLDEN <span>Egypt Tours</span></span>
        <div className="h-nav-r">
          <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="h-wa">
            💬 WhatsApp
          </a>
          <button className="h-booknow">Book Now</button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="h-hero">
        <div className="h-hero-bg" style={{backgroundImage:"url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1800&q=85')"}}/>
        <div className="h-hero-ov"/>
        <div className="h-hero-grid"/>
        <div className="h-band">
          <span className="h-band-txt">
            𓂀 &nbsp; Cairo &nbsp; 𓃭 &nbsp; Luxor &nbsp; 𓆑 &nbsp; Aswan &nbsp; 𓇋 &nbsp; Hurghada &nbsp; 𓅓 &nbsp; Sharm El Sheikh &nbsp; 𓂋 &nbsp; Alexandria &nbsp; 𓂀 &nbsp; Marsa Alam &nbsp; 𓃭 &nbsp; Fayoum &nbsp; 𓆑 &nbsp; Ain Sokhna &nbsp;
          </span>
        </div>
        <div className="h-hero-cnt">
          <div className="h-eyebrow">𓂀 &nbsp; Curated Accommodations &nbsp; · &nbsp; Egypt</div>
          <h1 className="h-title">Egypt's Finest Hotels</h1>
          <p className="h-sub">From boutique Nile palaces to world-class beach resorts — every stay curated by our experts</p>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div className="h-crumb">
        <a href="/" onClick={e=>{e.preventDefault();navigate("/")}}>Home</a>
        <span className="sep">›</span>
        <span className="cur">Hotels</span>
        {selectedTier && <>
          <span className="sep">›</span>
          <span className="cur">{TIERS.find(t=>t.id===selectedTier)?.name}</span>
        </>}
        {selectedTier && <>
          <span className="sep">›</span>
          <span className="cur">{GOVERNORATES.find(g=>g.id===selectedGov)?.name}</span>
        </>}
      </div>

      {/* ── MAIN BODY ── */}
      <div className="h-body">

        {/* ══ STEP 1: TIER SELECTION ══ */}
        <div style={{marginBottom:40}}>
          <div className="h-sec-ey">✦ Step 1 — Choose Your Standard</div>
          <div className="h-sec-title">Select Your Hotel Category</div>

          <div className="h-tiers">
            {TIERS.map(tier=>(
              <div
                key={tier.id}
                className={`h-tier-card${selectedTier===tier.id?" on":""}`}
                onClick={()=>handleTierSelect(tier.id)}
              >
                <img src={tier.img} alt={tier.name} className="h-tier-img"
                  onError={e=>{e.target.src=`https://placehold.co/600x338/111019/C9921A?text=${tier.name}`}}/>
                <div className="h-tier-ov"/>
                <div className="h-tier-body">
                  <div className="h-tier-tag">{tier.tag}</div>
                  <div className="h-tier-name">{tier.name}</div>
                  <div className="h-tier-desc">{tier.desc}</div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:8}}>
                    <div className="h-tier-stars">
                      {"★".repeat(tier.stars).split("").map((_,i)=><span key={i}>★</span>)}
                    </div>
                    <span style={{fontFamily:"var(--ft)",fontSize:9,letterSpacing:1,
                      color:"rgba(201,146,26,.8)",textTransform:"uppercase"}}>{tier.priceRange}/night</span>
                  </div>
                </div>
                <div className="h-tier-check">✓</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ STEP 2: GOVERNORATE + HOTELS ══ */}
        {selectedTier && (
          <div ref={contentRef}>
            {/* Divider */}
            <div style={{height:1,background:`linear-gradient(to right,transparent,rgba(201,146,26,.3),rgba(201,146,26,.6),rgba(201,146,26,.3),transparent)`,margin:"0 0 40px"}}/>

            <div className="h-sec-ey">✦ Step 2 — Choose Your Destination</div>
            <div className="h-sec-title">
              {TIERS.find(t=>t.id===selectedTier)?.name} Hotels in Egypt
            </div>

            {/* Governorate tabs */}
            <div className="h-gov-tabs">
              {GOVERNORATES.map(gov=>{
                const count = (HOTELS_DB[gov.id]?.[selectedTier]||[]).length;
                return (
                  <button
                    key={gov.id}
                    className={`h-gov-btn${selectedGov===gov.id?" on":""}`}
                    onClick={()=>setSelectedGov(gov.id)}
                  >
                    {gov.icon} {gov.name}
                    {count > 0 && (
                      <span style={{background:"rgba(201,146,26,.15)",border:"1px solid rgba(201,146,26,.25)",
                        borderRadius:"10px",padding:"1px 6px",fontSize:8,color:"rgba(201,146,26,.8)"}}>
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Filter bar */}
            {sorted.length > 0 && (
              <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",
                marginBottom:28,paddingBottom:20,borderBottom:"1px solid rgba(201,146,26,.1)"}}>
                <span style={{fontFamily:"var(--ft)",fontSize:9,letterSpacing:2,color:"var(--gold)",textTransform:"uppercase"}}>Filter:</span>
                {allBadges.map(b=>(
                  <button key={b} className={`h-filt-btn${filterBadge===b?" on":""}`}
                    onClick={()=>setFilterBadge(b)}>{b}</button>
                ))}
                <select className="h-sort" value={sort} onChange={e=>setSort(e.target.value)}>
                  <option value="popular">Most Popular</option>
                  <option value="rating">Top Rated</option>
                  <option value="price-asc">Price: Low → High</option>
                  <option value="price-desc">Price: High → Low</option>
                </select>
                <span style={{fontFamily:"var(--fb)",fontSize:14,color:"var(--mut)",fontStyle:"italic",marginLeft:"auto"}}>
                  {sorted.length} hotel{sorted.length!==1?"s":""} found
                </span>
              </div>
            )}

            {/* Hotels grid */}
            {sorted.length > 0 ? (
              <div className="h-grid">
                {sorted.map((hotel,i)=>(
                  <HotelCard
                    key={hotel.id}
                    hotel={hotel}
                    delay={i*80}
                    onSelect={setModalHotel}
                  />
                ))}
              </div>
            ) : (
              <div className="h-empty">
                <div style={{fontSize:40,marginBottom:12}}>𓂀</div>
                <div style={{fontFamily:"var(--ft)",fontSize:13,letterSpacing:2,color:"var(--gold)",marginBottom:8,textTransform:"uppercase"}}>
                  No Hotels Listed Yet
                </div>
                <div>
                  We are curating the finest {TIERS.find(t=>t.id===selectedTier)?.name.toLowerCase()} hotels
                  in {GOVERNORATES.find(g=>g.id===selectedGov)?.name}.
                  <br/>Contact us for personalised recommendations.
                </div>
                <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer"
                  style={{display:"inline-flex",alignItems:"center",gap:8,marginTop:20,
                    background:"#25D366",color:"#fff",borderRadius:8,padding:"10px 22px",
                    fontFamily:"var(--ft)",fontSize:9,letterSpacing:2,fontWeight:700,
                    textTransform:"uppercase",textDecoration:"none"}}>
                  💬 Ask Our Team
                </a>
              </div>
            )}
          </div>
        )}

        {/* If no tier selected — prompt */}
        {!selectedTier && (
          <div style={{textAlign:"center",padding:"60px 20px",color:"var(--mut)",
            fontFamily:"var(--fb)",fontSize:18,fontStyle:"italic"}}>
            <div style={{fontSize:48,marginBottom:16}}>𓂀</div>
            <div style={{fontFamily:"var(--ft)",fontSize:12,letterSpacing:3,color:"var(--gold)",
              textTransform:"uppercase",marginBottom:10}}>Begin Your Search</div>
            <div>Select a hotel category above to discover Egypt's finest accommodations</div>
          </div>
        )}
      </div>

      {/* ── HOTEL MODAL ── */}
      {modalHotel && (
        <HotelModal hotel={modalHotel} onClose={()=>setModalHotel(null)}/>
      )}

      {/* ── FLOATING ── */}
      <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="h-wafloat">
        <span style={{fontSize:16}}>💬</span> WhatsApp Us
      </a>
      <button className="h-scrolltop" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>▲</button>
    </div>
  );
}
