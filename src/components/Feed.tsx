"use client";
import React, { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Correct cleanup function returning nothing (void)
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div
      className="elfsight-app-0a518c82-a25d-46c0-ba0e-8a3e35d433f6"
      data-elfsight-app-lazy
    />
  );
};

export default InstagramFeed;
