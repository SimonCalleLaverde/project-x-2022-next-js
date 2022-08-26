import Link from "next/link";
import Image from "next/image";
//import styles from "../styles/Footer.module.scss";

// Footer (Sitewide) Component
export default function Footer() {
	return (
		<footer className="display-flex justify-content-center align-items-center">{/*{styles.footer}*/}{/*className="clearfix"*/}
      {/* Desktop | Screen Readers */}
      <a className="container display-flex justify-content-center align-items-center text-center" href="/contact">{/*link-page-load*/}{/*href="javascript:delay('/hire_a_project')"*/}
        <div className="row-box">
          <div className="column-12">{/*col-md-12*/}

            <h3 className="text-huge text-rosybrown text-uppercase mb-0">
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

// MISSING CONTENT WITHIN "<aside></aside>"
/*
  <div class="footer-hello">
    <br>Available for
    <span class="font-ultra-light">
      <!--<br>Freelance work,
      <br>contract job.-->
      <br>Freelance projects /
      <br>Contract work.
    </span>
  </div>
  
  <div class="footer-office">
    Office
    <span class="font-ultra-light">
      <!--<br>Calle 152a # 13-58,
      <br>Las Acacias,
      <br>Bogotá D.C,
      <br>Colombia.-->
      
      <br>Calle 10 # 2 Este 40,
      <br>Tr 8 Apt 404, Chía,
      <br>Cundinamarca,
      <br>Colombia.
    </span>
  </div>

  <div class="footer-business-social">
    <span class="font-ultra-light">
      Business Social Media
    </span>
    <div class="mt-1">
      <a class="link link-line-throught mr-3" href="{{ site.linkedin_username }}" target="_blank">
        <span class="icon-linkedin">
          {% include icon_linkedin.xml %}
        </span>
      </a>
      <a class="link link-line-throught mr-3" href="{{ site.behance_username }}" target="_blank">
        <span class="icon-behance">
          {% include icon_behance.xml %}
        </span>
      </a>
      <a class="link link-line-throught mr-3" href="{{ site.angel_username }}" target="_blank">
        <span class="icon-angel">
          {% include icon_angel.xml %}
        </span>
      </a>
      <a class="link link-line-throught" href="{{ site.github_username }}" target="_blank">
        <span class="icon-github">
          {% include icon_github.xml %}
        </span>
      </a>
    </div>
  </div>

  <!--Desktop | Screen Readers-->
  <div class="footer-copyright font-ultra-light d-none d-md-block">
    © {{ "now" | date: "%Y" }} Simon's Web & Design<!--MMXX--><!--{{ site.url | remove:"https://" | remove:"http://" }}-->
    <br>All rights reserved
  </div>

  <!--Mobile-->
  <div class="footer-copyright font-light d-block d-md-none" aria-hidden="true">
    Copyright © {{ "now" | date: "%Y" }}
    <span class="font-ultra-light">
      <br>Simon's Web & Design
    </span>
  </div>

  <!--Desktop-->
  <div class="footer-email-or-call d-none d-md-block">
    Or just email me or call me
    <span class="font-ultra-light">
      <br>{{ site.phone_number }}
      <br><a class="link-line-throught text-rosybrown" href="mailto:{{ site.email }}">{{ site.email }}</a>
    </span>
  </div>

  <!--Desktop | Screen Readers-->
  <div class="footer-created-by d-none d-md-block">
    Designed & developed by
    <span class="font-ultra-light">
      <br><a class="link-line-throught text-rosybrown" href="/">{{ site.client_name }}</a>
    </span>
  </div>

  <!--Mobile-->
  <div class="footer-created-by d-block d-md-none" aria-hidden="true">
    Designed & developed
    <span class="font-ultra-light">
      <br><a class="link-line-throught text-rosybrown" href="/">by {{ site.client_name }}</a>
    </span>
  </div>

  <div class="footer-personal-social">
    <span class="font-ultra-light">
      Personal Social Media
    </span>
    <div class="mt-1">
      <a class="link" href="{{ site.dribbble_username }}" target="_blank">
        <span class="icon-dribbble">
          {% include icon_dribbble.xml %}
        </span>
      </a>
      <a class="link ml-3" href="{{ site.pinterest_username }}" target="_blank">
        <span class="icon-pinterest">
          {% include icon_pinterest.xml %}
        </span>
      </a>
      <a class="link ml-3" href="{{ site.instagram_username }}" target="_blank">
        <span class="icon-instagram">
          {% include icon_instagram.xml %}
        </span>
      </a>
      <a class="link ml-3" href="{{ site.facebook_username }}" target="_blank">
        <span class="icon-facebook">
          {% include icon_facebook.xml %}
        </span>
      </a>
    </div>
  </div>

  <div class="footer-credits">
    Credits
    <span class="font-ultra-light">
      <br>Icon Illustrations by
      <br><a class="link-line-throught text-rosybrown" href="https://absurd.design/" target="_blank">absurd.design</a>
    </span>
  </div>

  <nav class="footer-nav navbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="link nav-link link-line-throught link-page-load{% if page.slug == 'home' %} active-link{% endif %}" href="javascript:delay('/')">
          <span>Home</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="link nav-link link-line-throught link-page-load{% if page.slug == 'about' %} active-link{% endif %}" href="javascript:delay('/about')">
          <span>About<!-- me--></span>
        </a>
      </li>

      <li class="nav-item">
        <a class="link nav-link link-line-throught link-page-load{% if page.slug == 'projects' %} active-link{% endif %}" href="javascript:delay('/projects')">
          <span>All projects</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="link nav-link link-line-throught link-page-load{% if page.slug == 'contact_me' %} active-link{% endif %}" href="javascript:delay('/contact_me')"><!--if page.type_slug == 'feedback'-->
          <span>Contact<!-- me--></span>
        </a>
      </li>

      <li class="nav-item">
        <a class="link nav-link link-line-throught link-page-load{% if page.slug == 'hire_a_project' %} active-link{% endif %}" href="javascript:delay('/hire_a_project')">
          <span>Hire a project</span>
        </a>
      </li>
    </ul>
  </nav>
*/