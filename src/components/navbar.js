import { IoSearchSharp } from "react-icons/io5";

const NavBar = ({setSearchText, openSearchPage })=>{
  const handleSearch=(e)=>{
    setSearchText(e.target.value);
  }

  return (
    <nav className="home-nav">
      <h4>Imakon</h4>

      <p>
        Address: <br />
        LPU
      </p>
      <div className="home-nav-search">
        <select></select>
        <input onChange={handleSearch} onClick={openSearchPage}></input>
        <button onClick={openSearchPage}>
          <IoSearchSharp />
        </button>
      </div>

      <a>About Us</a>
    </nav>
  
  );
};

export default NavBar
