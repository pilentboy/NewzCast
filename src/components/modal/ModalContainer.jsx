
export default function ModalContainer({ children, display = 'hidden', setDisplay }) {

    const handleClick = (e) => {

        if (e.target === e.currentTarget) {
            setDisplay("hidden")
        }

    };

    document.body.addEventListener("click", () => {
        if (display === 'flex') {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
    })

    return (
        <div className={`w-screen h-lvh fixed top-0 left-0 bg-[rgba(124,124,124,0.6)] o items-center justify-center ${display}`}

            onClick={handleClick}

            id="modalContainer"
        >
            {children}
        </div>
    )
}