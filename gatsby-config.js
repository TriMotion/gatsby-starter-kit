/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-prismic-graphql',
            options: {
                repositoryName: 'trimotion-prismic-gatsby-starter', // (REQUIRED, replace with your own)
                // accessToken: 'MC5Ya0ZpSUJFQUFDTUFJcENE.77-977-9Hu-_vVpE77-977-977-977-9JO-_ve-_vW8OLyZGIO-_ve-_vX5277-977-9Au-_ve-_vRnvv70y77-9', // (optional API access token)
                path: '/preview', // (optional preview path. Default: /preview)
                previews: true, // (optional, activated Previews. Default: false)
                pages: [{ // (optional, builds pages dynamically)
                    type: 'Post',         // TypeName from prismic
                    match: '/post/:uid',  // Pages will be generated under this pattern
                    path: '/post',        // Placeholder page for unpublished documents
                    component: require.resolve('./src/templates/post.js'),
                }],
            }
        }
    ],
}
