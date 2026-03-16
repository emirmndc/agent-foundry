import { OutputField } from "@/lib/types";

interface OutputCardProps {
  field: OutputField;
  value: unknown;
}

const typeStyles: Record<OutputField["type"], string> = {
  summary: "border-blue-500/40 bg-blue-900/20",
  alert: "border-red-500/40 bg-red-900/20",
  insight: "border-green-500/40 bg-green-900/20",
  list: "border-violet-500/40 bg-violet-900/20",
};

const typeBadgeStyles: Record<OutputField["type"], string> = {
  summary: "bg-blue-900/50 text-blue-300",
  alert: "bg-red-900/50 text-red-300",
  insight: "bg-green-900/50 text-green-300",
  list: "bg-violet-900/50 text-violet-300",
};

export default function OutputCard({ field, value }: OutputCardProps) {
  const isArray = Array.isArray(value);

  return (
    <div
      className={`rounded-xl border p-5 ${typeStyles[field.type]}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-sm font-semibold text-slate-200">{field.label}</h3>
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${typeBadgeStyles[field.type]}`}
        >
          {field.type}
        </span>
      </div>
      {isArray ? (
        <ul className="space-y-2">
          {(value as unknown[]).map((item, i) => (
            <li
              key={i}
              className="text-sm text-slate-300 leading-relaxed pl-3 border-l-2 border-slate-600"
            >
              {String(item)}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-slate-300 leading-relaxed">
          {String(value)}
        </p>
      )}
    </div>
  );
}
