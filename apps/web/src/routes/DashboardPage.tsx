import { Link } from "react-router-dom";

export function DashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-normal">Documents</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Phase 1 will add Supabase authentication. Phase 2 will replace this placeholder with
          document CRUD backed by PostgreSQL.
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-medium">Local scaffold ready</h2>
        <p className="mt-2 text-sm text-slate-600">
          The application shell, routing, Tailwind setup, and shared package import are in place.
        </p>
        <Link
          to="/documents/demo"
          className="mt-4 inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Open demo document route
        </Link>
      </div>
    </section>
  );
}
