import{d as s,_ as a,o as t,B as o,a as i,w as n,J as c,r as _}from"./index.e6697016.js";import{_ as l}from"./white-logo.d7011fe1.js";var m=s({name:"navbar-component",props:{isWhite:Boolean},setup(e){e.isWhite}}),p="/assets/black-logo.a0f096cc.svg";const d={key:0,src:p,alt:"Educacity Logo"},w={key:1,src:l,alt:"Educacity Logo"};function f(e,h){const r=_("router-link");return t(),o("div",{class:c([e.isWhite?"tw-bg-white tw-border-b tw-border-[#000060]":"tw-bg-primary-dark-color","tw-h-20 tw-w-full tw-flex tw-justify-center tw-items-center"])},[i(r,{to:"/"},{default:n(()=>[e.isWhite?(t(),o("img",d)):(t(),o("img",w))]),_:1})],2)}var g=a(m,[["render",f]]);export{g as N};
