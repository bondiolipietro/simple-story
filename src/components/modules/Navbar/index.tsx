import type { NextPage } from 'next';

const Navbar: NextPage = () => {
  return (
    <nav className={`navbar`}>
      <div className={`nav_logo flex_center item`}>Icon</div>
      <div className={`nav_menu`}>
        <div className={`item flex_center`}>Contact</div>
        <div className={`item flex_center`}>About</div>
      </div>
      <div className={`nav_user flex_center item`}>User</div>
    </nav>
  );
};

export default Navbar;
