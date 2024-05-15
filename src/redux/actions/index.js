export const GET_EXPERIENCES_LIST = "GET_EXPERIENCES_LIST";
export const GET_MY_EXPERIENCES = "GET_MY_EXPERIENCES";
export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const GET_SPECIFIC_PROFILE = "GET_SPECIFIC_PROFILE";
export const GET_PROFILES_LIST = "GET_PROFILES_LIST";
export const MODIFY_DATA = "MODIFY_DATA";
export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";
export const SET_MODAL_TYPE = "SET_MODAL_TYPE";
export const TOGGLE_IS_LOGGED = "TOGGLE_IS_LOGGED";
export const TOGGLE_STATE = "TOGGLE_STATE";
export const SET_USER_LOGGED = "SET_USER_LOGGED";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const REMOVE_EXPERIENCE = "REMOVE_EXPERIENCE";
export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const GET_SPECIFIC_POST = "GET_SPECIFIC_POST";
export const EDIT_EXPERIENCE = "EDIT_EXPERIENCE";

export const fetchProfileAction = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: import.meta.env.VITE_TOKEN_API,
        },
      });
      if (response.ok) {
        const user = await response.json();
        // console.log(user);

        switch (id) {
          case "me":
            dispatch({
              type: GET_MY_PROFILE,
              payload: user,
            });
            dispatch({
              type: GET_SPECIFIC_PROFILE,
              payload: user,
            });

            break;

          default:
            dispatch({
              type: GET_SPECIFIC_PROFILE,
              payload: user,
            });
            break;
        }
        // dispatch({
        //   type: GET_MY_PROFILE,
        //   payload: user,
        // });
      } else {
        console.log("error");
        throw new Error("Error fetching your profile, try again later! ");
      }
    } catch (error) {
      console.log("Your request returned this error:", error, "uffa :(");
    }
  };
};

export const modifyProfileAction = (updatedProfileData) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: import.meta.env.VITE_TOKEN_API,
        },
        body: JSON.stringify(updatedProfileData),
      });

      if (response.ok) {
        const user = await response.json();
        // console.log(user);

        dispatch({
          type: GET_MY_PROFILE,
          payload: user,
        });
      } else {
        console.log("error");
        throw new Error("Error updating your profile, try again later! ");
      }
    } catch (error) {
      console.log("Your request returned this error:", error, "uffa :(");
    }
  };
};

export const fetchUsersListAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: import.meta.env.VITE_TOKEN_API,
        },
      });
      if (response.ok) {
        const users = await response.json();
        // console.log(users);

        dispatch({
          type: GET_PROFILES_LIST,
          payload: users,
        });
      } else {
        console.log("error");
        throw new Error("Error fetching users list, try again later! ");
      }
    } catch (error) {
      console.log("Your request returned this error:", error, "acciderbolina :(");
    }
  };
};

export const fetchExperiencesAction = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: import.meta.env.VITE_TOKEN_API,
        },
      });
      if (response.ok) {
        const experiences = await response.json();

        dispatch({
          type: GET_EXPERIENCES_LIST,
          payload: experiences,
        });
      } else {
        console.log("error");
        throw new Error("Error fetching your profile, try again later! ");
      }
    } catch (error) {
      console.log("Your request returned this error:", error, "uffa x2 :(");
    }
  };
};

export const showModal = () => ({
  type: SHOW_MODAL,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});

export const addExperienceAction = (id, newExperience) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: import.meta.env.VITE_TOKEN_API,
        },
        body: JSON.stringify(newExperience),
      });

      if (response.ok) {
        const newExperience = await response.json();

        dispatch({
          type: ADD_EXPERIENCE,
          payload: newExperience,
        });
      } else {
        console.log("error");
        throw new Error("Error adding experience, try again later!");
      }
    } catch (error) {
      console.log("Your request returned this error:", error);
    }
  };
};

export const removeExperienceAction = (profileId, experienceId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profileId}/experiences/${experienceId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: import.meta.env.VITE_TOKEN_API,
          },
        }
      );

      if (response.ok) {
        dispatch({
          type: REMOVE_EXPERIENCE,
          payload: experienceId,
        });
        dispatch(fetchExperiencesAction(profileId));
      } else {
        console.log("error");
        throw new Error("Error removing experience, try again later!");
      }
    } catch (error) {
      console.log("Your request returned this error:", error);
    }
  };
};
export const editExperienceAction = (profileId, experienceId, newExperience) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profileId}/experiences/${experienceId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: import.meta.env.VITE_TOKEN_API,
          },
          body: JSON.stringify(newExperience),
        }
      );

      if (response.ok) {
        dispatch({
          type: EDIT_EXPERIENCE,
          payload: newExperience,
        });
        dispatch(fetchExperiencesAction(profileId));
      } else {
        console.log("error");
        throw new Error("Error editing experience, try again later!");
      }
    } catch (error) {
      console.log("Your request returned this error:", error, "uffa x5 :(");
    }
  };
};
export const setModalType = (modalType) => ({ type: SET_MODAL_TYPE, payload: modalType });

export const fetchAllPosts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: import.meta.env.VITE_TOKEN_API,
        },
      });
      if (response.ok) {
        const posts = await response.json();

        dispatch({
          type: GET_ALL_POSTS,
          payload: posts,
        });
      } else {
        console.log("error");
        throw new Error("Error fetching the posts, try again later! ");
      }
    } catch (error) {
      console.log("Your request returned this error:", error, "uffa x3 :(");
    }
  };
};

export const postComment = (comment) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: import.meta.env.VITE_TOKEN_API,
        },
        body: JSON.stringify(comment),
      });
      if (response.ok) {
        console.log("commento postato 😎");
        const posts = await response.json();

        dispatch({
          type: GET_ALL_POSTS,
          payload: posts,
        });
      } else {
        console.log("error");
        throw new Error("Error posting your comment, try again later! ");
      }
    } catch (error) {
      console.log("Your request returned this error:", error, "uffa x4 :(");
    }
  };
};

export const fetchSpecificPost = (postID) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postID}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: import.meta.env.VITE_TOKEN_API,
        },
      });
      if (response.ok) {
        const post = await response.json();

        dispatch({
          type: GET_SPECIFIC_POST,
          payload: post,
        });
      } else {
        console.log("error");
        throw new Error("Error fetching this post, try again later! ");
      }
    } catch (error) {
      console.log("Your request returned this error:", error, "uffa x3 :(");
    }
  };
};

export const deleteSpecificPost = (postID) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: import.meta.env.VITE_TOKEN_API,
        },
      });
      if (response.ok) {
        console.log("Post successfully deleted 😃");
        const posts = await response.json();

        dispatch({
          type: GET_ALL_POSTS,
          payload: posts,
        });
      } else {
        console.log("error");
        throw new Error("Error fetching this post, try again later! ");
      }
    } catch (error) {
      console.log("Your request returned this error:", error, "uffa x3 :(");
    }
  };
};

export const modifySpecificPost = (postID, postObj) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postID}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: import.meta.env.VITE_TOKEN_API,
        },
        body: JSON.stringify(postObj),
      });
      if (response.ok) {
        console.log("Post successfully modified 😃");
        const posts = await response.json();

        dispatch({
          type: GET_ALL_POSTS,
          payload: posts,
        });
      } else {
        console.log("error");
        throw new Error("Error fetching this post, try again later! ");
      }
    } catch (error) {
      console.log("Your request returned this error:", error, "uffa x3 :(");
    }
  };
};
