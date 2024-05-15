import Users from '../db.json'

const getUsersInfo = (userEmail) => {
    const userFullData = Users["UsersData"].filter((usersInfo) => usersInfo.email === userEmail)
    return userFullData
}

export default getUsersInfo