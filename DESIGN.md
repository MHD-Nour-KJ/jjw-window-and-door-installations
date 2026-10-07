# JJW Window & Door Installations, INC. — Design System Specification

**Reference Foundation:** Modern Architectural Window & Door Landing Page (adapted from reference layout).
**Client Brand:** JJW Window & Door Installations, INC. (Deltona & Central Florida).
**Tagline:** *"No job too big or small, call us today!"*

---

## 1. Visual Theme & Atmosphere
- **Aesthetic:** Crisp, sunlit Florida residential architectural craftsmanship. Generous white space, crystal-clear window views, confident color-coded hierarchy, and tactile interactive elements.
- **Tone:** Grounded, experienced, trustworthy local craftsman. Clean installations, weather-tight masonry sealing, and honest family-run care.
- **Rhythm:** Alternating light narrative surfaces, full-width parallax viewports, structured 3-tier service accordions, and a serene ice-blue footer.
- **Elevation & Depth:** Crisp whisper borders (`1px solid #e2e8f0`), diffused soft elevation shadows (`0 20px 40px -15px rgba(0,0,0,0.06)`), and layered interactive cards.

---

## 2. Color Palette & Roles

| Role | Token / Hex | Purpose |
|------|-------------|---------|
| **Deep Ocean Blue** | `#0071ba` / `#0284c7` | Top utility bar, main section headings, brand emblem, active highlights |
| **Vibrant Coral Orange** | `#f26a36` / `#ff7849` | Primary CTA buttons, "Get a Free Estimate", active nav highlight, feature checkmarks |
| **Accent Orange Hover** | `#dc5320` / `#ea580c` | Interactive hover state for all primary action buttons |
| **Pure Surface** | `#ffffff` | Content containers, card fills, navbar ground |
| **Ice Blue Footing** | `#d8ebf9` / `#e2f1fc` | Comprehensive footer ground matching reference layout |
| **Sky Tint** | `#f0f9ff` | Expanded accordion panel background, active hover tints |
| **Charcoal Ink** | `#1e293b` / `#0f172a` | Primary headlines and high-contrast text |
| **Muted Slate** | `#64748b` | Body prose, secondary descriptions, metadata |
| **Warm Amber** | `#f59e0b` | Star ratings and satisfaction indicators |
| **Whisper Border** | `rgba(226, 232, 240, 0.8)` | Structural dividers and card outlines |

### Banned Styles & Elements (Strict Enforcement)
- **Zero all-caps text anywhere:** No uppercase in headers, navigation, badges, subtitles, or buttons. All text uses natural Title Case or Sentence Case.
- **Zero glowing or pulsing dots:** Never add artificial pulsing or neon status dots.
- **No dimming / tint overlays draped over background photography:** Images remain crisp, clear, and authentic.
- **Zero AI purple/violet gradients.**

---

## 3. Typography & Copy Standards
- **Font Family:** Modern high-clarity sans-serif (`Plus Jakarta Sans` or `Outfit`, fallback `system-ui, sans-serif`).
- **Heading Scale:**
  - Hero Display: `clamp(2.25rem, 4.5vw, 3.5rem)`, weight 700–800, leading 1.15.
  - Section Headings: `clamp(1.75rem, 3.2vw, 2.5rem)`, weight 700, ocean blue.
  - Card & Feature Titles: `1.25rem – 1.35rem`, weight 600–700.
- **Body:** `1rem (16px)`, relaxed leading `1.65`, Muted Slate `#64748b`.
- **Copy Polish:** Strictly compliant with `no-ai-slop` & `stop-slop`. Active human voice, grounded in Florida building practices (masonry block prep, weather-tight sealing, Low-E glass, hurricane protection).

---

## 4. Layout Structure & Components

1. **Top Utility Bar:**
   - Deep Ocean Blue background.
   - Left: Location indicator ("Deltona, FL & Central Florida Communities").
   - Right: Direct email ("jjw.windowdoor@gmail.com") and direct phone ("(386) 285-8675").

2. **Header & Navigation:**
   - Crisp white sticky bar.
   - Arched architectural window logo with "JJW Window & Door Installations".
   - Clean horizontal links with smooth dropdowns for Windows and Doors.
   - Vibrant Coral Orange CTA: "Get a Free Estimate".
   - Mobile touch-friendly drawer navigation.

3. **Hero Carousel with Parallax / Fluid Slides:**
   - High-resolution Florida living rooms featuring floor-to-ceiling picture windows and sliding patio doors.
   - Interactive slide controls (previous/next arrows and pagination dots).
   - Crisp white typography centered on screen.

4. **Intro & Mission Section:**
   - 2-Column responsive layout.
   - Left: Ocean blue heading, grounded human copy, BBB A+ rating trust badge, and 5-star customer review pill.
   - Right: Clean photography of sliding glass patio doors looking onto Florida outdoor living.

5. **Our Services (Interactive 3-Tier Accordion):**
   - Centered Ocean Blue title.
   - Service cards alternating image and accordion panel.
   - Accordion items collapse and expand smoothly with active sky-blue indicator.
   - Coral Orange "View More" action buttons.

6. **Parallax Banner 1:**
   - Full-width panoramic window view with smooth parallax scrolling.
   - Ocean blue accent rule.
   - Headline: "Revitalize Your Home Today!"
   - Subtitle: "Schedule a consultation for expert window and door solutions."
   - Coral Orange button: "Call Now to Book Your Appointment!".

7. **Feature Grid (Enhance Your Home):**
   - 3-Column responsive card grid.
   - Coral square checkmark icons.
   - Precision Craftsmanship, Energy-Efficient Solutions, Style and Variety.

8. **Parallax Banner 2:**
   - Full-width interior architecture with vaulted ceilings and transom windows.
   - Parallax scrolling.
   - Ocean blue accent rule.
   - Bold headline and subtitle.
   - Coral Orange button: "Call Now to Book Your Appointment!".

9. **Interactive Estimate Modal & Gallery:**
   - Quick-quote calculator modal for immediate Florida customer inquiries.
   - Before & After installation gallery modal.

10. **Comprehensive Ice-Blue Footer:**
    - Ice-blue ground `#d8ebf9`.
    - 4 columns: Brand & registration, Windows links, Doors & extra services links, Contact & scheduling info.
    - Verified payment badges (Visa, Mastercard, Amex, Discover).
    - Copyright and legal bar.
