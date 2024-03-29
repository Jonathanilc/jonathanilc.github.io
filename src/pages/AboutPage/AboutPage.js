import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I like <span className="highlight">JavaScript</span> and
              everything web.
            </p>
            <p>
              Extensive experience in developing web apps React JS, Redux, ANTD, SASS, Node.js.
            </p>
            <p>
              Experienced in working with Redux architecture using complex Object-Oriented concepts in improving the performance of the websites.
            </p>
            {/* <p className="text-emoji" style={{ color: colorPrimary }}>
              (｡◕‿‿◕｡)
            </p> */}
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".info-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
