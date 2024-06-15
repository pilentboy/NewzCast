import { Link } from "react-router-dom"

function DropDown({ display,setDropDownDisplay,items,position, button }) {
    return (
        <div className={` absolute  py-2   bg-white border border-gray-200 ${display ? 'flex' : 'hidden'} flex-col min-h-8 w-24 rounded-lg ${position ? position : 'top-5 left-0'} `}>
            {
                items?.map((item, index) =>{
                    return (
                        < Link to={item.toLowerCase()} 
                        onClick={()=> setDropDownDisplay(false)}
                        className=" text-gray-700 font-semibold duration-200 text-center  text-sm border-b border-gray-200 py-1 my-1  hover:text-gray-500   "
                         key={index} >
                            {item}
                        </Link>
                    )
                }
              
                )
            }

            {button}

        </div >
    )
}

export default DropDown