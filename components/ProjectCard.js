import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProjectCard.module.scss";
//import moment from "moment";

// Project (Card) Component
export default function ProjectCard({ title, slug, nameForThumbnail, client, thumbnailImage, headerImage, platforms, year, roles, webLaunchUrl, webImages, type, category, tags, content }) {
	return (
		<article className={styles.article}>
			<Link href={`/projects/${slug}`}>
				{/*<Image src={headerImage.url} alt={`${title} Project's Header Image`} layout="fill"/>*/}{/* Must use "width" & "height" properties or "layout='fill'" property */}
				<img src={headerImage.url} alt={`${title} Project's Header Image`}/>
			</Link>

			<div className="project-caption">
				<h1>Title: {title}</h1>
				<h5>Client: {client}</h5>
				<Image src={thumbnailImage.url} alt={`${title} Project's Thumbnail Image`} width="120" height="90"/>
				<h5>Name For Thumbnail: {nameForThumbnail}</h5>
				<h5>Year: {year}</h5>
				<h5>Type: {type}</h5>
				<h5>Category: {category}</h5>
				<h5>Slug: {slug}</h5>
				<h5>Web Launch URL: {webLaunchUrl}</h5>
				<p>Content: {content.text}</p>

				<h6 style={{marginBottom:"0px", color: "green"}}>Allows Multiple Values:</h6>
				<h4 style={{marginTop:"0px"}}>
					{/*Web Image [Index "0"]:<br/>{webImages[0].url}*/}
					Web Images [All]: {webImages.map(image => (
						<div key={image.url}>
							{image.url}
						</div>
					))}
				</h4>

				<h6 style={{marginBottom:"0px", color: "green"}}>Allows Multiple Values:</h6>
				<h4 style={{marginTop:"0px"}}>
					Platforms [All]: {platforms.map(platform => (
						<div key={platform}>
							{platform}
						</div>
					))}
				</h4>

				<h6 style={{marginBottom:"0px", color: "green"}}>Allows Multiple Values:</h6>
				<h4 style={{marginTop:"0px"}}>
					Roles [All]: {roles.map(role => (
						<div key={role}>
							{role}
						</div>
					))}
				</h4>

				<h6 style={{marginBottom:"0px", color: "green"}}>Allows Multiple Values:</h6>
				<h4 style={{marginTop:"0px"}}>
					Tags [All]: {tags.map(tag => (
						<div key={tag}>
							{tag}
						</div>
					))}
				</h4>
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