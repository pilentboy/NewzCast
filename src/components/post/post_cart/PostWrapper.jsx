import React, {useState } from 'react';
import PostInfoContainer from './PostInfoContainer';
import AddFavorites from './AddFavorites';
import LikePost from './LikePost';
import UserProfile from '../../profile/UserProfile';
import EditPost from './EditPost';
import { IoStatsChart } from "react-icons/io5";
import CommentBoxModal from '../../modal/CommentBoxModal';
import SharePost from './SharePost';
import CommentPostInput from './CommentPostInput';
import DisplayPostComments from './DisplayPostComments';
import video from '../../../assets/videos/videoplayback.mp4'
import ModalContainer from '../../modal/ModalContainer';
import PostVideo from './PostVideo';

function PostWrapper({userPostsInfo,userName,profileImg,userEmail}) {
    
    const [commentValue, setCommentValue] = useState('');
    const [activePostId, setActivePostId] = useState(null);
    const [displayComments,setDisplayComments]=useState('hidden')
    const [playingVideo,setPlayingVideo]= useState(false)
    


    return (
        <>

                <div className={`w-[90%] min-h-[200px] max-h-[600px] md:w-460 overflow-hidden my-3 bg-white flex flex-col justify-between  ${!userPostsInfo['image'] ? 'border border-gray-200 rounded-md' : null}`} >
                    {/* {userPostsInfo['image'] ? (
                        <img src={userPostsInfo['image']} className={`object-cover mb-4 w-full h-80 shadow-lg rounded-md`} loading='lazy' alt='post image' />
                    ) : null} */}

                    <PostVideo url={video} playingVideo={playingVideo} setPlayingVideo={setPlayingVideo}/>
                    <div className='flex flex-col p-2'>
                        <h1 className='text-black font-medium text-base'>
                            {userPostsInfo['title']}
                        </h1>
                        <div className='flex items-center justify-between space-x-3'>
                            <div className='flex items-center mt-2 mb-2 space-x-2'>
                                <UserProfile styles={'space-x-1'} name={userName}  
                                profileImage={profileImg} 
                                userNameStyle={'text-[11px] text-purple-1000'}
                                target={`profile/${userEmail}`}
                                />
                            </div>
                            <EditPost postID={userPostsInfo.postID} />
                        </div>
                        <PostInfoContainer styles={'justify-between mb-3 md:justify-around'}>
                                <span>{userPostsInfo['likes']} likes</span>
                                <div className='flex items-center' title='views'>
                                    <IoStatsChart className='text-lg text-gray-400 mx-2' />
                                    {userPostsInfo['views']}
                                </div>
                                {/* date post uploaded */}
                                <span className='px-2' title='uploaded time' aria-label='uploaded time'>3 days ago</span>
                                {/* display post comments button */}
                                <DisplayPostComments 
                                    commentsLength={userPostsInfo['comments'].length}
                                    setDisplay={setDisplayComments}
                                />
                                </PostInfoContainer>

                                <PostInfoContainer styles={'justify-evenly border-b mb-3 border-gray-200 pb-2'}>
                                    <SharePost />
                                    <AddFavorites/>
                                    <LikePost postID={userPostsInfo.postID} userEmail={userEmail} usersLiked={userPostsInfo.usersLiked}/>
                                </PostInfoContainer>


                                        
                                {/* comment input */}
                                <CommentPostInput commentValue={commentValue} setCommentValue={setCommentValue} />

                                {/* display post comments */}
                          
                                    <ModalContainer  
                                        display={displayComments}
                                        setDisplay={setDisplayComments}
                                    >
                                        <CommentBoxModal>
                                            {userPostsInfo['comments'].map((commentInfo, index) => (
                                                <div className='flex items-start  my-3 justify-between w-full border-b border-slate-500 pb-1' key={index}>
                                                    <UserProfile
                                                        name={commentInfo.username}
                                                        profileImage={commentInfo.profileImage}
                                                        target={`profile/${commentInfo['email']}`}
                                                        styles={'space-x-2 '}
                                                        userNameStyle={'text-white text-sm '}
                                                    />
                                                    <p className='text-white w-3/5  font-medium'>
                                                        {commentInfo.comment}
                                                    </p>
                                                </div>
                                            ))}
                                        </CommentBoxModal>
                                    </ModalContainer>
                                
              
                

                    </div>
                </div>
        
        </>
    );
}

export default PostWrapper;
