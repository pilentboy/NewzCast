import Button from "./Button"

export default function GetStartedBTN({ anima = false }) {
    return (
        <Button title={'Get Started'} styles={` font-bold bg-purple-1000 duration-150  w-28 h-9 text-sm ${anima ? 'hover:ms-2 ' : null}`} />

    )
}