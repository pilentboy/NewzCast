import HomeContainer from "../components/home/HomeContainer"
import Logout from '../components/home/Logout'
import {useEffect} from 'react'
import BoxBTN from "../components/settings/BoxBTN"

function Settings() {

	useEffect(()=>{
		document.title = "Settings"
	},[])

  return (

    <HomeContainer justify={'justify-around'}>

      <h1 className="font-medium text-base ">Settings</h1>

      <div>
      <BoxBTN title='Username'/>
      <BoxBTN title='Email'/>
      <BoxBTN title='Phone number'/>
      <BoxBTN title='Full Name'/>
      <BoxBTN title='Deactive account'/>

      </div>

      <Logout/>
    </HomeContainer>

  )



}

export default Settings