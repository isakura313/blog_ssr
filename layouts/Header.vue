<template>
  <header class="header">
    <div class="header__logo">
      <span class="header__logo_text"> Logo </span>
    </div>
    <div class="search">
      <input
        type="text"
        class="search__item"
        placeholder="What are you looking for?"
      >
      <button type="submit" class="searchButton">
        <img src="~/static/search.svg" alt="">
      </button>
    </div>
    <div class="header__posts">
      <div class="posts" />
      <p class="posts">
        Посты
      </p>
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
  // font-family: $logo_font;
  font-weight: bold;
}
.search {
  width: 310px;
  position: relative;
  display: flex;
  background-color: "#3c3c4372FF";
}

.searchTerm {
  width: 100%;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.searchTerm:focus {
  color: #00b4cc;
}

/*Resize the wrap to see the search bar change!*/
.wrap {
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
