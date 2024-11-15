/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { fetchDataFromApi } from '../utils/api'
import {createContext, useEffect, useState} from 'react'

export const Context = createContext();
export const AppContext = (props) => {
  const [loading,setLoading] = useState(false);
  const [searchResults,setSearchResults] = useState([]);
  const [selectCategories,setSelectCategories] = useState('New');
  const [mobileMenu, setMobileMenu] = useState(false);
  
  useEffect(() => { 
    fetechSelectedData(selectCategories)
  }, [selectCategories]);

  const fetechSelectedData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
  });
  }



  const contextValue = {loading, setLoading, searchResults, setSearchResults,selectCategories,
    setSelectCategories,mobileMenu,setMobileMenu}
  
  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}