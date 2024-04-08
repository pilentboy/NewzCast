import LandingNav from "./landingNav"
import LandingContainer from "./landingContainer"

export default function LandingHeader() {

    return (
        <header>
            <div className=" bg-blue-950 w-full  h-lvh py-10 ">
                <LandingNav />
                <LandingContainer />
            </div>
        </header>
    )
}