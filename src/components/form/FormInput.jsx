export default function FormInput({ type, value, handleValue }) {
    return <>
        <input
            type={type}
            value={value}
            onChange={() => handleValue()}
            className="border-0 outline-none font-bold  text-gray-700  text-sm" />
    </>
}