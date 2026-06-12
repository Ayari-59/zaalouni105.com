# Zaalouni105.com

Site mémorial du but de **Ghaith Zaalouni** à la **105ᵉ minute (90+14)** du derby
**EST 0 – 1 Club Africain**, le **10 mai 2026** au stade Hammadi-Agrebi de Radès —
le but qui a offert au Club Africain son **14ᵉ titre de champion de Tunisie**,
le premier depuis 2015.

Site hommage non officiel, réalisé par des supporters.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS 4](https://tailwindcss.com)
- Aucune base de données : une seule page statique.
- Vidéo du but intégrée depuis YouTube.
- Mur de commentaires via le
  [plugin Facebook Comments](https://developers.facebook.com/docs/plugins/comments/),
  rattaché à l'URL canonique `https://zaalouni105.com` : les supporters
  commentent avec leur compte Facebook, où que la page soit servie. Pour
  activer la modération, créer une app Facebook et renseigner la balise
  `fb:app_id` dans `app/layout.tsx`.

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production

```bash
npm run build
npm start
```

Déployable tel quel sur [Vercel](https://vercel.com) (framework auto-détecté),
puis rattacher le domaine `zaalouni105.com` dans les réglages du projet Vercel.

## Les faits

| | |
|---|---|
| Match | 144ᵉ derby de la capitale, EST – CA (29ᵉ journée, Ligue 1 2025-2026) |
| Date | Dimanche 10 mai 2026, stade Hammadi-Agrebi (Radès) |
| Score | EST 0 – 1 Club Africain |
| Buteur | Ghaith Zaalouni (défenseur), 90+14 — la 105ᵉ minute |
| L'action | Tir de Danho repoussé, pénalty réclamé par l'EST ; contre de Kadida qui temporise face à Mériah et sert Zaalouni (latéral droit) : tir foudroyant devant Memmiche. Penalty check… but validé |
| Conséquence | CA champion de Tunisie (14ᵉ titre, le premier depuis 2015), 65 pts, +5 sur l'EST |

Sources : La Presse de Tunisie, WebManagerCenter, Football Tunisien, Panafrica Football.
