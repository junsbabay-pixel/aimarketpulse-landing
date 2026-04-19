"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 h-[60px] flex items-center px-6 border-b border-gray-200"
      style={{
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-xl font-bold" style={{ fontFamily: "'Fraunces', serif" }}>
            <span className="text-gray-900">AI </span>
            <span className="text-indigo-500">Market</span>
            <span className="text-gray-900"> Pulse</span>
          </span>
        </Link>

        <div className="hidden sm:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-600 transition-colors">
            Get Started
          </Link>
        </div>

        <button className="sm:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className="block h-0.5 w-5 bg-gray-700" />
          <span className="block h-0.5 w-5 bg-gray-700" />
          <span className="block h-0.5 w-5 bg-gray-700" />
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-white border-b border-gray-200 sm:hidden">
          <div className="flex flex-col gap-4 p-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-gray-500 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white text-center hover:bg-indigo-600" onClick={() => setMobileOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
