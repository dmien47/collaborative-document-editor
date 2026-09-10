# Supabase

Phase 1 will add the initial authentication/profile migration.

Planned tables:

- `profiles`
- `documents`
- `document_members`
- `document_versions`

RLS should be enabled for all application tables. The frontend will use Supabase's anon key and
RLS-protected queries. The collaboration server will enforce document authorization separately
before admitting users to WebSocket rooms.
