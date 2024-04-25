export default function InputTitle({ title, requiredInput }) {
    return <label className="text-xs font-medium  text-gray-400" >
        {title}
        {
            requiredInput ? (<span className="mx-1">*</span>) : null
        }

    </label>
}