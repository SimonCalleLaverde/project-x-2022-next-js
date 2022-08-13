import Link from "next/link";
import styles from "../styles/ProjectCard.module.css";
import Image from "next/image";
//import moment from "moment";

// Project (Card) Component
export default function ProjectCard({ title, slug, nameForThumbnail, client, thumbnailImage, headerImage, platforms, year, roles, webLaunchUrl, webImages, type, category, tags, content }) {
	return (
		<article>
			<Link href={`/projects/${slug}`}>
				<Image src={thumbnailImage.url} alt={`${title} Project's Thumbnail Image`} layout="fill"/>{/* Must use "width" & "height" properties or "layout='fill'" property */}
			</Link>

			<div className="project-caption">
				<h2>{title}</h2>




				{/* TO REVISE "moment.js" FOR DATES */}
				<div className="project-temporary">
					<div>
						<img src={headerImage.url} alt={client}/>
						<h3>{client}</h3>
					</div>

					<time>
						{/*<h3>{datePublished}</h3>*/}
						{/*<h3>{moment(datePublished).format("MMMM d, YYYY")}</h3>*/}
						{/*<h3>{moment(datePublished).format("MMMM Do, YYYY")}</h3>*/}

						{/*<h3>{moment(datePublished).format("MMMM D, YYYY")}</h3>*/}
					</time>
				</div>




			</div>
		</article>
	)
};