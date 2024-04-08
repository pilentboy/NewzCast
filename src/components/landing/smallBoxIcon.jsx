export default function SmallBoxIcon({ icon, styles }) {
    return (
        <>
            <div className={`text-purple-1000 ${styles}`}>
                {icon}
            </div>
        </>
    )
}