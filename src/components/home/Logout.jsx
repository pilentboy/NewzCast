
import handleSignOut from "../../utils/handleSignOut"
import { LoginContext } from "../../context/LoginContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
function Logout() {

    const { handleUserAuth, setLoading } = useContext(LoginContext)

    const navigate = useNavigate()
    const logOutUser = async () => {
        setLoading(true)
        const res = await handleSignOut()
        if (res) {
            handleUserAuth()
            //navigate("/")
        } else {
            alert("error")
        }
        setLoading(false)
    }

    return (
        <button
            type="button"
            aria-label="log out"
            onClick={logOutUser}
            className=" text-gray-400 flex items-center justify-center font-semibold duration-200  text-sm py-1 text-start my-1  hover:text-red-500   "
        >
            Log out
        </button>)
}

export default Logout