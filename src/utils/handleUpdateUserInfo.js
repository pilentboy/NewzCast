
const handleUpdateUserInfo= (newValue,title,mainDB,setMainDB,userLoggedInfo) =>{
    const updatedDB = [...mainDB];
    const userDBIndex= updatedDB.findIndex(user => user.email === userLoggedInfo.email)
    updatedDB[userDBIndex][title]= newValue
    setMainDB(updatedDB)
}

export default handleUpdateUserInfo