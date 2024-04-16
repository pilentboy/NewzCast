
export default function SliderCircleBTN({ active, buttonID, handleClick }) {
    return (
        <button className={`${active ? 'bg-white' : 'bg-gray-500'} opacity-70  w-3 h-3 rounded-full`} onClick={() => handleClick(buttonID)} aria-label="changing slider index" >

        </ button >
    )
}