import { Navbar, NavbarBrand } from "reactstrap";

const NavBar = () => {
  return (
    <>
      <Navbar className="my-2" color="secondary" dark>
        <NavbarBrand href="/">Reactstrap</NavbarBrand>
      </Navbar>
    </>
  );
};

export default NavBar;
