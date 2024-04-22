import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";


const LoginContext = createContext()

const LoginProvider = ({ children }) => {

    const navigate = useNavigate()

    const [UsersData, setUsersData] = useState([])
    const [loginRes, setLoginRes] = useState(null)

    const apiKey = process.env.REACT_APP_API_KEY;
    const supabaseURL = "https://sftspirecsaiuswinvmc.supabase.co";

    const GetUsersInfo = () => {
        const UserData = window.localStorage.getItem("User Info")
        setUsersData(UserData)
        console.log(UserData, "from context")
    }

    const CheckLoginData = async ({ Email, Password }) => {

        const supabase = createClient(
            supabaseURL,
            apiKey
        )

        async function getUsersData() {
            const { data, error } = await supabase
                .from('NewzCastUsers')
                .select("*")
            data.forEach(user => console.log(user))

        }

        async function signUpUser() {
            const { data, error } = await supabase.auth.signUp({ email: "sirxmahdi79@gmail.com", password: "11111111" })

            console.log(data, "signed up")

        }

        async function signInUser() {

            try {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: Email,
                    password: Password,
                })
                console.log(Email, Password)
                if (data["user"] !== null) {
                    setLoginRes(false)
                    navigate("/")
                    console.log(data)
                } else {
                    console.log("eror", error)
                    setLoginRes(true)
                }
            } catch (error) {
                console.log(error)
                setLoginRes(true)
            }
        }

        // getUsersData()
        // signUpUser()
        signInUser()
    


    }





    return (
        <LoginContext.Provider value={{ UsersData, CheckLoginData, GetUsersInfo, loginRes }}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider
export { LoginContext }



