import { IoIosSearch } from "react-icons/io";
import { BsCartDash } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import shoes from "../Assets/shoes.png";
import nike from "../Assets/nike.png";
import puma from "../Assets/puma.png";
import './index.css'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div>
          {/* <img src="" /> */}
          <h3>Sneaker</h3>
        </div>
        <ul className="pages">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">
              Shop
              <select>
                <option>Sneakers</option>
                <option>Boots</option>
                <option>Sport Shoes</option>
              </select>
            </a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="icons">
          <IoIosSearch />
          <BsCartDash />
          <GoPerson />
        </div>
      </nav>
      <div className="landing_page">
        <div>
       <h1>Shoes Collect!</h1>
       <div>
        <p>
            Discover our stylish and corfortable shoes,perfect for every occasion and need.
            </p>
            <button>Shop now</button>
       </div>
       <div className="icons_checker">
        <img src={nike} className="image"/>
        <img src={puma} className="image"/>
        <p><b>7+</b>Brand</p>
       </div>
       </div>

       <div>
            <img src={shoes} alt="shoes"/>
        </div>
        <div>
            {/* <h1>See our new </h1> */}
        </div>
    </div>
    </>
  );
}

export default Navbar;

