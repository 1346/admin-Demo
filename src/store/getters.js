const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  visitedViews: state => state.app.visitedViews,
  cachedViews: state => state.app.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  addRouters: state => state.permission.addRouters,
  count: state => state.demo.count,
  show: state => state.demo.show,
}
export default getters
