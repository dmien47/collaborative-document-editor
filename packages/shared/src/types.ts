import type { DocumentRole } from "./roles.js";

export type DocumentId = string;
export type UserId = string;

export interface DocumentSummary {
  id: DocumentId;
  title: string;
  ownerId: UserId;
  role: DocumentRole;
  updatedAt: string;
  lastEditedAt: string | null;
}

export interface AuthenticatedUser {
  id: UserId;
  email: string;
  displayName: string | null;
}
