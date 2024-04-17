export default function InputWrapper({ children, styles, errorStyle = false }) {
    return <div className={`flex flex-col justify-between px-3 py-2 rounded-md  space-y-1 my-2 border 
     ${styles} 
    ${errorStyle ? "border-red-600" : "border-gray-200"}`}>
        {children}
    </div>
}