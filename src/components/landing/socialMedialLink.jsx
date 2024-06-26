import { Link } from "react-router-dom"
export default function SocialMediaLink({ icon, target, label }) {

    return (
        <>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-1000 text-white hover:scale-110 duration-150">
                <Link to={target} aria-label={label}>
                    {icon}
                </Link>
                { }
            </div>
        </>

    )

}