# Asset Inventory

## Policy

- The generated page mockups are the primary visual target but cannot be shipped as page imagery.
- The original UI screenshot is inspiration only.
- The Facebook screenshot is identity/contact evidence only and is prohibited from production use.
- The official logo is the only supplied production-eligible visual.
- Prototype food and event photography must be AI-generated, local, temporary, easy to replace, and never represented as real Yhan's events or customer photos.
- All future site image imports must be centralized in `src/data/gallery.ts`.

## Supplied references

| Canonical path | Dimensions | Classification | Production use | Intended destination/action |
|---|---:|---|---|---|
| `reference/logo/yhans-logo.png` | 2172×724 | Official brand asset | Yes | Copy unchanged to `src/assets/brand/yhans-logo.png` during Phase 2 |
| `reference/mockups/home-page.png` | 935×1683 | Generated Home mockup | No | Visual source for Home layout, hierarchy, spacing, and styling |
| `reference/mockups/packages-page.png` | 935×1683 | Generated Packages mockup | No | Visual source for Packages layout and component proportions |
| `reference/mockups/about-contact-page.png` | 935×1683 | Generated About/Contact mockup | No | Visual source for About/Contact layout and composition |
| `reference/screenshots/original-ui-reference.png` | 1536×1024 | Third-party/source UI reference | No | Inspiration only; do not copy or crop |
| `reference/screenshots/facebook-page.jpg` | 691×1536 | Business identity/contact screenshot | Never | Evidence only; do not import, crop, publish, or use as a visual asset |

## Owner-supplied production photography

| Source | Application destination | Dimensions | Classification | Production use |
|---|---|---:|---|---|
| `C:/Users/Sean John Camara/Downloads/marianne's photo chef uniform.jpg` | `src/assets/images/about/marianne-natanawan-chef.jpg` | 549×960 | Owner-supplied portrait of Marianne P. Natanawan | Yes; About founder feature |
| `C:/Users/Sean John Camara/Downloads/yhan's catering crew or staff.jpg` | `src/assets/images/about/yhans-catering-crew.jpg` | 2048×1536 | Owner-supplied Yhan's Catering Services crew photograph | Yes; About story image |

Both files were copied without modifying their source files. They are registered centrally in `src/data/gallery.ts`, use descriptive alt text, and are not labeled as temporary sample images.

## Phase 2 placeholder manifest

Generate consistent warm catering photography without text, logos, watermarks, identifiable people, customer names, venue names, or claims of real events.

| Destination | Target size | Purpose | Replacement status |
|---|---:|---|---|
| `src/assets/images/placeholders/shared/buffet-hero.webp` | 1600×900 | Shared page hero buffet scene | Replace with approved real photo |
| `src/assets/images/placeholders/services/full-catering.webp` | 1200×900 | Full Catering card | Temporary |
| `src/assets/images/placeholders/services/grazing-table.webp` | 1200×900 | Grazing Tables card/package imagery | Temporary |
| `src/assets/images/placeholders/services/food-trays.webp` | 1200×900 | Food Trays card/section | Temporary |
| `src/assets/images/placeholders/services/packed-meals.webp` | 1200×900 | Packed Meals service card | Temporary |
| `src/assets/images/placeholders/dishes/pork-menudo.webp` | 1200×900 | Confirmed Pork Menudo highlight | Temporary; do not add customer/ranking claims beyond approved best-seller marker |
| `src/assets/images/placeholders/dishes/beef-caldereta.webp` | 1200×900 | Menu-choice visual | Temporary; no best-seller claim |
| `src/assets/images/placeholders/events/sample-buffet.webp` | 1200×800 | Recent Events sample | Replace; disclose as sample imagery |
| `src/assets/images/placeholders/events/sample-grazing-table.webp` | 1200×800 | Recent Events sample | Replace; disclose as sample imagery |
| `src/assets/images/placeholders/events/sample-reception.webp` | 1200×800 | Recent Events sample | Replace; disclose as sample imagery |
| `src/assets/images/placeholders/meals/breakfast-pack.webp` | 1200×900 | Approved breakfast sample | Temporary |
| `src/assets/images/placeholders/meals/lunch-pack.webp` | 1200×900 | Approved lunch sample | Temporary |
| `src/assets/images/placeholders/meals/group-meal-pack.webp` | 1200×900 | Generic dinner/group-meal availability | Temporary; must not imply an unconfirmed dinner menu |
| `src/assets/images/placeholders/shared/image-fallback.webp` | 1200×800 | Missing-image fallback | Temporary neutral fallback |

## Required alt handling

- Use neutral, descriptive wording such as `Sample buffet setup`, `Sample grazing-table presentation`, and `Sample decorated reception venue`.
- Empty alt text is reserved for redundant decorative imagery.
- Decorative SVGs must be hidden from assistive technology.
- Never put business facts, customer identity, event claims, or critical instructions only in an image.

## Canonical path status

Verified after the pre-Phase 2 folder cleanup: all six supplied assets are present at the canonical root-level paths listed above. The logo directory is stored with the required lowercase name `reference/logo/`. No reference image content was modified during the move.

## Phase 2 execution result

- The official logo was copied unchanged to `src/assets/brand/yhans-logo.png` and is the only supplied visual copied into the application assets.
- `public/favicon.png` began as a copy of the official logo and was replaced during Phase 9 by a correctly proportioned 512×171 optimized derivative for favicon delivery.
- All fifteen placeholder files in the manifest were generated locally with the built-in image-generation tool, cropped to their target dimensions, and checked for text, logos, watermarks, and identifiable people. They remain temporary replacement assets and are not claims of Yhan's completed events or customers.
- Verified output dimensions match the manifest: shared hero `1600×900`, standard cards/dishes/meals `1200×900`, event samples and fallback `1200×800`.
- `src/data/gallery.ts` is the single asset registry; page code must import image URLs from that registry rather than using ad hoc asset paths.
- `reference/screenshots/facebook-page.jpg` and all mockup/reference images remain outside the application asset tree and were not modified.

## Phase 9 asset revalidation

- Reconfirmed the application logo and all fifteen temporary assets have the documented dimensions. The placeholders were converted to same-dimension WebP files and their superseded generated PNG files were removed after verification.
- Reconfirmed `reference/logo/yhans-logo.png` and `src/assets/brand/yhans-logo.png` have identical SHA-256 hashes. `public/favicon.png` is a separate proportional 512×171 optimized derivative.
- Reconfirmed no production source imports `reference/mockups/`, `reference/screenshots/`, or `reference/screenshots/facebook-page.jpg`.
- All fifteen generated placeholders remain temporary and require owner approval or approved real replacements before public launch; no placeholder was reclassified as a real Yhan's event, customer, venue, or food photograph.
