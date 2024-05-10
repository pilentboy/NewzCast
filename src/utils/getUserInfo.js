import Users from '../db.json'

const getUsersInfo = (userEmail) => {
    const userData = Users["UsersData"].filter((usersInfo) => usersInfo.email === userEmail)
    return userData
}

export default getUsersInfo