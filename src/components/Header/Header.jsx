import logo from "../../../images/Vector.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img
          className="header__title"
          src={logo}
          alt="Around U. S."
        />
        <div className="header__grey-line"></div>
      </div>
    </header>
  );
}

export default Header;