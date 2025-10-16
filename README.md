# Tardigrade AI

Tardigrade is an open set of disclosure patterns for AI systems.

It complements [AI Statements](https://aistatements.org) by focusing on the visible interface layer —
how AI use is shown, explained, and made contestable in public and enterprise systems.

### Why

As AI components become part of design systems, we need shared language and UI patterns for visibility and accountability.

### What's Inside

- Pattern examples for inline disclosure, human oversight indicators, and contestability
- HTML/CSS components that can be reused in any design system
- Documentation for how to adapt patterns to benefits, safety, and licensing contexts

### Quick Example
```html
<div class="tardigrade-disclosure">
  <span class="tardigrade-indicator">AI-Assisted</span>
  <button class="tardigrade-explain" aria-label="How AI is used">?</button>
</div>
```

### Use Cases

- **Benefits screening**: Show when AI helps determine eligibility
- **Risk assessment**: Indicate automated scoring with human review
- **Document processing**: Mark AI-extracted vs human-verified data
- **Decision support**: Clarify where AI recommendations end and human judgment begins

### Get Started

1. Browse the [patterns](/patterns)
2. Copy the HTML/CSS you need
3. Adapt to your design system

### Contributing

Submit patterns via PR. Focus on real implementations, not theoretical designs.

### License

CC0 1.0 — public domain.
