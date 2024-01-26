import PropTypes from 'prop-types';

const NavItem = ({ href, text, children }) => {
  return (
    <li className="items">
      <a href={href} className="">
        <span className="hidden ml-4">{text}</span>
        {children}
      </a>
    </li>
  );
};

NavItem.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  };

export default NavItem;
