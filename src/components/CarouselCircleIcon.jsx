import React from 'react';

class CarouselCircleIcon extends React.Component {
  renderSvgIcon() {
    return (
      <path
        d="M12,4a8,8,0,1,1-8,8,8.00906,8.00906,0,0,1,8-8m0-4A12,12,0,1,0,24,12,12,12,0,0,0,12,0h0Z"
        fill={this.props.fill}
      />
    );
  }

  renderSolidSvgIcon() {
    return (
      <path
        d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0h0Z"
        fill={this.props.fill}
      />
    );
  }

  render() {
    const svgIcon = (this.props.type !== 'solid') ?
      this.renderSvgIcon() : this.renderSolidSvgIcon();

    return (
      <svg
        ref={this.props.ref}
        className={`${this.props.className} svgIcon`}
        width={this.props.width}
        height={this.props.height}
        viewBox={this.props.viewBox}
      >
        <title>{this.props.title}</title>
        {svgIcon}
      </svg>
    );
  }
}

CarouselCircleIcon.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  ref: React.PropTypes.string,
  type: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  fill: React.PropTypes.string,
};

CarouselCircleIcon.defaultProps = {
  className: 'nyplCarouselCircle-icon',
  title: 'NYPL Carousel Circle SVG Icon',
  ref: 'nyplCarouselCircle',
  type: '',
  height: '24px',
  width: '24px',
  viewBox: '0 0 24 24',
  fill: '#FFF',
};

export default CarouselCircleIcon;
