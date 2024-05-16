import { useEffect, useState } from "react"
import HomeContainer from "../components/home/HomeContainer"
import userdata from '../db.json'

function Search() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const test = userdata['UsersData'].filter((username) => username.name.toLowerCase().includes('a'))
    setUsers(test)
  }, [])
  return (
    <HomeContainer>
      <h1>search</h1>
      <h1>result</h1>
      <ul>
        {
          users.map((user, id) => (
            <li key={id}>
              {user.username}
            </li>
          )
          )}
      </ul>
    </HomeContainer>
  )
}

export default Search