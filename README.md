# ⚗️ Agent Foundry

A modular AI agent factory for launching niche research, monitoring, and signal agents — starting with blockchain intelligence tools.

## Features

- **Modular agent registry** — define agents with typed inputs, tools, and output schemas in one place
- **Wallet Watch Agent** — monitor blockchain wallets for suspicious activity, large transfers, and DeFi interactions
- **Crypto Narrative Scanner** — scan social media, news, and on-chain data to surface emerging crypto narratives
- **Dynamic input forms** — each agent generates its own form from its config
- **Output cards** — structured results rendered as summaries, alerts, and insight lists
- **Easy extensibility** — add new agents by adding a single entry to the registry

## Tech Stack

- [Next.js 14](https://nextjs.org/) with App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (nav + footer)
│   ├── page.tsx                # Homepage — agent selector grid
│   ├── globals.css             # Global styles
│   └── agents/
│       └── [agentId]/
│           └── page.tsx        # Agent detail page (form + output)
├── components/
│   ├── AgentCard.tsx           # Card shown on the homepage
│   ├── InputForm.tsx           # Dynamic form driven by agent.inputs
│   └── OutputCard.tsx          # Renders summary / alert / insight / list output
└── lib/
    ├── types.ts                # AgentInput, OutputField, Agent interfaces
    └── registry.ts             # Central agent registry + getAgentById()
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/emirmndc/agent-foundry.git
cd agent-foundry

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Adding a New Agent

1. Open `src/lib/registry.ts`
2. Add a new `Agent` object to the `agentRegistry` array:

```typescript
{
  id: "my-new-agent",
  name: "My New Agent",
  description: "What this agent does.",
  category: "My Category",
  icon: "🛠️",
  inputs: [
    {
      name: "inputField",
      label: "Input Label",
      type: "text",          // "text" | "number" | "select" | "textarea"
      placeholder: "...",
      required: true,
    },
  ],
  tools: ["tool-a", "tool-b"],
  outputSchema: [
    { key: "summary", label: "Summary", type: "summary" },
    { key: "results", label: "Results", type: "list" },
  ],
  mockOutput: {
    summary: "Placeholder summary text.",
    results: ["Result item 1", "Result item 2"],
  },
}
```

That's it — the homepage and agent page will automatically pick up the new agent.

## Agent Type Reference

```typescript
interface Agent {
  id: string;              // URL slug
  name: string;
  description: string;
  category: string;
  icon: string;            // Emoji icon
  inputs: AgentInput[];    // Form fields
  tools: string[];         // Tool names shown as badges
  outputSchema: OutputField[];  // Defines what output cards to render
  mockOutput?: Record<string, unknown>;  // Placeholder data
}

interface AgentInput {
  name: string;
  label: string;
  type: "text" | "number" | "select" | "textarea";
  placeholder?: string;
  options?: string[];   // Required for "select" type
  required?: boolean;
}

interface OutputField {
  key: string;
  label: string;
  type: "summary" | "alert" | "insight" | "list";
}
```

## License

MIT
