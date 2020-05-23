import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'fondo',
      paths: ['auth.currentUser']
    })(store)
  })
}
