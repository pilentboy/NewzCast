
import handleUploadDate from "./handleUploadDate";
import generateRandomPostID from "./generateRandomPostID ";

const handleUploadNewPost = (title,postMedias,mainDB,setMainDB,userLoggedInfo) => {

    const updatedDB = [...mainDB];
    
    const userAccIndex = updatedDB.findIndex(user => user.email === userLoggedInfo.email);
           
    const newPost = {
        "title": title,
        "postMeidas":postMedias,
        "uploadedDate": handleUploadDate(),
        "likes": 0,
        "usersLiked":[],
        "views": 0,
        "postID": generateRandomPostID(),
        "comments": []
        };
        
    updatedDB[userAccIndex].posts = [newPost, ...updatedDB[userAccIndex].posts];
    setMainDB(updatedDB);
};

export default handleUploadNewPost