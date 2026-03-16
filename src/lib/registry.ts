import { Agent } from "./types";

export const agentRegistry: Agent[] = [
  {
    id: "wallet-watch",
    name: "Wallet Watch",
    description:
      "Monitor blockchain wallet addresses for suspicious activity, large transfers, and DeFi interactions.",
    category: "Blockchain",
    icon: "👁️",
    inputs: [
      {
        name: "walletAddress",
        label: "Wallet Address",
        type: "text",
        placeholder: "0x... or a Solana public key",
        required: true,
      },
      {
        name: "chain",
        label: "Blockchain",
        type: "select",
        options: ["Ethereum", "Solana", "Base", "Arbitrum"],
        required: true,
      },
      {
        name: "threshold",
        label: "Alert Threshold (USD)",
        type: "number",
        placeholder: "e.g. 10000",
        required: false,
      },
    ],
    tools: [
      "blockchain-explorer",
      "token-price-feed",
      "transaction-decoder",
      "alert-dispatcher",
    ],
    outputSchema: [
      { key: "summary", label: "Wallet Summary", type: "summary" },
      { key: "alerts", label: "Alerts", type: "list" },
      { key: "insights", label: "DeFi Insights", type: "list" },
    ],
    mockOutput: {
      summary:
        "Wallet 0xAbC...1234 on Ethereum has made 47 transactions in the past 30 days. Total value moved: $284,500. Current portfolio value: ~$52,000.",
      alerts: [
        "⚠️ Large transfer detected: 15 ETH (~$38,400) sent to unknown address 6 hours ago.",
        "⚠️ Interaction with flagged contract: 0xdEaD...beef — known MEV bot.",
        "ℹ️ New token received: 500,000 PEPE (~$420) from Uniswap V3.",
      ],
      insights: [
        "🔵 Active in Aave V3 — $12,000 supplied as collateral.",
        "🟢 Uniswap LP position in ETH/USDC pool, earning ~4.2% APR.",
        "🟡 Holding 3 low-liquidity meme tokens — potential rug exposure.",
        "🔵 Gas spending trend: +22% this week, suggesting increased on-chain activity.",
      ],
    },
  },
  {
    id: "crypto-narrative-scanner",
    name: "Crypto Narrative Scanner",
    description:
      "Scan social media, news, and on-chain data to identify emerging crypto narratives and trending topics.",
    category: "Intelligence",
    icon: "🔭",
    inputs: [
      {
        name: "keywords",
        label: "Keywords",
        type: "textarea",
        placeholder: "e.g. L2 scaling, RWA, restaking",
        required: true,
      },
      {
        name: "timeframe",
        label: "Timeframe",
        type: "select",
        options: ["24h", "7d", "30d"],
        required: true,
      },
      {
        name: "sources",
        label: "Sources",
        type: "select",
        options: ["Twitter", "Reddit", "News", "All"],
        required: true,
      },
    ],
    tools: [
      "social-scraper",
      "sentiment-analyzer",
      "trend-detector",
      "narrative-clusterer",
    ],
    outputSchema: [
      { key: "topNarratives", label: "Top Narratives", type: "list" },
      { key: "sentimentSummary", label: "Sentiment Summary", type: "summary" },
      { key: "trendingTokens", label: "Trending Tokens", type: "list" },
      { key: "keyInsights", label: "Key Insights", type: "list" },
    ],
    mockOutput: {
      topNarratives: [
        "🚀 AI + Crypto convergence: Projects bridging LLMs with on-chain compute seeing 3x mention spike.",
        "🏦 Real-World Asset (RWA) tokenization: Institutional inflows narrative dominating financial Twitter.",
        "🔄 Restaking & EigenLayer derivatives: New yield strategies attracting DeFi power users.",
        "⛓️ Bitcoin L2s: Growing debate around validity and security trade-offs.",
      ],
      sentimentSummary:
        "Overall market sentiment is cautiously bullish (score: 67/100). Positive drivers include ETF inflow expectations and improving macro signals. Bearish undercurrent from regulatory uncertainty in the EU.",
      trendingTokens: [
        "ETH — Sentiment: 72% positive | Mentions: +41% vs last period",
        "SOL — Sentiment: 68% positive | Mentions: +29% vs last period",
        "ENA — Sentiment: 61% positive | Mentions: +118% vs last period",
        "EIGEN — Sentiment: 55% positive | Mentions: +87% vs last period",
      ],
      keyInsights: [
        "💡 'AI agent' narrative is gaining mainstream attention — 5 new protocols launched this week.",
        "💡 Whale wallets are accumulating ETH at current levels based on on-chain clustering.",
        "💡 Reddit crypto communities show rising interest in yield-bearing stablecoins.",
        "💡 News sentiment around Bitcoin ETFs remains highly positive — potential catalyst.",
      ],
    },
  },
];

export function getAgentById(id: string): Agent | undefined {
  return agentRegistry.find((agent) => agent.id === id);
}
