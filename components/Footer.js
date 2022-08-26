import Link from "next/link";
import Image from "next/image";
//import styles from "../styles/Footer.module.scss";

// Footer (Sitewide) Component
export default function Footer() {
	return (
		<footer className="display-flex justify-content-center align-items-center">{/*{styles.footer}*/}{/*className="clearfix"*/}
      {/* Desktop | Screen Readers */}
      <a className="container display-flex justify-content-center align-items-center text-center   text-rosybrown  " href="/contact">{/*link-page-load*/}{/*href="javascript:delay('/hire_a_project')"*/}
        <div className="row-box">
          <div className="column-12">{/*col-md-12*/}




            <h3 className="text-huge      text-uppercase mb-0">
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
      </aside>




      {/*<div className="container">
        <span>
          Designed & Developed by{" "}
        </span>

        <a href="https://simoncallelaverde.github.io/" target="_blank">
          Simón Calle Laverde
        </a>
      </div>*/}
		</footer>
	)
};