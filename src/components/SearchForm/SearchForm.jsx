import React, { useRef, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';  // Import context
import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();  // Access context functions
  const searchText = useRef('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);  // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempSearchTerm = searchText.current.value.trim();

    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world!");
      setResultTitle("Please Enter Something ...");
      setLoading(false);
    } else {
      setSearchTerm(tempSearchTerm);  // Set search term
      setLoading(true);  // Start loading
      navigate("/book");
    }
  };

  useEffect(() => searchText.current.focus(), []);

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="Type here ..."
                ref={searchText}
              />
              <button type="submit" className="flex flex-c">
                <FaSearch className="text-purple" style={{color:'#3b3b6d'}} size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
