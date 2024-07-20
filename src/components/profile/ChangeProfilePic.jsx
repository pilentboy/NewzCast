import { useContext, useState } from "react";
import { MdEdit } from "react-icons/md";
import { LoginContext } from "../../context/LoginContext";
import AcceptProcessModal from "../modal/AcceptProcessModal";
import ModalContainer from "../modal/ModalContainer";

function ChangeProfilePic() {

    const {handleChangeProfilePic,handleDeleteProfilePic}=useContext(LoginContext)
    const [modalDisplay,setModalDisplay]=useState('hidden')

    const handleFileSelect = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.setAttribute('multiple',false)
        input.accept ='image/*'
        input.addEventListener("change", (e) => handleChangeProfilePic(e))
        input.click();
    };

    return (
        <>
           <button
            type="button"
            onClick={()=> setModalDisplay(pre => pre === 'flex' ? 'hidden' : 'flex')}
            className="absolute top-2 -right-4 rounded-full p-1 outline outline-[0.5px] outline-gray-100 border border-white bg-purple-1000">
            <MdEdit
                className='text-white'
            />
        </button>
        <ModalContainer display={modalDisplay} setDisplay={setModalDisplay}>
            <AcceptProcessModal 
                title='Change Profile Image'
                acceptActiontTitle='Upload'
                acceptBG='bg-purple-1000 hover:opacity-80 '
                acceptAction={()=> handleFileSelect()}
                cancelAction={()=> setModalDisplay('hidden')}
                secondAcceptActionTitle='Delete'
                secondAcceptAction={()=> handleDeleteProfilePic()}
                secondAcceptActionBG={'bg-red-500 text-white'}
            ></AcceptProcessModal>
        </ModalContainer>
        </>
     

    )
}

export default ChangeProfilePic