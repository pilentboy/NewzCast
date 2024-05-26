import { useEffect, useState } from "react"
import HomeContainer from "../components/home/HomeContainer"
import userdata from '../db.json'
import SearchBox from "../components/search/SearchBox"

function Search() {

  const [searchValue, setSearchValue] = useState("")
  const [searching, setSearching] = useState(false)
  const [searchResult, setSearchResult] = useState(null)

  const handleSearch = (e) => {
    e.preventDefault()
    setSearching(true)
    if (searchValue !== "") {
      const res = userdata['UsersData'].filter(username => username['username'].toLowerCase().includes(searchValue))
      console.log(res)
      if (res.length >= 1) {
        setSearchResult(res)
      } else {
        setSearchResult(null)
      }
    }
  }


  return (
    <HomeContainer>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} handleSearch={handleSearch} />

      {
        searching &&
        <div>
          {
            searchResult ? (
              <ul>
                {
                  searchResult.map((user, index) => (
                    <li className="text-green-600 text-lg font-bold" key={index}>
                      {user.username}
                    </li>
                  ))
                }
              </ul>
            ) : <h1>nothing</h1>
          }
        </div>

      }


    </HomeContainer>
  )
}

export default Search