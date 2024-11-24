import { useContext, useState } from "react"
import { Context } from "../context/contextAPI";
import { useParams } from "react-router-dom";


const SearchResult = () => {
  const [searchResult, setSearchResult] = useState();
  const { setLoading } = useContext(Context);
  const { searchQuery } = useParams();
  console.log(searchQuery)
  return (
    <div>SearchResult</div>
  )
}

export default SearchResult