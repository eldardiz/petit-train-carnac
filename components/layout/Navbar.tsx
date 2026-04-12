"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top announcement banner */}
      <div className="bg-[#3f3053] border-b border-[rgba(213,215,218,0.4)]">
        <div className="max-w-[1280px] mx-auto px-[5%] py-[6px] flex items-center justify-center">
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
        className={`bg-[#5a4a6e] h-20 flex items-center sticky top-0 z-50 ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-[5%] flex items-center justify-between w-full">
          {/* Logo + Nav links */}
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
              <Link
                href="/"
                className="nav-link text-[#f7f7f0] text-base leading-6 tracking-[-0.48px] font-['Roboto',sans-serif] whitespace-nowrap"
              >
                Home
              </Link>
              <a
                href="#"
                className="nav-link text-[#f7f7f0] text-base leading-6 tracking-[-0.48px] font-['Roboto',sans-serif] whitespace-nowrap flex items-center gap-1"
              >
                The Route
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#f7f7f0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <Link
                href="/informations"
                className="nav-link text-[#f7f7f0] text-base leading-6 tracking-[-0.48px] font-['Roboto',sans-serif] whitespace-nowrap"
              >
                Practical Information
              </Link>
              <Link
                href="/prices"
                className="nav-link text-[#f7f7f0] text-base leading-6 tracking-[-0.48px] font-['Roboto',sans-serif] whitespace-nowrap"
              >
                Prices &amp; Tickets
              </Link>
              <Link
                href="/faqs"
                className="nav-link text-[#f7f7f0] text-base leading-6 tracking-[-0.48px] font-['Roboto',sans-serif] whitespace-nowrap"
              >
                FAQ
              </Link>
              <a
                href="#"
                className="nav-link text-[#f7f7f0] text-base leading-6 tracking-[-0.48px] font-['Roboto',sans-serif] whitespace-nowrap"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-3">
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
        </div>
      </nav>
    </>
  );
}
