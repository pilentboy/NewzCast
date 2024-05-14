import ModalCloseBTN from '../modal/ModalCloseBTN'
import UserProfile from '../profile/UserProfile'
import MainButton from '../landing/MainButton'
import test from '../../assets/images/1.webp'

function ProfileActivityList({ title, handleClose }) {
    return (
        <div className="w-[330px] h-[400px] p-4  bg-white rounded-md flex flex-col">
            <div className="flex justify-between items-center pb-4">
                <span></span>
                <span className=' font-bold text-[15px] ms-3'>{title}</span>
                <ModalCloseBTN handleClose={handleClose} />
            </div>

            <div className='overflow-y-auto  no-scrollbar'>
                <div className='border border-gray-200 rounded-md flex items-center justify-between my-1 p-2'>
                    <UserProfile styles='space-x-2' username='Emily' profileImage={test} />
                    <MainButton
                        title='Follwing'
                        styles={'bg-purple-1000 w-[100px] text-sm font-normal py-[5px]'}
                        lgBTN={false} type='button'
                        action={() => alert("test")}
                    />
                </div>
                <div className='border border-gray-200 rounded-md flex items-center justify-between my-1 p-2'>
                    <UserProfile styles='space-x-2' username='Emily' profileImage={test} />
                    <MainButton
                        title='Follwing'
                        styles={'bg-purple-1000 w-[100px] text-sm font-normal py-[5px]'}
                        lgBTN={false} type='button'
                        action={() => alert("test")}
                    />
                </div>
                <div className='border border-gray-200 rounded-md flex items-center justify-between my-1 p-2'>
                    <UserProfile styles='space-x-2' username='Emily' profileImage={test} />
                    <MainButton
                        title='Follwing'
                        styles={'bg-purple-1000 w-[100px] text-sm font-normal py-[5px]'}
                        lgBTN={false} type='button'
                        action={() => alert("test")}
                    />
                </div>
                <div className='border border-gray-200 rounded-md flex items-center justify-between my-1 p-2'>
                    <UserProfile styles='space-x-2' username='Emily' profileImage={test} />
                    <MainButton
                        title='Follwing'
                        styles={'bg-purple-1000 w-[100px] text-sm font-normal py-[5px]'}
                        lgBTN={false} type='button'
                        action={() => alert("test")}
                    />
                </div>
                <div className='border border-gray-200 rounded-md flex items-center justify-between my-1 p-2'>
                    <UserProfile styles='space-x-2' username='Emily' profileImage={test} />
                    <MainButton
                        title='Follwing'
                        styles={'bg-purple-1000 w-[100px] text-sm font-normal py-[5px]'}
                        lgBTN={false} type='button'
                        action={() => alert("test")}
                    />
                </div>
                <div className='border border-gray-200 rounded-md flex items-center justify-between my-1 p-2'>
                    <UserProfile styles='space-x-2' username='Emily' profileImage={test} />
                    <MainButton
                        title='Follwing'
                        styles={'bg-purple-1000 w-[100px] text-sm font-normal py-[5px]'}
                        lgBTN={false} type='button'
                        action={() => alert("test")}
                    />
                </div>
                <div className='border border-gray-200 rounded-md flex items-center justify-between my-1 p-2'>
                    <UserProfile styles='space-x-2' username='Emily' profileImage={test} />
                    <MainButton
                        title='Follwing'
                        styles={'bg-purple-1000 w-[100px] text-sm font-normal py-[5px]'}
                        lgBTN={false} type='button'
                        action={() => alert("test")}
                    />
                </div>
            </div>

        </div>
    )
}

export default ProfileActivityList