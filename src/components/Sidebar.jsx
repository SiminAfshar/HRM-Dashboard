import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Sidebar.css';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import profileImage from "../Images/Profile.jpg";
import SearchBar from '../JavaScripts/Search';
import logo from "../Images/logo.png";
import SendTicket from '../Pages/Ticket';

const Sidebar = ({navbar}) => {

  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (id) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const [hoverDetails, setHoverDetails] = useState(false);
  
  const [companyName] = useState("داشبورد من")
  const [searchResults, setSearchResults] = useState([]);

    const data = ["yes", "No"]
    const handleSearch = (query) => {
        // Assuming you have a `data` array to search
        const results = data.filter(item => 
            item.title.includes(query.data)
        );
        setSearchResults(results);
    };
    const [link, setLink] = useState();
    const handleLink = (navbar) => {
      setLink(navbar.Link)
    }
    
  return(
    <div className="sidebar">

      <div className='profileDetails'>
        <div className="logo">
          <Link to={"/Dashboard"}><img src={logo} /></Link>
          
        </div>
        
        <div className="details" 
        onClick={() => setHoverDetails(true)} 
        
        >
          <span>
            {companyName}
          </span>
          {navbar.length > 0 && <i
            className={navbar[1].arrowIcon}
            />}
            {hoverDetails && (
          <div className='detailsPopup' onMouseLeave={() => setHoverDetails(false)}>
            <div className="detailsList">
              <ul>
                <li>مشاهده پیام</li>
                <li>تنظیمات</li>
                <li>تغییر رمز</li>
                <li onClick='ChangePassword'>خروچ</li>
              </ul>
            </div>
          </div>
        )}
        
        </div>
        
      </div>
      
      <div className='sidebarSearch'>
        <SearchBar onSearch={handleSearch} />
        <div>
          {searchResults.map((result, index) => (
            <div key={index}>{result.title}</div>
          ))}
        </div>
      </div>

      <div className="sidebarItems" >
      {
        navbar && navbar.map((item) => (
          <div className='sidebarItem' key={item.id}>
            <div className='sidebarContent'  onClick={() => toggleSubmenu(item.id)}>
              
              <span>
                <Link to={item.Link} className="sidebarLink">
                  <i className={item.icon}></i>
                  {item.name}
                  <i className={item.arrowIcon} />
                </Link>
              
              </span>
            </div>
            {item.subMenu && openSubmenus[item.id] && (
            <div className="submenu">
              {item.subMenu.map((subItem,index) => (
                <div className='subnavbar' key={index}>
                  <span>
                    <Link to={subItem.Link || "#"}>
                      {subItem.name}
                    </Link>
                  </span>
                </div>
              ))}
            </div>
          )}
          </div>
        ))
      }
      </div>


      <div className='ticket'>
        <span>
          <i className='bi bi-chevron-double-left'></i>
          <Link to={"/Ticket"}>ارسال تیکت</Link>
        </span>
      </div>

      <div className='sidebarOut'>
        <div className='profile'>
          <img src={profileImage} />
        </div>
        <div className='signOut'>
          <div className='notifaction'>
            <i className='bi bi-bell'/>
            <i className='bi bi-box-arrow-right'/>
          </div>
        </div>
      </div>

    </div>

    
  )
  
  
}


export default Sidebar;