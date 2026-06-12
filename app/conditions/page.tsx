import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions de service — Zaalouni105.com",
  description: "Conditions d'utilisation du site mémorial Zaalouni105.com.",
};

export default function Conditions() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/"
        className="text-sm text-faded underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
      >
        ← Retour au mémorial
      </Link>
      <h1 className="font-display mt-6 text-3xl uppercase text-cream sm:text-4xl">
        Conditions de service
      </h1>
      <p className="mt-2 text-sm text-faded">
        Dernière mise à jour : 12 juin 2026
      </p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-faded">
        <section>
          <h2 className="font-display text-xl uppercase text-cream">
            1. Objet du site
          </h2>
          <p className="mt-3">
            Zaalouni105.com est un site hommage non commercial, réalisé par des
            supporters, dédié au but de Ghaith Zaalouni lors du derby EST –
            Club Africain du 10 mai 2026. Il est fourni « tel quel », à titre
            gratuit et informatif. Il n'est affilié ni au Club Africain, ni à
            la FTF, ni à la LNFP, ni à Meta. En utilisant le site, vous
            acceptez les présentes conditions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase text-cream">
            2. Le mur des supporters
          </h2>
          <p className="mt-3">
            Les commentaires sont publiés via le module Facebook, sous votre
            responsabilité et dans le respect des{" "}
            <a
              className="underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
              href="https://www.facebook.com/legal/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              conditions de Meta
            </a>
            . Sont interdits : insultes, propos haineux ou discriminatoires,
            harcèlement, spam, contenus illégaux ou hors sujet. Nous nous
            réservons le droit de supprimer tout commentaire contraire à ces
            règles, sans préavis. Restez dans l'esprit du lieu : la mémoire
            d'un moment de sport.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase text-cream">
            3. Propriété intellectuelle
          </h2>
          <p className="mt-3">
            Les textes et la mise en page du site sont la propriété de son
            éditeur. Les noms, logos, images, vidéos et musiques cités ou
            intégrés (Club Africain, All4One, extraits de presse, YouTube,
            reels) appartiennent à leurs propriétaires respectifs et sont
            utilisés à titre d'hommage, avec lien vers leurs sources. Tout
            ayant droit peut demander un retrait à{" "}
            <a
              className="underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
              href="mailto:ayamdi@gmail.com"
            >
              ayamdi@gmail.com
            </a>{" "}
            — il sera traité rapidement.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase text-cream">
            4. Responsabilité
          </h2>
          <p className="mt-3">
            Le site est fourni sans garantie d'exactitude ni de disponibilité.
            Les contenus des services tiers intégrés (Facebook, YouTube) et des
            sites liés ne sont pas sous notre contrôle. L'éditeur ne saurait
            être tenu responsable des commentaires publiés par les visiteurs ni
            des interruptions de service.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase text-cream">
            5. Contact
          </h2>
          <p className="mt-3">
            Pour toute question :{" "}
            <a
              className="underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
              href="mailto:ayamdi@gmail.com"
            >
              ayamdi@gmail.com
            </a>
            . Voir aussi la{" "}
            <Link
              className="underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
              href="/confidentialite"
            >
              politique de confidentialité
            </Link>{" "}
            et la page{" "}
            <Link
              className="underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
              href="/suppression-donnees"
            >
              suppression des données
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
