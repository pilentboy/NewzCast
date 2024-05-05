import MainButton from "../landing/MainButton"


function AlertModal({ title, alertInfo, icon, btnTitle, action }) {
    return (
        <div className="flex flex-col justify-evenly rounded-md  w-[350px] h-[170px] px-4 py-2 text-base text-black bg-white">
            <h1 className="font-bold flex items-center">
                {title}
                {icon}
            </h1>
            <p className="text-md font-normal">
                {alertInfo}
            </p>
            <MainButton title={btnTitle} styles={'bg-purple-1000 py-2'} type={'button'} lgBTN={false} action={action} />
        </div>
    )
}

export default AlertModal