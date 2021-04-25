<template>
  <form class="wrapper-search">
    <input name="search" class="wrapper-search_input" type="text" placeholder="Search book" v-model="query">
    <input type="submit" class="wrapper-search_btn" value="Search" @click.prevent="searchBooks">
  </form>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      query: '',
    }
  },
  methods: {
    searchBooks() {
      if(window.location.pathname == "/search") return;
      this.$router.push({ name: "Search", params: { id: this.query } });
    }
  }
}
</script>

<style lang="scss">
.wrapper-search {
  max-width: 600px;
  margin-top: 3.125rem;
  position: relative;

  &_input {
    width: 100%;
    padding: 1.25rem;
    border: none;
    background: #FDFCFC;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
    border-radius: 10px;
    padding: 0.938rem 0 0.938rem 3.125rem;
  }

  &_btn {
    width: 16px;
    height: 16px;
    background: url("../assets/icon-search.svg") no-repeat center center;
    text-indent: -150px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0.938rem;
    left: 0.938rem;
    box-shadow: none;
  }
}


/* ============= Responsive ============= */
@media screen and (min-width: 769px) {
  .wrapper-search {
    margin: 3.125rem auto 0 auto;
  }
}
</style>
