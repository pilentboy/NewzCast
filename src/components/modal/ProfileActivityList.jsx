import test from '../../assets/images/1.webp'
import ActivityListItem from './ActivityListItem'

function ProfileActivityList({ title }) {
    return (
        <div className="w-[330px] h-[400px] p-4  bg-white rounded-md flex flex-col">
            <div className="flex justify-center items-center pb-4">
                <span className=' font-bold text-[15px]'>{title}</span>
            </div>

            <div className='overflow-y-auto  no-scrollbar'>

                <ActivityListItem name={'pilentboy'} profileImage={test} followState={true} />
                <ActivityListItem name={'pilentboy'} profileImage={test} followState={true} />
                <ActivityListItem name={'pilentboy'} profileImage={test} followState={true} />
                <ActivityListItem name={'pilentboy'} profileImage={test} followState={false} />
                <ActivityListItem name={'pilentboy'} profileImage={test} followState={true} />
                <ActivityListItem name={'pilentboy'} profileImage={test} followState={false} />
                <ActivityListItem name={'pilentboy'} profileImage={test} followState={true} />
                <ActivityListItem name={'pilentboy'} profileImage={test} followState={false} />
                <ActivityListItem name={'pilentboy'} profileImage={test} followState={true} />
                <ActivityListItem name={'pilentboy'} profileImage={test} followState={false} />
            </div>

        </div>
    )
}

export default ProfileActivityList