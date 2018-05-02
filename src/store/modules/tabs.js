export default {
  namespaced: true,
  state: {
    filter: 'All',
    states: ['All', 'Active', 'Completed']
  },
  mutations: {
    toggleFilter (state, filter) {
      console.log('toggleFilter')
      state.filter = filter
    }
  }
}
