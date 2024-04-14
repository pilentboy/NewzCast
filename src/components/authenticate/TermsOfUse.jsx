import { Link } from "react-router-dom"



export default function TermsOfUse() {
    return <div className=" w-56">
        <span className='text-gray-400 font-sans font-medium text-justify  text-[12px] '>
            I have read and agree to NewzKast’s <Link to={'#'} className='text-purple-1000'>
                Terms of Use</Link>, <Link className='text-purple-1000' target={'#'}>Privacy Policy</Link>,
            and <Link to={'#'} className='text-purple-1000'>Disclaimer</Link>.
        </span>
    </div >
}