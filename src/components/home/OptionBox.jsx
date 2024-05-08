import { Link } from "react-router-dom"

function OptionBox({ display, items, button }) {
    return (
        <div className={` absolute top-5 left-0 py-2 px-3  bg-white border border-gray-200 ${display ? 'flex' : 'hidden'} flex-col min-h-20 w-24 rounded-lg `}>
            {
                items.map((item, index) =>
                (
                    < Link to={item.toLowerCase()} className=" text-gray-700 font-semibold duration-200  text-sm border-b border-gray-200 py-1 my-1  hover:text-gray-500   " key={index} >
                        {item}
                    </Link>
                )
                )
            }

            {button}

        </div >
    )
}

export default OptionBox