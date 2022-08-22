import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProjectCard.module.scss";
//import moment from "moment";

// Project (Card) Component
export default function ProjectCard({ title, slug, nameForThumbnail, client, thumbnailImage, headerImage, platforms, year, roles, webLaunchUrl, webImages, type, category, tags, content }) {
	return (
		<article className={styles.article}>
			<Link href={`/projects/${slug}`}>
				{/*<Image src={thumbnailImage.url} alt={`${title} Project's Thumbnail Image`} layout="fill"/>*/}{/* Must use "width" & "height" properties or "layout='fill'" property */}
				<img src={thumbnailImage.url} alt={`${title} Project's Thumbnail Image`}/>
			</Link>




			<div className="project-caption">
				<Image src={headerImage.url} alt={`${title} Project's Header Image`} width="100" height="70"/>

				<h1>Title: {title}</h1>
				<h4>Slug: {slug}</h4>
				<h4>Name For Thumbnail: {nameForThumbnail}</h4>
				<h4>Client: {client}</h4>

				<h4 style={{marginBottom:"0px"}}>Platforms: {platforms}</h4>
				<h6 style={{marginTop:"0px", color: "red"}}>To Check "platforms" As It Allows/May-Have Multiple Values. Might Need To Loop Through An Array</h6>

				<h4>Year: {year}</h4>

				<h4 style={{marginBottom:"0px"}}>Roles: {roles}</h4>
				<h6 style={{marginTop:"0px", color: "red"}}>To Check "roles" As It Allows/May-Have Multiple Values. Might Need To Loop Through An Array</h6>

				<h4>Web Launch URL: {webLaunchUrl}</h4>

				<h4 style={{marginBottom:"0px"}}>Web Images: {webImages.url}</h4>
				<h6 style={{marginTop:"0px", color: "red"}}>To Check "webImages" As It Allows/May-Have Multiple Values. Might Need To Loop Through An Array</h6>

				<h4>Type: {type}</h4>
				<h4>Category: {category}</h4>

				<h4 style={{marginBottom:"0px"}}>Tags: {tags}</h4>
				<h6 style={{marginTop:"0px", color: "red"}}>To Check "tags" As It Allows/May-Have Multiple Values. Might Need To Loop Through An Array</h6>

				<h4>Content: {content.text}</h4>
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