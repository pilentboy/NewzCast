
import ProfilePic from '../../profile/ProfilePic'
import PostInfoContainer from './PostInfoContainer'
import { IoMdShare } from "react-icons/io";
import postimg3 from '../../../assets/images/3.jpg'
import AddFavorites from './AddFavorites';
import LikePost from './LikePost';


function PostWrapper({ img, like, favorite }) {

    return (
        <div className=" w-[90%]  min-h-[200px] max-h-[600px] border border-gray-200 overflow-hidden my-2  rounded-lg bg-white flex flex-col justify-between md:w-480">
            <img src={img} className='w-full max-h-80 object-cover mb-4 shadow-lg		' />

            <div className='flex flex-col space-y-3 p-2 '>

                <h1 className='text-black font-medium text-base'>
                    This is my first post on NewzCast!
                </h1>

                <div className='flex items-center space-x-3'>
                    <div className='flex items-center space-x-2'>
                        <ProfilePic src={postimg3} />
                        <span className='text-purple-1000 text-[11px] font-medium'>Pilent Boy</span>
                    </div>
                </div>

                <PostInfoContainer styles={'justify-between'}>

                    <span>15 likes</span>
                    <div className='flex items-center space-x-4'>
                        <span className='mr-10'>views 45k</span>
                        <span className='px-2'>3 days ago</span>
                        <AddFavorites favoritePost={favorite[0]} handleFavorite={favorite[1]} />
                    </div>

                </PostInfoContainer>

                <PostInfoContainer styles={'justify-between'}>

                    <LikePost likedPost={like[0]} handleLike={like[1]} />

                    <span>6 Comments</span>

                    <button type='button' className='flex items-center text-gray-600 text-[12px] font-medium'>
                        <IoMdShare className='text-lg  text-gray-400 mr-2' />
                        Share
                    </button>
                </PostInfoContainer>
                <input type='text' className='w-full py-2 px-3 border-gray-200 text-[11px]  placeholder-gray-600 font-normal  border rounded-md outline-none  focus:border-gray-600 ' placeholder='Write commnet' />

            </div>
        </div>
    )
}

export default PostWrapper