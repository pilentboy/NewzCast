export default function InputWrapper({ children }) {
    return <div className="flex flex-col justify-between px-3 py-2 rounded-md  space-y-1 w-72 border border-gray-200 ">
        {children}
    </div>
}