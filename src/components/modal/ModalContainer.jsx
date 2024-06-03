import { useEffect } from 'react';

export default function ModalContainer({ children, display,setDisplay, handleCommentDisplay, bgColor, postId,activePostId }) {

    const handleClick = (e) => {
        if (e.target === e.currentTarget) {
            if(setDisplay){
                setDisplay("hidden")
            }else{
                handleCommentDisplay(postId);
                document.body.classList.remove("overflow-hidden");
            }
        }
    };

    useEffect(() => {
        if (display === 'flex' || activePostId ) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        // cleanup to manage re-renders
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
        
    }, [display,activePostId]);

    

 



    return (
        <div className={`w-screen h-lvh overflow-clip fixed top-0 left-0 items-center justify-center modal-container ${display ? display : 'flex'}
            ${bgColor ? bgColor : 'bg-[rgba(124,124,124,0.6)]'}`}
            onClick={handleClick}
            id="modalContainer"
        >
            {children}
        </div>
    );
}
