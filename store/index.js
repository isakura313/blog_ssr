import axios from 'axios';

export const state = () => ({
  paginationNumber: 1,
  searchNow: '', // если у нас происходит поиск, то что мы сейчас ищем
  showLoader: false,
  articleInfo: [], // массив с информацией о статьях
  articleEditContent: '',
  commentsCount: [],
  commentsInfo: [], // отдельный массив
  editNow: false
});

export const mutations = {
  updateShowLoader (state, value) {
    state.showLoader = value;
  },
  updateEditNow (state, value) {
    state.editNow = value;
  },
  updateArticleEdit (state, value) {
    state.articleEditContent = value;
  },
  updatePagination (state, value) {
    state.paginationNumber = value;
  },
  updateLimitNow (state, value) {
    state.limitNow = value;
  },
  updateSearch (state, value) {
    state.searchNow = value;
  },
  updateArticleInfo (state, value) {
    state.articleInfo = value;
  },
  updateCommentsInfo (state, value) {
    state.commentsInfo = value;
  },
  updateCommentsCount (state, value) {
    state.commentsCount.push(value);
  }
};

export const actions = {
  async getArticlesContent ({ commit, state }) {
    const articleInfo = await axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/posts?_page=${state.paginationNumber}&_limit=9_embed=comments`
    });
    commit('updateArticleInfo', articleInfo.data);
  },
  async getArticleContent ({ commit }, value) {
    const articleEdit = await axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/posts/${value}`
    });
    commit('updateArticleEdit', articleEdit.data);
  },
  async getCommentsContent ({ commit }, value) {
    const commentsInfo = await axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/posts/${value}/comments`
    });
    commit('updateCommentsInfo', commentsInfo.data);
  },
  getCommentsCount ({ commit }, value) {
    value.map(async (item) => {
      await this.dispatch('getIdCount', item.id);
    });
  },
  async getIdCount ({ commit }, id) {
    const tempData = await axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    });
    commit('updateCommentsCount', tempData.data.length);
  },
  async getSearchConent ({ commit, state }) {
    const searchArticles = await axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/posts?=${state.searchNow}`
    });
    commit('updateArticleInfo', searchArticles.data);
  },
  async updateAricleContent (value) {
    await axios({
      method: 'PATCH',
      url: 'https://jsonplaceholder.typicode.com/posts/{value.id}',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        body: value.content // здесь мы записываем информацию о нашей отредактированной статье
      }
    });
  }
};
