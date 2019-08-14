import React from "react"

const BlogPost = () => (
	<article className="col-12 col-md-6 pb-5 pr-lg-5">
		<a className="rjrv-condensed text-uppercase text-spacing arrow-right"
		   href="/assets/pdf/VELO_Press_Briefing_07.08.19_Final_0831.pdf" target="_blank">
			<div className="rjrv-placeholder" data-large="/assets/img/media-10.png">
				<img src="/assets/img/media-10-xs.png"
					 alt="R.J. Reynolds Vapor Company Announces VELO – Expanding Emerging Modern Oral Portfolio and Choice for Adult Tobacco Consumer"
					 className="img-small"/>
				<div style={{paddingBottom: '66.6%'}}></div>
			</div>
		</a>
		<p className="mt-5 rjrv-condensed">
			<small>
				<time className="text-uppercase text-spacing text-gold text-decoration"
					  datetime="2019-03-27">July 8, 2019
				</time>
			</small>
		</p>
		<h3>R.J. Reynolds Vapor Company Announces VELO – Expanding Emerging Modern Oral Portfolio and
			Choice for Adult Tobacco Consumer</h3>
		<p>Company expands the rollout of VELO as part of its innovative Modern Oral category to meet
			the evolving preferences of today’s adult tobacco consumer with simple, hassle free, oral
			nicotine products</p>
		<a className="rjrv-condensed text-uppercase text-spacing"
		   href="/assets/pdf/VELO_Press_Briefing_07.08.19_Final_0831.pdf" target="_blank">
			<small className="arrow-right">Read article</small>
		</a>
	</article>
)


export default BlogPost
