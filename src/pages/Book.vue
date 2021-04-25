<template>
  <main>
    <div class="book">
      <section class="loading" v-show="showLoad">
        <div class="loader">Loading...</div>
      </section>

      <ul class="books-content" v-if="dataBook">
        <li class="books-content_book">
          <section class="mask">
            <router-link to="/search" title="Back to Search Page">
              <img src="../assets/icon-back.svg" alt="Icon Back">
            </router-link>

            <img class="books-content_book--thumb" v-if="dataBook.volumeInfo.imageLinks" :src="dataBook.volumeInfo.imageLinks.thumbnail" alt="Book Illustration">
            <img class="books-content_book--thumb" v-else src="../assets/icon-noimg.jpg" alt="Image Placeholder">
          </section>
          <aside class="wrapper">
            <h2 class="books-content_book--title">{{dataBook.volumeInfo.title}}</h2>
            <p class="books-content_book--author">{{dataBook.volumeInfo.authors | filterStr}}</p>
            <p class="books-content_book--desc">{{dataBook.volumeInfo.description | filterDesc}}</p>
          </aside>
        </li>
      </ul>
    </div>

    <footer class="footer">
      <div class="footer-item">
        <router-link to="#" title="Go to Reading Page">
          <font-awesome-icon icon="book-reader" />
          <p class="footer-item_title">Read</p>
        </router-link>
      </div>

      <div class="footer-item">
        <router-link to="#" title="Go to Listening Page">
          <font-awesome-icon icon="headphones" />
          <p class="footer-item_title">Listen</p>
        </router-link>
      </div>

      <div class="footer-item">
        <router-link to="#" title="Go to Sharing Page">
          <font-awesome-icon icon="share-square" />
          <p class="footer-item_title">Share</p>
        </router-link>
      </div>
    </footer>
  </main>
</template>

<script>
import { api } from '@/services.js'

export default {
  name: 'Search',
  data() {
    return {
      showLoad: false,
      dataBook: null,
    }
  },
  props: ["id"],
  methods: {
    getBook: async function() {
      this.showLoad = true;

      try {
        api.get(`/${this.id}`).then(r =>{
          this.dataBook = r.data;
        });
      } catch(error) {
        console.log(error);
      } finally {
        this.showLoad = false;
      }
    }
  },
  created() {
    if(this.id) return this.getBook(this.id);
    else return this.$router.push('/');
  },
}
</script>

<style scoped lang="scss">
/* ============= Imports ============= */
@import '@/style/variables.scss';
@import '@/style/loading.scss';

main {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  min-height: 90vh;
}

.book {
  max-height: calc(100vh - 60px);
  overflow: scroll;

  .books-content {
    padding-bottom: 3.125rem;
    
    &_book {
      &--thumb {
        width: 6.25rem;
        height: 9.375rem;
        border-radius: 4px;
      }

      &--title {
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 0.438rem;
      }

      &--author {
        font-size: 1rem;
        color: $color-pink;
        margin-bottom: 0.625rem;
      }

      &--desc {
        font-size: 0.875rem;
        line-height: 1.563rem;
        color: #313131;
        margin-bottom: 50px;
      }

      .wrapper {
        margin: 71px 0 0 0;
        padding: 0 1.25rem;
      }

      .mask {
        background: url('../assets/mask-book-details.png') no-repeat;
        width: 100%;
        height: 282px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        position: relative;
        background-size: cover;

        a {
          position: absolute;
          display: block;
          left: 30px;
          top: 30%;
        }

        .books-content_book--thumb {
          display: block;
          position: absolute;
          bottom: -40px;
          width: 150px;
          height: 230px;
        }
      }
    }
  }
}

.footer {
  display: flex;
  position: absolute;
  justify-content: space-around;
  align-items: center;
  width: calc(100% - 2.5rem);
  height: 60px;
  background: $color-white;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.12);
  bottom: 0;

  .footer-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      display: flex;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      align-content: center;
    }

    &_title {
      color: $color-gray;
      font-size: 0.875rem;
      font-weight: 700;
      margin-left: 0.625rem;
    }

    svg {
      color: $color-silver;
    }

    &:hover {
      svg {
        color: $color-gray;
      }
    }
  }
}


/* ============= Responsive ============= */
@media screen and (min-width: 769px) {
  main {
    align-items: initial;
  }

  .book {
    max-height: calc(100vh - 60px);
    overflow: auto;

    .books-content {
      padding-bottom: 3.125rem;

      .wrapper {
        max-height: initial;
        padding: 0;
        max-width: 1200px;
        margin: 0 auto;
        overflow: auto;
      }
    
      &_book {
        .mask {
          background: url('../assets/mask-book-details-desk.png') no-repeat;
          background-size: contain;
        }

        &--title {
          max-width: 40%;
          font-size: 1.875rem;
        }

        &--author {
          font-size: 1.25rem;
        }

        &--desc {
          font-size: 1rem;
          max-width: 80%;
        }
      }
    }
  }

  .footer {
    margin-left: 1.5rem;
  }
}
</style>