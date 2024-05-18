
import PostInfoContainer from './PostInfoContainer'
import { IoMdShare } from "react-icons/io";
import AddFavorites from './AddFavorites';
import LikePost from './LikePost';
import UserProfile from '../../profile/UserProfile';
import EditPost from './EditPost';


function PostWrapper({ userPostsInfo, favorite, like }) {

    const UserBaseInfo = [userPostsInfo['username'], userPostsInfo['profileImage']]


    return (

        <>
            {
                userPostsInfo['posts'].map((post, id) => (
                    <div className=" w-[90%]  min-h-[200px] max-h-[600px] border border-gray-200 overflow-hidden my-2  rounded-lg bg-white flex flex-col justify-between md:w-460" key={id}>
                        {
                            post['image'] ? (
                                <img src={post['image']} className='w-full h-80 object-cover mb-4 shadow-lg' alt='post image' />
                            ) : null
                        }

                        <div className='flex flex-col space-y-3 p-2 '>

                            <h1 className='text-black font-medium text-base'>
                                {post['title']}
                            </h1>

                            <div className='flex items-center justify-between space-x-3'>
                                <div className='flex items-center space-x-2'>
                                    <UserProfile styles={'space-x-2'} name={UserBaseInfo[0]} profileImage={UserBaseInfo[1]} userNameStyle={'text-[11px] text-purple-1000'} target={'./'} />
                                </div>
                                <EditPost />
                            </div>

                            <PostInfoContainer styles={'justify-between'}>

                                <span>{post['likes']} likes</span>
                                <div className='flex items-center space-x-4'>
                                    <span className='mr-10'>views {post['views']}k</span>
                                    <span className='px-2'>3 days ago</span>
                                    <AddFavorites favoritePost={favorite[0]} handleFavorite={favorite[1]} />
                                </div>

                            </PostInfoContainer>

                            <PostInfoContainer styles={'justify-between'}>

                                <LikePost likedPost={like[0]} handleLike={like[1]} />

                                <span>{post['comments'].length} Comments</span>

                                <button type='button' className='flex items-center text-gray-600 text-[12px] font-medium'>
                                    <IoMdShare className='text-lg  text-gray-400 mr-2' />
                                    Share
                                </button>
                            </PostInfoContainer>
                            <input type='text' className='w-full py-2 px-3 border-gray-200 text-[11px]  placeholder-gray-600 font-normal  border rounded-md outline-none  focus:border-gray-600 ' placeholder='Write commnet' />

                        </div>
                    </div>
                ))
            }
        </>

    )
}

export default PostWrapper