---
name: Boekenleggers.be
description: A lively reading-gift album for collectible bookmark designs.
colors:
  deep-teal: "#153c43"
  coral-ink: "#e65342"
  action-coral: "#b93228"
  marigold: "#f2cf4e"
  album-paper: "#f5efdf"
  page-white: "#fffdf5"
  sea-glass: "#a9d9c6"
typography:
  display:
    fontFamily: "Baloo 2, sans-serif"
    fontSize: "clamp(3.5rem, 6.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.055em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: "0.13em"
rounded:
  square: "2px"
  small: "4px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.action-coral}"
    textColor: "{colors.page-white}"
    rounded: "{rounded.small}"
    padding: "14px 20px"
    height: "54px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.page-white}"
    rounded: "{rounded.small}"
    padding: "14px 20px"
    height: "54px"
  product-card:
    backgroundColor: "{colors.page-white}"
    textColor: "{colors.deep-teal}"
    rounded: "{rounded.small}"
    padding: "18px"
---

# Design System: Boekenleggers.be

## Overview

**Creative North Star: "The Leeszegelalbum"**

The store feels like opening a compact, colorful album of reading gifts. Real bookmark photographs sit inside paper frames, and labels, perforations, edition marks, and page references make the catalog feel collected rather than mass-produced. The tone is bright and tactile, with teal cloth, coral ink, and marigold paper carrying the page.

The album language organizes the catalog and gift presentation; it never changes the product facts. Keep the demo-cart status clear, and do not imply that the five-piece box contains five different designs.

**Key Characteristics:**
- Saturated album-cover fields balanced by paper pages.
- Real product photography as the visual proof.
- Perforated edges, stamp-like marks, and bold rounded type.
- One direct gift-box action, with clear price and shipping terms.

## Colors

The palette uses a deep teal foundation with coral action ink and marigold album paper, supported by pale page surfaces.

### Primary
- **Deep Album Teal** (`{colors.deep-teal}`): Main hero ground, wordmark text, and high-emphasis text.
- **Action Coral** (`{colors.action-coral}`): Primary buttons and the scrolling offer strip; use white text for legibility.

### Secondary
- **Coral Stamp Ink** (`{colors.coral-ink}`): Stamp marks, small dividers, and graphic punctuation.
- **Marigold Page** (`{colors.marigold}`): Gift feature surface and the cart's free-shipping progress field.
- **Sea Glass** (`{colors.sea-glass}`): One product-art field, balanced against the warmer album palette.

### Neutral
- **Album Paper** (`{colors.album-paper}`): Page background and perforation cut-outs.
- **Page White** (`{colors.page-white}`): Album pages, cards, and readable foregrounds on dark teal.

### Named Rules
**The Real-Page Rule.** Use supplied bookmark photography as the product proof; decorative album framing must never replace it.

## Typography

**Display Font:** Baloo 2 (with sans-serif fallback)

**Body Font:** Inter (with sans-serif fallback)

**Label/Mono Font:** Inter Bold; there is no separate mono face.

**Character:** Baloo 2 gives headings a friendly, compact display voice; Inter keeps prices, shipping details, and legal or consent copy direct and easy to scan.

### Hierarchy
- **Display** (800, `clamp(3.5rem, 6.2vw, 6rem)`, 0.94 line-height): The opening headline; tighten the letter spacing and wrap as a short statement.
- **Mobile display** (800, `clamp(2.8rem, 10vw, 3.5rem)`): The opening headline scales down to keep the gift action and album image within the first reading sequence.
- **Headline** (800, `clamp(2.3rem, 4vw, 4rem)`, 0.99 line-height): Main section and gift-box headings.
- **Title** (800, `1.35rem`–`1.55rem`, about 1.1 line-height): Product and album-note titles.
- **Body** (400, `1rem`–`1.05rem`, 1.55–1.65 line-height): Product descriptions and supporting copy; keep paragraphs comfortably readable.
- **Label** (800, `0.68rem`–`0.72rem`, `0.13em`, uppercase): Edition, category, and album-page identifiers.

## Layout

The navigation and standard content use a centered, 1180px maximum measure. The hero is a full-width teal cover, with copy and the add-to-gift-box action opposite a two-page album spread. The product catalog returns to the centered paper canvas; the five-piece gift feature interrupts it with a full-width marigold page. At 980px the hero and gift story stack; at 680px the catalog becomes two columns and the supporting notes and shipping details become single-column reading sequences. Repeated section spacing is generous above headings and tighter within each album entry.

## Elevation & Depth

Depth is structural rather than glassy: offset hard shadows make album pages and primary actions feel printed and touchable. Use shadows sparingly, with a visible offset and restrained blur; dashed rules and perforations carry most of the page's hierarchy.

### Shadow Vocabulary
- **Page lift** (`5px 5px 0 rgba(21, 60, 67, 0.16)`): Resting product album pages.
- **Action lift** (`4px 4px 0` in marigold): Primary calls to action.
- **Gift folio** (`8px 8px 0` in coral): The large gift-box album.

## Shapes

Album pages and buttons use crisp, near-square corners (2–4px). Circular stamps are reserved for edition marks; do not round the product pages into generic app cards. Perforation is drawn as repeating paper cut-outs at the edge, and dashed rules suggest album binding and page separators.

## Components

### Buttons
- **Shape:** Square-cut corners (4px), at least 48px high.
- **Primary:** Action coral with page-white text, bold Inter, and an offset marigold shadow; the main hero action adds the five-piece box.
- **Hover / Focus:** Darken the coral on hover. Keep a high-contrast outline on keyboard focus.
- **Secondary:** Transparent page-outline action on the teal hero.

### Cards / Containers
- **Corner Style:** Near-square (4px).
- **Background:** Page white with teal borders and a product-specific colored image field.
- **Shadow Strategy:** Small hard offset, not a soft floating-card glow.
- **Border:** Two-pixel teal outlines with perforation marks on product pages.
- **Internal Padding:** 18px on desktop, 12–14px on mobile.

### Navigation
- **Style:** Bold Inter links arranged as short, paper-tab labels. Hover and focus reveal a marigold tab; the cart is a teal button with a marigold count seal. On mobile the links occupy a second horizontal row.

### Signature Album Spread
The hero spread pairs a brief, headline-like reading message with one real product photo, a concise product caption, and a five-piece free-shipping stamp. Keep the price and the add-to-box action visible without scrolling on wide screens.

### Signature Gift Folio
The gift feature shows five repeated images of the current demo selection, explicitly labeled as five copies of the Blauwe hortensia design. Its direct action adds five units to the demo cart.

## Do's and Don'ts

### Do:
- **Do** use actual local product images for album pages and product listings.
- **Do** pair the €22,50 gift-box price with its five-piece contents and free-shipping status.
- **Do** keep the hero action and product prices legible against their backgrounds.
- **Do** preserve keyboard focus, reduced-motion support, and 44px minimum touch targets.

### Don't:
- **Don't** invent customer reviews, customization options, or product capabilities.
- **Don't** imply that the current demo cadeaubox contains five distinct designs.
- **Don't** use album decoration to obscure a product, price, shipping condition, or demo limitation.
