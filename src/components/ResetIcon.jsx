import React from 'react';

const ResetIcon = ({ viewBox, height, width, title, className, fill, ariaHidden }) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
    aria-hidden={ariaHidden}
  >
    <title>{title}</title>
    <path d="M10.96075,11l4.60907-3.19434a1,1,0,0,0-1.13965-1.64355L5.939,12.04688l8.83594,6.248a0.99981,0.99981,0,0,0,1.1543-1.63281L10.75061,13H23v8H6a1,1,0,0,0,0,2H25V11H10.96075Z" fill={fill} />
  </svg>
);

ResetIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  fill: React.PropTypes.string,
  ariaHidden: React.PropTypes.bool,
};

ResetIcon.defaultProps = {
  className: 'reset-icon',
  title: 'NYPL Reset SVG Icon',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
  fill: '#FFF',
};

export default ResetIcon;