import MainLink from "./MainLink"

export default function GetStartedBTN({ anima = false ,styles}) {
    return (
        <MainLink title={'Get Started'} target={'/newzcast'} styles={` font-bold bg-purple-1000 duration-150  w-28 h-9 text-sm ${anima ? 'hover:ms-2 ' : null} ${styles}`} />

    )
}