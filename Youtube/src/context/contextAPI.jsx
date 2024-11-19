/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { fetchDataFromApi } from '../utils/api'
import {createContext, useEffect, useState} from 'react'

export const Context = createContext();
export const AppContext = ({ children }) => {
  const [loading,setLoading] = useState(false);
  const [searchResults,setSearchResults] = useState([]);
  const [selectCategories,setSelectCategories] = useState('0');
  const [mobileMenu, setMobileMenu] = useState(false);
  
  const fetechSelectedData = async (params) => {
    setLoading(true)
   try {
     const res = await fetchDataFromApi('videos', params);
     /* console.log(res.items) */
     setSearchResults(res.items)
   } catch (error) {
     console.error(error)
    }
   finally {
     setLoading(false)
    }
  }

  useEffect(() => {
    if (selectCategories) {
      if (selectCategories === 'Home') {
        fetechSelectedData({
          part: 'snippet,contentDetails,statistics',
          regionCode: 'IN',
          chart:'mostPopular',
        })
      }
      else {
        fetechSelectedData({
          part: 'snippet,contentDetails,statistics',
          regionCode: 'IN',
          chart:'mostPopular',
          videoCategoryId:selectCategories
        })
      }
    }
  },[selectCategories])



  const contextValue = {loading, setLoading, searchResults, setSearchResults,selectCategories,
    setSelectCategories,mobileMenu,setMobileMenu}
  
  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}