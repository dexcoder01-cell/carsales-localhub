"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./style.scss";
import Avatar from "./images/avatar.png";

const qaData = [
  {
    id: 1,
    user: "mydadsride",
    question: "Obvious question here is the CEL. Had it been scanned for codes?",
    answerUser: "BMW7",
    answer: "No, it has not been scanned for any codes. This warning light indicates a...",
  },
  {
    id: 2,
    user: "carfan22",
    question: "Has the car ever been repainted?",
    answerUser: "Seller",
    answer: "No repaint. All panels are original.",
  },
  {
    id: 3,
    user: "speedster",
    question: "Any rust issues underneath?",
    answerUser: "Seller",
    answer: "No rust at all. Car is clean underneath.",
  },
  {
    id: 4,
    user: "jdmlover",
    question: "Do you have service records?",
    answerUser: "Seller",
    answer: "Yes, full service history available.",
  },
];

const slides = [...qaData, { id: "ask-only", ask: true }];

export default function SellerQA() {

  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (index < slides.length - slidesPerView) {
      setIndex(index + slidesPerView);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - slidesPerView);
    }
  };

  return (
    <div className="qa-wrapper">

      <div className="section-title">
        <span>
          <h2>Seller Q&A ({qaData.length})</h2>
          <a href="#">Ask a question</a>
        </span>

        <span>
          <a href="#">View all</a>
        </span>
      </div>

      <div className="qa-slider">

        {/* LEFT */}
        <button className="arrow left" onClick={prev}>
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2"/>
  </svg>
</button>

        {/* SLIDES */}
        <div className="qa-content">

          <SlideCard slide={slides[index]} />

          {slidesPerView === 2 && slides[index + 1] && (
            <SlideCard slide={slides[index + 1]} />
          )}

        </div>

        {/* RIGHT */}
        <button className="arrow right" onClick={next}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

      </div>
    </div>
  );
}


/* ---------- Slide Card ---------- */

function SlideCard({ slide }) {

  if (slide.ask) {
    return (
      <div className="ask-box">
        <button>Ask a question</button>
      </div>
    );
  }

  return (
    <div className="qa-card">

      <div className="user-profile">
        <Image
          src={Avatar}
          alt="avatar"
          width={32}
          height={32}
        />

        <h4 className="username">{slide.user}</h4>

        <svg
          className="verified"
          width="17"
          height="17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.166 1.286c.952-1.715 3.418-1.715 4.37 0l.425.764.84-.24c1.886-.54 3.63 1.205 3.091 3.09l-.24.841.764.425c1.715.952 1.715 3.418 0 4.37l-.764.425.24.84c.54 1.886-1.205 3.63-3.09 3.091l-.841-.24-.424.764c-.953 1.715-3.419 1.715-4.371 0l-.425-.764-.84.24c-1.886.54-3.63-1.205-3.091-3.09l.24-.841-.764-.424c-1.715-.953-1.715-3.419 0-4.371l.764-.425-.24-.84C1.27 3.015 3.015 1.27 4.9 1.81l.841.24.425-.764z" fill="#4AD493"></path>
          <path d="M11.5 6.351l-3.625 4.5L6 9.033" stroke="#0F2236" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>

      </div>

      <p className="q">Q: {slide.question}</p>

      <div className="user-profile">
        <Image
          src={Avatar}
          alt="avatar"
          width={32}
          height={32}
        />

        <h4 className="username">{slide.answerUser}</h4>
      </div>

      <p className="a">A: {slide.answer}</p>

      <a className="view-answer">View answer</a>

    </div>
  );
}