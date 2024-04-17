
export default function MainButton({ styles, lgBTN, title, type, action }) {

    return (
        <button className={` flex items-center justify-center  rounded-md  text-center  ${lgBTN ? 'w-72' : null} ${styles}`} onClick={() => action()} type={type} >
            {title}
        </button >
    )
}