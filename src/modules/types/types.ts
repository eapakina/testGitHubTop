export interface Project {
  id: number;
  name: string;
  html_url: string;
  description: string;
  watchers: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}
