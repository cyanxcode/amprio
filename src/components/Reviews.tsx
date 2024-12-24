/*"use client";
import { useEffect } from "react";

const ReviewWidget = () => {
  useEffect(() => {
    // Create script element dynamically
    const sc = document.createElement("script");
    sc.setAttribute("defer", "true");
    sc.setAttribute(
      "src",
      "https://dbwx2z9xa7qt9.cloudfront.net/bundle.js?cachebust=1734595760239"
    );
    sc.setAttribute("theme", "light");
    sc.setAttribute("footer", "false");
    sc.setAttribute("widget-type", "carousel");
    sc.setAttribute("token", "6701188e24dfc75d0080e5be");
    sc.setAttribute("apiurl", "https://server.onlinereviews.tech/api/v0.0.9");
    sc.setAttribute("stats", "true");
    sc.setAttribute("addReview", "true");
    sc.setAttribute("profile-pic", "true");
    sc.setAttribute("review-name", "true");
    sc.setAttribute("positive-stars", "true");
    sc.setAttribute("wl", "true");
    sc.setAttribute("wlndig", "https://go.reviewuplift.com/amprio");
    sc.setAttribute("lang", "us");
    sc.setAttribute(
      "brandStyle",
      "%7B%22sidebar_background%22%3A%22%23ffffff%22%2C%22sidebar_text%22%3A%22%23000000%22%2C%22brand_button_text_color%22%3A%22white%22%2C%22brand_main_color%22%3A%22%23000000%22%2C%22brand_button_border_radius%22%3A%2220px%22%2C%22brand_sidebar_text_color_opacity%22%3A%22%230000001a%22%2C%22brand_button_hover%22%3A%22rgb(0%2C%200%2C%200)%22%2C%22brand_button_active%22%3A%22rgb(0%2C%200%2C%200)%22%2C%22brand_main_color_opacity%22%3A%22%230000001a%22%2C%22brand_font%22%3A%22Montserrat%22%2C%22star_color%22%3A%22%23FBBC05%22%2C%22brand_main_background%22%3A%22%23FBF8F6%22%2C%22brand_card_background%22%3A%22white%22%2C%22poweredByLink%22%3A%22https%3A%2F%2Freviewuplift.com%22%2C%22poweredicon%22%3A%22https%3A%2F%2Frecensioni-io-static-folder.s3.eu-central-1.amazonaws.com%2Fpublic_onlinereviews%2Fapp.reviewuplift.com%2Fpowered.png%22%7D"
    );

    // Append the script to the body or head of the document
    const element = document.getElementById("wid_1734595760239");

    if (element) {
      // If the element exists, append the script
      element.appendChild(sc);
    }

    // Cleanup function to remove the script tag when the component is unmounted
    return () => {
      if (sc.parentNode) {
        sc.parentNode.removeChild(sc);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return <div id="wid_1734595760239"></div>;
};

export default ReviewWidget;
*/
