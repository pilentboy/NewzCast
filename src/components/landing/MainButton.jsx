
export default function MainButton({ styles, lgBTN, title, type }) {

    return (
        <button className={` flex items-center justify-center  rounded-md  text-center  ${lgBTN ? 'w-72' : null} ${styles}`} type={type}>
            {title}
        </button >
    )
}