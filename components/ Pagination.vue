<template>
  <div class="pagination_wrapper">
    <button class="pagination__button" :disabled="$store.state.paginationNumber == 1">
      <span class="material-icons-outlined" @click="getBack">chevron_left</span>
    </button>
    <button
      v-for="(num, index) in arr_pag"
      :key="index"
      class="pagination__button"
      :class="num === $store.state.paginationNumber ? 'pagination__button_selected' : ''"
      @click="select(num)"
      v-text="num"
    />
    <button class="pagination__button" :disabled="$store.state.paginationNumber > 9" @click="getForward">
      <span class="material-icons-outlined">chevron_right</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    pagLength: {
      type: Number,
      default: () => 10
    }
  },
  data () {
    return {
      arr_pag: []
    };
  },
  computed: {
    globalPage () {
      return this.$store.state.paginationNumber;
    }
  },
  mounted () {
    this.select(1);
  },
  methods: {
    select (value) {
      this.$store.commit('updatePagination', value);
      this.$emit('updatePage');
      const array = new Array(this.pagLength);
      const newArr = array.map((item, index) => {
        return index + 1;
      }); // Генерируем Номер
      if (this.globalPage < 4) {
        const arr = [1, 2, 3, 4, '...', newArr.length];
        this.arr_pag = arr;
      } else if (this.globalPage >= 4 && this.globalPage < (newArr.length - 2)) {
        const arr = [1, '...', this.globalPage - 1, this.globalPage, this.globalPage + 1, '...', newArr.length];
        this.arr_pag = arr;
      } else if (this.globalPage >= (newArr.length - 2)) {
        const arr = [1, '...', newArr.length - 3, newArr.length - 2, newArr.length - 1, newArr.length];
        this.arr_pag = arr;
      }
    },
    getBack () {
      if (this.globalPage > 1) {
        this.$store.commit('updatePagination', this.globalPage - 1);
        this.$emit('updatePage');
        this.select(this.globalPage);
      }
    },
    getForward () {
      if (this.globalPage < 10) {
        this.$store.commit('updatePagination', this.globalPage + 1);
        this.$emit('updatePage');
        this.select(this.globalPage);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.pagination_wrapper{
    display: flex;
    justify-content: space-between;
    width: 15%;
}
.pagination__button{
    border-radius: 4px;
    width: 32px;
    height: 32px;
    outline: none;
    border: 1px solid #E2E2E2;
    background-color: #fff;
}
.pagination__button_selected{
    border: 2px solid #FF008A;
    color: #FF008A;
}
@media screen and(max-width: 375px){
  .pagination_wrapper{
    width: 100%;
    margin: 0 auto;
  }
}
</style>
