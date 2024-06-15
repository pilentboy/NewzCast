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
import ModalContainer from '../../modal/ModalContainer';
import PostVideo from './PostVideo';
import PostImage from './PostImage';
import PostSlider from './swuppetest';
import {SwiperSlide } from "swiper/react"

function PostWrapper({userPostsInfo,userName,profileImg,userEmail}) {
    
    const [commentValue, setCommentValue] = useState('');
    const [displayComments,setDisplayComments]=useState('hidden')
    const [playingVideo,setPlayingVideo]= useState(false)
    
    return (
        <>

                <div className={`w-[90%] min-h-[200px]  max-h-[600px] md:w-460 overflow-hidden my-3  bg-white flex flex-col justify-between  ${userPostsInfo.postMeidas.length === 0 ? 'border border-gray-200 rounded-md' : null}`} >
                    
                    {
                        userPostsInfo.postMeidas.length >= 1 ?(
                            <PostSlider>
                                {
                                    userPostsInfo.postMeidas.map((media,index) => (
                                        <SwiperSlide key={index} className='rounded-md'>
                                            {
                                                Object.keys(media)[0] === "image" ? <PostImage imageSRC={media.image}/> : <PostVideo url={media.video} playingVideo={playingVideo} setPlayingVideo={setPlayingVideo}/>
                                            }
                                        </SwiperSlide>

                                    ))
                                }
                              
                            </PostSlider>
                        ) : null
                    }
                 
                  
                
                    <div className='flex flex-col p-2'>
                        <pre className='text-black font-medium text-base font-roboto max-h-36  overflow-y-auto max-w-full text-wrap'>
                            {userPostsInfo['title']}
                        </pre>
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
