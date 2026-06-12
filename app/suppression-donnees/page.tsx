import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Suppression des données — Zaalouni105.com",
  description:
    "Comment supprimer vos données et commentaires liés à Zaalouni105.com.",
};

export default function SuppressionDonnees() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/"
        className="text-sm text-faded underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
      >
        ← Retour au mémorial
      </Link>
      <h1 className="font-display mt-6 text-3xl uppercase text-cream sm:text-4xl">
        Suppression des données
      </h1>
      <p className="mt-2 text-sm text-faded">
        Dernière mise à jour : 12 juin 2026
      </p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-faded">
        <p>
          Zaalouni105.com ne stocke aucune donnée utilisateur sur ses propres
          serveurs. Les seules données vous concernant sont les commentaires
          que vous publiez volontairement via le module Facebook, hébergés par
          Meta. Voici comment les supprimer :
        </p>

        <section>
          <h2 className="font-display text-xl uppercase text-cream">
            1. Supprimer un commentaire
          </h2>
          <p className="mt-3">
            Dans le mur des supporters, survolez votre commentaire, cliquez sur
            la croix ou le menu (⋯) à côté de celui-ci, puis choisissez
            « Supprimer ». La suppression est immédiate et définitive.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase text-cream">
            2. Révoquer l'application « Zaalouni105 » de votre compte Facebook
          </h2>
          <p className="mt-3">
            Sur Facebook : <span className="text-cream">Paramètres et
            confidentialité → Paramètres → Apps et sites web</span> →
            recherchez « Zaalouni105 » → <span className="text-cream">
            Supprimer</span>. Cela révoque tout lien entre votre compte et le
            site. Vous pouvez aussi y demander la suppression des données
            associées à l'application.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase text-cream">
            3. Demande par e-mail
          </h2>
          <p className="mt-3">
            Pour toute demande de suppression (commentaire, donnée, photo),
            écrivez-nous à{" "}
            <a
              className="underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
              href="mailto:ayamdi@gmail.com?subject=Suppression%20de%20donn%C3%A9es%20-%20Zaalouni105.com"
            >
              ayamdi@gmail.com
            </a>{" "}
            avec l'objet « Suppression de données ». Nous traitons les demandes
            sous 30 jours.
          </p>
        </section>

        <p className="text-sm">
          Voir aussi notre{" "}
          <Link
            className="underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
            href="/confidentialite"
          >
            politique de confidentialité
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
