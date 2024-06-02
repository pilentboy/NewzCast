
import PostInfoContainer from './PostInfoContainer'
import AddFavorites from './AddFavorites';
import LikePost from './LikePost';
import UserProfile from '../../profile/UserProfile';
import EditPost from './EditPost';
import { IoStatsChart } from "react-icons/io5";
import BottomBox from '../../modal/BottomBox';
import SharePost from './SharePost';
import CommentPost from './CommentPost';
import { useState } from 'react';
import DisplayPostComments from './DisplayPostComments';
import ModalContainer from '../../modal/ModalContainer';

function PostWrapper({ userPostsInfo, favorite, like }) {

    const UserBaseInfo = [userPostsInfo['username'], userPostsInfo['profileImage']]
    const [commentValue, setCommentValue] = useState('')

    const [commentDisplay,setCommentDisplay]=useState("hidden")



    return (

        <>
            {
                userPostsInfo['posts'].map((post, id) => (
                    <div className={` w-[90%]  min-h-[200px] max-h-[600px] overflow-hidden my-3  bg-white flex flex-col justify-between md:w-460 ${!post['image'] ? 'border border-gray-200 rounded-md' : null}`} key={id}>
                        {
                            post['image'] ? (
                                <img src={post['image']} className='w-full h-80 object-cover mb-4 shadow-lg rounded-md' loading='lazy' alt='post image' />
                            ) : null
                        }

                        <div className='flex flex-col  p-2 '>

                            <h1 className='text-black font-medium text-base'>
                                {post['title']}
                            </h1>

                            <div className='flex items-center justify-between space-x-3'>
                                <div className='flex items-center mt-2 mb-2 space-x-2'>
                                    <UserProfile styles={'space-x-1'} name={UserBaseInfo[0]} profileImage={UserBaseInfo[1]} userNameStyle={'text-[11px] text-purple-1000'}
                                        target={`profile/${userPostsInfo['email']}`}
                                    />
                                </div>
                                <EditPost postID={post.postID} />
                            </div>

                            <PostInfoContainer styles={'justify-between mb-3      md:justify-around'}>

                                <span>{post['likes']} likes</span>

                                <div className=' flex items-center' title='views'>
                                    <IoStatsChart className='text-lg  text-gray-400 mx-2' />
                                    {post['views']}k
                                </div>

                                <span className='px-2' title='uploaded time' aria-label='uploaded time'>3 days ago</span>

                                <DisplayPostComments 
                                commentsLength={post['comments'].length}
                                setDisplay={setCommentDisplay}
                                />
                            </PostInfoContainer>

                            <PostInfoContainer styles={'justify-evenly border-b mb-3 border-gray-200 pb-2'}>

                                <SharePost />

                                <AddFavorites favoritePost={favorite[0]} handleFavorite={favorite[1]} />

                                <LikePost likedPost={like[0]} handleLike={like[1]} />



                            </PostInfoContainer>

                            <CommentPost commentValue={commentValue} setCommentValue={setCommentValue} />

                            <ModalContainer display={commentDisplay} setDisplay={setCommentDisplay}
                            
                            >
                                 <BottomBox>
                                {
                                    post['comments'].map((comment,index) => (
                                        <div className='flex items-start my-4   justify-between w-full border-b  border-slate-500  pb-1 
                                        '
                                        key={index}
                                        >
                                        <UserProfile
                                        name={UserBaseInfo[0]}
                                        profileImage={post['image']}
                                        styles={'space-x-2 '}
                                        
                                        />
                                        <p className='text-white w-3/4  ms-2 
                                        
                                        font-medium'>
                                            Omg, is it real? Start building your own. Get you car Insurance in California.
                                        </p>
                                        </div>
    
                                    ))
                                }
                               
                                 </BottomBox>
                            </ModalContainer>

                        </div>
                    </div>
                ))
            }
        </>

    )
}

export default PostWrapper