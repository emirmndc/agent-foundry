export interface AgentInput {
  name: string;
  label: string;
  type: "text" | "number" | "select" | "textarea";
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

export interface OutputField {
  key: string;
  label: string;
  type: "summary" | "alert" | "insight" | "list";
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  inputs: AgentInput[];
  tools: string[];
  outputSchema: OutputField[];
  mockOutput?: Record<string, unknown>;
}
