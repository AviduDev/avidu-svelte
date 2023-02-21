import { GraphQLClient } from 'graphql-request'
import { API_URL, API_TOKEN } from '$env/static/private'

export const prerender = true

export const load = async () => {
	const hygraph = new GraphQLClient(API_URL, {
		headers: {
			Authorization: `Bearer ${API_TOKEN}`
		}
	})

	const { services } = await hygraph.request(
		`query MyQuery {
            services {
              serviceTitle
              serviceDescription
              slug
              id
            }
          }
          `
	)

	return {
		services
	}
}
  