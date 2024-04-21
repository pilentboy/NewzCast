import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";


const LoginContext = createContext()

const LoginProvider = ({ children }) => {

    const navigate = useNavigate()

    const [UsersData, setUsersData] = useState([])
    const [loginRes, setLoginRes] = useState(null)

    const apiKey = process.env.REACT_APP_API_KEY;

    const GetUsersInfo = () => {
        const UserData = window.localStorage.getItem("User Info")
        setUsersData(UserData)
        console.log(UserData, "from context")
    }

    const CheckLoginData = async ({ Username, Password }) => {

        const supabase = createClient(
            "https://sftspirecsaiuswinvmc.supabase.co",
            apiKey
        )
        async function getUsersData() {
            const { data, error } = await supabase
                .from('NewzCastUsers')
                .select("*")
            data.forEach(user => console.log(user))



        }
        async function signUpUser() {
            const { data, error } = await supabase.auth.signUp({ email: "dqdqd@yahoo.com", password: "213213124123" })

            console.log(data)

        }

        async function addUser() {
            const { data, error } = await supabase
                .from('NewzCastUsers')
                .insert({ FirstName: 'Mohamad', LastName: "Ebrahimi", PhoneNumber: "09000000000", Password: "00000000", Username: "Mohamad44" })

            console.log(data)
        }

        getUsersData()
        signUpUser()
        // addUser()

        if (window.localStorage.getItem("User Info")) {
            const Res = JSON.parse(UsersData)
            if (Username === Res['Username'] && Password === Res['Password']) {
                setLoginRes(false)
                alert("logged in successfuly!")
                navigate("/")
            } else {
                console.log("login error")
                setLoginRes(true)
            }
        } else {
            alert("NO DATA!")
        }


    }

    useEffect(() => {
        GetUsersInfo()
    }, [])




    return (
        <LoginContext.Provider value={{ UsersData, CheckLoginData, GetUsersInfo, loginRes }}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider
export { LoginContext }



