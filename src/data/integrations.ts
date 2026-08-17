export interface Integration {
  name: string;
  slug: string;
  color: 'primary' | 'secondary' | 'tertiary' | 'error';
}

export const integrations: Integration[] = [
  { name: 'Slack', slug: 'slack', color: 'secondary' },
  { name: 'GitHub', slug: 'github', color: 'primary' },
  { name: 'Figma', slug: 'figma', color: 'error' },
  { name: 'Google Drive', slug: 'googledrive', color: 'tertiary' },
  { name: 'Notion', slug: 'notion', color: 'secondary' },
  { name: 'Teams', slug: 'teams', color: 'primary' },
  { name: 'Zapier', slug: 'zapier', color: 'tertiary' },
  { name: 'Dropbox', slug: 'dropbox', color: 'primary' },
];