import AmbientSound from "./components/AmbientSound";
import Counter from "./components/Counter";
import FacebookComments from "./components/FacebookComments";

const chrono = [
  {
    minute: "0′",
    title: "Coup d'envoi du 144ᵉ derby",
    text: "Radès est sang et or : le derby se joue devant le seul public espérantiste. L'enjeu est limpide — l'EST doit gagner pour garder le titre en vie ; au Club Africain, un point suffit pour être champion.",
  },
  {
    minute: "38′",
    title: "Première frappe cadrée clubiste",
    text: "L'EST domine territorialement et assiège le camp adverse, mais se heurte à un bloc rouge et blanc d'une discipline chirurgicale.",
  },
  {
    minute: "2ᵉ MT",
    title: "Le siège continue",
    text: "Hemidhi puis Sasse entrent pour forcer le verrou. Fumigènes massifs, match interrompu, tension irrespirable dans les tribunes.",
  },
  {
    minute: "90′",
    title: "Quatorze minutes additionnelles",
    text: "L'arbitre autrichien lève sa pancarte : +14. Tout un stade retient son souffle, tout un pays est suspendu au sifflet.",
  },
  {
    minute: "105′",
    title: "La dernière attaque",
    text: "Attaque espérantiste, tir de Danho repoussé. Les joueurs de l'EST réclament un pénalty d'une seule voix. L'arbitre laisse jouer.",
  },
  {
    minute: "105′",
    title: "LE BUT",
    text: "Kadida part en contre et temporise face à Mériah, avant de servir Zaalouni — le latéral droit — lancé à pleine vitesse. Tir foudroyant, Memmiche battu. 0-1.",
    goal: true,
  },
  {
    minute: "VAR",
    title: "Penalty check… but validé",
    text: "Explosion de joie clubiste, puis l'attente : l'arbitre porte la main à son oreillette, et on ne sait pas ce qui se dit. De longues secondes… Au final : rien. But validé.",
  },
  {
    minute: "FIN",
    title: "Le sacre",
    text: "Coup de sifflet final : EST 0 – 1 CA. Le Club Africain est champion de Tunisie pour la 14ᵉ fois — la première depuis 2015.",
  },
];

const stats = [
  { n: "90+14", l: "la minute du but — la 105ᵉ" },
  { n: "14ᵉ", l: "titre de champion de Tunisie" },
  { n: "11", l: "ans d'attente, depuis 2015" },
  { n: "1–0", l: "score final face à l'EST" },
  { n: "65", l: "points, +5 sur l'Espérance" },
  { n: "144ᵉ", l: "derby de la capitale" },
];

const sources = [
  {
    title: "« Sprint exceptionnel de Zaalouni à la 105ème minute » — Football Tunisien",
    url: "https://footballtunisien.com/2026/05/sprint-exceptionnel-de-zaalouni-a-la-105eme-minute/",
  },
  {
    title: "« INCROYABLE : Le Club Africain sacré à la 104e minute ! Le Derby de la folie » — WebManagerCenter",
    url: "https://www.webmanagercenter.com/2026/05/10/566426/incroyable-le-club-africain-sacre-a-la-104e-minute-le-derby-de-la-folie/",
  },
  {
    title: "« Le CA remporte le derby face à l'EST au terme d'un choc intense » — La Presse de Tunisie",
    url: "https://www.lapresse.tn/2026/05/10/le-ca-remporte-le-derby-face-a-lest-au-terme-dun-choc-intense/",
  },
  {
    title: "« Ligue 1 : le Club Africain sacré champion de Tunisie pour la 14e fois » — La Presse de Tunisie",
    url: "https://www.lapresse.tn/2026/05/10/ligue-1-le-club-africain-sacre-champion-de-tunisie-pour-la-14e-fois/",
  },
  {
    title: "« Club Africain score late to defeat Espérance and clinch the title » — Panafrica Football",
    url: "https://www.panafricafootball.com/post/club-africain-win-title/",
  },
  {
    title: "« EST - CA : (0 - 1) Le hold-up parfait » — vu du côté espérantiste",
    url: "https://e-s-tunis.com/fr/news/2026/05/10/15976-est-ca-0-1-le-hold-up-parfait",
  },
];

export default function Home() {
  return (
    <main>
      <AmbientSound />
      {/* ——— HERO ——— */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
        <img
          src="/zaalouni-celebration.jpg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[center_18%] opacity-30 grayscale contrast-110"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7,7,10,0.85) 0%, rgba(7,7,10,0.35) 38%, rgba(7,7,10,0.5) 68%, #07070a 100%), radial-gradient(ellipse 70% 65% at 50% 42%, transparent 0%, rgba(7,7,10,0.55) 70%, #07070a 100%)",
          }}
        />
        <div
          aria-hidden
          className="animate-glow pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(225,29,46,0.32), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 40% at 50% 110%, rgba(225,29,46,0.18), transparent 65%)",
          }}
        />

        <p className="relative text-xs uppercase tracking-[0.35em] text-faded">
          Dimanche 10 mai 2026 · Stade Hammadi-Agrebi, Radès
        </p>

        <h1 className="font-display relative mt-6 leading-none">
          <span className="block text-2xl tracking-[0.25em] text-cream/70 sm:text-4xl">
            90′ + 14′ =
          </span>
          <span className="mt-2 block text-[26vw] text-ca sm:text-[11rem] lg:text-[14rem]">
            105′
          </span>
        </h1>

        <h2 className="font-display relative mt-2 text-3xl uppercase tracking-wide text-cream sm:text-5xl">
          Le but de Zaalouni
        </h2>

        <p className="relative mx-auto mt-6 max-w-xl text-balance text-base text-faded sm:text-lg">
          Quatorze minutes de temps additionnel. Un contre assassin, un
          latéral droit lancé comme une flèche, un tir foudroyant. Et le Club
          Africain champion de Tunisie, onze ans après.
        </p>

        <div className="relative mt-10 inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-white/10 bg-coal px-6 py-3 text-sm sm:text-base">
          <span className="text-faded">EST</span>
          <span className="font-display text-xl text-cream">0 – 1</span>
          <span className="font-semibold text-ca-soft">Club Africain</span>
          <span className="text-faded">·</span>
          <span className="text-cream">⚽ G. Zaalouni 90+14</span>
        </div>

        <p className="relative mt-6 text-lg text-faded" dir="rtl" lang="ar">
          غيث الزعلوني · الدقيقة 105
        </p>
      </section>

      {/* ——— BANDEAU CHAMPIONS ——— */}
      <div className="overflow-hidden border-y border-white/10 bg-ca py-3">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <span
              key={i}
              aria-hidden={i === 1}
              className="font-display px-4 text-lg uppercase tracking-widest text-white"
            >
              Champions de Tunisie 2026 ★ 14ᵉ titre ★ Onze ans après ★ Rouge et
              blanc pour toujours ★&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ——— LA VIDÉO ——— */}
      <section className="mx-auto max-w-4xl px-6 pt-20">
        <p className="text-center text-xs uppercase tracking-[0.35em] text-ca-soft">
          Revivre le but
        </p>
        <h3 className="font-display mt-3 text-center text-3xl uppercase text-cream sm:text-4xl">
          La 105ᵉ, en images
        </h3>
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-coal shadow-[0_0_60px_-15px_rgba(225,29,46,0.45)]">
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube-nocookie.com/embed/qBsRqhUEchg"
              title="Le but de Ghaith Zaalouni contre l'EST — 10 mai 2026"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-faded">
          Voir aussi :{" "}
          <a
            className="underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
            href="https://www.youtube.com/watch?v=px2zzJoAzZM"
            target="_blank"
            rel="noopener noreferrer"
          >
            le résumé complet du derby
          </a>{" "}
          ·{" "}
          <a
            className="underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
            href="https://www.youtube.com/watch?v=yDGGD-RlHIc"
            target="_blank"
            rel="noopener noreferrer"
          >
            le match en intégralité
          </a>
        </p>

      </section>

      {/* ——— COMPTEUR ——— */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-center text-xs uppercase tracking-[0.35em] text-ca-soft">
          Depuis la 105ᵉ minute
        </p>
        <h3 className="font-display mt-3 text-center text-3xl uppercase text-cream sm:text-4xl">
          Le temps passe, le but reste
        </h3>
        <div className="mt-10">
          <Counter />
        </div>
      </section>

      {/* ——— LE RÉCIT ——— */}
      <section className="border-t border-white/10 bg-coal/60">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.35em] text-ca-soft">
            Le récit
          </p>
          <h3 className="font-display mt-3 text-3xl uppercase text-cream sm:text-4xl">
            Une minute pour l'éternité
          </h3>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-faded sm:text-lg">
            <p>
              90ᵉ minute. L'arbitre autrichien lève sa pancarte : quatorze
              minutes additionnelles. Radès est sang et or — le derby se joue
              devant le seul public espérantiste, et tout le stade pousse pour
              le but qui sauverait le titre. Loin des tribunes, le peuple
              clubiste compte les secondes devant les écrans. Un point suffit.
              Huit cent quarante secondes. La bombe est posée sous la table,
              et elle fait tic-tac.
            </p>
            <p>
              105ᵉ minute. Dernière attaque de l'Espérance. Tir de Danho,
              repoussé. Dix bras se lèvent d'un seul coup — pénalty !
              réclament les joueurs de l'EST. Le stade entier se tourne vers
              l'arbitre. Rien. Le jeu continue. Et le ballon, lui, sait déjà
              où il va.
            </p>
            <p className="border-l-2 border-ca pl-5 text-cream">
              Kadida s'en empare et part en contre. Le voilà face à Mériah —
              et l'impensable se produit : il temporise. Deux secondes qui
              durent onze ans. Puis la passe, au moment exact où surgit à
              pleine vitesse le latéral droit que personne n'attendait là :
              Ghaith Zaalouni, Ben Abda et Shili avalés par son sprint. Tir
              foudroyant. Memmiche battu. 0-1.
            </p>
            <p>
              Le ballon est au fond, et le monde se fend en deux. Les joueurs
              clubistes explosent de joie, et avec eux tout un peuple, devant
              chaque écran du pays — pendant que les tribunes sang et or
              réclament encore leur pénalty. Puis tout se fige. L'arbitre
              porte la main à son oreillette. Il écoute. On ne sait pas ce qui
              se dit. Personne ne le sait. La joie reste suspendue en plein
              vol, les secondes pèsent des tonnes… Et puis rien. Rien à
              signaler. But validé. Le Club Africain est champion de Tunisie —
              onze ans après.
            </p>
          </div>
        </div>
      </section>

      {/* ——— CHRONOLOGIE ——— */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.35em] text-ca-soft">
          Minute par minute
        </p>
        <h3 className="font-display mt-3 text-3xl uppercase text-cream sm:text-4xl">
          La chronologie du sacre
        </h3>
        <ol className="relative mt-10 space-y-10 border-l border-white/15 pl-8">
          {chrono.map((item) => (
            <li key={item.title} className="relative">
              <span
                className={`absolute -left-8 top-1 h-3 w-3 -translate-x-1/2 rounded-full ${
                  item.goal ? "bg-ca shadow-[0_0_18px_4px_rgba(225,29,46,0.6)]" : "bg-white/30"
                }`}
              />
              <div
                className={`font-display text-2xl ${
                  item.goal ? "text-ca" : "text-cream"
                }`}
              >
                {item.minute}
              </div>
              <div
                className={`mt-1 text-sm font-semibold uppercase tracking-widest ${
                  item.goal ? "text-ca-soft" : "text-cream"
                }`}
              >
                {item.title}
              </div>
              <p className="mt-2 text-faded">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ——— LES CHIFFRES ——— */}
      <section className="border-t border-white/10 bg-coal/60">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.35em] text-ca-soft">
            Les chiffres
          </p>
          <h3 className="font-display mt-3 text-3xl uppercase text-cream sm:text-4xl">
            Un but, un palmarès
          </h3>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-white/10 bg-night px-5 py-7 text-center"
              >
                <div className="font-display text-3xl text-ca sm:text-4xl">
                  {s.n}
                </div>
                <div className="mt-2 text-sm text-faded">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— SOURCES ——— */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.35em] text-ca-soft">
          Revivre le moment
        </p>
        <h3 className="font-display mt-3 text-3xl uppercase text-cream sm:text-4xl">
          Ils l'ont raconté
        </h3>
        <ul className="mt-8 space-y-4">
          {sources.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-white/10 bg-coal px-5 py-4 transition-colors hover:border-ca/60"
              >
                <span className="text-sm text-cream group-hover:text-ca-soft sm:text-base">
                  {s.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ——— LE MUR DES SUPPORTERS ——— */}
      <section className="border-t border-white/10 bg-coal/60">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.35em] text-ca-soft">
            Le mur des supporters
          </p>
          <h3 className="font-display mt-3 text-3xl uppercase text-cream sm:text-4xl">
            Où étais-tu à la 105ᵉ ?
          </h3>
          <p className="mt-4 text-faded">
            Connecte-toi avec ton compte Facebook et laisse ton souvenir du but
            — il restera gravé ici, pour l'éternité. La connexion s'ouvre dans
            une petite fenêtre : pense à autoriser les pop-ups si ton
            navigateur la bloque.
          </p>
          <div className="mt-8 rounded-2xl border border-white/10 bg-night p-4 sm:p-6">
            <FacebookComments />
          </div>
        </div>
      </section>

      {/* ——— ALL4ONE ——— */}
      <section className="border-t border-white/10 bg-ca">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <a
            href="https://all4one.clubafricain.com/fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-white px-6 py-4 shadow-lg transition-transform hover:scale-105"
          >
            <img
              src="/all4one-logo.png"
              alt="All4One — la plateforme officielle du Club Africain"
              className="h-12 w-auto sm:h-16"
            />
          </a>
          <h3 className="font-display mt-8 text-3xl uppercase text-white sm:text-5xl">
            Pour que le rêve continue
          </h3>
          <p className="mx-auto mt-6 max-w-xl text-white/85">
            La 105ᵉ a rendu le titre au peuple rouge et blanc. La suite
            s'écrit ensemble : All4One est la plateforme officielle du Club
            Africain pour bâtir un club fort et stable — supporter par
            supporter.
          </p>
          <a
            href="https://all4one.clubafricain.com/fr"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display mt-10 inline-block rounded-full bg-night px-10 py-4 text-lg uppercase tracking-wide text-white transition-transform hover:scale-105"
          >
            Rejoindre All4One ❤️🤍
          </a>
          <p className="mt-4 text-sm text-white/70">
            all4one.clubafricain.com
          </p>
        </div>
      </section>

      {/* ——— FOOTER ——— */}
      <footer className="border-t border-white/10 px-6 py-12 text-center">
        <p className="font-display text-xl uppercase text-cream">
          Zaalouni<span className="text-ca">105</span>.com
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm text-faded">
          Site hommage réalisé par des supporters, pour la mémoire. Non affilié
          au Club Africain, à la FTF ni à la LNFP.
        </p>
        <p className="mt-4 text-sm text-faded">
          Rouge et blanc, pour toujours. ❤️🤍 ·{" "}
          <a
            className="underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
            href="https://all4one.clubafricain.com/fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            All4One — pour que le rêve continue
          </a>
        </p>
        <p className="mt-2 text-xs text-faded/80">
          Bande-son : « Pump it up, Za3lagoool » —{" "}
          <a
            className="underline decoration-ca/60 underline-offset-4 hover:text-ca-soft"
            href="https://www.facebook.com/reel/2108389939941426"
            target="_blank"
            rel="noopener noreferrer"
          >
            d'après le reel d'Akrem Krayem
          </a>
        </p>
      </footer>
    </main>
  );
}
