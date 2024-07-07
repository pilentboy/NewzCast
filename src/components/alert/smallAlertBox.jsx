
const SmallAlertBox=({bgColor,display,icon,title})=>{

    return (
        <div className={`animate__delay-0s animate__bounceInUp animate__animated w-64 h-8 fixed bottom-20 left-2 md:bottom-3 md:left-[80%] z-[999] rounded-md justify-evenly items-center ${bgColor} ${display}`}>
            {icon}
            <span className="text-white  text-base">
                {title}
            </span>
        </div>
    )
}

export default SmallAlertBox