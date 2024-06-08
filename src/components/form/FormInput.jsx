export default function FormInput({ type,setInputValue,value, name, placeholder,notFormik, handleValue, handleBlur }) {
   
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
   return <>
        <input
            type={type}
            name={name}
            value={value}
            onChange={notFormik ? handleChange : handleValue}
            onBlur={handleBlur}
            autoComplete='true'
            placeholder={placeholder}
            className="border-0 outline-none font-bold  text-gray-700  text-sm" />
    </>
}