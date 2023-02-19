import { GraphQLClient } from 'graphql-request'
import { API_URL, API_TOKEN } from '$env/static/private'

export const prerender = true

export const load = async () => {
	const hygraph = new GraphQLClient(API_URL, {
		headers: {
			Authorization: `Bearer ${API_TOKEN}`
		}
	})

	const { projects } = await hygraph.request(
		`query MyQuery {
            projects {
              title
              slug
              id
              mainImage {
                url
              }
            }
          }
          `
	)

	return {
		projects
	}
}