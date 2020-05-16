import { getField, updateField } from 'vuex-map-fields'
import createPersistedState from 'vuex-persistedstate'

export const mutations = {
  updateField
}
export const getters = {
  getField
}

createPersistedState({
  key: 'fondo',
  paths: ['auth.currentUser']
})
