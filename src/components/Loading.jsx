import { Puff } from "react-loader-spinner"

function Loading({ display }) {
    return (
        <Puff
            visible={display}
            height="80"
            width="80"
            color="rgb(11, 45, 131)"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass={`w-screen h-lvh flex fixed top-0 left-0 bg-[rgba(255,255,255,0.48)] o items-center justify-center `}
        />
    )
}

export default Loading