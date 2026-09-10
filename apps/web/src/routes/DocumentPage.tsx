import { useParams } from "react-router-dom";

export function DocumentPage() {
  const { documentId } = useParams();

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm text-slate-500">Document route</p>
        <h1 className="text-3xl font-semibold tracking-normal">{documentId}</h1>
      </div>

      <div className="min-h-96 rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-slate-600">
          Phase 3 will replace this placeholder with a TipTap editor. Collaboration will be added
          after the single-user editing surface is stable.
        </p>
      </div>
    </section>
  );
}
