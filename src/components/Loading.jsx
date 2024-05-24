import { Puff } from "react-loader-spinner"

function Loading({ display, noBG }) {
    return (
        <Puff
            visible={display}
            height="80"
            width="80"
            color="rgb(11, 45, 131)"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass={`fixed top-0 left-0 w-screen h-lvh items-center justify-center ${noBG ? 'bg-transparent  z-[-10] ' : 'bg-[rgba(255,255,255,0.48)]  '} `}
        />
    )
}

export default Loading