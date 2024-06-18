import React, {useContext, useState, useEffect } from 'react';
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
import DropDown from '../../home/DropDown';
import { LoginContext } from '../../../context/LoginContext';
import AcceptProcessModal from '../../modal/AcceptProcessModal';
import PostText from '../share/PostText';

function PostWrapper({userPostsInfo,userName,profileImg,userEmail}) {
    
    const [commentValue, setCommentValue] = useState('');
    const [displayComments,setDisplayComments]=useState('hidden')
    const [displayPostEdit,setDisplayPostEdit]=useState(false)
    const [deletePostModalDisplay,setDeletePostModalDisplay]=useState('hidden')
    const [editPostModalDisplay,setEditPostModalDisplay]=useState('hidden')
    const [playingVideo,setPlayingVideo]= useState(false)
    const [postText, setPostText] = useState(userPostsInfo.title)
    const {handleDeletePost,handlePostEdit,userLoggedInfo}= useContext(LoginContext)
	
    

    return (
        <>

                <div className={`w-[90%] min-h-[200px]  max-h-[600px] md:w-[450px] overflow-x-visible my-3  bg-white flex flex-col justify-between ${userPostsInfo.postMeidas.length === 0 ? 'border border-gray-200 rounded-md' : null}`} >
                    
                    {
                        userPostsInfo.postMeidas.length >= 1 ?(
                            <PostSlider slideChange={setPlayingVideo}>
                                {
                                    userPostsInfo.postMeidas.map((media,index) => (
                                        <SwiperSlide key={index} className='rounded-md shadow-lg'>
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
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center mt-2 mb-2 space-x-2'>
                                <UserProfile styles={'space-x-1'} name={userName}  
                                profileImage={profileImg} 
                                userNameStyle={'text-[11px] text-purple-1000'}
                                target={`/newzcast/profile/${userEmail}`}
                                />
                            </div>
							
                            <EditPost postID={userPostsInfo.postID} setDisplayPostEdit={setDisplayPostEdit}>
                                <DropDown 
                                display={displayPostEdit} 
                                setDropDownDisplay={setDisplayPostEdit} 
                                position={'-left-14 top-7 md:top-5 md:left-0 '}
                                button={<div className=' flex flex-col  items-center text-sm '>
                                         <button
                                         onClick={()=> setEditPostModalDisplay('flex')}
                                          className='text-sm w-full text-gray-700 border-b duration-200 border-gray-200 py-1 my-1 hover:text-gray-500'>Edit</button>
                                        <button
                                            onClick={()=> setDeletePostModalDisplay('flex')}
                                         className='text-gray-700 duration-200 text-sm py-1 my-1 hover:text-red-500'>
                                            Delete
                                        </button>
                                    </div>
                                }
                                />
                            </EditPost>
                                
                            {/* edit post modal */}
                            <ModalContainer display={editPostModalDisplay} setDisplay={setEditPostModalDisplay}>
                                <AcceptProcessModal 
                                        size={'w-[330px] md:w-[400px] h-48'}
                                        acceptActiontTitle='Update'
                                        acceptBG='bg-purple-1000 hover:opacity-70'
                                        acceptAction={() => handlePostEdit(userPostsInfo.postID,postText)}
                                        cancelAction={() => {
                                            setEditPostModalDisplay('hidden')
                                            setDisplayPostEdit(false)
                                        }}
                                >
                                    <PostText TextLength={userLoggedInfo && userLoggedInfo['verified']} text={postText} handleChange={setPostText}/>
                                </AcceptProcessModal>
                            </ModalContainer>

                            {/* delete post modal */}
                            <ModalContainer display={deletePostModalDisplay} setDisplay={setDeletePostModalDisplay}>
                                <AcceptProcessModal 
                                title='Are you sure you want to delete this post?'
                                acceptActiontTitle='Yes'
                                acceptAction={() => handleDeletePost(userPostsInfo.postID)}
                                cancelAction={() => {
                                    setDeletePostModalDisplay('hidden')
                                    setDisplayPostEdit(false)
                                }}
                                />
                            </ModalContainer>

                        </div>
                        <PostInfoContainer styles={'justify-between mb-3 md:justify-around'}>
                                <span>{userPostsInfo['usersLiked'].length} likes</span>
                                <div className='flex items-center' title='views'>
                                    <IoStatsChart className='text-lg text-gray-400 mx-2' />
                                    {userPostsInfo['views']}
                                </div>
                                {/* date post uploaded */}
                                <span className='px-2' title='uploaded time' aria-label='uploaded time'>
								{userPostsInfo.uploadedDate[1] + ' ' + userPostsInfo.uploadedDate[2]}
								</span>
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
                                <CommentPostInput commentValue={commentValue} setCommentValue={setCommentValue} postID={userPostsInfo.postID} postUserEmail={userEmail}/>

                                {/* display post comments */}
                          
                                    <ModalContainer  
                                        display={displayComments}
                                        setDisplay={setDisplayComments}
                                    >
                                        <CommentBoxModal>
                                            <div className='md:h-4/5 overflow-y-auto mt-2 comment-box'>
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
                                            </div>
                                        
                                        </CommentBoxModal>
                                    </ModalContainer>
                                
              
                

                    </div>
                </div>
        
        </>
    );
}

export default PostWrapper;
