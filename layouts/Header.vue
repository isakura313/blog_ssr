<template>
  <header class="header">
    <div class="header__logo">
      <nuxt-link to="/">
      <span class="header__logo_text"> Logo </span>
      </nuxt-link>
    </div>
    <div class="back_mobile" v-if="$store.state.editNow">
         <nuxt-link to="/">
    <div class="back_mobile__wrap">
      <span class="material-icons-outlined back_mobile__wrap_red">chevron_left</span>
      <span class="mobile__back back_mobile__wrap_red"> Назад </span>
    </div>
         </nuxt-link>
    <h3 class="header_mobile__h3">Пост</h3>
    </div>
    <div class="search" v-if="!$store.state.editNow">
      <input
        type="text"
        class="search__item"
        placeholder="Поиск"
        v-model="search"
        @input="searchNow"
      />
    </div>
    <div class="header__posts">
      <div class="posts">
        <img src="~/static/blog_icon.svg" class="posts__icon" alt="иконка" />
        <p class="posts__content">Посты</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    search: {
      get () {
        return this.$store.state.searchNow;
      },
      set (value) {
        this.$store.commit('updateSearch', value);
      }
    }
  },
  methods: {
    searchNow () {
      this.$store.dispatch('getSearchConent');
    }
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  margin: 24px 90px 0px 90px;
  justify-content: space-between;
  align-items: center;
}
.header_mobile__h3{
  display:none;
}
.header__logo_text {
  font-family: Inter;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
}
.header__logo a{
  text-decoration: none;
  color: black;
}
.header__logo a:hover{
  cursor:pointer;
}
.search {
  width: 310px;
  position: relative;
  display: flex;
  background-color: rgba(60, 60, 67, 0.1);
  height: 50px;
  border-radius: 10px;
}
.search__item {
  font-size: 17px;
  width: 90%;
  margin-left: 10px;
  outline: none;
  border: none;
  background-color: rgba(60, 60, 67, 0);
  font-family: Manrope;
}
.search::before {
  content: "";
  width: 30px;
  height: 100%;
  background-image: url("~/static/search_icon.svg");
  background-size: contain;
  background-position: center center;
  z-index: 2;
  background-repeat: no-repeat;
  margin-left: 8px;
}

.posts {
  display: flex;
  width: 86px;
  justify-content: space-around;
}
.posts__icon {
  width: 22px;
}
.posts__content {
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 12px;
  color: #ff008a;
}
@media screen and(max-width: 375px){
  .header {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    margin: 0 16px;
  }
  .header__logo_text{
    display: none;
  }
  .header_mobile__h3{
    display: block;
  }
  .header__posts{
    display: none;
  }
  .back_mobile{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    align-items: center;

  }
  .back_mobile__wrap{
     display: flex;
    align-items: center;
  }
  .back_mobile a{
    text-decoration: none;
  }
  .back_mobile__wrap_red{
    color: #ff008a;
  }
  .back_mobile__wrap .mobile__back{
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  }
}
</style>
