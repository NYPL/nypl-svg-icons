import React from 'react';

const TagIcon = ({ viewBox, height, width, title, className, ariaHidden }) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    className={`${className} svgIcon`}
    aria-hidden={ariaHidden}
  >
    <title>{title}</title>
    <path d="M26.45536,26.45536H16.80078L4.92843,14.58216l9.65373-9.65373,11.8732,11.87235v9.65458ZM17.87606,23.859h5.983v-5.983L14.58216,8.5992l-5.983,5.983Z" />
  </svg>
);

TagIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  ariaHidden: React.PropTypes.bool,
};

TagIcon.defaultProps = {
  className: 'tag-icon',
  title: 'NYPL Tag SVG Icon',
  width: '24',
  height: '24',
  viewBox: '0 0 32 32',
};

export default TagIcon;