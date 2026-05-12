# Design Brief

## Direction

Reemania — Bold, modern web design agency portfolio. Dark mode, high-confidence aesthetic with geometric precision and creative warmth.

## Tone

Confident maximalism: deep violet primary meets warm amber accents in a dark charcoal environment — showcases creative capability through intentional color harmony and bold typography.

## Differentiation

Gradient text accents on hero headlines (purple-to-amber) signal creative versatility; every interactive element uses the amber accent to draw the eye without overwhelming.

## Color Palette

| Token            | OKLCH           | Role                           |
|------------------|-----------------|--------------------------------|
| background       | 0.16 0.02 280   | Deep charcoal canvas           |
| foreground       | 0.95 0.01 280   | Off-white text, high contrast  |
| card             | 0.2 0.025 280   | Elevated surface, portfolio    |
| primary          | 0.65 0.25 300   | Deep violet, commanding        |
| accent           | 0.75 0.18 55    | Warm amber, CTA highlights     |
| muted            | 0.25 0.03 280   | Secondary surface, section alt |
| destructive      | 0.55 0.22 25    | Error/warning, coral red       |

## Typography

- Display: Satoshi — bold, geometric headings and hero text; `text-5xl md:text-7xl font-bold tracking-tight`
- Body: Plus Jakarta Sans — clear, modern paragraph and UI text; `text-base/lg font-normal`
- Scale: hero 5xl/7xl, h2 3xl/5xl, label sm uppercase, body base

## Elevation & Depth

Subtle card elevation with lifted background token (L 0.2 vs 0.16), no prominent shadows. Borders and background variation create depth, not shadow stacking.

## Structural Zones

| Zone       | Background     | Border      | Notes                        |
|------------|----------------|-------------|------------------------------|
| Header     | card (0.2)     | border bot  | Logo, nav, CTA button        |
| Hero       | background     | —           | Gradient text overlay        |
| Sections   | muted/background | —        | Alternating sections, padding |
| Footer     | card (0.2)     | border top  | Copyright, social, nav       |

## Spacing & Rhythm

Generous gaps: 4rem between sections, 2rem within cards. Breathe. Grid rhythm: 2xl container, even column spacing. Micro: 0.5rem icon spacing, 1rem label-value pairs.

## Component Patterns

- Buttons: violet primary (0.65), amber accent (0.75 on secondary actions); hover brightens C +0.03
- Cards: L 0.2, rounded-lg (10px), no shadow, border-l amber accent bar (2px) on portfolio items
- Badges: uppercase, font-semibold, accent color with darker background

## Motion

- Entrance: fade-in 0.5s ease-out on scroll via `animate-fade-in`
- Hover: brighten accent +0.03 chroma over 0.2s, lift card via scale 1.02
- Decorative: subtle pulse on CTA, 1.5s loop

## Constraints

- No full-page gradients; use overlays sparingly
- Accent (amber) only on CTAs, links, hover states — not scattered throughout
- Dark mode only; no light mode
- Use card tokens for every elevated surface (header, footer, portfolio items)

## Signature Detail

Gradient text accent on hero headlines (purple-to-amber transition) — signals creative confidence and immediately differentiates from corporate template aesthetic.
