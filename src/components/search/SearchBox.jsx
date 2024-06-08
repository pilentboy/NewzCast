import { useEffect, useState } from "react";
import { MdPersonSearch } from "react-icons/md";

function SearchBox({ searchValue, setSearchValue, handleSearch }) {

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
        <form action="/" onSubmit={handleSearch}>
            <div className="w-[270px] h-10 flex  bg-white overflow-hidden items-center ps-1 justify-between rounded-md border border-white duration-200 ">
                <input
                    autoFocus
                    value={searchValue}
                    onChange={handleChange}
                    type="text"
                    placeholder="Search..."
                    className=" text-sm py-1 outline-none text-black bg-transparent border-none w-[76%] placeholder:text-black "
                />

                <button type="submit" className={` bg-purple-1000 h-10 px-4 duration-500 font-semibold text-lg hover:opacity-95 
                ${displaySearchBTN ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    <MdPersonSearch />
                </button>
            </div>
        </form>

    )
}

export default SearchBox