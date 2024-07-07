import HomeContainer from "../components/home/HomeContainer"
import Logout from '../components/home/Logout'
import {useContext, useEffect, useState} from 'react'
import BoxBTN from "../components/settings/BoxBTN"
import InputWrapper from "../components/form/InputWrapper"
import InputTitle from "../components/form/InputTitle"
import FormInput from "../components/form/FormInput"
import { IoChevronBack } from "react-icons/io5";
import { LoginContext } from "../context/LoginContext"
import handleUpdateEmail from "../utils/handleUpdateEmail"

function Settings() {

  const {handleUpdateUserInfo}=useContext(LoginContext)


	useEffect(()=>{
		document.title = "Settings"
	},[])


  const [isHover,setButtonHover]=useState(false)

  const [clickedItem,setClickedItem]=useState('') // get BoxBTN Title

  // variables for each inputs in settings
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  // const [name,setName]=useState('')
  const [updatePassword,setUpdatePassword]=useState(
    [
      '','',''
    ]
  )



  const handleSettingsChange=async (e)=>{
    e.preventDefault()


    if(clickedItem.includes("Username") && username.length > 4 && username.length <= 9 ){
      handleUpdateUserInfo(username,'username')
    }
    else if (clickedItem.includes("Password")){
      alert("not available")
    }
    else if(clickedItem.includes("Email")){
      alert("not available")
      // await handleUpdateEmail(email)
    }
    else{
      alert("Error!")
    }

    setUsername('')
    setEmail('')
    setUpdatePassword(['','',''])
  }

  return (

    <HomeContainer justify={'justify-evenly'}>


      
      <div>

      {
        clickedItem !== '' ? <>


        
        <form action="" onSubmit={handleSettingsChange}>

          <div className="space-y-3 px-6">

          <button aria-label="back to account settings" type="button"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
         className="text-black" 
       
        onClick={()=> {
          setClickedItem('')
        }}>
          <IoChevronBack  className={` duration-200 ${isHover ? '-translate-x-2' : 'translate-x-0'}`}/>
        </button>

          <h1 className="font-semibold">{clickedItem}</h1>
          {
            clickedItem === 'Change Password' ? (
              <>
              <InputWrapper>
              <InputTitle notFormik={true}  title={'Enter Old Password'} />
              <FormInput notFormik={true} type={'password'} value={updatePassword[0]} customSetinput={setUpdatePassword} index={0} name={clickedItem}/>
            </InputWrapper>
              <InputWrapper>
              <InputTitle  title={'Enter New Password'} />
              <FormInput notFormik={true}  type={'password'} value={updatePassword[1]}  customSetinput={setUpdatePassword} index={1} name={clickedItem}/>
            </InputWrapper>
            <InputWrapper>
              <InputTitle title={'Confirm New Password'} />
              <FormInput notFormik={true}  type={'password'} value={updatePassword[2]} customSetinput={setUpdatePassword} index={2} name={clickedItem}/>
            </InputWrapper>

       
              </>
  

            ) : clickedItem === 'Deactive Account' ? <div className="flex flex-col items-center space-y-4"> 
                  <span className="text-gray-600 text-base">Your account will be deactivated <b>untill you log in to your account</b>.</span>
                 <button  className="bg-red-600 rounded-md text-white text-center py-1 px-6 hover:bg-red-700 duration-200" aria-label="deactive account">
                Deactive Account
              </button>

            </div> : <> 
             <InputWrapper>
              <InputTitle title={'New ' + clickedItem.split(" ")[1]} />
              <FormInput notFormik={true}  type={
               clickedItem === 'Change Email' ? 'email' : 'text'
              } 
              value={clickedItem === 'Change Username' ? username : clickedItem === 'Change Email' ? email : null} 
               setInputValue={
                clickedItem === 'Change Username' ? setUsername  : clickedItem === 'Change Email' ? setEmail : setClickedItem('')
               }/>
            </InputWrapper>
             </> 
          }
           
              {
                clickedItem !== 'Deactive Account' ? 
                  <button className="text-center rounded-md py-1 px-7 bg-purple-1000 font-semibold duration-200 hover:opacity-80">
                Save
              </button>
                 : null
              }
          </div>
      
          </form>
        </>
      
         : <>
          <BoxBTN title='Change Username' action={setClickedItem}/>
          <BoxBTN title='Change Email' action={setClickedItem}/>
          <BoxBTN title='Change Password' action={setClickedItem}/>
          {/* <BoxBTN title='Change Name' action={setClickedItem}/> */}
          <BoxBTN title='Deactive Account' action={setClickedItem} />
         </>
        
      }
     


      </div>

      <Logout/>
    </HomeContainer>

  )



}

export default Settings