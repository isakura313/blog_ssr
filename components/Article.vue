<!-- Please remove this file from your project -->
<template>
  <div class="article">
    <div
      :style="{ backgroundImage: 'url(' + articleImg + ')' }"
      class="article__img"
    />
    <h3 class="article__header">
      {{ headerFilter }}
    </h3>
    <p class="article__content">
      {{ textFilter }}
    </p>
    <div class="edit_wrapper">
      <div class="article__comments">
        <span class="material-icons-outlined">
          chat_bubble_outline
        </span>
        <span class="article__comments_content"> {{ commentsCount }} </span>
        <div class="article__edit">
          <NuxtLink
            :to="finalLink"
          >
            <span class="material-icons-outlined">edit</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'material-icons/iconfont/material-icons.css';
export default {
  props: {
    idOfArticle: {
      type: Number,
      required: true,
      default: () => 0
    },
    articleImg: {
      type: String,
      required: false,
      default: () => '~/static/img_comp.png'
    },
    header: {
      type: String,
      required: true,
      default: () => 'Дефолтная информация'
    },
    content: {
      type: String,
      required: true,
      default: () => 'Дефолтный контент'
    },
    commentsCount: {
      type: Number,
      required: false,
      default: () => 0
    }
  },
  computed: {
    finalLink () {
      return `/editor/${this.idOfArticle}`;
    },
    headerFilter () {
      if (this.header.length > 18) {
        return this.header.split('').splice(0, 18).join('') + '...';
      } else {
        return this.header;
      }
    },
    textFilter () {
      if (this.content.length > 52) {
        return this.content.split('').splice(0, 50).join('') + '...';
      } else {
        return this.content;
      }
    }
  }
};
</script>

<style  lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;700&family=Manrope:wght@300;400;500;700&display=swap");
$logo_font: "Inter", sans-serif;
$main_font: "Manrope", sans-serif;
$main__red: #ff008a;
$background_light_grey: #e5e5e5;
.article {
  border: 1px solid #e2e2e2;
  padding: 20px 16px 12px 16px;
  position: relative;
}
.article__edit span{
  color: black;
}
.article__edit span:hover{
  color: red;
}
.article__img {
  // width: 250px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
.article__header {
  font-family: $main_font;
  font-size: 28px;
  font-weight: bold;
  line-height: 0.8;
  margin: 16px 0 8px 0;
}
.article__content {
  font-family: $main_font;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  color: rgba(60, 60, 67, 0.6);
}
.edit_wrapper {
  display: grid;
  grid-template-columns: 34px 20px 56px;
  width: 140px;
  justify-content: space-around;
}
.article__comments{
  display: flex;
  width: 100px;
  justify-content: space-around;
}
.article__comments_content{
  font-family: $main_font;
  font-size: 17px;
  line-height: 24px;
  text-align: center;
  color: rgba(60, 60, 67, 0.6);
}
@media screen and(max-width: 375px){
  .article{
    display: grid;
    flex-direction: column;
    grid-template-areas: "a  b"
                          "c b"
                          "d b";
    grid-template-columns: repeat(2, 1fr)
    // grid-template-rows: repeat(2, 1fr);
  }
  .article__header{
    grid-area: a ;
  }
  .article__content{
    grid-area: c;
  }
  .edit_wrapper{
    grid-area: d;
  }
  .article__img{
    height: 187px;
    grid-area: b;
  }
}
</style>
