export const state = () => ({
    movies:[]
});

export const getters = {
    getWishlistItems(state) {
        return state.movies;
      },
};

export const mutations = {
    PUSH_MOVIE(state, movie) {
        state.movies.push(movie);
        console.log(state.movies);     
      }
};

export const actions = {
    addToWishlist({ commit }, movie) {
          commit("PUSH_MOVIE", movie);
      }
};