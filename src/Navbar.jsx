import "./App.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbarlogo">
        <h4>Ahinke's Kitchen</h4>
        <h5>Spices</h5>
      </div>
      <div className="Navbarlinks">
        <a href="#landing">Home</a>
        <a href="#projects">Spices</a>
        <a href="#hireme">Hire Me</a>
      </div>
    </div>
  );
}

export default Navbar;
