(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const c=document.querySelector("#mobile-nav-bar"),n=document.querySelector("#menu-btn"),s=document.querySelector("#close"),u=document.querySelectorAll("a");n.addEventListener("click",()=>{c.style.transform="scaleY(1)",n.style.display="none",s.style.display="flex"});s.addEventListener("click",()=>{c.style.transform="scaleY(0)",s.style.display="none",n.style.display="flex"});u.forEach(l=>{l.addEventListener("click",()=>{c.style.display="none"})});
