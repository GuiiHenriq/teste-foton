<template>
  <main>
    <Header v-if="isDesktop" />

    <div class="books">
      <section class="loading" v-show="showLoad">
        <div class="loader">Loading...</div>
      </section>

      <form class="wrapper-search">
        <input name="search" class="wrapper-search_input" type="text" placeholder="Search book" v-model="query">
        <input type="submit" class="wrapper-search_btn" value="Search" @click.prevent="getBooks(query)">
      </form>
    
      <ul class="books-content" v-if="dataBooks">
        <li class="books-content_book" v-for="book in dataBooks" :key="book.id">
          <router-link :to="{ name: 'Book', params: { id: book.id } }" title="Go to Book Page">
            <img class="books-content_book--thumb" v-if="book.volumeInfo.imageLinks" :src="book.volumeInfo.imageLinks.thumbnail" alt="Book Illustration">
            <img class="books-content_book--thumb" v-else src="../assets/icon-noimg.jpg" alt="Image Placeholder">
            <h2 class="books-content_book--title">{{book.volumeInfo.title}}</h2>
            <p class="books-content_book--author" v-if="book.volumeInfo.authors">by {{book.volumeInfo.authors | filterStr}}</p>
            <p class="books-content_book--author" v-else>Author Not Found</p>
          </router-link>
        </li>
      </ul>

      <div class="not-found" v-else>
        <h2>Nenhum livro encontrado...</h2>
      </div>
    </div>

    <Footer v-if="!isDesktop" />
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { api } from '@/services.js'

export default {
  name: 'Search',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showLoad: false,
      query: '',
      dataBooks: null,
    }
  },
  props: ["id"],
  computed: {
    isDesktop() {
      if (screen.width >= 769) return true
      else return false
    },
  },
  methods: {
    getBooks: async function(query) {
      this.showLoad = true;

      try {
        await api.get(`?q=${query}`).then(r =>{
          this.dataBooks = r.data.items;
        });
      } catch(error) {
        console.log(error);
      } finally {
        this.showLoad = false;
      }
    },
  },
  created() {
    if(this.id) this.getBooks(this.id);
  },
}
</script>

<style scoped lang="scss">
/* ============= Imports ============= */
@import '@/style/fonts.scss';
@import '@/style/variables.scss';
@import '@/style/loading.scss';

.books {
  padding: 0 1.25rem;
  max-height: calc(100vh - 60px);
  overflow: scroll;

  &-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    margin: 2.5rem 0;

    &_book {
      width: 6.25rem;

      &:nth-child(n+4){
        margin-top: 0.938rem;
      }

      a {
        text-decoration: none;
        color: $color-gray;
      }
      
      &--thumb {
        width: 6.25rem;
        height: 9.375rem;
        border-radius: 4px;
        box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.12);
      }

      &--title {
        max-width: 15ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 700;
      }

      &--author {
        font-weight: 900;
        font-size: 0.625rem
      }
    }
  }
}

.not-found {
  h2 {
    font-size: 1.5rem;
    margin: 1.875rem 0;
    text-align: center;
  }
}


/* ============= Responsive ============= */
@media screen and (min-width: 769px) {
  .books {
    max-height: initial;
    padding: 0;
    max-width: 1200px;
    margin: 0 auto;
    overflow: auto;

    &-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
      margin: 2.5rem 0;

      &_book {
        width: 33.33%;
        display: flex;
        justify-content: center;

        &:nth-child(n+4){
          margin-top: 1.875rem;
        }
        
        &--thumb {
          width: 9.375rem;
          height: 12.5rem;
          margin: 0 auto 0.625rem auto;
          display: block;
          box-shadow: 3px 3px 11px 3px rgba(51,51,51,0.52)
        }

        &--title {
          font-size: 1.25rem;
        }

        &--author {
          font-weight: 900;
          font-size: 1rem
        }
      }
    }
  }
}
</style>