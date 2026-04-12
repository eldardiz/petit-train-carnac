"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "The Route", href: "/routes" },
    { label: "Practical Information", href: "/informations" },
    { label: "Prices & Tickets", href: "/prices" },
    { label: "FAQ", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top announcement banner */}
      <div className="bg-[#3f3053] border-b border-[rgba(213,215,218,0.4)]">
        <div className="max-w-[1280px] mx-auto px-5 xl:px-0 py-[6px] flex items-center justify-center">
          <p className="text-[#f7f7f0] text-base leading-6 tracking-[-0.48px] text-center font-['Roboto',sans-serif]">
            This website is part of Les Petits Trains du Morbihan. Discover our
            other tours in{" "}
            <a href="#" className="underline text-[#f7f7f0]">
              Vannes
            </a>{" "}
            and{" "}
            <a href="#" className="underline text-[#f7f7f0]">
              Quiberon.
            </a>
          </p>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`bg-[#5a4a6e] h-20 flex items-center sticky top-0 z-50 relative ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 xl:px-0 flex items-center justify-between w-full">
          {/* Logo + Desktop nav links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="relative h-11 w-[110px] shrink-0 block">
              <Image
                src="/figma-assets/logo.svg"
                alt="Les Petits Trains du Morbihan"
                fill
                className="object-contain"
              />
            </Link>
            <div className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-[#f7f7f0] text-base leading-6 tracking-[-0.48px] font-['Roboto',sans-serif] whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/prices"
              className="btn-secondary bg-[#5a4a6e] border border-[rgba(255,255,255,0.15)] h-[45px] px-[22px] rounded-[4px] text-white text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap inline-flex items-center"
            >
              See Prices
            </Link>
            <Link
              href="/book"
              className="btn-primary bg-[#f7f7f0] border border-[rgba(0,0,0,0.2)] h-[45px] px-[22px] rounded-[4px] text-[#414651] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap inline-flex items-center"
            >
              Book your tour
            </Link>
          </div>

          {/* Hamburger button — mobile only */}
          <button
            type="button"
            className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10 -mr-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-white origin-center transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white origin-center transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu drawer */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-[#5a4a6e] border-t border-[rgba(255,255,255,0.1)] overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#f7f7f0] text-base leading-6 tracking-[-0.48px] font-['Roboto',sans-serif]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2 border-t border-[rgba(255,255,255,0.15)]">
              <Link
                href="/prices"
                className="btn-secondary bg-[#5a4a6e] border border-[rgba(255,255,255,0.15)] h-[45px] px-[22px] rounded-[4px] text-white text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap inline-flex items-center justify-center"
                onClick={() => setMobileOpen(false)}
              >
                See Prices
              </Link>
              <Link
                href="/book"
                className="btn-primary bg-[#f7f7f0] border border-[rgba(0,0,0,0.2)] h-[45px] px-[22px] rounded-[4px] text-[#414651] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap inline-flex items-center justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Book your tour
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
