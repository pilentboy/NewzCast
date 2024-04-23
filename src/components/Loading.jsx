import { Puff } from "react-loader-spinner"

function Loading({ display = 'hidden' }) {
    return (
        <div
            className={`w-screen h-lvh fixed top-0 left-0 bg-[rgba(255,255,255,0.48)] o items-center justify-center ${display}`}
        >

            <Puff
                visible={true}
                height="80"
                width="80"
                color="rgb(11, 45, 131)"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>

    )
}

export default Loading