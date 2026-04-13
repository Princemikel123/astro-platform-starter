import React from "react";

const leaves = [
  { className: "leaf leaf-1", content: "\u{1F343}" },
  { className: "leaf leaf-2", content: "\u{1F33F}" },
  { className: "leaf leaf-3", content: "\u{1F343}" },
  { className: "leaf leaf-4", content: "\u{1F33F}" },
  { className: "leaf leaf-5", content: "\u{1F343}" },
  { className: "leaf leaf-6", content: "\u{1F33F}" },
  { className: "leaf leaf-7", content: "\u{1F343}" },
  { className: "leaf leaf-8", content: "\u{1F33F}" },
  { className: "leaf leaf-9", content: "\u{1F343}" },
  { className: "leaf leaf-10", content: "\u{1F33F}" },
];

export default function FloatingLeaves() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden" aria-hidden="true">
      {leaves.map((leaf, i) => (
        <span key={i} className={leaf.className} style={{ opacity: 0.4 }}>
          {leaf.content}
        </span>
      ))}
    </div>
  );
}
