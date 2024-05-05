import MainLink from '../landing/MainLink'

export default function RegisterLinkItems({ buttonStyles, containerStlye, titleStyles }) {

    
    return (
        <>
            <div className={`flex flex-col items-center space-y-2 ${containerStlye}`}>
                <span className={` text-[14px] font-bold text-gray-500  ${titleStyles}`}>
                    Don’t have an account?
                </span>
                <MainLink title={'Register'} styles={` py-3   text-sm  ${buttonStyles}`} target={'/register'} lgBTN={true} />

            </div>
        </>
    )

}