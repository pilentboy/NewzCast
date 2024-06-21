import { useEffect, useState } from "react";
import { MdPersonSearch } from "react-icons/md";
import { CgBorderStyleSolid } from "react-icons/cg";

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
            <div className="w-[270px] h-12 flex flex-col  bg-white overflow-hidden  items-center ps-1 justify-between rounded-md border border-white duration-200 ">

            <CgBorderStyleSolid className="text-black "/>

                <div className="flex w-full items-center justify-between">
                <input
                    autoFocus
                    value={searchValue}
                    onChange={handleChange}
                    type="text"
                    placeholder="Search..."
                    className=" text-sm py-1 outline-none  text-black  border-none w-[75%] placeholder:text-black "
                />

                <button type="submit" className={` bg-purple-1000 h-8 rounded-lg px-4 duration-500 font-semibold text-lg hover:opacity-95 
                ${displaySearchBTN ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    <MdPersonSearch />
                </button>
                </div>
       
            </div>
        </form>

    )
}

export default SearchBox