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
      },
      REMOVE_MOVIE(state, movie) {
        state.movies.splice(state.movies.indexOf(movie), 1);
      },
};

export const actions = {
    addToWishlist({ commit }, movie) {
          commit("PUSH_MOVIE", movie);
      },
      removeFromWishlist({ commit, state }, movie) {
        const wishlistItem = state.movies.find(item => item.id === movie.id);
        commit("REMOVE_MOVIE", wishlistItem);
      }
};