import Users from '../db.json'

const getUsersInfo = (userEmail) => {
    const userInfo = Users["UsersData"].filter((usersInfo) => usersInfo.email === userEmail)

    if (userInfo.length === 1) return userInfo[0]
}

export default getUsersInfo