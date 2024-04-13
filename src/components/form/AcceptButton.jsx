import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

export default function AcceptButton({ styles, ariaLabel, handleAcceptState, AcceptState }) {

    return (
        <>
            <button className={` rounded-full  text-xs   text-white w-4 h-4  text-center ${styles} `} aria-label={ariaLabel} onClick={() => handleAcceptState(!AcceptState)} type='button'>
                {
                    AcceptState ? (<MdDone className="mx-auto" />
                    ) : (
                        <RxCross1 className="mx-auto" />
                    )
                }
            </button>
        </>

    )


}