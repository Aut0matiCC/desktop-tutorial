# ONE TRUST SERVICES - Design System

## 1. Design Direction

One Trust Services is a highway/infrastructure engineering consultancy
serving government departments. The site should feel like the digital
face of a firm that gets handed multi-crore DPR and PMC contracts:
precise, technically confident, understated-premium. Think "engineering
blueprint meets modern SaaS," not "generic corporate template."

Keywords: precision, trust, infrastructure, motion (the road), clarity.
Avoid: neon gradients, meme-startup illustration style, stock photos of
people shaking hands in suits.

## 2. Color Palette

Derived from the client's existing "OT" logo (orange-red mark + blue
mark + dark asphalt road sweeping through).

- **Highway Orange** `#F0561D` - primary accent, CTAs, highlights
- **Signal Red** `#E31E4D` - used only in the orange→red logo gradient
  echo (headings, icon accents), sparingly
- **Trust Blue** `#1C8FC7` - secondary accent, links, the "T" of the
  logo; use for icons and secondary buttons
- **Asphalt** `#1A1D21` - near-black, primary dark background (hero,
  footer, dark sections)
- **Concrete Grey** `#6B7280` - body text on light backgrounds, muted UI
- **Fog White** `#F7F8FA` - primary light background
- **Lane White** `#FFFFFF` - cards, elevated surfaces

Gradient token `gradient-highway`: linear-gradient(90deg, #F0561D 0%,
#E31E4D 45%, #1C8FC7 100%) - use only for the road-motif graphic itself
and rare hero accents. Never use it as a text-fill on body copy.

## 3. Typography

- **Headings:** "Sora" or "Space Grotesk" (geometric, engineering feel) -
  weights 600/700
- **Body:** "Inter" - weights 400/500
- Scale: H1 48–64px / H2 36–44px / H3 24–28px / Body 16–18px / Small 14px
- Generous line-height on body copy (1.6–1.7) - this is a text-dense,
  technical site and readability matters more than density.
- Uppercase, letter-spaced (0.08em) small labels (e.g. "SERVICES",
  "SECTORS WE SERVE") above section headings - reinforces the technical/
  survey-report feel.

## 4. Signature Motif - The Road Line

Echo the logo's sweeping highway line as a recurring signature element:
- A thin (2–3px) multi-lane SVG line, using the gradient token, that
  "sweeps" across section dividers or behind hero content - same visual
  language as the logo's road.
- On the Home hero: the road line can animate drawing itself in on load
  (subtle, ~1.2s ease).
- On service detail pages: a short version of the road line sits behind
  the page H1 as a quiet background flourish.
- Never more than one road-line element per viewport - it's a signature
  detail, not a repeating pattern.

Secondary technical motifs (use behind sections that need visual texture,
always low-opacity, 5–10%):
- Topographic contour lines (for Survey & Geomatics content)
- Blueprint/engineering grid (for DPR, Pavement Design content)
- Dotted survey-grid points (for Hydraulic/Structural content)

## 5. Layout & Components

### Header
- Sticky, transparent-over-hero on Home (transitions to solid Fog White
  with shadow on scroll), solid on all inner pages.
- Logo left. Nav center/right: Home, About, Services (dropdown), Sectors
  & Contact. "Request a Consultation" button (Highway Orange fill,
  white text) always visible, right-aligned.
- Services dropdown: 6 rows, each with a small line-icon + service name,
  opens on hover/click, closes on outside click.

### Hero (Home)
- Full-bleed dark Asphalt background with the animated road-line motif
  sweeping left→right.
- H1: company name + tagline "Engineering Trust. Delivering
  Infrastructure."
- Subhead: one-line positioning statement.
- Two CTAs: primary "Request a Consultation" (Highway Orange), secondary
  "Explore Our Services" (outline, white).
- Trust strip beneath hero: "Roads & Buildings · Irrigation ·
  Municipalities · Panchayat" as a simple text/icon row - signals who
  they serve immediately.

### Service Cards (Services Overview grid)
- 6 cards (one per detail page), each: icon, service name, 1-line
  description, "Learn more →" link.
- Card style: Lane White surface, 1px Concrete Grey/10% border, subtle
  lift + Highway Orange border-glow on hover. Rounded corners (12–16px),
  not pill-shaped - keep it precise/engineering, not soft/consumer.

### Service Detail Template (used for pages 4–9)
1. Header block: small uppercase label ("SERVICE"), H1 = service name,
   1–2 line intro, road-line background flourish.
2. "What's Included" - bulleted/card list of the sub-services (from
   content.txt) - 2–3 column grid of small cards, each with a check-style
   icon.
3. "Our Approach" or "Process" - short numbered steps if content.txt
   supports it; otherwise a short descriptive paragraph.
4. "Who This Is For" - tie back to relevant sector(s) from Sectors We
   Serve.
5. Related Services strip - 2–3 cards linking to other service pages.
6. CTA band - dark Asphalt background, "Discuss Your Project" heading +
   Request a Consultation button.

### About Page
- Founder/proprietor block (Ronak M. Chaudhary) - text-led since no
  photo supplied yet; leave a clearly labeled photo placeholder.
- Company facts strip: Established 2023, Proprietorship, Palanpur,
  Gujarat - presented as clean stat/label pairs, not invented numbers.
- Mission/approach paragraph from content.txt.

### Sectors We Serve & Contact (page 10)
- Sectors: 4 cards (R&B, Irrigation, Municipalities, Panchayat), icon +
  name + 1-line description.
- Contact: address, and a contact form (Name, Organization/Department,
  Email, Phone, Message, Service of Interest dropdown). Map embed
  (Google Maps iframe) using the given address. Office details repeated
  in a sidebar card next to the form.

### Footer
- Dark Asphalt background. Columns: Company (logo + tagline + address),
  Services (6 links), Company (About, Sectors, Contact), and a thin
  bottom bar with © and "Proprietorship · Established 2023."

## 6. Motion Guidelines

- Scroll-reveal: fade + 16px translate-Y, staggered 60–80ms per item,
  once-only (no re-trigger on scroll back).
- Buttons: 150ms color/shadow transition, slight scale (1.02) on hover.
- Road-line motif: draw-in on first load only; static thereafter.
- Keep everything subtle - this audience is evaluating technical
  competence, not being entertained.

## 7. Imagery Strategy (no photos supplied yet)

Until the client supplies real site/team/project photography, use CSS/SVG
generated technical graphics only:
- Topographic contour SVGs for Survey & Geomatics
- Cross-section/blueprint line drawings for Pavement Design and Hydraulic
  Structures
- Simple road/highway line illustrations for DPR and PMC sections
Mark every place a real photo should eventually go with a visible,
labeled placeholder (e.g. dashed border box: "Site photo - client to
provide") so it's obvious during handover what's temporary.

## 8. Accessibility

- Minimum contrast ratio 4.5:1 for body text.
- All interactive elements keyboard-navigable and focus-visible.
- Form fields fully labeled (not placeholder-only).
- Motion respects `prefers-reduced-motion`.
