import { allUsersReducer, postOfFollowingReducer, userProfileReducer, userReducer } from './Reducers/User';
import { likeReducer,myPostsReducer, userPostsReducer } from './Reducers/Post';
import {configureStore} from "@reduxjs/toolkit";



// yeha saare reducers aayege
const store=configureStore({
    reducer:{
        user:userReducer,
        postOfFollowing:postOfFollowingReducer,
        allUsers:allUsersReducer,
        like:likeReducer,
        myPosts:myPostsReducer,
        userProfile:userProfileReducer,
        userPosts:userPostsReducer
    }
});


export default store;