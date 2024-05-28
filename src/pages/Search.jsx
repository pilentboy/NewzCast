import { useEffect, useState } from "react"
import HomeContainer from "../components/home/HomeContainer"
import userdata from '../db.json'
import SearchBox from "../components/search/SearchBox"
import UserProfile from "../components/profile/UserProfile"

function Search() {

  const [searchValue, setSearchValue] = useState("")
  const [searching, setSearching] = useState(false)
  const [searchResult, setSearchResult] = useState(null)

  const handleSearch = (e) => {
    e.preventDefault()
    setSearching(true)
    if (searchValue !== "") {
      const res = userdata['UsersData'].filter(username => username['username'].toLowerCase().includes(searchValue.toLowerCase()))
      console.log(res)
      if (res.length >= 1) {
        setSearchResult(res)
      } else {
        setSearchResult(null)
      }
    }
  }

  useEffect(() => {
    if (searchValue === "") {
      setSearchResult(null)
      setSearching(false)
    }
  }, [searchValue])


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
                    <UserProfile
                      name={user['username']}
                      profileImage={user['profileImage']}
                      key={index}
                      usernameMargin={'ml-1'}
                      target={`/newzcast/profile/${user['email']}`}
                      styles={'search-result border border-gray-300 w-64 mt-2 rounded-md p-2 hover:bg-gray-200 duration-200'}
                    />
                  ))
                }
              </ul>
            ) : <h1 className="text-red-600 font-bold">No Result!</h1>
          }
        </div>

      }


    </HomeContainer>
  )
}

export default Search