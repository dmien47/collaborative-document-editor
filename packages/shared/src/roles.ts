export const documentRoles = ["owner", "editor", "viewer"] as const;

export type DocumentRole = (typeof documentRoles)[number];

export function canEditDocument(role: DocumentRole): boolean {
  return role === "owner" || role === "editor";
}

export function canManageDocumentMembers(role: DocumentRole): boolean {
  return role === "owner";
}

export function getRoleLabel(role: DocumentRole): string {
  switch (role) {
    case "owner":
      return "Owner";
    case "editor":
      return "Editor";
    case "viewer":
      return "Viewer";
  }
}
