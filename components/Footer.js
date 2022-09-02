import Link from "next/link";
import Image from "next/image";
//import styles from "../styles/Footer.module.scss";//Maybe, maybe not, that's the question
import IconLinkedIn from "../components/icons/IconLinkedIn.js";
import IconBehance from "../components/icons/IconBehance.js";
import IconAngel from "../components/icons/IconAngel.js";
import IconGithub from "../components/icons/IconGithub.js";

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

      {/* Mobile (Missing) */}

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
                {/* include icon_linkedin.xml */}
                <IconLinkedIn/>
              </span>
            </a>
            <a className="link-line-throught" href="https://www.behance.net/simoncallelaverde" target="_blank">{/*link*/}{/*mr-3*/}
              <span className="icon-behance">
                {/* include icon_behance.xml */}
                <IconBehance/>
              </span>
            </a>
            <a className="link-line-throught" href="https://angel.co/u/simoncallelaverde" target="_blank">{/*link*/}{/*mr-3*/}
              <span className="icon-angel">
                {/* include icon_angel.xml */}
                <IconAngel/>
              </span>
            </a>
            <a className="link-line-throught" href="https://github.com/SimonCalleLaverde" target="_blank">{/*link*/}
              <span className="icon-github">
                {/* include icon_github.xml */}
                <IconGithub/>
              </span>
            </a>
          </div>
        </div>




        {/* MISSING REST HERE */}




      </aside>
		</footer>
	)
};