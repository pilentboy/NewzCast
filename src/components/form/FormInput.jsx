export default function FormInput({ type, value, name, placeholder, handleValue, handleBlur }) {
    return <>
        <input
            type={type}
            name={name}
            value={value}
            onChange={handleValue}
            onBlur={handleBlur}
            autoComplete='true'
            placeholder={placeholder}
            className="border-0 outline-none font-bold  text-gray-700  text-sm" />
    </>
}