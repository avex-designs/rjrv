/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);
const slash = require(`slash`);


module.exports = {
	createPages: async ({graphql, actions}) => {
		const {createPage} = actions;
		const response = await graphql(`
			 {
				posts: allContentfulBlogSingle {
					edges {
						node {
							slug
							externalUrl
							fileAttachment{
								file{
								  url
								}
							 }							
						}
					}
					totalCount
				}
			}
        `);
		const mediaSingle = path.resolve('./src/templates/media_single.js');
		const media = path.resolve("./src/templates/media.js");

		//number of posts/careers per page
		const postsPerPage = 2;
		const numPagesPosts = response.data.posts.totalCount;
		const totalPages = Math.ceil(numPagesPosts / postsPerPage);
		for (let i = 0; i < totalPages; i++) {
			createPage({
				path: i === 0 ? `/media` : `/media/${i + 1}`,
				component: slash(media),
				context: {
					limit: postsPerPage,
					skip: i * postsPerPage,
					numPagesPosts,
					currentPage: i + 1
				}
			});
		}
		response.data.posts.edges.forEach((edge) => {
			if(!edge.node.externalUrl){
				if(!edge.node.fileAttachment) {
					createPage({
						path: `/media/${edge.node.slug}/`,
						component: slash(mediaSingle),
						context: {
							slug: edge.node.slug
						}
					});
				}
			}
		});

		const cms1 = path.resolve("./src/templates/cms1.js");
		const cms1Response = await graphql(`
			 {
				allContentfulCmsOption1 {
					edges {
					  node {
						slug
					  }
					}
				  }
			}
        `);

		cms1Response.data.allContentfulCmsOption1.edges.forEach((edge) => {
			createPage({
				path: edge.node.slug,
				component: slash(cms1),
				context: {
					slug: edge.node.slug
				}
			});
		});

		const cms2 = path.resolve("./src/templates/cms2.js");
		const cms2Response = await graphql(`
			 {
				allContentfulCmsOption2 {
					edges {
					  node {
						slug						
					  }
					}
				  }
			}
        `);

		cms2Response.data.allContentfulCmsOption2.edges.forEach((edge) => {
			createPage({
				path: edge.node.slug,
				component: slash(cms2),
				context: {
					slug: edge.node.slug
				}
			});
		});

		const cms3 = path.resolve("./src/templates/cms3.js");
		const cms3Response = await graphql(`
			 {
				allContentfulCmsOption3 {
					edges {
					  node {
						slug
					  }
					}
				  }
			}
        `);

		cms3Response.data.allContentfulCmsOption3.edges.forEach((edge) => {
			createPage({
				path: edge.node.slug,
				component: slash(cms3),
				context: {
					slug: edge.node.slug
				}
			});
		});

		const cms4 = path.resolve("./src/templates/cms4.js");
		const cms4Response = await graphql(`
			 {
				allContentfulCmsOption4 {
					edges {
					  node {
						slug
					  }
					}
				  }
			}
        `);

		cms4Response.data.allContentfulCmsOption4.edges.forEach((edge) => {
			createPage({
				path: edge.node.slug,
				component: slash(cms4),
				context: {
					slug: edge.node.slug
				}
			});
		});

		const cms5 = path.resolve("./src/templates/cms5.js");
		const cms5Response = await graphql(`
			 {
				allContentfulCmsOption5 {
					edges {
					  node {
						slug
					  }
					}
				  }
			}
        `);

		cms5Response.data.allContentfulCmsOption5.edges.forEach((edge) => {
			createPage({
				path: edge.node.slug,
				component: slash(cms5),
				context: {
					slug: edge.node.slug
				}
			});
		});

		const product = path.resolve("./src/templates/product_single.js");
		const productResponse = await graphql(`
			 {
				allContentfulProducts {
					edges {
					  node {
						slug
					  }
					}
				  }
			}
        `);

		productResponse.data.allContentfulProducts.edges.forEach((edge) => {
			createPage({
				path: `/products/${edge.node.slug}`,
				component: slash(product),
				context: {
					slug: edge.node.slug
				}
			});
		});

	},
	sourceNodes({actions}) {
		const {createTypes} = actions;
		const typeDefs = `
			type ContentfulTextAreaContent implements Node {
            	text: contentfulTextAreaContentTextTextNode,
            	bgColor: String,
            	alignment: contentfulTextAreaContentAlignmentTextNode,
            	highligted: Boolean
            }
            type ContentfulImageTextBlock implements Node {
            	title: String,
            	bgColor: String,
            	text: contentfulImageTextBlockTextTextNode,
            	image: ContentfulAsset,
            	imagePosition: contentfulImageTextBlockImagePositionTextNode,
            	urlText: String, 
            	url: String
            }
			type ContentfulTestimonial implements Node {
            	testimonialText: contentfulTestimonialTestimonialTextTextNode,
            	testimonialAuthor: String,
            	bgColor: String
            }
			type ContentfulLeadershipBlock implements Node {
            	title: String,
            	positions: [String],
            	text: contentfulLeadershipBlockTextTextNode,
            	image: ContentfulAsset,
            	bgColor: String,
            	imagePosition: contentfulLeadershipBlockImagePositionTextNode
            }
            
            type ContentfulCmsOption1 implements Node {
            	title: String,
            	slug: String,
            	bgColor: String,
            	bgPattern: ContentfulAsset,
            	text: contentfulCmsOption1TextContentTextNode
            }
            type ContentfulCmsOption2 implements Node {
            	title: String,
            	slug: String,
            	bgColor: String,
            	bgPattern: ContentfulAsset,
            	thumbnailImage: ContentfulAsset,
            	text: contentfulCmsOption2TextContentTextNode
            }
            type ContentfulCmsOption3 implements Node {
            	title: String,
            	slug: String,
            	bgColor: String,
            	bgPattern: ContentfulAsset,
            	thumbnailImage: ContentfulAsset,
            	textColumnLeft: contentfulCmsOption3TextColumnLeftTextNode,
            	textColumnRight: contentfulCmsOption3TextColumnRightTextNode
            }
            type ContentfulCmsOption4 implements Node {
            	title: String,
            	slug: String,
            	bgColor: String,
            	bgPattern: ContentfulAsset,
            	blocks: [ContentfulLeadershipBlock]
            }
            type ContentfulCmsOption5 implements Node {
            	preTitle: String,
            	title: String,
            	slug: String,
            	linkText: String,
            	imageTextBlock: [ContentfulImageTextBlock],
            	textAreaBlock: ContentfulTextAreaContent
            }
            type ContentfulLandingPage implements Node {
            	heroPreTitle: String,
            	heroTitle: contentfulLandingPageHeroTitleTextNode,
            	heroUrl: String,
            	heroImage: ContentfulAsset,
            	quoteText: contentfulLandingPageQuoteTextTextNode,
            	quoteAuthor: String,
            	textArea: ContentfulTextAreaContent,
            	imageTextBlocks: [ContentfulImageTextBlock],
            	testimonial: ContentfulTestimonial
            }
            
            type ContentfulBlog implements Node {
            	title: String,
            	slug: String,
            	bgColor: String,
            	bgPattern: ContentfulAsset,
            	thumbnailImage: ContentfulAsset,
            	contactBlockTitle: String,
            	contactBlockName: String,
            	contactBlockDescription: String,
            	contactBlockPhone: String,
            	contactBlockEmail: String            	
            }
             type ContentfulBlogSingle implements Node {
            	title: String,
            	slug: String,
            	text: contentfulBlogSingleTextTextNode,
            	bgColor: String,
            	bgPattern: ContentfulAsset,
            	thumbnailImage: ContentfulAsset,
            	publishedDate: Date,
            	externalUrl: String,     
            	fileAttachment: ContentfulAsset
            }  
                
            type ContentfulNavigationMenu implements Node {
            	menuItems: [ContentfulMenuItem]
            }
            type ContentfulMenuItem implements Node {
            	title: String,
            	link: String,
            	subMenu: [ContentfulMenuItem]
            }	
            
        `;

		createTypes(typeDefs);
	}
}


