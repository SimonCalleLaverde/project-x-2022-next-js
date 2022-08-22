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




				<h6 style={{marginBottom:"0px", color: "red"}}>To Revise "platforms" As It Allows/May-Have Multiple Values. Might Need To Loop Through An Array</h6>
				<h4 style={{marginTop:"0px"}}>Platforms: {platforms}</h4>



				<h6 style={{marginBottom:"0px", color: "red"}}>To Revise "roles" As It Allows/May-Have Multiple Values. Might Need To Loop Through An Array</h6>
				<h4 style={{marginTop:"0px"}}>Roles: {roles}</h4>



				<h6 style={{marginBottom:"0px", color: "red"}}>To Revise "webImages" As It Allows/May-Have Multiple Values. Might Need To Loop Through An Array</h6>
				<h4 style={{marginTop:"0px"}}>Web Images: {webImages.url}</h4>



				<h6 style={{marginBottom:"0px", color: "red"}}>To Revise "tags" As It Allows/May-Have Multiple Values. Might Need To Loop Through An Array</h6>
				<h4 style={{marginTop:"0px"}}>Tags: {tags}</h4>




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