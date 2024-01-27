import PropTypes from 'prop-types';

const Tag = ({ text }) => {
  return (
    <a
      href=""
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </a>
  )
}

Tag.propTypes = {
    text: PropTypes.string.isRequired
  };
  

export default Tag