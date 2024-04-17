export default function FormInput({ type, value, name, handleValue }) {
    return <>
        <input
            type={type}
            name={name}
            value={value}
            onChange={handleValue}
            className="border-0 outline-none font-bold  text-gray-700  text-sm" />
    </>
}