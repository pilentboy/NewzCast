export default function InputWrapper({ children, styles }) {
    return <div className={`flex flex-col justify-between px-3 py-2 rounded-md  space-y-1 my-2 border border-gray-200 ${styles}`}>
        {children}
    </div>
}