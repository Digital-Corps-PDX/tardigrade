# Tardigrade AI

**Resilient Infrastructure for AI Transparency**

Like the microscopic creatures that survive extreme conditions, Tardigrade AI helps your AI systems survive the evolving landscape of regulation, public trust, and accountability requirements.

## What is Tardigrade AI?

Tardigrade AI provides structured disclosure templates and embeddable components for organizations using AI in decision-making. Think privacy statements, but for algorithmic systems.

Our templates make clear:
- Where automation begins and ends
- What decisions are influenced
- How human review is maintained
- How people can request review

## Quick Start

Add AI transparency to your site in under 5 minutes:
```html
<script src="https://tardigrade.ai/widget.js"></script>
<div data-tardigrade="benefits-screener"></div>
```

That's it. Your users now see a clear disclosure badge for your AI system.

## Features

### 🛡️ Disclosure Templates
Pre-built templates for common government AI use cases:
- Benefits screening
- Risk assessment
- Document processing
- Fraud detection
- Resource allocation

### 🔧 Embeddable Widget
- One-line installation
- No dependencies
- Works everywhere (even IE11)
- Automatically updates with regulation changes

### 📊 Customization Options
```javascript
Tardigrade.init({
  type: 'decision-support',
  badge: 'minimal',
  theme: 'auto',
  survivalMode: true
});
```

### 🔍 Compliance Checking
- Validates disclosure completeness
- Accessibility testing built-in
- Multi-framework support (US Federal, State, EU)

## Why Tardigrade?

**Extreme Resilience**: Tardigrades survive radiation, extreme temperatures, and the vacuum of space. Your AI disclosures will survive:
- Regulatory changes
- Public scrutiny
- Technology updates
- Organizational changes

**Microscopic but Mighty**: Like tardigrades, our components are tiny but provide massive protection for your AI systems.

## Installation

### NPM
```bash
npm install @tardigrade-ai/disclosure
```

### CDN
```html
<script src="https://unpkg.com/@tardigrade-ai/disclosure@latest"></script>
```

### Direct Download
Download the latest release from our [GitHub releases](https://github.com/tardigrade-ai/core/releases).

## Usage Examples

### Basic Implementation
```html
<div data-tardigrade="risk-assessment"></div>
<script src="https://tardigrade.ai/widget.js"></script>
```

### Advanced Configuration
```javascript
import Tardigrade from '@tardigrade-ai/disclosure';

Tardigrade.init({
  // Core configuration
  type: 'decision-support',
  decisions: ['eligibility', 'risk-scoring'],
  
  // Display options
  badge: 'full',
  position: 'top-right',
  theme: 'light',
  
  // Compliance features
  framework: 'nist-ai-rmf',
  accessibility: 'wcag-aa',
  
  // Survival features
  survivalMode: true,
  adaptiveCompliance: true
});
```

### Custom Disclosure
```javascript
Tardigrade.create({
  title: "AI-Assisted Permit Review",
  automation: "Checks completeness and flags common issues",
  human: "All permits reviewed by licensed inspector",
  review: "Request human review at permits@city.gov",
  accuracy: "92% accuracy in pilot testing",
  updated: "2024-10-16"
});
```

## Templates

### Available Templates

| Template ID | Use Case | Human Review |
|------------|----------|--------------|
| `benefits-screener` | Initial eligibility checking | Required for denials |
| `risk-assessment` | Scoring and prioritization | Required for high scores |
| `document-processor` | Data extraction | Required for exceptions |
| `fraud-detection` | Anomaly flagging | Always reviewed |
| `resource-allocation` | Distribution recommendations | Final approval required |

### Template Structure

All templates follow this structure:
- **What It Does**: Plain language explanation
- **Automation Level**: Assists/Recommends/Decides
- **Human Review**: When and how
- **Request Review**: Contact process
- **Data Used**: Input categories
- **Accuracy**: If measured

## API Reference

### Core Methods

#### `Tardigrade.init(config)`
Initialize Tardigrade with configuration options.

#### `Tardigrade.create(disclosure)`
Create a custom disclosure programmatically.

#### `Tardigrade.validate()`
Check if current disclosure meets compliance requirements.

#### `Tardigrade.update()`
Fetch latest compliance requirements and update display.

### Events
```javascript
Tardigrade.on('disclosure-viewed', (data) => {
  console.log('User viewed disclosure:', data);
});

Tardigrade.on('review-requested', (data) => {
  console.log('User requested human review:', data);
});
```

## Compliance

Tardigrade AI helps you meet emerging AI transparency requirements:

- ✅ EU AI Act (Article 13)
- ✅ NIST AI Risk Management Framework
- ✅ California AI transparency requirements
- ✅ Federal AI Executive Orders
- ✅ WCAG 2.1 AA accessibility

## Contributing

We welcome contributions! Tardigrade AI thrives on community input.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-disclosure`)
3. Commit your changes (`git commit -m 'Add amazing disclosure template'`)
4. Push to the branch (`git push origin feature/amazing-disclosure`)
5. Open a Pull Request

### Template Contributions

Have a new use case? Add a template:

1. Copy `templates/example.json`
2. Fill in your use case details
3. Submit PR with real-world example

See our [Contribution Guidelines](CONTRIBUTING.md) for details.

## Roadmap

### Phase 1: Core Components ✓
- Basic widget
- Standard templates
- Embed functionality

### Phase 2: Advanced Features (Current)
- Multi-language support
- Analytics dashboard
- A/B testing disclosures
- Custom styling API

### Phase 3: Ecosystem
- WordPress plugin
- Drupal module
- Framework integrations
- Compliance automation

### Phase 4: Intelligence
- Regulation change alerts
- Automatic updates
- Risk scoring
- Audit trails

## Community

- **Discord**: [Join our community](https://discord.gg/tardigrade-ai)
- **Twitter**: [@tardigrade_ai](https://twitter.com/tardigrade_ai)
- **Office Hours**: Thursdays 2pm ET
- **Email**: hello@tardigrade.ai

## License

MIT License - Use it everywhere, survive anything.

## Acknowledgments

Built by the team behind [AI Statements](https://aistatements.org) and the State Capacity Project.

Special thanks to:
- Government teams piloting early versions
- Digital service teams providing feedback
- The actual tardigrades for the inspiration

---

**Remember**: In the AI transparency ecosystem, it's not the biggest or the fastest that survives—it's the most adaptable. Be like the tardigrade. 

🦠 Built to survive anything.
