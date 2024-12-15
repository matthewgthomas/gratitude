import { error } from '@sveltejs/kit';

export const ssr = false; // Disable SSR for markdown content

export async function load({ params }) {
    const sectionsArray = await import("$data/sections.csv");
    const sections = sectionsArray.default.map(item => item.Slug);
  
    if (!sections.includes(params.slug)) {
      throw error(404, "This is not how the story goes.");
    }
  
    //const component = await import(`$content/${params.slug}.md`);
    const routes = await import('$data/routes.csv');

	return {
        section: params.slug,
        componentPath: `/src/content/${params.slug}.md`,
        routes: routes.default.filter(route => route.FromSectionID === params.slug)
	};
  }