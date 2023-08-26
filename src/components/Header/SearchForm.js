import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router';
import { useMealContext } from '../../context/mealContext';
import { startFetchMealBySearch } from '../../actions/mealsActions';
 
const SearchForm = () => {
  const navigate = useNavigate();

  const {dispatch, meals} = useMealContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    if((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0){
      setSearchTerm(e.target.value);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid search term ...");
    }
  }

  const handleSearchResult = (e) => {
    e.preventDefault();
    navigate("/");
    startFetchMealBySearch(dispatch, searchTerm);
  }


  return (
    <div>
      <form className='search-form flex align-center' onSubmit={(e) => handleSearchResult(e)}>
        <input type = "text" className='form-control-input text-dark-gray fs-15' placeholder='which dish is in your mind' onChange={(e) => handleSearchTerm(e)}/>
          <button type = "submit" className='form-submit-btn text-white text-uppercase fs-14'>
            <BsSearch className='btn-icon' size = {20} />
          </button>
      </form>
    </div>
  )
}

export default SearchForm
