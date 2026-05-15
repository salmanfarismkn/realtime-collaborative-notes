/** Placeholder data for UI development before API integration. */

export const currentUser = {
  id: 'user-1',
  name: 'Alex Morgan',
  email: 'alex@collabnotes.io',
  avatarInitials: 'AM',
  plan: 'Pro',
};

export const recentNotes = [
  {
    id: 'note-1',
    title: 'Product roadmap Q2',
    excerpt: 'Launch priorities, milestones, and cross-team dependencies for the next quarter.',
    updatedAt: '2026-05-14T18:30:00Z',
    isShared: true,
    collaboratorCount: 4,
    color: 'blue',
  },
  {
    id: 'note-2',
    title: 'Design system audit',
    excerpt: 'Token updates, component gaps, and accessibility checklist for the UI library.',
    updatedAt: '2026-05-13T09:15:00Z',
    isShared: false,
    collaboratorCount: 1,
    color: 'gray',
  },
  {
    id: 'note-3',
    title: 'Sprint retro — May',
    excerpt: 'What went well, blockers, and action items for the engineering team.',
    updatedAt: '2026-05-12T16:45:00Z',
    isShared: true,
    collaboratorCount: 6,
    color: 'blue',
  },
  {
    id: 'note-4',
    title: 'Customer interview notes',
    excerpt: 'Pain points around onboarding, collaboration, and export workflows.',
    updatedAt: '2026-05-10T11:20:00Z',
    isShared: false,
    collaboratorCount: 1,
    color: 'gray',
  },
];

export const sharedNotes = [
  {
    id: 'note-5',
    title: 'Marketing launch brief',
    excerpt: 'Campaign messaging, channels, and launch timeline for CollabNotes v2.',
    updatedAt: '2026-05-14T14:00:00Z',
    owner: 'Jordan Lee',
    collaboratorCount: 3,
    color: 'blue',
  },
  {
    id: 'note-6',
    title: 'Engineering RFC: Real-time sync',
    excerpt: 'CRDT approach, conflict resolution, and WebSocket architecture overview.',
    updatedAt: '2026-05-13T20:30:00Z',
    owner: 'Sam Patel',
    collaboratorCount: 5,
    color: 'gray',
  },
  {
    id: 'note-7',
    title: 'Weekly standup template',
    excerpt: 'Reusable structure for async updates and blocker tracking.',
    updatedAt: '2026-05-11T08:00:00Z',
    owner: 'Taylor Kim',
    collaboratorCount: 8,
    color: 'blue',
  },
];

export const editorNote = {
  id: 'note-1',
  title: 'Product roadmap Q2',
  content: `<p>Our Q2 focus centers on <strong>real-time collaboration</strong>, improved onboarding, and enterprise-ready permissions.</p>
<p><br></p>
<h2>Key milestones</h2>
<ul>
<li>Launch live cursors and presence indicators</li>
<li>Ship workspace-level sharing controls</li>
<li>Integrate export to Markdown and PDF</li>
</ul>
<p><br></p>
<p>Next sync: review dependency map with design and platform teams.</p>`,
  updatedAt: '2026-05-14T18:30:00Z',
};

export const collaborators = [
  {
    id: 'user-2',
    name: 'Jordan Lee',
    email: 'jordan@collabnotes.io',
    avatarInitials: 'JL',
    role: 'Editor',
    isOnline: true,
    cursorColor: '#2563eb',
  },
  {
    id: 'user-3',
    name: 'Sam Patel',
    email: 'sam@collabnotes.io',
    avatarInitials: 'SP',
    role: 'Editor',
    isOnline: true,
    cursorColor: '#7c3aed',
  },
  {
    id: 'user-4',
    name: 'Taylor Kim',
    email: 'taylor@collabnotes.io',
    avatarInitials: 'TK',
    role: 'Viewer',
    isOnline: false,
    cursorColor: '#059669',
  },
  {
    id: 'user-5',
    name: 'Riley Chen',
    email: 'riley@collabnotes.io',
    avatarInitials: 'RC',
    role: 'Editor',
    isOnline: true,
    cursorColor: '#ea580c',
  },
];

export const landingFeatures = [
  {
    title: 'Live co-editing',
    description:
      'See changes as they happen. Multiple teammates can edit the same note without overwriting each other.',
    icon: 'live',
  },
  {
    title: 'Presence & cursors',
    description:
      'Know who is in the doc and where they are working with real-time presence and colored cursors.',
    icon: 'presence',
  },
  {
    title: 'Smart workspaces',
    description:
      'Organize notes by team, project, or client. Search across everything in milliseconds.',
    icon: 'workspace',
  },
  {
    title: 'Enterprise-ready',
    description:
      'Role-based access, audit logs, and SSO-ready architecture built for growing teams.',
    icon: 'security',
  },
];

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Collaboration', href: '#collaboration' },
  { label: 'Pricing', href: '#pricing' },
];
