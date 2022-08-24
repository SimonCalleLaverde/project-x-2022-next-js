import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProjectCard.module.scss";
//import moment from "moment";

// Project (Card) Component
export default function ProjectCard({ title, slug, nameForThumbnail, client, thumbnailImage, headerImage, platforms, year, roles, webLaunchUrl, webImages, type, category, tags, content }) {
	return (
		<article className={styles.article}>
			<h1>Title: {title}</h1>

			<Link href={`/projects/${slug}`}>
				{/*<Image src={headerImage.url} alt={`${title} Project's Header Image`} layout="fill"/>*/}{/* Must use "width" & "height" properties or "layout='fill'" property */}
				<img src={headerImage.url} alt={`${title} Project's Header Image`}/>
			</Link>

			<div className="project-caption">
				<h4>Client: {client}</h4>
				<br/>

				<Image src={thumbnailImage.url} alt={`${title} Project's Thumbnail Image`} width="120" height="90"/>
				<h4>Name For Thumbnail: {nameForThumbnail}</h4>
				<br/>

				<h4>Year: {year}</h4>
				<h4>Type: {type}</h4>
				<h4>Category: {category}</h4>
				<h4>Slug: {slug}</h4>
				<h4>Web Launch URL: {webLaunchUrl}</h4>
				<br/>

				<p>Content: {content.text}</p>
				<br/>

				<h6 style={{marginBottom:"0px", color: "green"}}>Multiple Values:</h6>
				<h5 style={{marginTop:"0px"}}>
					{/*Web Image [Index "0"]:<br/>{webImages[0].url}*/}
					WEB IMAGES:
					{webImages.map(image => (
						<div key={image.url}>
							{image.url}
						</div>
					))}
				</h5>
				<br/>

				<h6 style={{marginBottom:"0px", color: "green"}}>Multiple Values:</h6>
				<h5 style={{marginTop:"0px"}}>
					PLATFORMS:
					{platforms.map(platform => (
						<div key={platform}>
							{platform}
						</div>
					))}
				</h5>
				<br/>

				<h6 style={{marginBottom:"0px", color: "green"}}>Multiple Values:</h6>
				<h5 style={{marginTop:"0px"}}>
					ROLES:
					{roles.map(role => (
						<div key={role}>
							{role}
						</div>
					))}
				</h5>
				<br/>

				<h6 style={{marginBottom:"0px", color: "green"}}>Multiple Values:</h6>
				<h5 style={{marginTop:"0px"}}>
					TAGS:
					{tags.map(tag => (
						<div key={tag}>
							{tag}
						</div>
					))}
				</h5>
			</div>

			{/* TEMPORARY // TO REVISE "moment.js" FOR DATES // USED IN MY "next-js-blog-graphcms" */}
			<time className="project-date">
				{/*<h3>{datePublished}</h3>*/}
				{/*<h3>{moment(datePublished).format("MMMM d, YYYY")}</h3>*/}
				{/*<h3>{moment(datePublished).format("MMMM Do, YYYY")}</h3>*/}
				{/*<h3>{moment(datePublished).format("MMMM D, YYYY")}</h3>*/}
			</time>
		</article>
	)
};