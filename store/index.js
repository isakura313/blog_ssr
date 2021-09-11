import axios from 'axios';
import { Template } from 'webpack';

export const state = () => ({
  paginationNumber: 1,
  searchNow: '', // если у нас происходит поиск, то что мы сейчас ищем
  limitNow: 20, // пока что это будет фиксированный лимит на количество постов на странице
  articleInfo: [], // массив с информацией о статьях
  commentsCount: [],
  commentsInfo: [] // отдельный массив

});
export const mutations = {
  updatePagination (state, value) {
    state.paginationNumber = value;
  },
  updateLimitNow (state, value) {
    state.limitNow = value;
  },
  updateArticleInfo (state, value) {
    state.articleInfo = value;
  },
  updateCommentsInfo (state, value) {
    state.value = value;
  },
  updateCommentsCount (state, value) {
    state.commentsCount = value;
  }
};

export const actions = {
  async getArticleContent ({ commit }, value) {
    const articleInfo = await axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/posts?_page=${value.page}&_limit=${this.limitOnPage}_embed=comments`
    });
    commit('updateArticleInfo', articleInfo.data);
  },
  async getCommentsContent ({ commit }, value) {
    const commentsInfo = await axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/posts/${value}/comments`
    });
    commit('updateCommentsInfo', commentsInfo.data);
  },
  getCommentsCount ({ commit, state }) {
    const countComments = [];
    state.articleInfo.map(async (item) => {
      countComments.push(await axios({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts/${item.id}/comments`
      }).data);
    });
    commit('updateCommentsCount', countComments);
  }

};
