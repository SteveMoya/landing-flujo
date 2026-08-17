export interface Integration {
  name: string;
  slug: string;
  color: 'primary' | 'secondary' | 'tertiary' | 'error';
  font?: boolean;
}

export const integrations: Integration[] = [
  { name: 'Slack', slug: 'S', color: 'secondary', font: true },
  { name: 'GitHub', slug: 'GH', color: 'primary', font: true },
  { name: 'Figma', slug: 'F', color: 'error', font: true },
  { name: 'Google Drive', slug: 'G', color: 'tertiary', font: true },
  { name: 'Notion', slug: 'N', color: 'secondary', font: true },
  { name: 'Teams', slug: 'T', color: 'primary', font: true },
  { name: 'Zapier', slug: 'Z', color: 'tertiary', font: true },
  { name: 'Dropbox', slug: 'D', color: 'primary', font: true },
];