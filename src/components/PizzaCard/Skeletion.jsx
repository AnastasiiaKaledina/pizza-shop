import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={485}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="134" cy="116" r="116" />
    <rect x="0" y="259" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="304" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="418" rx="10" ry="10" width="97" height="26" />
    <rect x="125" y="408" rx="20" ry="30" width="151" height="45" />
  </ContentLoader>
);

export default MyLoader;
