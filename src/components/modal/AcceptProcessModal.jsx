import { CgBorderStyleSolid } from "react-icons/cg";

function AcceptProcessModal({title,size,acceptBG,acceptAction,cancelAction,acceptActiontTitle,children}) {
  return (
    <div className={` max-w-full py-2 px-4 bg-white rounded-md flex flex-col justify-around items-center ${size ? size : 'w-[300px] h-36'} `}>
             <CgBorderStyleSolid/>

        <span className='text-base font-medium text-black '>
            {title}
        </span>
        {children}
        <div className='flex items-center justify-center mt-4 space-x-4'>   
            <button 
            onClick={()=> {
                acceptAction()
                cancelAction()
            }}
            className={`w-20 py-1 duration-200 rounded-md  text-center text-base font-semibold  ${acceptBG ? acceptBG :'bg-red-500 hover:bg-red-700'}`}>{acceptActiontTitle}</button>
            <button 
            onClick={()=> {
                cancelAction()
            }}
            className='w-20  py-1 rounded-md bg-white border border-gray-200 text-black duration-200 font-semibold text-center text-base hover:bg-gray-200 hover:'>Cancel</button>
        </div>
    </div>
  )
}

export default AcceptProcessModal