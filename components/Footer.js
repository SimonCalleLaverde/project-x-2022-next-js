// Imports
import Link from "next/link";
import Image from "next/image";
//import styles from "../styles/Footer.module.scss";//Maybe, maybe not, that's the question
// Must be a better way to import all this below I guess // To look up
import IconLinkedIn from "../components/icons/IconLinkedIn.js";
import IconBehance from "../components/icons/IconBehance.js";
import IconAngel from "../components/icons/IconAngel.js";
import IconGithub from "../components/icons/IconGithub.js";
import IconDribbble from "../components/icons/IconDribbble.js";
import IconPinterest from "../components/icons/IconPinterest.js";
import IconInstagram from "../components/icons/IconInstagram.js";
import IconFacebook from "../components/icons/IconFacebook.js";

// Footer (Sitewide) Component
export default function Footer() {
	return (
		<footer>{/*{styles.footer}*/}{/*className="clearfix"*/}
      {/*<div className="container">
        <span>
          Designed & Developed by{" "}
        </span>

        <a href="https://simoncallelaverde.github.io/" target="_blank">
          Simón Calle Laverde
        </a>
      </div>*/}

      {/* Desktop | Screen Readers */}
      <a className="container display-flex justify-content-center align-items-center text-center" href="/contact">{/*link-page-load*/}{/*href="javascript:delay('/hire_a_project')"*/}
        <div className="row-box">{/*row*/}
          <div className="column-12">{/*col-md-12*/}

            <h3 className="text-huge text-rosybrown text-uppercase">{/*mb-0*/}
              Let's create
              <br/>something
              <br/>special
            </h3>

            <p className="font-ultra-light text-rosybrown">
              If you want to work
              <br/>with me, let's talk.
            </p>

          </div>
        </div>
      </a>

      {/* Mobile Missing (.container) // To look up in my Jekyll's "Portfolio 2021" */}

      <aside className="footer-info-elements text-rosybrown">
        <div className="footer-hello">
          <br/>Available for
          <span className="font-ultra-light">
            <br/>Freelance projects /
            <br/>Contract work.
          </span>
        </div>

        <div className="footer-office">
          Office
          <span className="font-ultra-light">
            <br/>Calle 10 # 2 Este 40,
            <br/>Tr 8 Apt 404, Chía,
            <br/>Cundinamarca,
            <br/>Colombia.

            {/*<br/>Calle 152a # 13-58,
            <br/>Las Acacias,
            <br/>Bogotá D.C,
            <br/>Colombia.*/}
          </span>
        </div>

        <div className="footer-business-social">
          <span className="font-ultra-light">
            Business Social Media
          </span>
          <div className="">{/*mt-1*/}
            {/* TO CREATE USING <LINK/> COMPONENT */}
            <a className="link-line-throught" href="https://www.linkedin.com/in/simoncallelaverde" target="_blank">{/*link*/}{/*mr-3*/}
              <span className="icon-linkedin">
                {/*{% include icon_linkedin.xml %}*/}
                <IconLinkedIn/>
              </span>
            </a>
            <a className="link-line-throught" href="https://www.behance.net/simoncallelaverde" target="_blank">{/*link*/}{/*mr-3*/}
              <span className="icon-behance">
                {/*{% include icon_behance.xml %}*/}
                <IconBehance/>
              </span>
            </a>
            <a className="link-line-throught" href="https://angel.co/u/simoncallelaverde" target="_blank">{/*link*/}{/*mr-3*/}
              <span className="icon-angel">
                {/*{% include icon_angel.xml %}*/}
                <IconAngel/>
              </span>
            </a>
            <a className="link-line-throught" href="https://github.com/SimonCalleLaverde" target="_blank">{/*link*/}
              <span className="icon-github">
                {/*{% include icon_github.xml %}*/}
                <IconGithub/>
              </span>
            </a>
          </div>
        </div>

        {/* Desktop | Screen Readers */}
        <div className="footer-copyright font-ultra-light">
          © {/* {{ "now" | date: "%Y" }} */}2022 Simón Calle Laverde{/*{{ site.url }}*/}
          <br/>All rights reserved
        </div>

        {/* Mobile Missing (.footer-copyright) // To look up in my Jekyll's "Portfolio 2021" */}

        {/*Desktop*/}
        <div className="footer-email-or-call">{/*d-none d-md-block*/}
          Or just email me or call me
          <span className="font-ultra-light">
            <br/>+(57) 310 558 2638{/*{{ site.phone_number }}*/}
            <br/><a className="link-line-throught text-rosybrown" href="mailto:simoncallelaverde@gmail.com">simoncallelaverde@gmail.com</a>{/*{{ site.email }}*/}
          </span>
        </div>

        {/*Desktop | Screen Readers*/}
        <div className="footer-created-by">{/*d-none d-md-block*/}
          Designed & developed by
          <span className="font-ultra-light">
            <br/><a className="link-line-throught text-rosybrown" href="/">Simón Calle Laverde</a>{/*{{ site.client_name }}*/}
          </span>
        </div>

        {/*Mobile Missing (.footer-created-by) // To look up in my Jekyll's "Portfolio 2021"*/}

        <div className="footer-personal-social">
          <span className="font-ultra-light">
            Personal Social Media
          </span>
          <div className="">{/*mt-1*/}
            <a className="" href="https://dribbble.com/simoncallelaverde" target="_blank">{/*link*/}
              <span className="icon-dribbble">
                {/*{% include icon_dribbble.xml %}*/}
                <IconDribbble/>
              </span>
            </a>
            <a className="" href="https://co.pinterest.com/simoncallelaverde" target="_blank">{/*link*/}{/*ml-3*/}
              <span className="icon-pinterest">
                {/*{% include icon_pinterest.xml %}*/}
                <IconPinterest/>
              </span>
            </a>
            <a className="" href="https://www.instagram.com/simons_pic_tures/" target="_blank">{/*link*/}{/*ml-3*/}
              <span className="icon-instagram">
                {/*{% include icon_instagram.xml %}*/}
                <IconInstagram/>
              </span>
            </a>
            <a className="" href="https://www.facebook.com/simoncio/" target="_blank">{/*link*/}{/*ml-3*/}
              <span className="icon-facebook">
                {/*{% include icon_facebook.xml %}*/}
                <IconFacebook/>
              </span>
            </a>
          </div>
        </div>

        <div className="footer-credits">
          Credits
          <span className="font-ultra-light">
            <br/>Icon Illustrations by
            <br/><a className="link-line-throught text-rosybrown" href="https://absurd.design/" target="_blank">absurd.design</a>
          </span>
        </div>

        <nav className="footer-nav">{/*REMOVED EXTRA "navbar"*/}
          <ul className="footer-nav-ul">{/*NEW TO STYLE "footer-nav-ul" INSTEAD OF "navbar-nav"*/}



            <li className="footer-nav-li">{/*NEW TO STYLE "footer-nav-li" INSTEAD OF "nav-item"*/}
              <a className="footer-nav-link link-line-throught" href="javascript:delay('/')">{/*link*/}{/*link-page-load*/}{/*NEW TO STYLE "footer-nav-link" INSTEAD OF "nav-link"*/}{/*{% if page.slug == 'home' %} active-link{% endif %}*/}
                <span>Home</span>
              </a>
            </li>

            <li className="footer-nav-li">{/*NEW TO STYLE "footer-nav-li" INSTEAD OF "nav-item"*/}
              <a className="footer-nav-link link-line-throught" href="javascript:delay('/about')">{/*link*/}{/*link-page-load*/}{/*NEW TO STYLE "footer-nav-link" INSTEAD OF "nav-link"*/}{/*{% if page.slug == 'about' %} active-link{% endif %}*/}
                <span>About{/* me*/}</span>
              </a>
            </li>

            <li className="footer-nav-li">{/*NEW TO STYLE "footer-nav-li" INSTEAD OF "nav-item"*/}
              <a className="footer-nav-link link-line-throught" href="javascript:delay('/projects')">{/*link*/}{/*link-page-load*/}{/*NEW TO STYLE "footer-nav-link" INSTEAD OF "nav-link"*/}{/*{% if page.slug == 'projects' %} active-link{% endif %}*/}
                <span>All projects</span>
              </a>
            </li>

            <li className="footer-nav-li">{/*NEW TO STYLE "footer-nav-li" INSTEAD OF "nav-item"*/}
              <a className="footer-nav-link link-line-throught" href="javascript:delay('/contact_me')">{/*link*/}{/*link-page-load*/}{/*NEW TO STYLE "footer-nav-link" INSTEAD OF "nav-link"*/}{/*{% if page.slug == 'contact_me' %} active-link{% endif %}*/}{/*if page.type_slug == 'feedback'*/}
                <span>Contact{/* me*/}</span>
              </a>
            </li>

            <li className="footer-nav-li">{/*NEW TO STYLE "footer-nav-li" INSTEAD OF "nav-item"*/}
              <a className="footer-nav-link link-line-throught" href="javascript:delay('/hire_a_project')">{/*link*/}{/*link-page-load*/}{/*NEW TO STYLE "footer-nav-link" INSTEAD OF "nav-link"*/}{/*{% if page.slug == 'hire_a_project' %} active-link{% endif %}*/}
                <span>Hire a project</span>
              </a>
            </li>



          </ul>
        </nav>
      </aside>
		</footer>
	)
};