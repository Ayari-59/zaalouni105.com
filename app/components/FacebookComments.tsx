"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    FB?: { XFBML: { parse: (element?: Element) => void } };
  }
}

const SDK_SRC =
  "https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v23.0";

export default function FacebookComments() {
  const [sdkBloque, setSdkBloque] = useState(false);

  useEffect(() => {
    // SDK déjà chargé (navigation client / HMR) : re-parser les balises XFBML.
    if (window.FB) {
      window.FB.XFBML.parse();
      return;
    }
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = SDK_SRC;
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.onerror = () => setSdkBloque(true);
      document.body.appendChild(script);
    }
    // Bloqueur de pub ou cookies tiers : si le SDK n'est pas là au bout de
    // 8 s, on affiche l'aide au lieu de laisser un vide silencieux.
    const timer = window.setTimeout(() => {
      if (!window.FB) setSdkBloque(true);
    }, 8000);
    return () => window.clearTimeout(timer);
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
      {sdkBloque && (
        <div className="mt-4 rounded-xl border border-ca/40 bg-coal p-4 text-sm text-faded">
          <p className="font-semibold text-cream">
            Le module Facebook n'a pas pu se charger.
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Désactive ton bloqueur de publicité pour ce site</li>
            <li>Autorise les cookies tiers et les fenêtres pop-up</li>
            <li>Connecte-toi à facebook.com dans ce navigateur, puis recharge</li>
          </ul>
        </div>
      )}
    </>
  );
}
