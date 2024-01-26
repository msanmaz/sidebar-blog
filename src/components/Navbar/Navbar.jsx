import CatIcon from '../Icons/CatIcon/CatIcon';
import NavItem from '../NavItem/NavItem';
import SpaceStationMoonIcon from '../Icons/SpaceStationIcon/SpaceStationIcon';
import AlienMonsterIcon from '../Icons/AlienMonsterIcon/AlienMonsterIcon';
import SpaceShuttleIcon from '../Icons/SpaceShuttleIcon/SpaceShuttleIcon';
import Logo from '../Icons/Logo/Logo';
const Navbar = () => {
  return (
    <nav className="navbar test">
      <ul className="navbar-nav">
        <Logo/>
        <NavItem href="#" text="Fireship">
          <CatIcon width={30} height={30} />
          <span className="link-text">Cats</span>
        </NavItem> 
        <NavItem href="#" text="Fireship">
          <SpaceStationMoonIcon width={30} height={30} />
          <span className="link-text">Space</span>
        </NavItem> 
        <NavItem href="#" text="Fireship">
          <AlienMonsterIcon width={30} height={30} />
          <span className="link-text">Aliens</span>
        </NavItem> 
        <NavItem href="#" text="Fireship">
          <SpaceShuttleIcon width={30} height={30} />
          <span className="link-text">Shuttle</span>
        </NavItem> 
      </ul>
    </nav>
  );
};

export default Navbar;
