'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function initButtonCharacterStagger() {
  const offsetIncrement = 0.01;
  const buttons = document.querySelectorAll('[data-button-animate-chars]');
  buttons.forEach(button => {
    const text = button.textContent;
    button.innerHTML = '';
    [...(text ?? '')].forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.transitionDelay = `${index * offsetIncrement}s`;
      if (char === ' ') span.style.whiteSpace = 'pre';
      button.appendChild(span);
    });
  });
}

function initScrollReveal() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  function buildRevealTimeline(section: Element, { start = "top 80%", once = true, duration = 1, ease = "power3.out", immediate = false } = {}) {
    const q = (sel: string) => section.querySelector(sel);
    const tagline   = q("[data-anim='tagline']");
    const title     = q("[data-anim='hero-title']");
    const navbar    = q("[data-anim='navbar']");
    const para      = q("[data-anim='hero-paragraph']");
    const button    = q("[data-anim='hero-button']");
    const logos     = q("[data-anim='logos']");
    const image     = q("[data-anim='image']");
    const element01 = q("[data-anim='element01']");
    const element02 = q("[data-anim='element02']");
    const element03 = q("[data-anim='element03']");

    if (navbar) gsap.set(navbar, { opacity: 0, yPercent: -60, filter: "blur(20px)", willChange: "transform, filter, opacity" });
    const bottomUp = [tagline, title, para, button, logos, image, element01, element02, element03].filter(Boolean) as Element[];
    if (bottomUp.length) gsap.set(bottomUp, { opacity: 0, yPercent: 60, filter: "blur(20px)", willChange: "transform, filter, opacity" });

    const tlOpts: gsap.TimelineVars = { defaults: { duration, ease } };
    if (!immediate) {
      tlOpts.scrollTrigger = { trigger: section, start, toggleActions: once ? "play none none none" : "play none none reverse", once, invalidateOnRefresh: true };
    }

    const tl = gsap.timeline(tlOpts);
    if (tagline)   tl.to(tagline,   { opacity: 1, yPercent: 0, filter: "blur(0px)" });
    if (title)     tl.to(title,     { opacity: 1, yPercent: 0, filter: "blur(0px)" }, "<+=0.12");
    if (navbar)    tl.to(navbar,    { opacity: 1, yPercent: 0, filter: "blur(0px)" }, "<+=0.12");
    if (para)      tl.to(para,      { opacity: 1, yPercent: 0, filter: "blur(0px)" }, "<+=0.12");
    if (button)    tl.to(button,    { opacity: 1, yPercent: 0, filter: "blur(0px)" }, "<+=0.12");
    if (logos)     tl.to(logos,     { opacity: 1, yPercent: 0, filter: "blur(0px)" }, "<+=0.12");
    if (image)     tl.to(image,     { opacity: 1, yPercent: 0, filter: "blur(0px)" }, "<+=0.12");
    if (element01) tl.to(element01, { opacity: 1, yPercent: 0, filter: "blur(0px)" }, "<+=0.12");
    if (element02) tl.to(element02, { opacity: 1, yPercent: 0, filter: "blur(0px)" }, "<+=0.12");
    if (element03) tl.to(element03, { opacity: 1, yPercent: 0, filter: "blur(0px)" }, "<+=0.12");

    tl.eventCallback("onComplete", () => {
      [navbar, ...bottomUp].filter(Boolean).forEach(el => {
        (el as HTMLElement).style.willChange = "auto";
      });
    });

    if (immediate) requestAnimationFrame(() => tl.play(0));
    return tl;
  }

  document.querySelectorAll("[data-anim-section]").forEach(section => {
    const isHero = section.matches("[data-anim-section='hero']");
    buildRevealTimeline(section, { immediate: isHero, start: "top 80%", once: true });
  });
}

export default function AnimationInit() {
  useEffect(() => {
    function init() {
      ScrollTrigger.getAll().forEach(t => t.kill());
      initButtonCharacterStagger();
      initScrollReveal();
    }

    init();

    window.addEventListener('page-transition-start', init);
    return () => window.removeEventListener('page-transition-start', init);
  }, []);

  return null;
}
