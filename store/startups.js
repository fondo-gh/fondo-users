export const state = () => ({
  featured: [
    {
      id: 1,
      image: '/g3.jpg',
      title: 'Xpendly',
      address: '761 Old England Ave, Winter Park, Florida, 32789',
      location: 'Accra Ghana',
      slug: 'xpendly',
      description: ''
    },
    {
      id: 2,
      image: '/g3.jpg',
      title: 'itrace',
      address: '761 Old England Ave, Winter Park, Florida, 32789',
      location: 'Accra Ghana',
      slug: 'itrace',
      description: ''
    },
    {
      id: 3,
      image: '/g3.jpg',
      title: 'Diabetica',
      address: '761 Old England Ave, Winter Park, Florida, 32789',
      location: 'Accra Ghana',
      slug: 'diabetica',
      description: ''
    },
    {
      id: 4,
      image: '/g3.jpg',
      title: 'Interrect',
      address: '761 Old England Ave, Winter Park, Florida, 32789',
      location: 'Accra Ghana',
      slug: 'interrect',
      description: ''
    }
  ]
})

export const mutations = {
  findCourse(state, slug) {
    const singleCourse = state.featured.find((data) => data.slug === slug)
    state.oneCourse = singleCourse
  },

  findCourseById(state, payload) {
    const courseTee = state.featured.find((data) => data.slug === payload.slug)
    state.courseTee = courseTee
  }
}

export const actions = {
  async getAllCourses() {
    try {
      const { data } = await this.$course.getAllCourses()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
}
