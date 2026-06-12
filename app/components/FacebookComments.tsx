"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    FB?: { XFBML: { parse: (element?: Element) => void } };
  }
}

// Volontairement SANS appId : l'accès avancé Facebook Login (requis pour
// que les visiteurs se connectent via une app) est réservé aux entreprises
// vérifiées. Sans app, le module de commentaires fonctionne pour tous.
const SDK_SRC =
  "https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v23.0";

// Où laisser son souvenir quand Meta masque le module (visiteurs européens
// sans consentement cookies, bloqueurs de pub) : commenter directement sur
// Facebook fonctionne toujours. Remplaçable par un post dédié du site.
const POST_FACEBOOK = "https://www.facebook.com/reel/2108389939941426";

export default function FacebookComments() {
  const [indisponible, setIndisponible] = useState(false);

  useEffect(() => {
    // SDK déjà chargé (navigation client / HMR) : re-parser les balises XFBML.
    if (window.FB) {
      window.FB.XFBML.parse();
    } else if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = SDK_SRC;
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.onerror = () => setIndisponible(true);
      document.body.appendChild(script);
    }
    // En Europe, Meta sert un module VIDE (iframe hauteur 0) sans
    // consentement à ses cookies ; un adblock peut aussi bloquer le SDK.
    // Dans les deux cas, on affiche l'alternative au lieu d'un trou béant.
    const timer = window.setTimeout(() => {
      const iframe = document.querySelector(".fb-comments iframe");
      const hauteur = iframe ? iframe.getBoundingClientRect().height : 0;
      if (!window.FB || hauteur < 40) setIndisponible(true);
    }, 7000);
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
      {indisponible && (
        <div className="rounded-xl border border-ca/40 bg-night p-5 text-sm text-faded">
          <p className="font-semibold text-cream">
            Le module de commentaires est masqué chez toi.
          </p>
          <p className="mt-2">
            En Europe, Meta n'affiche ses commentaires qu'aux visiteurs ayant
            accepté ses cookies — et certains bloqueurs de pub le masquent
            aussi. Pas grave : laisse ton souvenir directement sur Facebook,
            ça marche toujours.
          </p>
          <a
            href={POST_FACEBOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display mt-4 inline-block rounded-full bg-ca px-6 py-3 text-base uppercase tracking-wide text-white transition-transform hover:scale-105"
          >
            Laisser mon souvenir sur Facebook
          </a>
        </div>
      )}
    </>
  );
}
