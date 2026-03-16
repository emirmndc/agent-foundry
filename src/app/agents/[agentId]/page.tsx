import AgentPageClient from "./AgentPageClient";

interface AgentPageProps {
  params: Promise<{ agentId: string }>;
}

export default async function AgentPage({ params }: AgentPageProps) {
  const { agentId } = await params;
  return <AgentPageClient agentId={agentId} />;
}
