export const GET_EXPERIENCES_LIST = 'GET_EXPERIENCES_LIST'
export const GET_MY_EXPERIENCES = 'GET_MY_EXPERIENCES'
export const GET_MY_PROFILE = 'GET_MY_PROFILE'
export const GET_SPECIFIC_PROFILE = 'GET_SPECIFIC_PROFILE'
export const GET_PROFILES_LIST = 'GET_PROFILES_LIST'
export const MODIFY_DATA = 'MODIFY_DATA'
export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

export const fetchProfileAction = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/' + id, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: import.meta.env.VITE_TOKEN_API,
        },
      })
      if (response.ok) {
        const user = await response.json()
        console.log(user)

        dispatch({
          type: GET_MY_PROFILE,
          payload: user,
        })
      } else {
        console.log('error')
        throw new Error('Error fetching your profile, try again later! ')
      }
    } catch (error) {
      console.log('Your request returned this error:', error, 'uffa :(')
    }
  }
}

export const fetchUsersListAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: import.meta.env.VITE_TOKEN_API,
        },
      })
      if (response.ok) {
        const users = await response.json()
        console.log(users)

        dispatch({
          type: GET_PROFILES_LIST,
          payload: users,
        })
      } else {
        console.log('error')
        throw new Error('Error fetching users list, try again later! ')
      }
    } catch (error) {
      console.log('Your request returned this error:', error, 'acciderbolina :(')
    }
  }
}

export const fetchExperiencesAction = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: import.meta.env.VITE_TOKEN_API,
        },
      })
      if (response.ok) {
        const experiences = await response.json()

        dispatch({
          type: GET_EXPERIENCES_LIST,
          payload: experiences,
        })
      } else {
        console.log('error')
        throw new Error('Error fetching your profile, try again later! ')
      }
    } catch (error) {
      console.log('Your request returned this error:', error, 'uffa x2 :(')
    }
  }
}

export const showModal = () => ({
  type: SHOW_MODAL,
})

export const hideModal = () => ({
  type: HIDE_MODAL,
})
