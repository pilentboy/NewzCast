import { useEffect, useState } from "react"
import HomeContainer from "../components/home/HomeContainer"
import userdata from '../db.json'
import SearchBox from "../components/search/SearchBox"

function Search() {

  const [searchValue, setSearchValue] = useState("")


  return (
    <HomeContainer>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </HomeContainer>
  )
}

export default Search