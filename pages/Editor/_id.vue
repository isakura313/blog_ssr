<template>
  <div class="wrapper_editor">
    <Loader v-show="$store.state.showLoader" />

    <div
      :style="{ backgroundImage: 'url(' + articleImg + ')' }"
      class="editor__img"
    />
    <h3 class="editor__h3">
      {{ headerOfArticle }}
    </h3>

    <div v-if="editNow" class="editor_task">
      <pre class="editor__not_edit" v-html="textToEdit" />
      <div class="wrap_edit">
        <span class="material-icons-outlined editor_task__pen" @click="toggleEdit">edit</span>
        <span class="editor_task__content">Редактировать текст</span>
      </div>
    </div>
    <div v-else class="editor_task">
      <client-only>
        <VueEditor
          v-model="textToEdit"
        />
      </client-only>
      <button class="button_edit__btn button_edit__btn__fullfill" @click="toggleEdit();saveData()">
        Сохранить изменения
      </button>
      <button class="button_edit__btn button_edit__btn__opacity" @click="toggleEdit();resetData()">
        Отменить
      </button>
    </div>
    <h3 class="comments__header">
      Комментарии
    </h3>
    <Comments
      v-for="comments in commmentsData"
      :key="comments.id"
      :user-nick-name="comments.name"
      :user-comment="comments.body"
    />
  </div>
</template>
<script>
import Comments from '../../components/Comments.vue';

export default {
  components: {
    Comments
  },
  data () {
    return {
      articleImg: '~/static/Article.png',
      headerOfArticle: '',
      textToEdit: '',
      editNow: true,
      commmentsData: []
    };
  },
  async mounted () {
    this.$store.commit('updateShowLoader', true);
    await this.$store.dispatch('getArticleContent', this.$route.params.id);
    await this.$store.dispatch('getCommentsContent', this.$route.params.id);
    this.articleImg = '../Article.png';
    this.headerOfArticle = this.$store.state.articleEditContent.title;
    this.textToEdit = this.$store.state.articleEditContent.body;
    this.commmentsData = this.$store.state.commentsInfo;
    this.$store.commit('updateShowLoader', false);
  },
  methods: {
    toggleEdit () {
      this.editNow = !this.editNow;
    },
    saveData () {
      this.$store.dispatch('updateAricleContent', this.textToEdit);
    },
    resetData () {
      this.textToEdit = this.$store.state.articleEditContent.body;
    }
  }
};
</script>

<style lang="scss">
.wrapper_editor {
  margin: 0 90px;
}
.editor__img {
  height: 285px;
  background-size: cover;
}
.editor__h3{
  font-family: Manrope;
  font-size: 34px;
  line-height: 46px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  border-bottom: 1px solid #D1D1D6;
  padding-bottom: 30px;
}
  .editor__not_edit{
  font-family: Manrope;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: rgba(60,60,60, 0.6);
  }
  .wrap_edit{
    display: flex;
    align-items: center;
    width: 196px;
    justify-content: space-between;
  }
  .editor_task__pen{
    color: #FF008A;
  }
  .editor_task__pen:hover{
    cursor: pointer;
    color: blue;
  }
  .editor_task__content{
    color: #FF008A;
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 12px;
  }
.button_edit__btn{
  width: 310px;
  border-radius: 5px;
  height: 50px;
  margin-top: 30px;
  margin-right: 30px;
  font-family: Manrope;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  outline: none;
  border: none;
}
.button_edit__btn:hover{
  background-color: darken(#FF008A, 30%);
}
.button_edit__btn__fullfill{
  background-color: #FF008A;
  box-shadow: 0px 0px 10px rgba(255, 0, 138, 0.1);
  color: white;
}
.button_edit__btn__opacity{
  color: red;
  background-color: #fff;
  border: 1px solid #FF008A;
}
.comments__header{
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
}

</style>
