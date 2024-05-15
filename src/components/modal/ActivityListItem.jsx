import UserProfile from "../profile/UserProfile"
import MainButton from "../landing/MainButton"

function ActivityListItem({ username, profileImage, followState }) {
    return (
        <div className='border border-gray-200 rounded-md flex items-center justify-between my-1 p-2'>
            <UserProfile styles='space-x-2' username={username} profileImage={profileImage} />
            <MainButton
                title={followState ? 'Following' : 'Follow'}
                styles={`w-[100px]  text-sm font-normal py-[5px] ${followState ? ' bg-transparent border border-purple-1000 text-purple-1000' : 'bg-purple-1000 text-white'}`}
                lgBTN={false} type='button'
                action={() => alert("test")}
            />
        </div>)
}

export default ActivityListItem