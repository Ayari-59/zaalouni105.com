import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Zaalouni105.com",
  description:
    "Politique de confidentialité du site mémorial Zaalouni105.com.",
};

export default function Confidentialite() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/"
        className="text-sm text-faded underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
      >
        ← Retour au mémorial
      </Link>
      <h1 className="font-display mt-6 text-3xl uppercase text-cream sm:text-4xl">
        Politique de confidentialité
      </h1>
      <p className="mt-2 text-sm text-faded">
        Dernière mise à jour : 12 juin 2026
      </p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-faded">
        <section>
          <h2 className="font-display text-xl uppercase text-cream">
            Qui sommes-nous
          </h2>
          <p className="mt-3">
            Zaalouni105.com est un site hommage non commercial, réalisé par des
            supporters, dédié au but de Ghaith Zaalouni lors du derby du 10 mai
            2026. Il n'est affilié ni au Club Africain, ni à la FTF, ni à la
            LNFP. Contact :{" "}
            <a
              className="underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
              href="mailto:ayamdi@gmail.com"
            >
              ayamdi@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase text-cream">
            Données collectées par le site
          </h2>
          <p className="mt-3">
            Le site lui-même ne collecte, ne stocke et ne revend aucune donnée
            personnelle : pas de compte, pas de formulaire, pas d'outil de
            mesure d'audience propre. Notre hébergeur (Vercel Inc.) traite des
            journaux techniques temporaires (adresse IP, type de navigateur)
            nécessaires au fonctionnement et à la sécurité du service.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase text-cream">
            Services tiers intégrés
          </h2>
          <p className="mt-3">
            Certaines fonctionnalités font appel à des services tiers, qui
            peuvent déposer des cookies et traiter vos données selon leurs
            propres politiques :
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2">
            <li>
              <span className="text-cream">Commentaires Facebook</span> (Meta
              Platforms) : le mur des supporters utilise le module officiel de
              commentaires. Si vous commentez, votre commentaire est publié via
              votre compte Facebook et hébergé par Meta —{" "}
              <a
                className="underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                politique de confidentialité de Meta
              </a>
              .
            </li>
            <li>
              <span className="text-cream">Vidéos YouTube</span> (Google) : la
              vidéo du but est intégrée en mode « confidentialité améliorée »
              (youtube-nocookie.com) —{" "}
              <a
                className="underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                politique de confidentialité de Google
              </a>
              .
            </li>
            <li>
              <span className="text-cream">Musique d'ambiance</span> : fichier
              audio hébergé sur le site, aucune donnée transmise à un tiers.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase text-cream">
            Vos droits
          </h2>
          <p className="mt-3">
            Vous pouvez demander la suppression d'un commentaire ou de toute
            donnée vous concernant : consultez la page{" "}
            <Link
              className="underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
              href="/suppression-donnees"
            >
              Suppression des données
            </Link>{" "}
            ou écrivez-nous à{" "}
            <a
              className="underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
              href="mailto:ayamdi@gmail.com"
            >
              ayamdi@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
