import HomeContainer from "../components/home/HomeContainer"
import Logout from '../components/home/Logout'
import {useEffect} from 'react'

function Settings() {

	useEffect(()=>{
		document.title = "Settings"
	},[])

  return (

    <HomeContainer>
      <h1>settings</h1>
      <Logout/>
    </HomeContainer>

  )



}

export default Settings