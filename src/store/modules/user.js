// 用户操作
import { logout, login, getInfo, smsLogin, register } from '../../api/user'
import { getToken, setToken, removeToken } from '../../utils/auth'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    userId: '',
    roles: '',
    userIcon: '',
    userName: '',
    userInfo: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_USERNAME: (state, username) => {
    state.userName = username
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_USERID: (state, userid) => {
    state.userId = userid
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_USERICON: (state, usericon) => {
    state.userIcon = usericon
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

const actions = {
  // 用户密码登录
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(res => {
        commit('SET_TOKEN', res.msg)
        setToken(res.msg, userInfo.remember)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 用户短信登录
  smsLogin({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      smsLogin(userInfo).then(res => {
        commit('SET_TOKEN', res.msg)
        setToken(res.msg, userInfo.remember)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 用户短信登录
  register({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      register(userInfo).then(res => {
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取用户信息
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo().then(res => {
        const { data } = res
        const { user } = data
        if (user.userPositionId !== null) {
          commit('SET_ROLES', user.userPositionId)
        } else {
          reject(new Error('getInfo: 用户权限不能为空 !'))
        }
        commit('SET_USERINFO', user)
        commit('SET_USERNAME', user.userName)
        commit('SET_NAME', user.name)
        commit('SET_USERID', user.userId)
        commit('SET_USERICON', user.userIcon)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 登出
  logout({ commit, state }) {
    return new Promise((resolve) => {
      logout()
      removeToken()
      resolve()
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
    })
  },

  // 刷新token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken()
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

