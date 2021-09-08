<template>
  <header class="header">
    <div class="header__logo">
      <span class="header__logo_text"> Logo </span>
    </div>
    <div class="search">
      <input type="text" class="search__item" placeholder="Поиск" />
    </div>
    <div class="header__posts">
      <div class="posts">
        <img src="~/static/icon.svg" class="posts__icon" alt="иконка" />
        <p class="posts__content">Посты</p>
      </div>
    </div>
  </header>
</template>

<script>
</script>

<style lang="scss">
.header {
  display: flex;
  margin: 24px 90px 0px 90px;
  justify-content: space-between;
  align-items: center;
}
.header__logo_text {
  font-family: Inter;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
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
  background-image: url("~/static/search.svg");
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
</style>
