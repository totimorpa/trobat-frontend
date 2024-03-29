import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Sobre Nosaltres</h2>
            <a href="https://www.linkedin.com/in/toti-moragas-pardell-602335200/">
              Qui som?
            </a>
            <a href="https://github.com/totimorpa/trobat-frontend">Github</a>
          </div>
          <div className="footer-link-items">
            <h2>Contacta'ns</h2>
            <a href="mailto: totimorpa@gmail.com">Contacte</a>
            <a href="mailto: totimorpa@gmail.com">Suport</a>
            <a href="https://comptador.trobat.cat">Fer història</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Presentació</Link>
            <Link to="/">Tutorial d'ús</Link>
          </div>
          <div className="footer-link-items">
            <h2>Xarxes Socials</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Youtube</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <Box
                component="img"
                sx={{
                  mr: 1,
                  height: 64,
                }}
                alt="logo."
                src="/images/logo.png"
              />
              trobat.cat
              <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">Trobat © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
