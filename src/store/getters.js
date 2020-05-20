export default {
  accessToken: (state) => state.user.accessToken,
  collapse: (state) => state.settings.collapse,
  cachedViews: (state) => state.tagsView.cachedViews,
  device: (state) => state.settings.device,
  errorLogs: (state) => state.errorLog.logs,
  header: (state) => state.settings.header,
  layout: (state) => state.settings.layout,
  logo: (state) => state.settings.logo,
  userName: (state) => state.user.userName,
  permissions: (state) => state.user.permissions,
  routes: (state) => state.permission.routes,
  partialRoutes: (state) => state.permission.partialRoutes,
  selectedTag: (state) => state.tagsView.selectedTag,
  srcTableCode: (state) => state.table.srcCode,
  tagsView: (state) => state.settings.tagsView,
  visitedViews: (state) => state.tagsView.visitedViews,
};
