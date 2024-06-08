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

function PostWrapper({ userPostsInfo }) {
    
    const UserBaseInfo = [userPostsInfo['username'], userPostsInfo['profileImage']];
    const [commentValue, setCommentValue] = useState('');
    const [activePostId, setActivePostId] = useState(null);

    const handleCommentDisplay = (postId) => {
        setActivePostId(postId === activePostId ? null : postId);
    };

    return (
        <>
            {userPostsInfo['posts'].map((post, id) => (
                <div className={`w-[90%] min-h-[200px] max-h-[600px] md:w-460 overflow-hidden my-3 bg-white flex flex-col justify-between  ${!post['image'] ? 'border border-gray-200 rounded-md' : null}`} key={id}>
                    {post['image'] ? (
                        <img src={post['image']} className={`object-cover mb-4 w-full h-80 shadow-lg rounded-md' loading='lazy' alt='post image`} />
                    ) : null}
                    <div className='flex flex-col p-2'>
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
                        <PostInfoContainer styles={'justify-between mb-3 md:justify-around'}>
                                <span>{post['likes']} likes</span>
                                <div className='flex items-center' title='views'>
                                    <IoStatsChart className='text-lg text-gray-400 mx-2' />
                                    {post['views']}
                                </div>
                                {/* date post uploaded */}
                                <span className='px-2' title='uploaded time' aria-label='uploaded time'>3 days ago</span>
                                {/* display post comments button */}
                                <DisplayPostComments 
                                    commentsLength={post['comments'].length}
                                    setDisplay={() => handleCommentDisplay(post.postID)}
                                />
                                </PostInfoContainer>
                                <PostInfoContainer styles={'justify-evenly border-b mb-3 border-gray-200 pb-2'}>
                                    <SharePost />
                                    <AddFavorites/>
                                    <LikePost />
                                </PostInfoContainer>


                                        
                                {/* comment input */}
                                <CommentPostInput commentValue={commentValue} setCommentValue={setCommentValue} />

                                {/* display post comments */}
                                {activePostId === post.postID && (
                                    <ModalContainer  
                                    handleCommentDisplay={handleCommentDisplay} 
                                    postId={post.postID}
                                    activePostId={activePostId}
                                    >
                                        <CommentBoxModal>
                                            {post['comments'].map((commentInfo, index) => (
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
                                )}
              
                

                    </div>
                </div>
            ))}
        </>
    );
}

export default PostWrapper;
