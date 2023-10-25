import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import FooterSocial from './FooterSocial';
import "./footer.scss"


const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      {/* <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
          <div className="footer-top space-between text-xxs">
            <Logo />
            <FooterSocial />
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
            <div className="footer-copyright">Developed by Web Team | <a href="https://itc.gymkhana.iitb.ac.in/" target="_blank" rel="noopener noreferrer">ITC</a> with ❤️ | All right reserved</div>
          </div>
        </div>
      </div> */}
      <div className="contact-container">

        <h3>GET IN TOUCH</h3>
        <h2>Contact Us</h2>
        <div className='below-container'>
          <div className="left-container">
            <h4>Venue</h4>
            <p>
              <b>IIT Bombay</b><br />
              Shailesh J. Mehta School of Management Building <br />and LT - PC Saxena Auditorium,<br />
              IIT Bombay, Powai, Mumbai,<br />
              Maharashtra, 40076
            </p>
          </div>
          <div className="right-container">
            <p>
              For technical queries email: <br />
              For logistics queries contact:<br />
              <a href="mailto:gstech@iitb.ac.in" style={{ color: 'white' }}>gstech@iitb.ac.in</a>
            </p>

            <div className="quick_links">
              {/* <p>Developed by Web Team | <a href="https://itc.gymkhana.iitb.ac.in/" target="_blank" rel="noopener noreferrer">ITC</a> with ❤️ | All right reserved</p> */}
              {/* <FooterSocial></FooterSocial> */}
              <div>
                <a href="https://www.instagram.com/tech.iitb" className="social-icon"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/tech.iitb/" className="social-icon"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/tech_iitb?lang=en" className="social-icon"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.linkedin.com/company/institute-technical-council-iitb/" className="social-icon"><i class="fa-brands fa-linkedin"></i></a>

              </div>
            </div>
          </div>

        </div>
        <div className='webTeamFooter'> 
          <p>Developed by the Web Team with ❤️ | Institute Technical Council 2023 </p>
        </div>

      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;