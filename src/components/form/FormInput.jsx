export default function FormInput({ type,setInputValue,customSetinput,value, name, placeholder,notFormik, handleValue, handleBlur,index }) {
   
    const handleChange = (e) => {
           if(setInputValue){
            setInputValue(e.target.value);
           }else{
            customSetinput(pre => [...pre,pre[index]=e.target.value] );
           }
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