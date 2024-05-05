
export default function MainButton({ styles, lgBTN = true, title, type, action }) {

    return (
        <button className={` flex items-center justify-center  rounded-md  text-center  ${lgBTN ? 'w-72' : 'w-32'} ${styles}`} 
        onClick={() => type !== 'submit' ? action() : null} type={type} >
            {title}
        </button >
    )
}