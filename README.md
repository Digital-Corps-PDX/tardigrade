# AI Disclosure Components

Open source web components for AI system transparency. Drop-in badges and disclosure widgets that make algorithmic decision-making visible.

## Quick Start

Add this single line to any webpage:
```html<script src="https://unpkg.com/ai-disclosure-components@latest/dist/widget.js"></script>

Then use the component:
```html<ai-disclosure type="benefits-screener" mode="badge"></ai-disclosure>

## Installation Options

### CDN (Recommended)
```html<script src="https://unpkg.com/ai-disclosure-components@latest/dist/widget.js"></script>

### NPM
```bashnpm install ai-disclosure-components

### Self-Host
Download `dist/widget.js` and `dist/widget.css` and host on your server.

## Component Types

### Basic Badge
```html<ai-disclosure type="eligibility-check"></ai-disclosure>

### Full Disclosure Card
```html<ai-disclosure 
type="eligibility-check" 
mode="card"
disclosure-url="/our-ai-policy">
</ai-disclosure>

### Inline Notice
```html<ai-disclosure 
type="recommendation" 
mode="inline"
theme="minimal">
</ai-disclosure>

## Disclosure Types

- `eligibility-check` - Benefits eligibility screening
- `risk-assessment` - Safety and risk evaluation
- `recommendation` - Decision support systems
- `document-review` - Automated document processing
- `matching` - Candidate/resource matching
- `priority-ranking` - Scheduling and prioritization

## Visual Design System

Our components follow these principles:

- **High Contrast**: WCAG AAA compliant
- **Government-Ready**: Works without JavaScript enabled
- **Trust Indicators**: Consistent shield iconography
- **Progressive Disclosure**: Information on demand

## Examples

See the `/examples` directory for complete implementations.

## License

Public domain. No attribution required.

## Contributing

This is a community project. PRs welcome for new disclosure types, visual themes, and framework integrations.
