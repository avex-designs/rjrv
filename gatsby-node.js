/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

module.exports = {
	sourceNodes({actions}) {
		const {createTypes} = actions;
		const typeDefs = `
			type ContentfulTextAreaContent implements Node {
            	text: contentfulTextAreaContentTextTextNode,
            	bgColor: String,
            	alignment: contentfulTextAreaContentAlignmentTextNode,
            	highligted: Boolean
            }
			type ContentfulTestimonial implements Node {
            	testimonialText: contentfulTestimonialTestimonialTextRichTextNode,
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
            type ContentfulImageTextBlock implements Node {
            	title: String,
            	bgColor: String,
            	text: contentfulImageTextBlockTextRichTextNode,
            	image: ContentfulAsset,
            	imagePosition: contentfulImageTextBlockImagePositionTextNode,
            	urlText: String, 
            	url: String
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
            	imageTextBlocks: ContentfulImageTextBlock,
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
            }     
        `;

		createTypes(typeDefs);
	}

}