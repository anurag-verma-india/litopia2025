"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { tiles } from "@/constants";

const InteractiveTiles = () => {
  const { theme } = useTheme();
  const [hoveredText, setHoveredText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const dualTheme = {
    light: {
      bg: "bg-zinc-900",
      tile: "bg-gradient-to-br from-theme-red/10 to-theme-gold/10",
      text: "text-theme-gold",
      border: "border-theme-gold/10",
      hover:
        "hover:shadow-xl hover:scale-[1.02] hover:from-theme-red/15 hover:to-theme-gold/15",
      shadow: "shadow-lg shadow-theme-gold/5",
      description: "text-gray-300",
    },
    dark: {
      bg: "bg-zinc-900",
      tile: "bg-gradient-to-br from-theme-red/10 to-theme-gold/10",
      text: "text-theme-gold",
      border: "border-theme-gold/10",
      hover:
        "hover:shadow-xl hover:scale-[1.02] hover:from-theme-red/15 hover:to-theme-gold/15",
      shadow: "shadow-lg shadow-theme-gold/5",
      description: "text-gray-300",
    },
  };

  const currentTheme = theme === "dark" ? dualTheme.dark : dualTheme.light;

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

  useEffect(() => {
    if (!isHovering && !selectedText) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % tiles.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovering, selectedText]);

  const handleTileClick = (text: string) => {
    setSelectedText(text === selectedText ? "" : text);
  };

  const handleMouseEnter = (text: string) => {
    setHoveredText(text);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setHoveredText("");
    setIsHovering(false);
  };

  const getCurrentContent = () => {
    const currentText = hoveredText || selectedText || tiles[currentIndex].text;
    return tiles.find((tile) => tile.text === currentText) || tiles[0];
  };

  return (
    <section className="w-full py-16 px-4 bg-zinc-900/50">
      {/* Section Title */}
      {/* <div className="text-center mb-16">
        <h2
          className={`text-4xl md:text-5xl font-bold ${currentTheme.text} mb-4`}
        >
          Our Events
        </h2>
        <p className={`text-xl ${currentTheme.description} max-w-3xl mx-auto`}>
          Discover our exciting lineup of events and activities designed to
          inspire, engage, and connect our community.
        </p>
      </div> */}

      <div
        className={`max-w-7xl mx-auto rounded-3xl p-8 md:p-12 transition-all duration-300 border ${currentTheme.border} ${currentTheme.bg}`}
      >
        <div
          className="grid gap-6 mb-12"
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
                ${currentTheme.tile} 
                rounded-2xl p-8
                cursor-pointer 
                ${currentTheme.hover}
                transition-all duration-500
                ${currentTheme.shadow}
                relative 
                overflow-hidden
                group
                border ${currentTheme.border}
                ${
                  hoveredText === tile.text || selectedText === tile.text
                    ? "scale-[1.02] shadow-2xl from-theme-red/20 to-theme-gold/20"
                    : ""
                }
                after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/10 after:to-transparent after:pointer-events-none
              `}
              onMouseEnter={() => handleMouseEnter(tile.text)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleTileClick(tile.text)}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-7xl transform-gpu scale-100 group-hover:scale-110 transition-transform duration-300">
                  {tile.emoji}
                </span>
              </div>
              <p
                className={`${currentTheme.text} font-bold relative z-10 text-xl md:text-2xl`}
              >
                {tile.text}
              </p>
            </div>
          ))}
        </div>

        {/* Content Display Section */}
        <div
          className={`space-y-6 transition-all duration-300 p-8 rounded-2xl border ${currentTheme.border} ${currentTheme.tile}`}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold ${currentTheme.text} tracking-tight`}
          >
            {getCurrentContent().title}
          </h2>
          <p
            className={`${currentTheme.description} text-lg md:text-xl leading-relaxed`}
          >
            {getCurrentContent().description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTiles;
