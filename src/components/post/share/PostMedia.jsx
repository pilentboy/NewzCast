
function PostMedia({ title, logo, validFormats, handleInputChange }) {

    const handleFileSelect = () => {
        const input = document.createElement('input');
        input.type = 'file';
        // input.setAttribute('multiple',true) currenlty disabled
        input.accept = validFormats
        input.addEventListener("change", handleInputChange)
        input.click();
    };

    return (
        <button type="button" onClick={handleFileSelect} className="flex items-center text-xs font-semibold  space-x-2">
            {logo}
            <span className="text-gray-500"> {title} </span>
        </button>

    )
}

export default PostMedia