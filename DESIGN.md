---
name: Sahil Virani Portfolio
description: One engineer's work drawn as a single Vignelli-school transit map on signage-white.
colors:
  ink: "#111111"
  ground: "#f2f3f1"
  muted: "#4f5450"
  rule: "#c9ccc7"
  dim: "#c8cbc6"
  dim-label: "#9a9e99"
  station-white: "#ffffff"
  route-red: "#e2231a"
  route-blue: "#0039a6"
  route-orange: "#ff6319"
  route-yellow: "#fccc0a"
  route-green: "#00933c"
  route-brown: "#996633"
  route-purple: "#b933ad"
typography:
  display:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "clamp(4rem, 8.4vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.84
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 9vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.7
    fontFeature: "\"kern\", \"tnum\""
  label:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    letterSpacing: "0.18em"
  code:
    fontFamily: "\"Overpass Mono\", ui-monospace, monospace"
    fontSize: "0.9rem"
    fontWeight: 600
    lineHeight: 1.375
rounded:
  none: "0px"
  full: "9999px"
spacing:
  gutter-sm: "16px"
  gutter-md: "32px"
  gutter-lg: "48px"
  section: "128px"
  section-sm: "96px"
  heading-gap: "64px"
  strip: "56px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
    height: "48px"
  button-ink-hover:
    backgroundColor: "{colors.route-blue}"
    textColor: "{colors.ground}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "9px 18px"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  route-bullet:
    backgroundColor: "{colors.route-red}"
    textColor: "{colors.station-white}"
    rounded: "{rounded.full}"
    size: "28px"
  station-stop:
    backgroundColor: "{colors.station-white}"
    rounded: "{rounded.full}"
    size: "18px"
  title-bar:
    backgroundColor: "{colors.ink}"
    height: "10px"
    width: "100%"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
---

# Design System: Sahil Virani Portfolio

## Overview

**Creative North Star: "The System Map"**

The whole site is one transit authority's printed signage. A cool signage-white ground carries ink type and flat enamel line colours; every project is a coloured line, every technology a station, every shared tool an interchange. Structure comes from thick ink bars, rails, and ruled dividers, never from boxes. The map is the hero and the grammar: the same stations, rails and route bullets reappear in the project strips, the experience timeline, the education lists and the skills index, so the page reads as one system rather than a map plus a template.

Density is generous and typographic. Scale contrast does the hierarchy work: a 6rem black-weight name and section words set against tiny 0.8rem tracked labels, with almost nothing in between. Colour is reserved. Ink and ground carry the page; the seven line colours appear only where they mean a specific project (or the Math line), and when one line is inspected everything else drops to grey.

There are no cards, no glass, no gradients, and no decorative shadows. Depth on this page is the overlap of strokes, multiplied where lines cross.

**Key Characteristics:**
- Signage-white ground, ink type, flat enamel route colours with fixed meanings.
- Octilinear routing: strokes run at 0°, 45° and 90° only.
- White-dot stations, ink-ringed interchanges and capsules, filled-circle route bullets with one letter.
- A 10px ink title bar opens every section.
- Overpass at heavy weights; Overpass Mono only for dates and codes.
- Square buttons and containers; circles are reserved for map elements.

## Colors

Two neutrals do the work; seven saturated enamel colours are owned by lines and appear nowhere else.

### Primary
- **Signage Ink** (ink): All type, title bars, rails, borders, interchange rings, the primary button, and the scrollbar thumb. It is the system's only structural colour.

### Secondary
- **Line Blue** (route-blue): FitCheck AI's line, and also the system's one interaction colour: primary-button hover, email underline hover, and the 3px focus outline. It is the only route colour allowed outside a line meaning.

### Tertiary
The remaining route colours each belong to exactly one line. Bullet lettering is white on red, blue, green, brown and purple, and ink on orange and yellow.
- **Line Red** (route-red): MarketMind AI.
- **Line Orange** (route-orange): AI-Generated Visual Escape Room.
- **Line Yellow** (route-yellow): On The Clock. Also the text-selection highlight.
- **Line Green** (route-green): CenterPlate.
- **Line Brown** (route-brown): Sentari AI.
- **Line Purple** (route-purple): the Math line (coursework: statistics, stochastic calculus, ML, Monte Carlo, computational methods). It also colours the Mathematics group's underline in the skills index.

### Neutral
- **Signage White** (ground): The page ground and the text colour on ink buttons. Also the nav bar at 95% opacity.
- **Station White** (station-white): Fill of every station dot, on the map and in the HTML rails. Slightly brighter than the ground so stations read as punched holes.
- **Platform Grey** (muted): Secondary text: pitches in the inspector, section meta, degree details, tracked labels, footer.
- **Hairline** (rule): One-pixel dividers in the skills index and the resting underline of inline links.
- **Out of Service** (dim): The stroke colour of every uninspected line and stop while another line is isolated.
- **Faded Label** (dim-label): Station labels of uninspected lines. A state colour only; never body text.

### Named Rules
**The Reserved Colour Rule.** Only the inspected line stays saturated. On hover or focus of a line, a legend bullet, or a station, every line not in the lit set turns Out of Service grey and its labels fade; nothing else on the page changes colour.

**The One Owner Rule.** A route colour means one project. Never use a line colour for decoration, a section accent, or a status. Line Blue's interaction role and Line Yellow's selection role are the only exceptions.

## Typography

**Display Font:** Overpass (variable 100–900, self-hosted, with system-ui fallback)
**Label/Mono Font:** Overpass Mono (300–700, self-hosted, with ui-monospace fallback)

**Character:** Overpass is a highway-signage grotesk; at 800–900 it reads like a station sign, and at 400 it stays plain for long paragraphs. Tabular figures are on globally, so dates and counts align like a timetable.

### Hierarchy
- **Display** (900, clamp 4rem–6rem, 0.84, -0.04em): The name in the hero only, broken over two lines.
- **Headline** (900, clamp 3.25rem–6rem, 0.86, -0.035em): The single oversized section word under each title bar (About, Projects, Experience, Skills, Contact).
- **Title** (900, 2rem mobile to 2.5rem, 1.05, -0.02em): Project names in line strips. **Title-sm** (900, 1.6rem) for roles in the timeline and the "More projects" heading; 1.25–1.3rem at 800–900 for skill groups and secondary project names.
- **Body** (400, 1.05–1.12rem, 1.7–1.75): Descriptions and the about text, in ink at 85–90% opacity, capped at 66–72ch.
- **Label** (700, 0.8rem, 0.18em tracking, uppercase, Platform Grey): Legend title, list titles, section meta, secondary project highlights.
- **Code** (Overpass Mono 600, 0.9rem): Dates in the experience timeline only.
- **Map labels** (Overpass, 19px/800 at interchanges, 16.5px/650 at stops, in SVG units).

### Named Rules
**The Two-Scale Rule.** Hierarchy comes from the gap between huge black words and tiny tracked labels. Do not fill the middle with a ladder of medium headings.

**The Mono-For-Timetables Rule.** Overpass Mono appears only for dates and codes. Everything else, including buttons and map labels, is Overpass.

## Layout

A single centred column, max 1360px, with side gutters of 16px, 32px from 640px, and 48px from 1024px. Sections are separated by 96px (128px from 640px) of top padding; each opens with a title bar, then the section word, with 48–64px before content.

The hero is a two-column grid from 1280px: a title block of about 38% (min 340px) holding name, role line, title bar, pitch, buttons and the line legend, and the live map filling the rest. Between 1024px and 1280px the title block splits into two columns above the map and the legend sits in four columns below it. Under 768px the map keeps a 720px minimum width inside a horizontally swipeable frame, with a "Swipe the map sideways" note.

Content blocks are rows separated by 2px ink rules, not tiles: project strips use an 88px bullet column beside the text; the experience timeline uses a 230px date column, a 56px rail column and the body (collapsing to a 36px rail plus body on phones); skills and secondary projects sit in two or three ruled columns with 48px gutters.

Anchored scrolling offsets 88px for the fixed 64px nav.

## Elevation & Depth

The system is flat. There are no box-shadows anywhere. Depth is conveyed only by strokes overlapping: map lines are drawn in a `multiply` blend group, so where two route colours cross or run in parallel through a capsule, the overlap darkens like printed ink. Interchange rings are unfilled, so the lines show through them.

### Named Rules
**The Printed Ink Rule.** If something needs to sit above something else, overlap it and multiply it; never lift it with a shadow, blur or gradient.

## Shapes

Two shapes only. Everything that is a control or a container is square-cornered (0px): buttons, the nav, rules, bars, the inspector. Everything that is a map element is round (full): stations, interchange rings, capsules, route bullets, and the SV monogram. Strokes have round caps and round joins.

Line weights are fixed: map routes 12 units; HTML rails 6px (timeline, about lists) and 8px (stack routes); title bars and the contact terminus 10px; section and strip rules 2px; skill dividers 1px. Station outlines are 2.5 units on the map and 3–5px in HTML. Route geometry is octilinear: every segment is horizontal, vertical, or exactly 45°.

## Components

### Buttons
Signage plates: square, heavy, unmistakable.
- **Shape:** square corners (0px), 48px minimum height, 0.95rem Overpass at 800, icon gap 8px.
- **Ink (primary):** ink fill, ground text, 12px 20px padding. Used for the résumé, the page's primary action, in the nav, hero and contact.
- **Hover / Active:** fill turns Line Blue over 150ms ease-out; presses down 1px.
- **Line (secondary):** 3px ink border, transparent fill, ink text; hover inverts to ink fill with ground text. Used for GitHub, LinkedIn, Code and Demo.
- **Focus:** the global 3px Line Blue outline at 3px offset.

### Route Bullet
The signature identifier. A filled circle in the line's colour carrying one black-weight letter (M, F, E, O, C, S, Σ) at 56% of its diameter, in white or ink per the line. Sizes in use: 20px (skills index), 22–26px (inspector), 24px (legend), 30px (Math group), 64px (project strip). Always decorative (`aria-hidden`); the project name sits beside it as text.

### Stations and Rails
- **Stop:** white dot with an ink ring (map: 5.5 radius, 2.5 stroke; HTML: 16–20px, 3–4px border).
- **Interchange:** unfilled ink ring (13 radius, 4 stroke) where two lines share a technology.
- **Capsule:** unfilled ink pill (28 × 48, 4 stroke) where parallel tracks share a station.
- **Rail:** a solid ink bar (6px) running through stops; it ends at the last station rather than trailing on. The newest experience role gets a larger station (26px, 5px border).
- **Stack route:** inside a project strip, the tech list is drawn as an 8px bar in the line's colour through white stations, label below each stop.

### Section Heading
A full-width 10px ink title bar, the section word in Headline type beneath it, and an optional tracked meta label right-aligned on the same baseline (stacked below on phones). Contact replaces the title bar with a terminus: the bar ends in a 56px vertical stop.

### Line Strip
The project unit. A 2px ink rule on top, a 64px route bullet in the left column, then title, a bold muted highlight, the description, the stack route, and Line buttons for code and demo. No background, no border box. Secondary projects use the same ruled row at smaller scale with the tech list as a dot-separated grey line.

### Navigation
Fixed 64px bar on ground at 95%; a 2px ink bottom rule appears once scrolled past 12px. Left: an ink-circle "SV" monogram and the name in 900. Right: section links in 0.95rem Overpass 700; the active section takes a 3px underline at 0.4em offset, hover a standard underline; then a compact Ink button. Under 768px it collapses to a 44px menu toggle opening a ruled list of 1.125rem links and a full Ink button.

### Map Inspector
A 2px ink rule under the map, then one line of state: grey instructions at rest; a route bullet, project name and highlight when a line is lit; "Interchange:" followed by bullets and names when a station is lit.

### Links
Inline links are bold ink with a 2px Hairline underline at 0.22em offset that darkens to ink on hover. The contact email is a display-size link with a 4px underline that turns Line Blue on hover.

### Motion
One easing for the whole system: `cubic-bezier(0.16, 1, 0.3, 1)`. On load, lines draw in once (1.1s each, staggered 120ms from 150ms), then stations and labels fade in together (500ms at 1.2s). Isolation recolours strokes and labels over 220ms. Buttons transition colour in 150ms. Under `prefers-reduced-motion` (or `?still`) the map renders complete and static and smooth scrolling turns off.

## Do's and Don'ts

### Do:
- **Do** open every section with the 10px ink title bar and one oversized section word.
- **Do** route every new line octilinearly (0°, 45°, 90°) with round caps and joins, 12-unit strokes, inside the multiply group.
- **Do** give a new project its own route colour, a one-letter route bullet, and a line strip, and keep that colour exclusive to it.
- **Do** isolate on hover and focus: lit lines keep their colour, everything else goes Out of Service grey (#c8cbc6) with faded labels.
- **Do** reuse stations and rails (white dot, ink ring, solid ink bar) for any list with sequence or membership: timelines, education, stacks.
- **Do** separate content with 2px ink rules and whitespace; keep containers unboxed.
- **Do** keep buttons square with 48px minimum height; Ink for the single primary action, Line for the rest.
- **Do** show the finished map statically under reduced motion.

### Don't:
- **Don't** use cards, tiles, glass, blur panels, gradients, or box-shadows.
- **Don't** use a route colour for decoration, section theming, or status; Line Blue for interaction and Line Yellow for selection are the only off-line uses.
- **Don't** round buttons or containers; circles belong to stations and bullets.
- **Don't** draw map strokes at angles other than 0°, 45° and 90°, or with curves between segments.
- **Don't** set body copy, buttons, or headings in Overpass Mono; it is for dates and codes.
- **Don't** place a tracked label above a headline as an eyebrow; tracked labels title legends and lists or sit as meta beside a section word.
- **Don't** add a middle tier of headings between the section word and the tracked labels.
