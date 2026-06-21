# Building a Landing Page with AI — Universal Guide

> Agent-agnostic guide. Works with any AI coding tool — Claude Code, Cursor, Copilot, Windsurf, or any future tool.
>
> Summarized from the experience of building [latentsignal.dev](https://latentsignal.dev) — an AI tool discovery platform with a searchable directory, WhatsApp channel, and automated pipeline. 317 commits, 25+ design iterations, 3 weeks of development with AI coding agents.

---

## Prerequisites

### Install

| Tool | What | How |
|------|------|-----|
| **AI coding assistant** | Any that can run shell commands + edit files | Claude Code, Cursor, Copilot, Windsurf |
| **pa11y** | WCAG accessibility checker | `npm install -g pa11y` |
| **browser-use** | Screenshot automation | `pip install browser-use && npx playwright install` |

### Create

| File | What | Why |
|------|------|-----|
| `UI_REFERENCE.md` | Design system — type scale, spacing, colors, checklist | Your AI reads this for every UI change |
| `AGENTS.md` or equivalent | Rules for AI — prompt style, verification, workflow | Prevents AI from doing things you don't want |
| Reference screenshots | 3-5 saved locally | Comparison baseline for iterations |

---

## Step 1: Find Design References

Before writing code, find 3-5 websites that match the feel you want. Use browser-use to screenshot and analyze them.

| Reference | What to Look For |
|-----------|-----------------|
| **Editorial sites** (punkt.co, every.to) | Serif headlines, generous whitespace, single-column |
| **SaaS sites** (linear.app, stripe.com) | Dark theme, clean cards, consistent spacing |
| **Newsletter platforms** (substack.com, substack.com) | Reading experience, typography, progress bars |

**How to extract patterns:**
1. Screenshot the site
2. Note the headline font (serif or sans?)
3. Note the color palette (1-2 accent colors)
4. Note the spacing (tight or generous?)
5. Note the card design (grid, list, or mixed?)

---

## Step 2: Define Your Design System

Before coding, create `UI_REFERENCE.md` with:

- **Type scale:** Which font sizes to use. Never use random sizes.
- **Spacing scale:** Which gaps to use. 4px base, no random values.
- **Color palette:** Background, accent, text hierarchy (use opacity, not different colors).
- **Typography pairing:** Serif headlines + sans body, or all sans. Never more than 2 fonts.
- **Critique checklist:** What to check after every UI change.

---

## Step 3: Build Iteratively

Each component follows the same loop:

```
Describe → Build → Screenshot → Evaluate → Fix → Repeat
```

### Iteration count by component (our experience):

| Component | Iterations | Common Issues |
|-----------|-----------|---------------|
| Hero section | 6 | Stats centering, font size, mobile spacing |
| Color scheme | 3 | Initial cyan → warm amber → final |
| Card design | 3 | Grid → list → grid (final) |
| Scroll-snap | 4 | Clipping, nav offset, mobile |
| WhatsApp section | 3 | Layout, chat bubbles, accent color |
| Stats display | 5 | Position, animation, dynamic data |
| Blog article | 2 | Markdown rendering, progress bar |

### The iteration loop:

1. **Describe** the problem in user terms ("categories feel cramped")
2. **Build** — AI implements the fix
3. **Screenshot** — AI takes screenshot with browser-use
4. **Evaluate** — AI checks with pa11y for accessibility, you check visually
5. **Fix** — AI corrects issues
6. **Repeat** until satisfied

---

## Step 4: What AI Catches vs What You Catch

| AI Catches | You Catch |
|-----------|-----------|
| WCAG contrast failures (pa11y) | "Feels off" |
| Accessibility violations | Visual balance |
| Spacing inconsistencies | Color warmth |
| Responsive breakpoint issues | Content positioning |
| Missing aria-labels | "Too much empty space" |
| Font size mismatches | "This doesn't feel right" |

**The rule:** AI handles objective quality (accessibility, consistency). You handle subjective quality (feel, balance, warmth).

---

## Step 5: Key Design Patterns We Learned

### Hero Section
- Stats ABOVE the headline, not below. Center the whole block.
- Use `pb-20` to push content slightly above visual center (optical center > mathematical center).
- Serif headlines + italic accent = editorial feel.

### Dark Theme
- Background: `#0c0f14`
- Text hierarchy through opacity: `white/95` → `white/50` → `white/20`
- One accent color (amber, cyan, etc.) — never more than 2
- WhatsApp green (`#25D366`) for chat elements

### Scroll-Snap
- Use `min-h-screen`, not `h-screen overflow-y-auto`
- Add `scroll-mt-16` to every snap section (prevents hiding behind sticky nav)
- Test on mobile — snap behaves differently on touch devices

### Grid Cards
- 3 columns desktop, 2 tablet, 1 mobile
- Consistent card height — use `mt-auto` on buttons when content varies
- Dark background, subtle border, hover state (border + shadow)

### WCAG Compliance
- Run `npx pa11y --standard WCAG2AA` after every UI change
- Body text needs 4.5:1 contrast minimum
- WhatsApp chat text: `#8696a0` on `#005c4b` = 2.61:1 (fails). Use `#d0e8e0` instead.
- Search inputs need `aria-label` attribute

---

## Step 6: Prompt Rules for AI

When describing UI changes to your AI assistant:

1. **Describe the problem, not the solution.** "Categories feel cramped" — not "change flex-wrap to nowrap"
2. **Don't mention file names.** Let AI find them.
3. **Keep it under 10 lines.** Focused requests produce better results.
4. **Show, don't tell.** Use screenshots or reference sites instead of long descriptions.

---

## The Numbers (Our Project)

| Metric | Value |
|--------|-------|
| Total commits | 317 |
| Design iterations | 25+ across all components |
| Reference sites | 3 (punkt.co, linear.app, stripe.com) |
| Time to first deploy | 2 days |
| Time to production-ready | 3 weeks |
| Automated checks per UI change | pa11y WCAG2AA |
