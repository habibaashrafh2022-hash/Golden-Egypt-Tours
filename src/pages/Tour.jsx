// ============================================================
//  Tour.jsx — Golden Egypt Tours
//  Ultra-Pro Pharaonic Tour Detail Page
//  Route: /tour/:tourId
//  Data source: ../data/tours
// ============================================================

import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTourById, getRelatedTours } from "../data/tours";

// ─────────────────────────────────────────────────────────────
//  GLOBAL STYLES
// ─────────────────────────────────────────────────────────────
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

    /* ── HIERO WATERMARK ── */
    .tp-bg{position:fixed;inset:0;pointer-events:none;z-index:0;
      background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Ctext x='8' y='50' font-size='28' fill='rgba(201,168,76,0.025)'%3E𓂀𓃭𓆑%3C/text%3E%3Ctext x='8' y='100' font-size='28' fill='rgba(201,168,76,0.018)'%3E𓇋𓅓𓂋%3C/text%3E%3Ctext x='8' y='148' font-size='28' fill='rgba(201,168,76,0.025)'%3E𓏏𓈖𓃀%3C/text%3E%3C/svg%3E");
      background-size:160px 160px}

    /* ── NAVBAR ── */
    .tp-nav{position:fixed;top:0;left:0;right:0;z-index:990;height:68px;
      display:flex;align-items:center;padding:0 48px;gap:14px;
      background:rgba(7,5,13,0.97);backdrop-filter:blur(24px);
      border-bottom:1px solid var(--gold-border)}
    .tp-nav::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;
      background:linear-gradient(90deg,transparent,var(--gold),var(--gold-light),var(--gold),transparent);opacity:.5}
    .tp-back{display:flex;align-items:center;gap:7px;background:var(--gold-dim);
      border:1px solid var(--gold-border);color:var(--gold);border-radius:6px;
      padding:8px 16px;font-family:var(--ft);font-size:9px;letter-spacing:2px;
      text-transform:uppercase;cursor:pointer;transition:all .2s;text-decoration:none;white-space:nowrap}
    .tp-back:hover{background:var(--gold-dim2)}
    .tp-brand{font-family:var(--fd);font-size:13px;color:var(--gold);letter-spacing:2px;font-weight:700}
    .tp-brand span{font-family:var(--ft);font-size:9px;color:var(--muted);letter-spacing:3px;margin-left:10px}
    .tp-nav-r{margin-left:auto;display:flex;gap:10px;align-items:center}
    .tp-wa-nav{display:flex;align-items:center;gap:7px;background:#25D366;color:#fff;
      border:none;border-radius:6px;padding:9px 16px;font-family:var(--ft);font-size:9px;
      letter-spacing:1.5px;font-weight:700;text-transform:uppercase;cursor:pointer;
      text-decoration:none;transition:all .2s}
    .tp-wa-nav:hover{background:#1fb558}
    .tp-booknow{background:linear-gradient(135deg,var(--gold),var(--gold-light));color:#0B0900;
      border:none;border-radius:6px;padding:9px 22px;font-family:var(--ft);font-size:9px;
      letter-spacing:2px;font-weight:700;text-transform:uppercase;cursor:pointer;
      box-shadow:0 4px 20px rgba(201,168,76,.3);transition:all .25s}
    .tp-booknow:hover{box-shadow:0 6px 30px rgba(201,168,76,.5);transform:translateY(-1px)}

    /* ── STICKY BAR ── */
    .tp-sticky{position:fixed;top:68px;left:0;right:0;z-index:980;height:52px;
      display:flex;align-items:center;gap:18px;padding:0 48px;
      background:rgba(7,5,13,0.96);backdrop-filter:blur(20px);
      border-bottom:1px solid var(--gold-border);
      transform:translateY(-100%);transition:transform .3s ease}
    .tp-sticky.on{transform:translateY(0)}
    .tp-sticky-name{font-family:var(--ft);font-size:12px;color:var(--text);letter-spacing:.5px;
      overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}
    .tp-sticky-price{font-family:var(--fd);font-size:18px;color:var(--gold);font-weight:700;white-space:nowrap}
    .tp-sticky-btn{background:linear-gradient(135deg,var(--gold),var(--gold-light));color:#0B0900;
      border:none;border-radius:6px;padding:8px 20px;font-family:var(--ft);font-size:9px;
      letter-spacing:2px;font-weight:700;cursor:pointer;text-transform:uppercase;white-space:nowrap}

    /* ── HERO ── */
    .tp-hero{position:relative;height:100vh;min-height:580px;max-height:860px;
      margin-top:68px;overflow:hidden;display:flex;align-items:flex-end}

    .tp-hero-bg{position:absolute;inset:0;background-size:cover;background-position:center;
      animation:kbz 14s ease-in-out infinite alternate}
    @keyframes kbz{0%{transform:scale(1);filter:brightness(.82)}100%{transform:scale(1.07);filter:brightness(.9)}}

    .tp-hero-grid{position:absolute;inset:0;pointer-events:none;z-index:1;
      background:repeating-linear-gradient(90deg,transparent,transparent 99px,rgba(201,168,76,.04) 99px,rgba(201,168,76,.04) 100px),
                 repeating-linear-gradient(0deg,transparent,transparent 99px,rgba(201,168,76,.04) 99px,rgba(201,168,76,.04) 100px)}

    .tp-hero-ov{position:absolute;inset:0;z-index:2;
      background:linear-gradient(to top,rgba(7,5,13,1) 0%,rgba(7,5,13,.65) 35%,rgba(7,5,13,.1) 70%,transparent 100%),
                 linear-gradient(to right,rgba(7,5,13,.65) 0%,rgba(7,5,13,.15) 45%,transparent 75%)}

    /* Scrolling band */
    .tp-band{position:absolute;top:28%;left:0;right:0;z-index:3;height:44px;pointer-events:none;
      border-top:1px solid rgba(201,168,76,.15);border-bottom:1px solid rgba(201,168,76,.15);
      background:rgba(7,5,13,.28);display:flex;align-items:center;overflow:hidden}
    .tp-band-txt{font-family:var(--ft);font-size:10px;letter-spacing:7px;
      color:rgba(201,168,76,.4);white-space:nowrap;text-transform:uppercase;
      animation:marquee 28s linear infinite}
    @keyframes marquee{0%{transform:translateX(40vw)}100%{transform:translateX(-100%)}}

    /* Hero badges */
    .tp-hero-badges{position:absolute;top:24px;left:48px;z-index:5;display:flex;gap:8px;flex-wrap:wrap}
    .tp-hbadge{background:rgba(7,5,13,.85);backdrop-filter:blur(12px);
      border:1px solid var(--gold-border);border-radius:4px;padding:5px 12px;
      font-family:var(--ft);font-size:8px;letter-spacing:2px;color:var(--gold);text-transform:uppercase;
      animation:fadeD .5s ease both}
    .tp-hbadge.hot{background:rgba(180,35,35,.8);border-color:rgba(220,60,60,.4);color:#fff}
    .tp-hbadge.new{background:rgba(28,90,55,.8);border-color:rgba(42,160,100,.4);color:#fff}
    @keyframes fadeD{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}

/* Hero action buttons */
    .tp-hero-acts{position:absolute;top:24px;right:48px;z-index:5;display:flex;gap:8px}
    .tp-act{width:38px;height:38px;border-radius:8px;background:rgba(7,5,13,.82);
      backdrop-filter:blur(10px);border:1px solid var(--gold-border);color:var(--gold);
      display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:15px;
      transition:all .2s}
    .tp-act:hover{background:var(--gold-dim2);border-color:var(--gold)}

    /* Thumbnail strip */
    .tp-thumbs{position:absolute;bottom:200px;right:28px;z-index:5;display:flex;flex-direction:column;gap:8px}
    .tp-thumb{width:72px;height:52px;border-radius:6px;overflow:hidden;border:2px solid transparent;
      cursor:pointer;opacity:.6;transition:all .25s;flex-shrink:0}
    .tp-thumb img{width:100%;height:100%;object-fit:cover;display:block}
    .tp-thumb:hover,.tp-thumb.on{opacity:1;border-color:var(--gold);box-shadow:0 0 18px rgba(201,168,76,.4)}

    /* Hero content */
    .tp-hero-cnt{position:relative;z-index:4;padding:0 48px 52px;width:100%;max-width:820px;
      animation:fadeU .8s ease both}
    @keyframes fadeU{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}

    .tp-hero-ey{font-family:var(--ft);font-size:9px;letter-spacing:5px;color:var(--gold);
      text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:12px}
    .tp-hero-ey::before{content:'';width:30px;height:1px;background:var(--gold)}

    .tp-htitle{font-family:var(--fd);font-size:clamp(28px,4.8vw,62px);font-weight:900;line-height:1.08;
      margin-bottom:10px;
      background:linear-gradient(135deg,#F0DC8A 0%,#C9A84C 35%,#FFE599 65%,#B8902E 100%);
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      filter:drop-shadow(0 3px 24px rgba(201,168,76,.35))}

    .tp-htagline{font-family:var(--fb);font-style:italic;font-size:clamp(16px,2vw,22px);
      color:var(--text-dim);font-weight:300;margin-bottom:22px;letter-spacing:.5px}

    .tp-hmeta{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:22px}
    .tp-hmi{display:flex;align-items:center;gap:6px;font-family:var(--ft);font-size:9px;
      letter-spacing:1.5px;color:var(--text-dim);text-transform:uppercase}
    .tp-hmi .i{font-size:13px}
    .tp-hsep{width:3px;height:3px;border-radius:50%;background:var(--gold-border)}

    .tp-hrating{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
    .tp-hstars{color:var(--gold);font-size:16px;letter-spacing:2px}
    .tp-hscore{font-family:var(--fd);font-size:22px;color:var(--gold);font-weight:700}
    .tp-hcount{font-family:var(--fb);font-size:15px;color:var(--muted)}
    .tp-htop{background:var(--gold-dim);border:1px solid var(--gold-border);border-radius:4px;
      padding:3px 10px;font-family:var(--ft);font-size:8px;letter-spacing:2px;color:var(--gold);text-transform:uppercase}

    /* ── BREADCRUMB ── */
    .tp-crumb{padding:12px 48px;background:var(--surface);border-bottom:1px solid var(--gold-border);
      display:flex;align-items:center;gap:8px;font-family:var(--ft);font-size:9px;
      letter-spacing:1.5px;color:var(--muted);position:relative;z-index:5}
    .tp-crumb a{color:var(--muted);text-decoration:none;transition:color .2s}
    .tp-crumb a:hover{color:var(--gold)}
    .tp-crumb .sep{color:rgba(201,168,76,.25)}
    .tp-crumb .cur{color:var(--gold);max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}

    /* ── QUICK INFO BAR ── */
    .tp-qbar{display:flex;background:var(--surface2);border-bottom:1px solid var(--gold-border);
      overflow-x:auto;position:relative;z-index:5}
    .tp-qi{flex:1;min-width:130px;padding:18px 18px;display:flex;align-items:center;gap:11px;
      border-right:1px solid var(--gold-border);transition:background .2s}
    .tp-qi:last-child{border-right:none}
    .tp-qi:hover{background:var(--gold-dim)}
    .tp-qi-ic{font-size:20px;flex-shrink:0}
    .tp-qi-l{font-family:var(--ft);font-size:8px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;margin-bottom:3px}
    .tp-qi-v{font-family:var(--fb);font-size:15px;color:var(--text)}

    /* ── BODY LAYOUT ── */
    .tp-body{display:grid;grid-template-columns:1fr 380px;gap:48px;
      padding:56px 48px;align-items:start;position:relative;z-index:5;
      max-width:1400px;margin:0 auto}
    @media(max-width:1100px){
      .tp-body{grid-template-columns:1fr;padding:36px 22px}
      .tp-thumbs{display:none}
      .tp-hero-badges,.tp-hero-acts{left:20px;right:20px}
      .tp-hero-cnt{padding:0 22px 48px}
      .tp-crumb,.tp-sticky{padding-left:22px;padding-right:22px}
    }

    /* ── TABS ── */
    .tp-tabs{display:flex;border-bottom:1px solid var(--gold-border);margin-bottom:36px;overflow-x:auto}
    .tp-tab{background:transparent;border:none;border-bottom:2px solid transparent;
      color:var(--muted);font-family:var(--ft);font-size:9px;letter-spacing:2.5px;
      padding:14px 22px;cursor:pointer;text-transform:uppercase;margin-bottom:-1px;
      transition:all .2s;white-space:nowrap}
    .tp-tab.on{color:var(--gold);border-bottom-color:var(--gold)}
    .tp-tab:hover:not(.on){color:rgba(201,168,76,.7)}

    .tp-panel{display:none;animation:panelIn .35s ease both}
    .tp-panel.on{display:block}
    @keyframes panelIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}

    /* ── OVERVIEW ── */
    .tp-main-title{font-family:var(--fd);font-size:clamp(20px,3vw,34px);color:var(--text);
      font-weight:700;line-height:1.2;margin-bottom:18px}
    .tp-rrow{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:28px}
    .tp-stars{color:var(--gold);font-size:17px;letter-spacing:2px}
    .tp-score{font-family:var(--fd);font-size:26px;color:var(--gold);font-weight:700}
    .tp-rcount{font-family:var(--fb);font-size:16px;color:var(--muted)}
    .tp-top-tag{background:var(--gold-dim);border:1px solid var(--gold-border);border-radius:4px;
      padding:4px 12px;font-family:var(--ft);font-size:8px;letter-spacing:2px;color:var(--gold);text-transform:uppercase}

    .tp-body-txt{font-family:var(--fb);font-size:18px;color:var(--text-dim);line-height:1.85;
      margin-bottom:36px;font-weight:300}
    .tp-body-txt::first-letter{font-size:50px;float:left;line-height:.82;margin:4px 12px 0 0;
      color:var(--gold);font-family:var(--fd);font-weight:700}

    .tp-sec-h{font-family:var(--ft);font-size:10px;letter-spacing:3.5px;color:var(--gold);
      text-transform:uppercase;margin-bottom:18px;display:flex;align-items:center;gap:14px}
    .tp-sec-h::after{content:'';flex:1;height:1px;background:linear-gradient(to right,var(--gold-border),transparent)}

    /* Highlights */
    .tp-hls{margin-bottom:36px}
    .tp-hl{display:flex;align-items:flex-start;gap:13px;padding:12px 0;
      border-bottom:1px solid rgba(201,168,76,.06);transition:all .2s;border-radius:4px}
    .tp-hl:last-child{border-bottom:none}
    .tp-hl:hover{padding-left:6px}
    .tp-hl-ic{color:var(--gold);font-size:11px;margin-top:5px;flex-shrink:0}
    .tp-hl-tx{font-family:var(--fb);font-size:17px;color:var(--text-dim);line-height:1.5}

    /* Info cards */
    .tp-icards{display:grid;grid-template-columns:1fr 1fr;gap:13px;margin-bottom:28px}
    .tp-icard{background:var(--surface2);border:1px solid var(--gold-border);border-radius:10px;
      padding:16px 18px;transition:all .2s}
    .tp-icard:hover{border-color:var(--gold);background:var(--gold-dim)}
    .tp-icard-ic{font-size:20px;margin-bottom:8px}
    .tp-icard-l{font-family:var(--ft);font-size:8px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;margin-bottom:4px}
    .tp-icard-v{font-family:var(--fb);font-size:16px;color:var(--text)}

    .tp-pblock{padding:18px 20px;border-radius:10px;margin-bottom:14px;border:1px solid}
    .tp-pblock.info{background:rgba(201,168,76,.05);border-color:var(--gold-border)}
    .tp-pblock.ok{background:rgba(42,160,100,.06);border-color:rgba(42,160,100,.25)}
    .tp-pblock-l{font-family:var(--ft);font-size:9px;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px}
    .tp-pblock.info .tp-pblock-l{color:var(--gold)}
    .tp-pblock.ok .tp-pblock-l{color:#4CAF82}
    .tp-pblock-t{font-family:var(--fb);font-size:16px;color:var(--text-dim)}

    /* ── INCLUDES ── */
    .tp-incgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:32px}
    .tp-inc{display:flex;align-items:center;gap:12px;background:var(--surface2);
      border:1px solid var(--gold-border);border-radius:10px;padding:14px 16px;transition:all .2s}
    .tp-inc:hover{border-color:var(--gold);background:var(--gold-dim)}
    .tp-inc-ic{font-size:20px;flex-shrink:0}
    .tp-inc-l{font-family:var(--ft);font-size:9px;letter-spacing:1px;color:var(--text);text-transform:uppercase}

    .tp-exclist{list-style:none;display:flex;flex-direction:column;gap:10px}
    .tp-exc{display:flex;align-items:flex-start;gap:10px;font-family:var(--fb);font-size:16px;color:var(--muted);line-height:1.5}
    .tp-exc::before{content:'✕';color:rgba(200,70,70,.7);font-size:11px;margin-top:3px;flex-shrink:0}
/* ── ITINERARY ── */
    .tp-itin{display:flex;flex-direction:column}
    .tp-step{display:flex;gap:20px;padding-bottom:32px;position:relative}
    .tp-step:last-child{padding-bottom:0}
    .tp-step:last-child .tp-step-line{display:none}
    .tp-step-left{display:flex;flex-direction:column;align-items:center;width:48px;flex-shrink:0}
    .tp-step-marker{width:48px;height:48px;border-radius:50%;background:var(--gold-dim);
      border:2px solid var(--gold);display:flex;align-items:center;justify-content:center;
      font-size:18px;box-shadow:0 0 20px rgba(201,168,76,.18);transition:all .3s;flex-shrink:0}
    .tp-step:hover .tp-step-marker{background:var(--gold-dim2);box-shadow:0 0 30px rgba(201,168,76,.32)}
    .tp-step-line{width:1px;flex:1;background:linear-gradient(to bottom,var(--gold-border),transparent);margin-top:8px}
    .tp-step-cnt{flex:1;padding-top:8px}
    .tp-step-time{font-family:var(--ft);font-size:8px;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:5px}
    .tp-step-title{font-family:var(--ft);font-size:14px;color:var(--text);font-weight:600;letter-spacing:.5px;margin-bottom:8px}
    .tp-step-desc{font-family:var(--fb);font-size:16px;color:var(--text-dim);line-height:1.65;margin-bottom:10px}
    .tp-step-tags{display:flex;gap:6px;flex-wrap:wrap}
    .tp-stag{background:var(--gold-dim);border:1px solid var(--gold-border);border-radius:12px;
      padding:3px 10px;font-family:var(--ft);font-size:7px;letter-spacing:1.5px;
      color:rgba(201,168,76,.85);text-transform:uppercase}

    /* ── REVIEWS ── */
    .tp-rev-sum{display:flex;gap:28px;align-items:center;background:var(--surface2);
      border:1px solid var(--gold-border);border-radius:14px;padding:28px;margin-bottom:28px}
    .tp-rbig{font-family:var(--fd);font-size:64px;color:var(--gold);font-weight:700;line-height:1}
    .tp-rof{font-family:var(--ft);font-size:9px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;margin-top:4px}
    .tp-rbig-stars{color:var(--gold);font-size:18px;letter-spacing:2px;margin-top:6px}
    .tp-rtotal{font-family:var(--fb);font-size:14px;color:var(--muted);font-style:italic;margin-top:4px}
    .tp-rbars{flex:1;display:flex;flex-direction:column;gap:9px}
    .tp-rbar-row{display:flex;align-items:center;gap:12px}
    .tp-rbar-l{font-family:var(--ft);font-size:8px;letter-spacing:1px;color:var(--muted);text-transform:uppercase;min-width:92px}
    .tp-rbar-track{flex:1;height:5px;background:rgba(255,255,255,.07);border-radius:3px;overflow:hidden}
    .tp-rbar-fill{height:100%;border-radius:3px;background:linear-gradient(to right,var(--gold),var(--gold-light));transition:width .8s ease}
    .tp-rbar-pct{font-family:var(--ft);font-size:9px;color:var(--gold);min-width:34px;text-align:right}

    .tp-revlist{display:flex;flex-direction:column;gap:16px}
    .tp-revc{background:var(--surface2);border:1px solid var(--gold-border);border-radius:12px;
      padding:22px 24px;background-image:radial-gradient(ellipse at top right,rgba(201,168,76,.05),transparent 60%);
      transition:border-color .2s}
    .tp-revc:hover{border-color:rgba(201,168,76,.4)}
    .tp-rev-head{display:flex;align-items:center;gap:12px;margin-bottom:14px}
    .tp-rev-av{width:42px;height:42px;border-radius:50%;border:1px solid var(--gold-border);
      background:var(--gold-dim);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}
    .tp-rev-name{font-family:var(--ft);font-size:11px;color:var(--text);font-weight:600}
    .tp-rev-loc{font-family:var(--fb);font-size:13px;color:var(--muted);font-style:italic;margin-top:1px}
    .tp-rev-stars{color:var(--gold);font-size:12px;letter-spacing:1px}
    .tp-rev-date{margin-left:auto;font-family:var(--ft);font-size:8px;letter-spacing:1px;color:var(--muted);text-transform:uppercase;white-space:nowrap}
    .tp-rev-txt{font-family:var(--fb);font-size:16px;color:var(--text-dim);line-height:1.7}
    .tp-rev-q{font-size:36px;color:rgba(201,168,76,.2);font-family:Georgia;line-height:1;margin-bottom:8px}

    /* ── BOOKING WIDGET ── */
    .tp-widget{position:sticky;top:84px;background:var(--surface);border:1px solid var(--gold-border);
      border-radius:16px;overflow:hidden;
      box-shadow:0 24px 80px rgba(0,0,0,.6),0 0 0 1px rgba(201,168,76,.05);
      background-image:radial-gradient(ellipse at top,rgba(201,168,76,.07),transparent 60%)}

    .tp-wh{background:linear-gradient(135deg,#B8902E 0%,var(--gold) 40%,var(--gold-light) 70%,#C9A84C 100%);
      padding:22px 24px;position:relative;overflow:hidden}
    .tp-wh::before{content:'𓂀';position:absolute;right:-8px;top:-8px;font-size:80px;opacity:.07;color:#0B0900;font-family:serif}
    .tp-wfrom{font-family:var(--ft);font-size:8px;letter-spacing:3px;color:rgba(11,9,0,.6);text-transform:uppercase}
    .tp-wprice{font-family:var(--fd);font-size:46px;color:#0B0900;font-weight:900;line-height:1}
    .tp-wpp{font-family:var(--fb);font-size:14px;color:rgba(11,9,0,.55);margin-top:2px}
    .tp-wold{font-family:var(--fb);font-size:14px;color:rgba(11,9,0,.5);text-decoration:line-through;margin-left:8px}
    .tp-wsave{display:inline-block;background:rgba(11,9,0,.15);border-radius:4px;padding:2px 8px;
      font-family:var(--ft);font-size:8px;letter-spacing:1px;color:rgba(11,9,0,.7);text-transform:uppercase;margin-left:8px}
    .tp-wrating{display:flex;align-items:center;gap:8px;margin-top:10px}
    .tp-wstars{color:rgba(11,9,0,.6);font-size:13px}
    .tp-wrtxt{font-family:var(--ft);font-size:9px;color:rgba(11,9,0,.6);letter-spacing:1px}

    .tp-wb{padding:24px}
    .tp-wf{margin-bottom:14px}
    .tp-wfl{font-family:var(--ft);font-size:8px;letter-spacing:2.5px;color:var(--gold);text-transform:uppercase;margin-bottom:6px}
    .tp-wfi{width:100%;background:rgba(255,255,255,.05);border:1px solid var(--gold-border);
      border-radius:8px;color:var(--text);padding:12px 14px;font-family:var(--fb);font-size:16px;
      outline:none;transition:border-color .2s;color-scheme:dark}
    .tp-wfi:focus{border-color:var(--gold);background:rgba(201,168,76,.04)}
    .tp-wfrow{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .tp-wfs{width:100%;background:rgba(255,255,255,.05);border:1px solid var(--gold-border);
      border-radius:8px;color:var(--text);padding:12px 14px;font-family:var(--fb);font-size:15px;
      cursor:pointer;outline:none;transition:border-color .2s}
    .tp-wfs:focus{border-color:var(--gold)}

    .tp-bk{padding:14px 0;margin:16px 0;border-top:1px solid rgba(201,168,76,.1);border-bottom:1px solid rgba(201,168,76,.1)}
    .tp-bkr{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;
      font-family:var(--fb);font-size:15px;color:var(--muted)}
    .tp-bkr:last-child{margin-bottom:0}
    .tp-bkr.tot{color:var(--text);padding-top:10px;margin-top:6px;border-top:1px solid rgba(201,168,76,.1);
      font-family:var(--ft);font-size:11px;letter-spacing:1px;text-transform:uppercase}
    .tp-bkr.tot .amt{color:var(--gold);font-family:var(--fd);font-size:22px;font-weight:700}

    .tp-bookbtn{width:100%;background:linear-gradient(135deg,var(--gold),var(--gold-light));
      color:#0B0900;border:none;border-radius:8px;padding:17px;font-family:var(--ft);
      font-weight:700;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;cursor:pointer;
      margin-bottom:10px;box-shadow:0 6px 24px rgba(201,168,76,.32);transition:all .3s}
    .tp-bookbtn:hover{box-shadow:0 10px 36px rgba(201,168,76,.55);transform:translateY(-2px)}
    .tp-bookbtn:active{transform:translateY(0)}

    .tp-wabk{width:100%;background:#25D366;color:#fff;border:none;border-radius:8px;padding:14px;
      font-family:var(--ft);font-weight:700;font-size:10px;letter-spacing:2px;text-transform:uppercase;
      cursor:pointer;transition:all .2s;display:block;text-align:center;text-decoration:none}
    .tp-wabk:hover{background:#1fb558}

    .tp-trust{display:flex;gap:0;margin-top:16px;border-top:1px solid rgba(201,168,76,.08);padding-top:16px}
    .tp-trust-i{flex:1;text-align:center;padding:0 5px;border-right:1px solid rgba(201,168,76,.1);
      font-family:var(--ft);font-size:7px;letter-spacing:1px;color:var(--muted);text-transform:uppercase;line-height:1.4}
    .tp-trust-i:last-child{border-right:none}
    .tp-trust-ic{font-size:15px;display:block;margin-bottom:4px;color:var(--gold)}

    .tp-save-pill{display:inline-flex;align-items:center;gap:6px;
      background:rgba(42,160,100,.12);border:1px solid rgba(42,160,100,.25);
      border-radius:20px;padding:5px 14px;margin-bottom:18px;
      font-family:var(--ft);font-size:9px;letter-spacing:1.5px;color:#4CAF82;text-transform:uppercase}

    /* ── RELATED SECTION ── */
    .tp-related{padding:64px 48px;background:var(--deep);border-top:1px solid var(--gold-border);position:relative;z-index:5}
    .tp-rel-head{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:36px}
    .tp-rel-ey{font-family:var(--ft);font-size:9px;letter-spacing:4px;color:var(--gold);text-transform:uppercase;margin-bottom:8px}
    .tp-rel-title{font-family:var(--fd);font-size:clamp(18px,2.5vw,28px);color:var(--text);font-weight:700}
    .tp-rel-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
    @media(max-width:1100px){.tp-related{padding:48px 22px}}
    @media(max-width:900px){.tp-rel-grid{grid-template-columns:1fr}}

    .tp-rc{background:var(--surface);border:1px solid var(--gold-border);border-radius:12px;
      overflow:hidden;cursor:pointer;transition:all .3s cubic-bezier(.25,.8,.25,1)}
    .tp-rc:hover{transform:translateY(-5px);box-shadow:0 16px 50px rgba(0,0,0,.6);border-color:var(--gold)}
    .tp-rc-img-wrap{position:relative;height:170px;overflow:hidden}
    .tp-rc-img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}
    .tp-rc:hover .tp-rc-img{transform:scale(1.06)}
    .tp-rc-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(7,5,13,.85) 0%,transparent 60%)}
    .tp-rc-body{padding:16px}
    .tp-rc-name{font-family:var(--ft);font-size:12px;color:var(--text);font-weight:600;line-height:1.45;margin-bottom:10px;letter-spacing:.3px}
    .tp-rc-foot{display:flex;align-items:center;justify-content:space-between}
    .tp-rc-price{font-family:var(--fd);font-size:20px;color:var(--gold);font-weight:700}
    .tp-rc-dur{font-family:var(--ft);font-size:8px;letter-spacing:1.5px;color:var(--muted);text-transform:uppercase}
    .tp-rc-stars{color:var(--gold);font-size:11px;margin-top:4px;letter-spacing:1px}
    .tp-rc-btn{background:var(--gold-dim);border:1px solid var(--gold-border);color:var(--gold);
      border-radius:6px;padding:7px 14px;font-family:var(--ft);font-size:8px;letter-spacing:1.5px;
      text-transform:uppercase;cursor:pointer;transition:all .2s}
    .tp-rc-btn:hover{background:var(--gold-dim2)}
    /* ── FLOATING ── */
    .tp-wafloat{position:fixed;right:20px;bottom:76px;z-index:900;display:flex;align-items:center;gap:8px;
      background:#25D366;color:#fff;border-radius:30px;padding:11px 18px;text-decoration:none;
      font-family:var(--ft);font-weight:700;font-size:10px;letter-spacing:1px;text-transform:uppercase;
      box-shadow:0 6px 28px rgba(37,211,102,.45);transition:all .25s}
    .tp-wafloat:hover{box-shadow:0 8px 36px rgba(37,211,102,.6);transform:translateY(-2px)}
    .tp-scrolltop{position:fixed;right:20px;bottom:22px;z-index:900;width:40px;height:40px;
      border-radius:8px;background:var(--gold-dim);border:1px solid var(--gold);color:var(--gold);
      cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;transition:all .25s}
    .tp-scrolltop:hover{background:var(--gold-dim2);box-shadow:0 4px 20px rgba(201,168,76,.3)}
  `}</style>
);

// ─────────────────────────────────────────────────────────────
//  BOOKING WIDGET
// ─────────────────────────────────────────────────────────────
function BookingWidget({ tour, onBook }) {
  const [adults,   setAdults]   = useState(2);
  const [children, setChildren] = useState(0);
  const [date,     setDate]     = useState("");

  const adultAmt  = adults   * tour.price;
  const childAmt  = children * (tour.price * 0.5);
  const total     = adultAmt + childAmt;
  const savings   = tour.originalPrice ? (tour.originalPrice - tour.price) * adults : 0;

  const waMsg = encodeURIComponent(
    `Hi! I'd like to book "${tour.name}"\nDate: ${date || "TBD"}\nAdults: ${adults}, Children: ${children}\nTotal: $${total.toFixed(0)}`
  );

  return (
    <div className="tp-widget">
      {/* Header */}
      <div className="tp-wh">
        <div className="tp-wfrom">From</div>
        <div style={{ display:"flex", alignItems:"baseline", gap:8, flexWrap:"wrap" }}>
          <div className="tp-wprice">${tour.price}</div>
          {tour.originalPrice && <>
            <span className="tp-wold">${tour.originalPrice}</span>
            <span className="tp-wsave">Save {Math.round((1 - tour.price/tour.originalPrice)*100)}%</span>
          </>}
        </div>
        <div className="tp-wpp">per person</div>
        <div className="tp-wrating">
          <span className="tp-wstars">{"★".repeat(Math.floor(tour.rating))}</span>
          <span className="tp-wrtxt">{tour.rating} · {tour.reviewCount?.toLocaleString()} reviews</span>
        </div>
      </div>

      {/* Body */}
      <div className="tp-wb">
        {savings > 0 && (
          <div className="tp-save-pill">🎉 You save ${savings.toFixed(0)} today</div>
        )}

        <div className="tp-wf">
          <div className="tp-wfl">Select Travel Date</div>
          <input type="date" className="tp-wfi" value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={e => setDate(e.target.value)} />
        </div>

        <div className="tp-wfrow">
          <div className="tp-wf">
            <div className="tp-wfl">Adults</div>
            <select className="tp-wfs" value={adults} onChange={e => setAdults(+e.target.value)}>
              {[1,2,3,4,5,6,7,8,9,10].map(n => (
                <option key={n} value={n}>{n} Adult{n>1?"s":""}</option>
              ))}
            </select>
          </div>
          <div className="tp-wf">
            <div className="tp-wfl">Children</div>
            <select className="tp-wfs" value={children} onChange={e => setChildren(+e.target.value)}>
              {[0,1,2,3,4,5,6].map(n => (
                <option key={n} value={n}>{n} {n===1?"Child":"Children"}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Breakdown */}
        <div className="tp-bk">
          <div className="tp-bkr">
            <span>{adults} Adult{adults>1?"s":""} × ${tour.price}</span>
            <span>${adultAmt.toFixed(0)}</span>
          </div>
          {children > 0 && (
            <div className="tp-bkr">
              <span>{children} {children===1?"Child":"Children"} × ${(tour.price*.5).toFixed(0)}</span>
              <span>${childAmt.toFixed(0)}</span>
            </div>
          )}
          <div className="tp-bkr tot">
            <span>Total</span>
            <span className="amt">${total.toFixed(0)}</span>
          </div>
        </div>

        <button id="tp-main-book-btn" className="tp-bookbtn"
          onClick={() => onBook({ adults, children, date, total })}>
          ✦ &nbsp; Book This Tour Now
        </button>

        <a href={`https://wa.me/201068257754?text=${waMsg}`}
          target="_blank" rel="noreferrer" className="tp-wabk">
          💬 &nbsp; Book via WhatsApp
        </a>

        <div className="tp-trust">
          {[["🔒","Secure","Payment"],["✓","Free","Cancel"],["⚡","Instant","Confirm"],["🏆","Best","Price"]].map(([ic,l1,l2])=>(
            <div key={l1} className="tp-trust-i">
              <span className="tp-trust-ic">{ic}</span>
              {l1}<br/>{l2}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────────────────────
export default function TourPage() {
  const { tourId }  = useParams();
  const navigate    = useNavigate();
  const tour        = getTourById(tourId);

  const [heroImg,  setHeroImg]  = useState(0);
  const [tab,      setTab]      = useState("overview");
  const [sticky,   setSticky]   = useState(false);
  const [fav,      setFav]      = useState(false);

  // Scroll top on mount
  useEffect(() => { window.scrollTo({ top:0, behavior:"auto" }); }, [tourId]);

  // Sticky bar
  useEffect(() => {
    const fn = () => setSticky(window.scrollY > 460);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Auto-cycle images
  useEffect(() => {
    if (!tour?.images?.length) return;
    const id = setInterval(() => setHeroImg(i => (i+1) % tour.images.length), 5500);
    return () => clearInterval(id);
  }, [tour]);

  // ── NOT FOUND ──
  if (!tour) return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
      height:"100vh", background:"var(--obsidian)", gap:20 }}>
      <GlobalStyles />
      <div style={{ fontFamily:"var(--fd)", fontSize:52, color:"var(--gold)" }}>𓂀</div>
      <div style={{ fontFamily:"var(--ft)", fontSize:13, letterSpacing:3, color:"var(--text)" }}>TOUR NOT FOUND</div>
      <button onClick={() => navigate("/")}
        style={{ background:"var(--gold-dim)", border:"1px solid var(--gold-border)", color:"var(--gold)",
          borderRadius:6, padding:"10px 24px", fontFamily:"var(--ft)", fontSize:10,
          letterSpacing:2, cursor:"pointer", textTransform:"uppercase" }}>
        ← Return Home
      </button>
    </div>
  );

  const related = getRelatedTours(tour.relatedTours || []);

  const handleBook = booking => {
    alert(`✦ Booking Received!\n\n${tour.name}\nDate: ${booking.date || "TBD"}\nGuests: ${booking.adults} adults, ${booking.children} children\nTotal: $${booking.total.toFixed(0)}\n\nOur team will contact you within 2 hours.`);
  };

  const TABS = [
    { id:"overview",  label:"Overview"  },
    { id:"includes",  label:"Includes"  },
    { id:"itinerary", label:"Itinerary" },
    { id:"reviews",   label:"Reviews"   },
  ];

  return (
    <div style={{ background:"var(--obsidian)", minHeight:"100vh", position:"relative" }}>
      <GlobalStyles />
      <div className="tp-bg" />

      {/* ── STICKY BAR ── */}
      <div className={`tp-sticky${sticky ? " on" : ""}`}>
        <span className="tp-sticky-name">{tour.name.length > 55 ? tour.name.slice(0,55)+"…" : tour.name}</span>
        <span style={{ color:"var(--gold)", fontSize:12, letterSpacing:2 }}>{"★".repeat(Math.floor(tour.rating))}</span>
        <span style={{ fontFamily:"var(--fb)", fontSize:13, color:"var(--muted)" }}>
          {tour.rating} ({tour.reviewCount?.toLocaleString()})
        </span>
        <span className="tp-sticky-price">From ${tour.price}</span>
        <button className="tp-sticky-btn" onClick={() => document.getElementById("tp-main-book-btn")?.click()}>
          Book Now ✦
        </button>
      </div>

      {/* ── NAVBAR ── */}
      <nav className="tp-nav">
        <button className="tp-back" onClick={() => navigate(`/city/${tour.cityId}`)}>
          ← {tour.cityName}
        </button>
        <span className="tp-brand">GOLDEN <span>Egypt Tours</span></span>
        <div className="tp-nav-r">
          <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="tp-wa-nav">
            💬 WhatsApp
          </a>
          <button className="tp-booknow" onClick={() => document.getElementById("tp-main-book-btn")?.click()}>
            Book Now
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="tp-hero">
        {/* Animated BG */}
        <div className="tp-hero-bg" style={{ backgroundImage:`url(${tour.images[heroImg]})` }} />
        <div className="tp-hero-grid" />
        <div className="tp-hero-ov" />

        {/* Scrolling band */}
        <div className="tp-band">
          <span className="tp-band-txt">
            𓂀 &nbsp; {tour.cityName} &nbsp; 𓃭 &nbsp; Golden Egypt Tours &nbsp; 𓆑 &nbsp;
            {tour.name} &nbsp; 𓇋 &nbsp; Private Luxury Experiences &nbsp; 𓅓 &nbsp;
            {tour.cityName} &nbsp; 𓂀 &nbsp; Golden Egypt Tours &nbsp; 𓃭
          </span>
        </div>

        {/* Badges */}
        <div className="tp-hero-badges">
          {(tour.badges||[]).map((b,i) => (
            <span key={b}
              className={`tp-hbadge${b==="HOT"||b==="Best Seller"?" hot":b==="New"||b==="NEW"?" new":""}`}
              style={{ animationDelay:`${i*.1}s` }}>
              {b}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="tp-hero-acts">
          <button className="tp-act" title="Share"
            onClick={() => navigator.share?.({ title:tour.name, url:window.location.href })}>↗</button>
          <button className="tp-act" title={fav?"Saved":"Save"}
            onClick={() => setFav(v=>!v)}
            style={{ color: fav ? "#e55" : "var(--gold)" }}>
            {fav ? "♥" : "♡"}
          </button>
        </div>
{/* Thumbnail strip */}
        <div className="tp-thumbs">
          {(tour.images||[]).map((src,i) => (
            <div key={i} className={`tp-thumb${heroImg===i?" on":""}`} onClick={() => setHeroImg(i)}>
              <img src={src} alt={`View ${i+1}`}
                onError={e => { e.target.src=`https://placehold.co/72x52/0C0A14/C9A84C?text=${i+1}`; }} />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="tp-hero-cnt">
          <div className="tp-hero-ey">
            {tour.cityName} &nbsp;·&nbsp; {tour.type==="package" ? "Multi-Day Package" : "Day Experience"} &nbsp;·&nbsp; Egypt
          </div>
          <h1 className="tp-htitle">{tour.name}</h1>
          <p className="tp-htagline">{tour.tagline}</p>

          <div className="tp-hmeta">
            {[
              { i:"⏱", t:tour.duration },
              { i:"👥", t:`${tour.groupSize} pax` },
              { i:"🎯", t:tour.difficulty },
              { i:"🗣️", t:(tour.language||[]).slice(0,3).join(" · ") },
            ].map((m,idx) => (
              <>
                <span key={m.t} className="tp-hmi"><span className="i">{m.i}</span> {m.t}</span>
                {idx < 3 && <span className="tp-hsep" />}
              </>
            ))}
          </div>

          <div className="tp-hrating">
            <span className="tp-hstars">{"★".repeat(Math.floor(tour.rating))}</span>
            <span className="tp-hscore">{tour.rating}</span>
            <span className="tp-hcount">({tour.reviewCount?.toLocaleString()} reviews)</span>
            <span className="tp-htop">✦ Top Rated</span>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div className="tp-crumb">
        <a href="/" onClick={e=>{e.preventDefault();navigate("/")}}>Home</a>
        <span className="sep">›</span>
        <a href="/" onClick={e=>{e.preventDefault();navigate(`/city/${tour.cityId}`)}}>{tour.cityName}</a>
        <span className="sep">›</span>
        <span className="cur">{tour.name}</span>
      </div>

      {/* ── QUICK BAR ── */}
      <div className="tp-qbar">
        {[
          { ic:"⏱",  l:"Duration",      v:tour.duration },
          { ic:"👥",  l:"Group Size",    v:`Max ${tour.groupSize} people` },
          { ic:"🎯",  l:"Difficulty",    v:tour.difficulty },
          { ic:"🗣️", l:"Languages",      v:(tour.language||[]).slice(0,3).join(" · ") },
          { ic:"🚗",  l:"Hotel Pickup",  v:"Included" },
          { ic:"🎫",  l:"Entry Tickets", v:"Included" },
        ].map(q => (
          <div key={q.l} className="tp-qi">
            <span className="tp-qi-ic">{q.ic}</span>
            <div><div className="tp-qi-l">{q.l}</div><div className="tp-qi-v">{q.v}</div></div>
          </div>
        ))}
      </div>

      {/* ── BODY ── */}
      <div className="tp-body">

        {/* ── LEFT ── */}
        <div>
          <h1 className="tp-main-title">{tour.name}</h1>

          <div className="tp-rrow">
            <span className="tp-stars">{"★".repeat(Math.floor(tour.rating))}{"☆".repeat(5-Math.floor(tour.rating))}</span>
            <span className="tp-score">{tour.rating}</span>
            <span className="tp-rcount">({tour.reviewCount?.toLocaleString()} verified reviews)</span>
            <span className="tp-top-tag">✦ Top Rated {tour.cityName}</span>
          </div>

          {/* TABS */}
          <div className="tp-tabs">
            {TABS.map(t => (
              <button key={t.id} className={`tp-tab${tab===t.id?" on":""}`} onClick={() => setTab(t.id)}>
                {t.label}
              </button>
            ))}
          </div>

          {/* ═══ OVERVIEW ═══ */}
          <div className={`tp-panel${tab==="overview"?" on":""}`}>
            <p className="tp-body-txt">{tour.overview}</p>

            <div className="tp-hls">
              <div className="tp-sec-h">Tour Highlights</div>
              {(tour.highlights||[]).map((h,i) => (
                <div key={i} className="tp-hl">
                  <div className="tp-hl-ic">◆</div>
                  <div className="tp-hl-tx">{h}</div>
                </div>
              ))}
            </div>

            <div className="tp-icards">
              {[
                { ic:"⏱",  l:"Duration",    v:tour.duration },
                { ic:"👥",  l:"Group Size",  v:`Max ${tour.groupSize}` },
                { ic:"🎯",  l:"Difficulty",  v:tour.difficulty },
                { ic:"👶",  l:"Min. Age",    v:tour.minAge===0?"All ages":`${tour.minAge}+ years` },
              ].map(c => (
                <div key={c.l} className="tp-icard">
                  <div className="tp-icard-ic">{c.ic}</div>
                  <div className="tp-icard-l">{c.l}</div>
                  <div className="tp-icard-v">{c.v}</div>
                </div>
              ))}
            </div>

            {tour.meetingPoint && (
              <div className="tp-pblock info">
                <div className="tp-pblock-l">📍 Meeting Point</div>
                <div className="tp-pblock-t">{tour.meetingPoint}</div>
              </div>
            )}
            {tour.cancellation && (
              <div className="tp-pblock ok">
                <div className="tp-pblock-l">✓ Cancellation Policy</div>
                <div className="tp-pblock-t">{tour.cancellation}</div>
              </div>
            )}
          </div>

          {/* ═══ INCLUDES ═══ */}
          <div className={`tp-panel${tab==="includes"?" on":""}`}>
            <div className="tp-sec-h">What's Included</div>
            <div className="tp-incgrid">
              {(tour.includes||[]).map((inc,i) => (
                <div key={i} className="tp-inc">
                  <span className="tp-inc-ic">{inc.icon}</span>
                  <span className="tp-inc-l">{inc.label}</span>
                </div>
              ))}
            </div>

            <div className="tp-sec-h" style={{ marginTop:32 }}>Not Included</div>
            <ul className="tp-exclist">
              {(tour.excludes||[]).map((e,i) => (
                <li key={i} className="tp-exc">{e}</li>
              ))}
            </ul>
          </div>

          {/* ═══ ITINERARY ═══ */}
          <div className={`tp-panel${tab==="itinerary"?" on":""}`}>
            <div className="tp-sec-h">Detailed Itinerary</div>
            <div className="tp-itin">
              {(tour.itinerary||[]).map((step,i) => (
                <div key={i} className="tp-step">
                  <div className="tp-step-left">
                    <div className="tp-step-marker">{step.icon || i+1}</div>
                    <div className="tp-step-line" />
                  </div>
                  <div className="tp-step-cnt">
                    <div className="tp-step-time">⏱ {step.time}</div>
                    <div className="tp-step-title">{step.title}</div>
                    <div className="tp-step-desc">{step.description}</div>
                    {(step.tags||[]).length > 0 && (
                      <div className="tp-step-tags">
                        {step.tags.map(tg => <span key={tg} className="tp-stag">{tg}</span>)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ═══ REVIEWS ═══ */}
          <div className={`tp-panel${tab==="reviews"?" on":""}`}>
            {/* Summary */}
            <div className="tp-rev-sum">
              <div style={{ textAlign:"center", minWidth:96 }}>
                <div className="tp-rbig">{tour.rating}</div>
                <div className="tp-rof">out of 5.0</div>
                <div className="tp-rbig-stars">{"★".repeat(Math.floor(tour.rating))}</div>
                <div className="tp-rtotal">{tour.reviewCount?.toLocaleString()} reviews</div>
              </div>
              <div className="tp-rbars">
                {[
                  { l:"Guide Quality",    p:98 },
                  { l:"Value for Money",  p:94 },
                  { l:"Organisation",     p:96 },
                  { l:"Experience",       p:99 },
                  { l:"Transport",        p:93 },
                ].map(b => (
                  <div key={b.l} className="tp-rbar-row">
                    <span className="tp-rbar-l">{b.l}</span>
                    <div className="tp-rbar-track">
                      <div className="tp-rbar-fill" style={{ width:`${b.p}%` }} />
                    </div>
                    <span className="tp-rbar-pct">{b.p}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Review cards */}
            <div className="tp-revlist">
              {(tour.reviews||[]).map((rev,i) => (
                <div key={i} className="tp-revc">
                  <div className="tp-rev-q">"</div>
                  <div className="tp-rev-head">
                    <div className="tp-rev-av">{rev.avatar||"👤"}</div>
                    <div>
                      <div className="tp-rev-name">{rev.name}</div>
                      <div className="tp-rev-loc">{rev.location}</div>
                      <div className="tp-rev-stars">{"★".repeat(rev.rating)}</div>
                    </div>
                    <div className="tp-rev-date">{rev.date}</div>
                  </div>
                  <div className="tp-rev-txt">{rev.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT — BOOKING WIDGET ── */}
        <aside>
          <BookingWidget tour={tour} onBook={handleBook} />
        </aside>
      </div>

      {/* ── RELATED TOURS ── */}
      {related.length > 0 && (
        <section className="tp-related">
          <div className="tp-rel-head">
            <div>
              <div className="tp-rel-ey">✦ You May Also Love</div>
              <div className="tp-rel-title">More in {tour.cityName}</div>
            </div>
            <button onClick={() => navigate(`/city/${tour.cityId}`)}
              style={{ background:"var(--gold-dim)", border:"1px solid var(--gold-border)", color:"var(--gold)",
                borderRadius:6, padding:"10px 20px", fontFamily:"var(--ft)", fontSize:9,
                letterSpacing:2, textTransform:"uppercase", cursor:"pointer" }}>
              View All ›
            </button>
          </div>

          <div className="tp-rel-grid">
            {related.map(r => (
              <div key={r.id} className="tp-rc" onClick={() => navigate(`/tour/${r.id}`)}>
                <div className="tp-rc-img-wrap">
                  <img src={r.images?.[0]} alt={r.name} className="tp-rc-img"
                    onError={e => { e.target.src=`https://placehold.co/400x170/0C0A14/C9A84C?text=Tour`; }} />
                  <div className="tp-rc-ov" />
                </div>
                <div className="tp-rc-body">
                  <div className="tp-rc-name">{r.name}</div>
                  <div className="tp-rc-stars">{"★".repeat(Math.floor(r.rating))}</div>
                  <div className="tp-rc-foot">
                    <div>
                      <div className="tp-rc-price">From ${r.price}</div>
                      <div className="tp-rc-dur">⏱ {r.duration}</div>
                    </div>
                    <button className="tp-rc-btn">View ›</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── FLOATING ── */}
      <a href="https://wa.me/201068257754" target="_blank" rel="noreferrer" className="tp-wafloat">
        <span style={{ fontSize:16 }}>💬</span> WhatsApp Us
      </a>
      <button className="tp-scrolltop" onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}>▲</button>
    </div>
  );
}
