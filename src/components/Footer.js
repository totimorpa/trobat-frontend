import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Sobre Nosaltres</h2>
            <Link to="/">Qui som?</Link>
            <Link to="/">Reposotiori codi</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contactans</h2>
            <Link to="/">Contacte</Link>
            <Link to="/">Suport</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Presentació</Link>
            <Link to="/">Tutorial d'us</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Youtube</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <Box
                component="img"
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  height: 64,
                }}
                alt="logo."
                src="/images/logo.png"
              />
              trobat.cat
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">Trobat © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
