import Nav from "./Nav"
import Container from "./Container"
import appScreenshot from '../../assets/images/homephoneview.png'
import GetStartedBTN from "./GetStartedBTN";
import { useEffect, useState } from "react";
import AppDownloadLinks from "./AppDownloadLinks";
import { FaCircleArrowUp } from "react-icons/fa6";

export default function LandingHeader() {

    const [scrollyValue, setScrollYValue] = useState(window.scrollY)
    const [headerAnima,setHeaderAnime]=useState()

    document.addEventListener('scroll', () => {
        setScrollYValue(window.scrollY)
    })

    window.addEventListener("resize",()=>{
        window.innerWidth < 640  ? setHeaderAnime('screen-shot-anima') : setHeaderAnime(null)
    })    


    useEffect(()=>{
        
        setTimeout(()=>{
            window.innerWidth < 640  ? setHeaderAnime('screen-shot-anima') : setHeaderAnime(null)
        },600)

    },[])

    

    return (
        <header id="header" className="header-bg h-full">

            <div className="container py-4 md:py-12  min-h-lvh">

                <Nav />

                <Container styles={'mt-28 md:mt-14  '} noContainer={true}>
                    <div className="flex flex-col items-center  lg:items-start  ">
                        <div className="space-y-7 my-16 hidden md:block lg:my-0">
                            <h1 className="text-white text-6xl  font-bold"> Share the Newz!</h1>
                            <GetStartedBTN anima={true} />
                        </div>
                        <AppDownloadLinks />
                    </div>
                    <div className="flex items-center w-full justify-center md:w-fit ">

                    <img src={appScreenshot} alt="app screenshot" 
                    className={`lg:w-[250px]  lg:h-[460px] duration-150 lg:hover:scale-110 
                    ${headerAnima}
                    `} />

                    <GetStartedBTN anima={true} styles={`${headerAnima === 'screen-shot-anima' ? 'started-btn-anima' : 'hidden'}  `} />

                    </div>
                
                </Container>

                {
                    scrollyValue > window.innerHeight ? (
                        <a href="#header" aria-label="go to header" className="fixed top-[90%] text-2xl text-black md:top-[50%] left-[2%] scroll-top z-[999]">
                            <FaCircleArrowUp />
                        </a>
                    ) : null
                }
            </div>
        </header>
    )
}