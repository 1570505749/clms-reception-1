// 全局变量设置
import typeApi from '@/api/article/type'

const state = {
  typeList: [], // 分类列表
  messageCount: [] // 消息提示计数
}

const mutations = {
  SET_TYPE: (state, typeList) => {
    state.typeList = typeList
  },
  SET_MESSAGE_COUNT: (state, messageCount) => {
    state.messageCount = messageCount
  }
}
const actions = {
  // 用户密码登录
  getList({ commit }) {
    return new Promise((resolve, reject) => {
      typeApi.getList().then(res => {
        commit('SET_TYPE', res.data)
      })
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

