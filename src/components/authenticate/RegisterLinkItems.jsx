import Button from '../landing/Button'

export default function RegisterLinkItems({ buttonStyles, containerStlye, titleStyles }) {
    return (
        <>
            <div className={`flex flex-col items-center space-y-2 ${containerStlye}`}>
                <span className={` text-xs font-bold text-gray-400  ${titleStyles}`}>
                    Don’t have an account?
                </span>
                <Button title={'Register'} styles={` py-3   text-sm  ${buttonStyles}`} target={'/register'} />

            </div>
        </>
    )

}