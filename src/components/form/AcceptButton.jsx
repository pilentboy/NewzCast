import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

export default function AcceptButton({ styles, ariaLabel, signIn, handleAcceptState, AcceptState, errorStyle, handleBlur }) {

    return (
        <>
            <button className={` rounded-full  text-xs   text-white w-4 h-4  text-center ${styles} ${errorStyle ? ' border-2 border-red-600' : null}`}
                aria-label={ariaLabel}
                onClick={() => {
                    if (signIn) {
                        handleAcceptState(value => !value)
                    } else {
                        handleAcceptState.setFieldValue('Accept', !handleAcceptState.values.Accept)
                    }
                }
                }
                onBlur={handleBlur}
                type='button'
                name="Accept">
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