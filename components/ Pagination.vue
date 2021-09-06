<template>
  <div class="pagination_wrapper">
    <button
      v-for="(num, index) in arr_pag"
      :key="index"
      class="pagination__button"
      :class="num == selected ? 'pagination__button_selected' : ''"
      @click="select(num)"
      v-text="num"
    />
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
      selected: 1,
      arr_pag: []
    }
  },
  mounted () {
    this.select()
  },
  //   computed: {
  //     paginationNow () {
  //       const array = new Array(this.pagLength)
  //       const newArr = array.map((item, index) => {
  //         return index + 1
  //       })

  //       if (this.selected < 4) {
  //         const arr = [1, 2, 3, 4, '...', newArr.length]
  //         return arr
  //       } else if (this.selected >= 4) {
  //         const arr = [1, '...', this.selected - 1, this.selected, this.selected + 1, '...', newArr.length]
  //         return arr
  //       } else {
  //         alert(' do nothing')
  //         return null
  //       }
  //     //   const arr = [1, '...', newArr.length / 2, '...', newArr.length]
  //     //   return arr
  //     }
  //   },
  methods: {
    select (value) {
      if (!value) {
        this.selected = 1
      } else {
        this.selected = value
      }
      const array = new Array(this.pagLength)
      const newArr = array.map((item, index) => {
        return index + 1
      })
      if (this.selected < 4) {
        const arr = [1, 2, 3, 4, '...', newArr.length]
        this.arr_pag = arr
      } else if (this.selected >= 4) {
        const arr = [1, '...', this.selected - 1, this.selected, this.selected + 1, '...', newArr.length]
        this.arr_pag = arr
      }
    }
  }
}
</script>

<style scoped lang="scss">
.pagination_wrapper{
    display: flex;
    justify-content: space-between;
    width: 23%;
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
</style>
