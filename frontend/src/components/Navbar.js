import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1 className="material+symbols+outlined">Reps </h1>
          {/* <span class="material-symbols-outlined">exercise</span> */}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
