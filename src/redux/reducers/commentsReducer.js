import { v4 as uuidv4 } from 'uuid';

const initialCommentsState = {
    comments: [
        {
            user: "Ana",
            spam: 0,
            comment_id: uuidv4(),
            userComment: "Mi mascota se siente más saludable y activa desde que comenzó a usar este producto. ¡Lo recomiendo mucho!",
        }, {
            user: "Juan",
            spam: 0,
            comment_id: uuidv4(),
            userComment: "Desde que mi mascota comenzó a usar este producto, he notado una gran diferencia en su pelaje y piel. Definitivamente lo seguiré comprando.",
        }, {
            user: "María",
            spam: 0,
            comment_id: uuidv4(),
            userComment: "Estoy muy contenta con los resultados de este producto. Mi mascota está más animado y juega mucho más. ¡Gracias!",
        }, {
            user: "Carlos",
            spam: 0,
            comment_id: uuidv4(),
            userComment: "Mi mascota ha estado usando este producto durante unos meses y puedo ver una gran mejora en su energía y estado de ánimo. ¡Lo recomiendo mucho!",
        }
    ],
    commentUnderReview: [],
};

const addToComments = (state, payload) => {
    const newState = {...state};

    const checkDuplicatedMessage = state.comments.some(comment => comment.userComment === payload.userComment && comment.user_id === payload.user_id);

    if (checkDuplicatedMessage) {
        console.log("Your comment won't be added because you had commented exactly the same before");
    } else if (payload.userComment.length <= 4) {
        console.log("Your comment is too short add more than 4 characters");
    } else {
        newState.comments = [
            ...state.comments,
            payload,
        ];
    }

    return {...newState}; 
}

const removeComment = (state, payload) => {
    return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== payload)
    };
};

const markAsSpam = (state, payload) => {
    const newState = {...state}; 

    const cookies = document.cookie.split(";"); // GET ALL THE COOKIES

    newState.comments.map(comment => { 
        // ADD 1 POINT IN SPAM
        if (comment.comment_id === payload) {
            const votoSpam = cookies.find(cookie => cookie.trim().startsWith(`voto_spam_${comment.comment_id}=`));
            const cookieBooleanValue = votoSpam ? votoSpam.split("=")[1].split(" ")[0] : null;
            if (!Boolean(cookieBooleanValue)) { // CHECK IF THE PERSON ALREADY VOTE
                document.cookie = `voto_spam_${comment.comment_id}=true expires=0`;
                comment.spam += 1;
            }
        }
        if (comment.spam >= 5) {
            // DELETE ANY COMMENT OVER 5 SPAM
            const updatedComments = removeComment(state, payload);
            newState.comments = updatedComments.comments;

            // ADD ANY COMMENT TO UNDER REVIEW
            newState.commentUnderReview = [
                ...newState.commentUnderReview,
                comment,
            ];
        }
    });
    return {
        ...newState,
    }
}

export const commentsReducer = (state = initialCommentsState, action) => {
    switch(action.type) {
        case 'ADD_COMMENT': {
            return {
                ...state,
                comments: addToComments(state, action.payload).comments,
            }
        }
        case 'REMOVE_COMMENT': {
            return {
                ...state,
                comments: removeComment(state, action.payload).comments,
            }
        }
        case 'MARK_AS_SPAM': {
            const marked = markAsSpam(state, action.payload) 
            return {
                ...state,
                comments: marked.comments,
                commentUnderReview: marked.commentUnderReview,
            }
        }
        default: {
            return state;
        } 
    }
}