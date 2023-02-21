import { GraphQLClient } from 'graphql-request';
import { API_URL, API_TOKEN } from '$env/static/private';

export const prerender = true;
/**
 * @param {any} params
 */

export const load = async ({ params }) => {
	const { slug } = params;
	const hygraph = new GraphQLClient(API_URL, {
		headers: {
			Authorization: `Bearer ${API_TOKEN}`
		}
	});

	const { service } = await hygraph.request(
		`query MyQuery($slug: String!) {
            service (where: {slug: $slug}) {
                serviceTitle
                serviceDescription
                relatedTools {
                    html
                  }
                  relatedServices {
                    html
                  }
            }
        }`,
		{
			slug
		}
	);

	return {
		service
	};
};
