<template>
  <div class="wrapper_editor">
    <div :style="{backgroundImage: 'url(' + articleImg + ')'}" class="editor__img" />
    <h3 class="editor__h3">
      {{ headerOfArticle }}
    </h3>
    <textarea
      cols="30"
      :value="textToEdit"
      rows="10"
      class="editor__textarea"
    />
    <div class="editor_task">
      <div v-if="editNow">
        <div class="icon" />
        <p>Редактировать текст</p>
      </div>
      <div v-else>
        <button>Сохранить изменения</button>
        <button>Отменить</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      articleImg: '~/static/Article.png',
      headerOfArticle: '',
      textToEdit: '',
      editNow: false
    };
  },
  async mounted () {
    const dataArticle = await axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
    });
    // console.log(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`);
    this.articleImg = '../Article.png';
    this.headerOfArticle = dataArticle.data.title;
    this.textToEdit = dataArticle.data.body;
  }
};
</script>

<style lang="scss">
.wrapper_editor{
    margin: 0 90px;
}
.editor__img{
  height: 285px;
}
</style>
