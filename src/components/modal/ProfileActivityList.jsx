import ModalCloseBTN from '../modal/ModalCloseBTN'
import test from '../../assets/images/1.webp'
import ActivityListItem from './ActivityListItem'

function ProfileActivityList({ title, handleClose }) {
    return (
        <div className="w-[330px] h-[400px] p-4  bg-white rounded-md flex flex-col">
            <div className="flex justify-between items-center pb-4">
                <span></span>
                <span className=' font-bold text-[15px] ms-3'>{title}</span>
                <ModalCloseBTN handleClose={handleClose} />
            </div>

            <div className='overflow-y-auto  no-scrollbar'>

                <ActivityListItem username={'pilentboy'} profileImage={test} followState={true} />
                <ActivityListItem username={'pilentboy'} profileImage={test} followState={true} />
                <ActivityListItem username={'pilentboy'} profileImage={test} followState={true} />
                <ActivityListItem username={'pilentboy'} profileImage={test} followState={false} />
                <ActivityListItem username={'pilentboy'} profileImage={test} followState={true} />
                <ActivityListItem username={'pilentboy'} profileImage={test} followState={false} />
            </div>

        </div>
    )
}

export default ProfileActivityList