"use client";
import React, { useState, useEffect } from "react";
import { tiles } from "@/constants";

const InteractiveTiles = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Desktop and Mobile grid layouts
  const gridLayouts = {
    desktop: {
      areas: `
                "speaker medicaps medicaps kite"
                "speaker bookmarked harry harry"
                "podcast detective mic mic"
            `,
      columns: "repeat(4, 1fr)",
      rows: "repeat(3, minmax(180px, auto))",
    },
    mobile: {
      areas: `
                "a"
                "b"
                "c"
                "d"
                "e"
                "f"
                "g"
                "h"
            `,
      columns: "1fr",
      rows: "repeat(8, minmax(120px, auto))",
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-16 px-4 bg-zinc-900/50">
      <div
        className={`max-w-7xl mx-auto rounded-3xl p-8 md:p-12 transition-all duration-300 border border-theme-gold/10 bg-zinc-900/50`}
      >
        <div
          className="grid gap-6"
          style={{
            gridTemplateAreas: isMobile
              ? gridLayouts.mobile.areas
              : gridLayouts.desktop.areas,
            gridTemplateColumns: isMobile
              ? gridLayouts.mobile.columns
              : gridLayouts.desktop.columns,
            gridTemplateRows: isMobile
              ? gridLayouts.mobile.rows
              : gridLayouts.desktop.rows,
          }}
        >
          {tiles.map((tile) => (
            <div
              key={tile.id}
              style={{
                gridArea: isMobile
                  ? tile.gridArea.mobile
                  : tile.gridArea.desktop,
              }}
              className={`
                bg-gradient-to-br from-theme-red/10 to-theme-gold/10
                rounded-2xl p-8
                cursor-pointer 
                transition-all duration-500
                shadow-lg shadow-theme-gold/5
                relative 
                overflow-hidden
                group
                border border-theme-gold/10
                after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/10 after:to-transparent after:pointer-events-none
              `}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-7xl transform-gpu scale-100 group-hover:scale-110 transition-transform duration-300">
                  {tile.emoji}
                </span>
              </div>
              <p
                className={`text-theme-gold font-bold relative z-10 text-xl md:text-2xl`}
              >
                {tile.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveTiles;
