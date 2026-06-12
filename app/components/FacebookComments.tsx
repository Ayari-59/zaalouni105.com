"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    FB?: { XFBML: { parse: (element?: Element) => void } };
  }
}

const SDK_SRC =
  "https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v23.0";

export default function FacebookComments() {
  useEffect(() => {
    // SDK déjà chargé (navigation client / HMR) : re-parser les balises XFBML.
    if (window.FB) {
      window.FB.XFBML.parse();
      return;
    }
    if (document.getElementById("facebook-jssdk")) return;
    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = SDK_SRC;
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-comments"
        data-href="https://zaalouni105.com"
        data-width="100%"
        data-numposts="10"
        data-order-by="reverse_time"
        data-colorscheme="dark"
      />
    </>
  );
}
