import { HashRouter, Link, Route, Routes } from "react-router-dom";

import { getRoleLabel } from "@cde/shared";

import { DashboardPage } from "../routes/DashboardPage";
import { DocumentPage } from "../routes/DocumentPage";

export function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 text-slate-950">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link to="/" className="text-base font-semibold">
              Collaborative Editor
            </Link>
            <span className="text-sm text-slate-500">Phase 0 scaffold</span>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-8">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/documents/:documentId" element={<DocumentPage />} />
          </Routes>
        </main>

        <footer className="mx-auto max-w-6xl px-6 py-6 text-xs text-slate-500">
          Shared role helper loaded: {getRoleLabel("owner")}
        </footer>
      </div>
    </HashRouter>
  );
}
