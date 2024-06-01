
export default function ModalContainer({ children, display, setDisplay,bgColor }) {

    const handleClick = (e) => {

        if (e.target === e.currentTarget) {
            setDisplay("hidden")
        }

    };

    document.body.addEventListener("click", () => {
        if (display === 'flex') {
            document.body.classList.add("overflow-clip")
        } else {
            document.body.classList.remove("overflow-clip")
        }
    })

    return (
        <div className={`w-screen h-lvh overflow-clip fixed top-0 left-0  items-center justify-center modal-container ${display}
        ${bgColor ? bgColor : 'bg-[rgba(124,124,124,0.6)]'}
        `
        
    }

            onClick={handleClick}

            id="modalContainer"
        >
            {children}
        </div>
    )
}