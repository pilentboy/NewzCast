import { useContext, useEffect, useState } from "react"
import SearchBox from "../search/SearchBox"
import UserProfile from "../profile/UserProfile"
import { LoginContext } from "../../context/LoginContext"

function Search({setSearchModalDisplay}) {

  const [searchValue, setSearchValue] = useState("")
  const [searching, setSearching] = useState(false)
  const [searchResult, setSearchResult] = useState(null)
  const {mainDB} = useContext(LoginContext)
  
  	useEffect(()=>{
		document.title = "Search"
	},[])


  const handleSearch = (e) => {
    e.preventDefault()
    setSearching(true)
    if (searchValue !== "") {
      const res = mainDB.filter(username => username['username'].toLowerCase().includes(searchValue.toLowerCase()))
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
    <div className="absolute top-10 animate__animated animate__bounceInDown  animate__fast  animate__delay-0s -translate-x-[50%]">

      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} handleSearch={handleSearch} />

      {
        searching &&
        <div className="mt-1">
          {

            searchResult ? (
              <ul 
              onClick={()=> setSearchModalDisplay('hidden')}
              className="border  border-gray-200 min-h-fit  max-h-80 p-1  overflow-y-auto  w-fit user-search">
                {
                  searchResult.map((user, index) => (
                    <UserProfile
                      name={user['username']}
                      profileImage={user['profileImage']}
                      key={index}
                      usernameMargin={'ml-1'}
                      target={`/newzcast/profile/${user['email']}`}
                      styles={'search-result bg-white border border-gray-300 w-64 my-1 rounded-md p-2 hover:bg-gray-200 duration-200'}
                    />
                  ))
                }
            
                 

              </ul>
            ) : <h1 className="text-red-600 font-bold">No Result!</h1>
          }
        </div>

      }


    </div>
  )
}

export default Search