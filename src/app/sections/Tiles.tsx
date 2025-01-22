"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const tiles = [
    {
        id: 1,
        text: "Speaker Session",
        gridArea: { desktop: "speaker", mobile: "a" },
        emoji: "🎤",
        imageUrl: "",
        title: "Title 1",
        description: "Description 1",
    },
    {
        id: 2,
        text: "Medicaps Ki Aadalat",
        gridArea: { desktop: "medicaps", mobile: "b" },
        emoji: "⚖️",
        imageUrl: "",
        title: "Title 2",
        description: "Description 2",
    },
    {
        id: 3,
        text: "Bookmarked Meeting",
        gridArea: { desktop: "bookmarked", mobile: "c" },
        emoji: "📑",
        imageUrl: "",
        title: "Title 3",
        description: "Description 3",
    },
    {
        id: 4,
        text: "Kite Festival",
        gridArea: { desktop: "kite", mobile: "d" },
        emoji: "🪁",
        imageUrl: "",
        title: "Title 4",
        description: "Description 4",
    },
    {
        id: 5,
        text: "Harry Potter Quiz",
        gridArea: { desktop: "harry", mobile: "e" },
        emoji: "⚡",
        imageUrl: "",
        title: "Title 5",
        description: "Description 5",
    },
    {
        id: 6,
        text: "Podcast",
        gridArea: { desktop: "podcast", mobile: "f" },
        emoji: "🎧",
        imageUrl: "",
        title: "Title 6",
        description: "Description 6",
    },
    {
        id: 7,
        text: "Detective Game",
        gridArea: { desktop: "detective", mobile: "g" },
        emoji: "🔍",
        imageUrl: "",
        title: "Title 7",
        description: "Description 7",
    },
    {
        id: 8,
        text: "Open Mic",
        gridArea: { desktop: "mic", mobile: "h" },
        emoji: "🎭",
        imageUrl: "",
        title: "Title 8",
        description: "Description 8",
    },
];

const InteractiveTiles = () => {
    const { theme } = useTheme();
    const [hoveredText, setHoveredText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedText, setSelectedText] = useState("");
    const [isHovering, setIsHovering] = useState(false);

    const dualTheme = {
        light: {
            bg: "bg-[#F7E8F4]",
            tile: "bg-gradient-to-br from-[#EDC7E4] to-[#D7AAF2]",
            text: "text-[#4A2D5F]",
            border: "border-[#D7AAF2]",
            gradient: "from-[#EDC7E4] to-[#D7AAF2]",
            hover: "hover:opacity-90",
            shadow: "shadow-[#D7AAF2]/20",
        },
        dark: {
            bg: "bg-[#2D1B38]",
            tile: "bg-gradient-to-br from-[#8E6B89] to-[#8666B9]",
            text: "text-[#EDC7E4]",
            border: "border-[#EDC7E4]",
            gradient: "from-[#8E6B89] to-[#8666B9]",
            hover: "hover:opacity-90",
            shadow: "shadow-[#EDC7E4]/10",
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
            rows: "repeat(3, minmax(120px, auto))",
        },
        mobile: {
            areas: `
        "a b"
        "c d"
        "e e"
        "f g"
        "h h"
      `,
            columns: "repeat(2, 1fr)",
            rows: "repeat(5, minmax(75px, auto))",
            // rows: "repeat(5, 75px)",
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
        if (isMobile) {
            setSelectedText(text);
        }
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
        const currentText =
            hoveredText || selectedText || tiles[currentIndex].text;
        const currentTile = tiles.find((tile) => tile.text === currentText);
        return currentTile;
    };

    return (
        <div
            className={`p-6 ${currentTheme.bg} rounded-lg max-w-4xl mx-auto transition-colors duration-300`}
        >
            <div
                className="grid gap-4 mb-6"
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
                            backgroundImage: tile.imageUrl
                                ? `url(${tile.imageUrl})`
                                : "none",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className={`
              ${currentTheme.tile} 
              rounded-lg p-4 cursor-pointer 
              ${currentTheme.hover} 
              transition-all duration-300 
              shadow-lg hover:shadow-xl 
              ${currentTheme.shadow}
              relative 
              overflow-hidden
              group
              min-h-[100px]
            rows: "repeat(5, minmax(7))",
            `}
                        onMouseEnter={() => handleMouseEnter(tile.text)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleTileClick(tile.text)}
                    >
                        {!tile.imageUrl && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                                <span className="text-7xl transform-gpu scale-100 group-hover:scale-110 transition-transform duration-300">
                                    {tile.emoji}
                                </span>
                            </div>
                        )}
                        <div
                            className={`
              absolute inset-0 
              ${tile.imageUrl ? "bg-black/40" : ""} 
              group-hover:bg-black/50 
              transition-all duration-300
            `}
                        />
                        <p
                            className={`${currentTheme.text} font-bold relative z-10 text-lg`}
                        >
                            {tile.text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Display Section */}
            <div
                className={`
        h-32 relative overflow-hidden
        rounded-lg mb-6 
        flex items-center justify-center 
        border-2 ${currentTheme.border}
        shadow-lg 
        ${currentTheme.shadow}
        transition-all duration-300
        ${currentTheme.tile}
      `}
            >
                {getCurrentContent() && (
                    <>
                        {getCurrentContent()!.imageUrl ? (
                            <div
                                className="absolute inset-0 bg-center bg-cover opacity-50"
                                style={{
                                    backgroundImage: `url(${
                                        getCurrentContent()!.imageUrl
                                    })`,
                                }}
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                <span className="text-4xl">
                                    {getCurrentContent()!.emoji}
                                </span>
                            </div>
                        )}
                    </>
                )}
                <p
                    className={`${currentTheme.text} text-lg font-bold relative z-10 transition-all duration-300`}
                >
                    {hoveredText || selectedText || tiles[currentIndex].text}
                </p>
            </div>

            {/* Heading Section */}
            <div>
                <h2 className={`text-4xl font-bold ${currentTheme.text} mb-4`}>
                    {/* Heading */}
                    {getCurrentContent()!.title}
                </h2>
                <p className={`${currentTheme.text} opacity-90`}>
                    {/* Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s. */}
                    {getCurrentContent()!.description}
                </p>
            </div>
        </div>
    );
};

export default InteractiveTiles;
