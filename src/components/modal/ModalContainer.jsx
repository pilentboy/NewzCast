import { useEffect } from 'react';

export default function ModalContainer({ children, display,setDisplay, bgColor }) {

    const handleClick = (e) => {
        if (e.target === e.currentTarget) {
            setDisplay("hidden")
        }
    };

    useEffect(() => {
        if (display === 'flex' ) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        // cleanup to manage re-renders
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
        
    }, [display]);

    

 



    return (
        <div className={`w-screen h-lvh overflow-clip fixed z-[999] top-0 left-0 items-center justify-center modal-container ${display ? display : 'flex'}
            ${bgColor ? bgColor : 'bg-[rgba(124,124,124,0.6)]'}`}
            onClick={handleClick}
            id="modalContainer"
        >
            {children}
        </div>
    );
}
