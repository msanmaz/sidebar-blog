import PropTypes from 'prop-types';

const AngleDoubleRightIcon = ({height,width}) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={height}
      width={width}
      data-prefix="fad"
      data-icon="angle-double-right"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="theme-icon svg-inline--fa fa-angle-double-right fa-w-14 fa-5x my-0 mx-6"
    >
      <g className="fa-group">
        <path
          fill="currentColor"
          d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
          className="fa-secondary"
        />
        <path
          fill="currentColor"
          d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
          className="fa-primary"
        />
      </g>
    </svg>
  );
};

AngleDoubleRightIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AngleDoubleRightIcon.defaultProps = {
  width: '1em',
  height: '1em' 
};


export default AngleDoubleRightIcon;
