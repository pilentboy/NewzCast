import MainLink from './MainLink'

function NavAuthLinks() {

    return (
        <div className="flex space-x-6">
            <MainLink title={'Log in'} target={'/authenticate'} styles={'bg-transparent border border-1  border-white shadow-sm  w-28 h-9'} />
            <MainLink title={'Sign Up'} target={'/register'} styles={'bg-[#FF9A00] w-28 h-9 shadow-sm '} />
        </div>)
}

export default NavAuthLinks