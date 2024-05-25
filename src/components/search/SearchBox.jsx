import { useEffect, useState } from "react";

function SearchBox({ searchValue, setSearchValue }) {

    const [displaySearchBTN, setDisplaySearchBTN] = useState(false)

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }



    useEffect(() => {
        if (searchValue !== "") {
            setDisplaySearchBTN(true)
        } else {
            setDisplaySearchBTN(false)
        }
    }, [searchValue])

    return (
        <form action="/" onSubmit={(e) => {
            e.preventDefault()
            setSearchValue("")
        }}>
            <div className="w-64 h-10 flex  overflow-hidden items-center ps-1 justify-between rounded-md border border-gray-400 ">
                <input
                    value={searchValue}
                    onChange={handleChange}
                    type="text"
                    placeholder="Search..." className=" text-sm py-1 outline-none border-none w-[76%] "
                />

                <button type="submit" className={` bg-purple-1000 h-10 px-4 duration-500 font-semibold text-base hover:opacity-95 
                ${displaySearchBTN ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    Go
                </button>
            </div>
        </form>

    )
}

export default SearchBox