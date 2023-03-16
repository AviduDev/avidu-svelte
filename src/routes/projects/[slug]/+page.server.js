import { GraphQLClient } from 'graphql-request'
import { API_URL, API_TOKEN } from '$env/static/private'

export const prerender = true
/**
 * @param {any} params
 */

export const load = async ({ params }) => {
	const { slug } = params
	const hygraph = new GraphQLClient(API_URL, {
		headers: {
			Authorization: `Bearer ${API_TOKEN}`
		}
	})

	const { project } = await hygraph.request(
		`query ProjectsIndex ($slug: String!) {
            project (where: {slug: $slug}) {
              title
              mainImage {
                url
                id
              }
			  type
			  company
			  collaboration
			  demoUrl
			  description
			  design
			  sourceUrl
			  tags
			  year
			  images {
				html
			  }
			  gallery {
				url
				id
			  }
			  goals {
				html
				raw
			  }
			  liveSite
			  problems {
				html
				raw
				markdown
			  }
			  projectScope {
				html
				raw
				markdown
			  }
			  proposedSolution {
				html
				raw
				markdown
			  }
			  providedServices {
				html
				raw
				markdown
			  }
			
            }
        }`,
		{
			slug
		}
	)

	return {
		project
	}
}