import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../userconxtext/Usercontext";
import AvatarComponent from "../avatar/AvatarComponent";
import styled from "styled-components";
const ALLPRODUCTS = "https://academy-products.herokuapp.com/api/categories";

const Sidebarbutton = styled.li`
  text-decoration-line: none;
  list-style: none;
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  padding: 12px 16px;
  margin: 0 8px;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: 0.2s;
    border-radius: 25px;
  }
  &:hover {
    &::before {
      background: linear-gradient(to bottom, #e8edec, #d2d1d3);
      box-shadow: 0px 3px 20px 0px black;
      transform: scale(1.2);
    }
    color: black;
  }
`;

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const user = useContext(UserContext);
  const [navigation, setNavigation] = useState([]);
  useEffect(() => {
    fetch(ALLPRODUCTS)
      .then((res) => res.json())
      .then((data) => {
        setNavigation(data.data);
      });
  }, []);

  return (
    <div>
      <div className="sidebar">
        <h3>კატეგორიები</h3>
        {navigation.map((cat) => (
          <Link key={cat.id} to={`/main/category/${cat.id}`}>
            <div className="to-right">
              <Sidebarbutton className="menu-item">{cat.title}</Sidebarbutton>
            </div>
          </Link>
        ))}

        <AvatarComponent detail={user} />
      </div>
      {/* <div className='burger-bar'>
      
      <div className="sidebar-mob-device">
           
      <AvatarComponent  detail={user}  />
      
      <h3>კატეგორია</h3>
        {navigation.map((cat) => (
          <Link key={cat.id} to={`/main/category/${cat.id}`}>
          <div  className="to-right">
            <Sidebarbutton className="menu-item">
              {cat.title}
            </Sidebarbutton>
          </div>
          </Link>
        ))}

      </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
