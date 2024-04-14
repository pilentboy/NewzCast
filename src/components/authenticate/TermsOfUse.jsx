import { Link } from "react-router-dom"



export default function TermsOfUse() {
    return <div className=" w-56">
        <span className='text-red-600 font-sans font-medium text-justify  text-[14px] '>
            I have read and agree to NewzKast’s <button className='text-purple-1000'>
                Terms of Use</button>, <button className='text-purple-1000' >Privacy Policy</button>,
            and <button  className='text-purple-1000'>Disclaimer</button>.
        </span>
    </div >
}