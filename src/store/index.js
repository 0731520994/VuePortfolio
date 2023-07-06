import { createStore } from 'vuex';

const dataUrl = 'https://0731520994.github.io/vueServer/index.json';

export default createStore({
  state: {
    resume: null,
    projects: null,
    testimonials: null,
  },
  getters: {

  },
  mutations: {
    setResume(state, resume) {
      state.resume = resume;
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    setTestimonials(state, testimonials) {
      state.testimonials = testimonials;
    },
  },
  actions: {
    async fetchResume(context) {
      try {
        let res = await fetch(dataUrl);
        let {resume} = await res.json();
        if (resume) {
          context.commit('setResume', resume);
        }
      } catch (error) {
        console.error('Error fetching resume:', error);
      }
    },
    async fetchProjects(context) {
      try {
        let res = await fetch(dataUrl);
        let data = await res.json();
        if (data.projects) {
          context.commit('setProjects', data.projects);
        } else {
          console.error('Not found.');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    },
    async fetchTestimonials(context) {
      try {
        const res = await fetch(dataUrl);
        const data = await res.json();
        if (data.testimonials) {
          context.commit('setTestimonials', data.testimonials);
        } else {
          console.error('Not found.');
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    },
  },
});
