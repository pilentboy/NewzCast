import Button from '../landing/Button'

export default function RegisterLinkItems({ buttonStyles , containerStlye}) {
    return (
        <>
            <div className={`flex flex-col items-center space-y-2 ${containerStlye}`}>
                <span className="text-sm font-medium text-gray-500 ">
                    Don’t have an account?
                </span>
                <Button title={'Register'} styles={` py-3  text-sm  ${buttonStyles}`} target={'/register'} />

            </div>
        </>
    )

}