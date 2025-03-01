// components/InstaPlugWidget.js
"use client";
import { useEffect } from "react";

const InstaPlugWidget = () => {
  useEffect(() => {
    // Dynamically load the InstaPlug script when the component mounts
    const script = document.createElement("script");
    script.src = "https://app.instaplug.app/platform/instaplug.js";
    script.async = true;

    script.onload = () => {
      (window as any).renderApp({
        containerId: "ec58a637-c056-414c-9e0a-c6b67f32c74c",
        domain: "https://app.instaplug.app/",
        widgetClass: "", // Optional: Add custom class for styling
        fontFamily: "", // Optional: Customize font family
        color: "", // Optional: Customize color
        colorLink: "", // Optional: Customize link color
        colorLinkActive: "", // Optional: Customize active link color
        colorLinkHover: "", // Optional: Customize hover link color
      });
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="ec58a637-c056-414c-9e0a-c6b67f32c74c"></div>;
};

export default InstaPlugWidget;
