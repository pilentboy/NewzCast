
import PostInfoContainer from './PostInfoContainer'
import AddFavorites from './AddFavorites';
import LikePost from './LikePost';
import UserProfile from '../../profile/UserProfile';
import EditPost from './EditPost';
import { IoStatsChart } from "react-icons/io5";
import SharePost from './SharePost';
import CommentPost from './CommentPost';
import { useState } from 'react';

function PostWrapper({ userPostsInfo, favorite, like }) {

    const UserBaseInfo = [userPostsInfo['username'], userPostsInfo['profileImage']]
    const [commentValue, setCommentValue] = useState('')



    return (

        <>
            {
                userPostsInfo['posts'].map((post, id) => (
                    <div className=" w-[90%]  min-h-[200px] max-h-[600px]   overflow-hidden my-2  bg-white flex flex-col justify-between md:w-460" key={id}>
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
                                    <UserProfile styles={'space-x-1'} name={UserBaseInfo[0]} profileImage={UserBaseInfo[1]} userNameStyle={'text-[11px] text-purple-1000'}
                                        target={`profile/${userPostsInfo['email']}`}
                                    />
                                </div>
                                <EditPost />
                            </div>

                            <PostInfoContainer styles={'justify-between       md:justify-around'}>

                                <span>{post['likes']} likes</span>

                                <div className=' flex items-center' title='views'>
                                    <IoStatsChart className='text-lg  text-gray-400 mx-2' />
                                    {post['views']}k
                                </div>

                                <span className='px-2' title='uploaded time' aria-label='uploaded time'>3 days ago</span>

                                <span>{post['comments'].length} Comments</span>

                            </PostInfoContainer>

                            <PostInfoContainer styles={'justify-evenly border-b  border-gray-200 pb-2'}>

                                <SharePost />

                                <AddFavorites favoritePost={favorite[0]} handleFavorite={favorite[1]} />
                                
                                <LikePost likedPost={like[0]} handleLike={like[1]} />



                            </PostInfoContainer>

                            <CommentPost commentValue={commentValue} setCommentValue={setCommentValue} />

                        </div>
                    </div>
                ))
            }
        </>

    )
}

export default PostWrapper