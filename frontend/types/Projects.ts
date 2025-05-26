import type {Post} from './Post'

export interface Project {
  id: number,
  title: string,
  short_description: string,
  website_url?: string,
  github_url?: string,
  demo_url?: string,
  technologies: string,
  project_palette: 'sapling' | 'blue' | 'eyez' | 'toxic' | 'earth'
  related_post?: Post
}
