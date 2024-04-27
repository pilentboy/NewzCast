

export default function TermsOfUse({ setDisplay }) {
    return <div className=" w-56">
        <span className='text-gray-500 font-sans font-medium text-justify  text-[14px] '>
            I have read and agree to NewzKast’s <button className='text-purple-1000' onClick={() => setDisplay()} type="button">
                Terms of Use</button>.
        </span>
    </div >
}



