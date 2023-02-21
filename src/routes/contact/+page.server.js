import { GraphQLClient } from 'graphql-request'
import { API_URL, API_TOKEN } from '$env/static/private'

export const prerender = true

export const load = async () => {
	const hygraph = new GraphQLClient(API_URL, {
		headers: {
			Authorization: `Bearer ${API_TOKEN}`
		}
	})

	const { faqs } = await hygraph.request(
		`query MyQuery {
            faqs {
              question
              answer
            }
          }
          `
	)

	return {
		faqs
	}
}
