(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function f(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=f(e);fetch(e.href,t)}})();const i=document.querySelector("#mobile-nav-bar"),m=document.querySelector("#menu-btn"),y=document.querySelector("#close"),p=document.querySelectorAll("a");m.addEventListener("click",()=>{i.style.display="flex"});y.addEventListener("click",()=>{i.style.display="none"});p.forEach(n=>{n.addEventListener("click",()=>{i.style.display="none"})});const h=document.querySelector("#button-left"),g=document.querySelector("#button-right"),S=document.querySelector(".testimony"),c=S.offsetWidth,u=document.querySelector(".testimony-window");let r=0;const d=10,b=document.querySelectorAll(".testimony").length-1,a=n=>{if(n=="left"){if(r==0)return;r=r+c+d,u.style.transform=`translateX(${r}px)`}else if(n=="right"){if(r<-c*b)return;r=r-c-d,u.style.transform=`translateX(${r}px)`}};g.addEventListener("click",()=>a("right"));h.addEventListener("click",()=>a("left"));
