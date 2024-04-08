export default function SmallBoxIcon({ icon, styles }) {
    return (
        <>
            <div className={` ${styles}`}>
                {icon}
            </div>
        </>
    )
}