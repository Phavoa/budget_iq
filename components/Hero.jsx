"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
  const imageElelement = imageRef.current;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 100;

    if (scrollPosition > scrollThreshold) {
      imageElelement.classList.add("scrolled");
    } else {
      imageElelement.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  }, [])
  return (
    <div className="pb-20 px-4">
      <div className="conatainer mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl pb-6 gradient-title font-bold text-center">
          Manage Your Finances <br /> With BudgetIQ
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-power financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <Button variant="outline" size="lg" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 -z-50">
          <div ref={imageRef} className="hero-image -z-50">
            <Image
              src="/images/banner.jpg"
              alt="hero"
              width={1200}
              height={1200}
              className="rounded-lg shadow-2xl border mx-auto -z-50"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
