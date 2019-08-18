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
						}
					}
					totalCount
				}
			}
        `);
		const mediaSingle = path.resolve('./src/templates/media_single.js');
		const media = path.resolve("./src/templates/media.js");

		//number of posts/careers per page
		const postsPerPage = 1;
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
			createPage({
				path: `/media/${edge.node.slug}/`,
				component: slash(mediaSingle),
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
            	text: contentfulImageTextBlockTextRichTextNode,
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
            	text: contentfulCmsOption1TextRichTextNode
            }
            type ContentfulCmsOption2 implements Node {
            	title: String,
            	slug: String,
            	bgColor: String,
            	bgPattern: ContentfulAsset,
            	thumbnailImage: ContentfulAsset,
            	text: contentfulCmsOption2TextRichTextNode
            }
            type ContentfulCmsOption3 implements Node {
            	title: String,
            	slug: String,
            	bgColor: String,
            	bgPattern: ContentfulAsset,
            	thumbnailImage: ContentfulAsset,
            	textColumnLeft: contentfulCmsOption3TextColumnLeftRichTextNode,
            	textColumnRight: contentfulCmsOption3TextColumnRightRichTextNode
            }
            type ContentfulCmsOption4 implements Node {
            	title: String,
            	slug: String,
            	bgColor: String,
            	bgPattern: ContentfulAsset,
            	blocks: ContentfulLeadershipBlock
            }
            type ContentfulCmsOption5 implements Node {
            	preTitle: String,
            	title: String,
            	slug: String,
            	titleShortText: contentfulCmsOption5TitleShortTextTextNode,
            	linkText: String,
            	imageTextBlock: ContentfulImageTextBlock,
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
            	text: contentfulBlogSingleTextRichTextNode,
            	bgColor: String,
            	bgPattern: ContentfulAsset,
            	thumbnailImage: ContentfulAsset,
            	publishedDate: Date,
            	externalUrl: String,     
            	fileAttachment: ContentfulAsset
            }     
        `;

		createTypes(typeDefs);
	}
}


