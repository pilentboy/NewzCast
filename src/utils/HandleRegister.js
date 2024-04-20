
export default function HandleRegister(RegisterFormValues) {
    window.localStorage.setItem('User Info', JSON.stringify(RegisterFormValues))
}