import React from 'react'
import { Link } from 'react-router-dom'
import { ImCancelCircle} from "react-icons/im";

import "./Sidebar.scss"
import { useSideBarContext } from '../../context/sidebarContext'
import { useMealContext } from '../../context/mealContext';

const Sidebar = () => {
  const {isSideBarOpen, closeSideBar} = useSideBarContext();
  const {categories} = useMealContext();

  return (
   <nav className={`sidebar ${isSideBarOpen ? 'sidebar-visible' : ""}`}>
    <button type='button' className='navbar-hide-btn' onClick={() => closeSideBar()}>
      <ImCancelCircle size={24}/>
    </button>

    <div className='side-content'>
    <ul className='side-nav'>
    {
      categories.map(category => (
         <li className='side-item' key = {category.idCategory}>
           <Link to = {`/meal/category/${category.strCategory}`} className='side-link ls-1 fs-13' onClick={() => closeSideBar()}>
              {category.strCategory}
           </Link>
         </li>
      ))
    }
</ul>

    </div>

   </nav>
  )
}

export default Sidebar
