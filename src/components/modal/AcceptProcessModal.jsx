import { CgBorderStyleSolid } from "react-icons/cg";

function AcceptProcessModal({title,acceptBG,acceptAction,cancelAction,acceptActiontTitle}) {
  return (
    <div className='w-[300px] h-36 py-2 px-4 bg-white rounded-md flex flex-col justify-around items-center '>
             <CgBorderStyleSolid/>

        <span className='text-base font-medium text-black '>
            {title}
        </span>
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