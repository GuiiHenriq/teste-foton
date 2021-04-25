<template>
  <main>
    <Header v-if="isDesktop" />

    <div class="home">
    
      <Search />

      <h1 class="home-title">
        Hi, <strong>{{texts.userName}}</strong> 👋
      </h1>

      <div class="wrapper-desktop" v-if="isDesktop">
        <section class="home-discover">
          <div class="asset"></div>
          <div class="home-discover_info content-box">
            <h2 class="home-discover_info--title title-box">
              {{texts.discover.title}}
            </h2>

            <router-link to="#" title="Go to Listening Page" class="home-discover_info--cta cta-box">
              {{texts.discover.cta}}
            </router-link>
          </div>

          <div class="home-discover_box">
            <VueSlickCarousel v-bind="settingsDesktop">
              <div class="home-discover_box--item book_1">
                <router-link :to="{ name: 'Book', params: { id: 'dsz5AwAAQBAJ' } }" title="Go to Book Page">
                  <div class="asset"></div>
                  <section>
                    <h2 class="home-discover_box--item_title">
                      {{books.firstBook.name}}
                    </h2>

                    <p class="home-discover_box--item_sub">
                      {{books.firstBook.author}}
                    </p>

                    <div class="home-discover_box--item_desc">
                      <img src="../assets/icon-statistic.svg" alt="Statistic Icon">
                      <p><strong>{{books.firstBook.author}}+</strong> Read Now</p>
                    </div>
                  </section>

                  <aside>
                    <div class="asset-path"><img src="../assets/asset-path.svg" alt=""></div>
                    <div class="asset-rectangle"><img src="../assets/asset-rectangle.svg" alt=""></div>
                    <div class="asset-oval"><img src="../assets/asset-oval.svg" alt=""></div>
                    <img class="home-discover_box--item_thumb" src="../assets/icon-livro.png" alt="Book Illustration">
                  </aside>
                </router-link>
              </div>

              <div class="home-discover_box--item book_2">
                <router-link :to="{ name: 'Book', params: { id: 'rB2ZDQAAQBAJ' } }" title="Go to Book Page">
                  <div class="asset"></div>
                  <section>
                    <h2 class="home-discover_box--item_title">
                      {{books.secondBook.name}}
                    </h2>

                    <p class="home-discover_box--item_sub">
                      {{books.secondBook.author}}
                    </p>

                    <div class="home-discover_box--item_desc">
                      <img src="../assets/icon-statistic.svg" alt="Statistic Icon">
                      <p><strong>{{books.secondBook.number}}+</strong> Read Now</p>
                    </div>
                  </section>

                  <aside>
                    <div class="asset-path"><img src="../assets/asset-path.svg" alt=""></div>
                    <div class="asset-rectangle"><img src="../assets/asset-rectangle.svg" alt=""></div>
                    <div class="asset-oval"><img src="../assets/asset-oval.svg" alt=""></div>
                    <img class="home-discover_box--item_thumb" src="../assets/icon-livro2.png" alt="Book Illustration">
                  </aside>
                </router-link>
              </div>
            </VueSlickCarousel>
          </div>
        </section>

        <section class="home-current">
          <div class="home-current_info content-box">
            <h2 class="home-current_info--title title-box">
              {{texts.current.title}}
            </h2>

            <router-link to="#" title="Go to Listening Page" class="home-current_info--cta cta-box">
              {{texts.current.cta}}
            </router-link>
          </div>
        
          <div class="home-current_box">
            <router-link :to="{ name: 'Book', params: { id: 'eLRhDgAAQBAJ' } }" title="Go to Book Page">
              <div class="bg"></div>
              <aside>
                <img src="../assets/icon-livro3.png" alt="Book Illustration">
              </aside>

              <section>
                <div class="home-current_box--item_head">
                  <div class="asset-rectangle"><img src="../assets/asset-rectangle.svg" alt=""></div>
                  <div class="asset-oval"><img src="../assets/asset-oval.svg" alt=""></div>

                  <h2 class="home-current_box--item_title">
                    {{books.thirdBook.name}}
                  </h2>

                  <p class="home-current_box--item_sub">
                      by {{books.thirdBook.author}}
                  </p>
                </div>
                
                <div class="home-current_box--item_desc">
                  <img src="../assets/icon-chapter.svg" alt="Icon Statistic">
                  <p>Chapter <strong>{{books.thirdBook.chapterCurrent}}</strong> From {{books.thirdBook.chapterTotal}}</p>
                </div>
              </section>
            </router-link>
          </div>
        </section>
      </div>

      <div v-else>
        <section class="home-discover">
          <div class="asset"></div>
          <div class="home-discover_info content-box">
            <h2 class="home-discover_info--title title-box">
              {{texts.discover.title}}
            </h2>

            <router-link to="#" title="Go to Listening Page" class="home-discover_info--cta cta-box">
              {{texts.discover.cta}}
            </router-link>
          </div>

          <div class="home-discover_box">
            <VueSlickCarousel v-bind="settingsMobile">
              <div class="home-discover_box--item book_1">
                <router-link :to="{ name: 'Book', params: { id: 'dsz5AwAAQBAJ' } }" title="Go to Book Page">
                  <div class="asset"></div>
                  <section>
                    <h2 class="home-discover_box--item_title">
                      {{books.firstBook.name}}
                    </h2>

                    <p class="home-discover_box--item_sub">
                      {{books.firstBook.author}}
                    </p>

                    <div class="home-discover_box--item_desc">
                      <img src="../assets/icon-statistic.svg" alt="Statistic Icon">
                      <p><strong>{{books.firstBook.number}}+</strong> Read Now</p>
                    </div>
                  </section>

                  <aside>
                    <div class="asset-path"><img src="../assets/asset-path.svg" alt=""></div>
                    <div class="asset-rectangle"><img src="../assets/asset-rectangle.svg" alt=""></div>
                    <div class="asset-oval"><img src="../assets/asset-oval.svg" alt=""></div>
                    <img class="home-discover_box--item_thumb" src="../assets/icon-livro.png" alt="Book Illustration">
                  </aside>
                </router-link>
              </div>

              <div class="home-discover_box--item book_2">
                <router-link :to="{ name: 'Book', params: { id: 'rB2ZDQAAQBAJ' } }" title="Go to Book Page">
                  <div class="asset"></div>
                  <section>
                    <h2 class="home-discover_box--item_title">
                      {{books.secondBook.name}}
                    </h2>

                    <p class="home-discover_box--item_sub">
                      {{books.secondBook.author}}
                    </p>

                    <div class="home-discover_box--item_desc">
                      <img src="../assets/icon-statistic.svg" alt="Statistic Icon">
                      <p><strong>{{books.secondBook.number}}+</strong> Read Now</p>
                    </div>
                  </section>

                  <aside>
                    <div class="asset-path"><img src="../assets/asset-path.svg" alt=""></div>
                    <div class="asset-rectangle"><img src="../assets/asset-rectangle.svg" alt=""></div>
                    <div class="asset-oval"><img src="../assets/asset-oval.svg" alt=""></div>
                    <img class="home-discover_box--item_thumb" src="../assets/icon-livro3.png" alt="Book Illustration">
                  </aside>
                </router-link>
              </div>
            </VueSlickCarousel>
          </div>
        </section>

        <section class="home-current">
          <div class="home-current_info content-box">
            <h2 class="home-current_info--title title-box">
              {{texts.current.title}}
            </h2>

            <router-link to="#" title="Go to Listening Page" class="home-current_info--cta cta-box">
              {{texts.current.cta}}
            </router-link>
          </div>

          <div class="home-current_box">
            <router-link :to="{ name: 'Book', params: { id: 'eLRhDgAAQBAJ' } }" title="Go to Book Page">
              <div class="bg"></div>
              <aside>
                <img src="../assets/icon-livro3.png" alt="Book Illustration">
              </aside>

              <section>
                <div class="home-current_box--item_head">
                  <div class="asset-rectangle"><img src="../assets/asset-rectangle.svg" alt=""></div>
                  <div class="asset-oval"><img src="../assets/asset-oval.svg" alt=""></div>

                  <h2 class="home-current_box--item_title">
                    {{books.thirdBook.name}}
                  </h2>

                  <p class="home-current_box--item_sub">
                      by {{books.thirdBook.author}}
                  </p>
                </div>
                
                <div class="home-current_box--item_desc">
                  <img src="../assets/icon-chapter.svg" alt="Icon Statistic">
                  <p>Chapter <strong>{{books.thirdBook.chapterCurrent}}</strong> From {{books.thirdBook.chapterTotal}}</p>
                </div>
              </section>
            </router-link>
          </div>
        </section>
      </div>

      <section class="home-review">
        <div class="home-review_info content-box">
          <h2 class="home-review_info--title title-box">
            {{texts.review.title}}
          </h2>

          <router-link to="#" title="Go to Listening Page" class="home-review_info--cta cta-box">
            {{texts.review.cta}}
          </router-link>
        </div>

        <div class="home-review_box">
          <img v-if="isDesktop" src="../assets/bg-librarie.jpg" alt="Book Illustration">
          <img v-else src="../assets/review-1.jpg" alt="Book Illustration">
        </div>
      </section>
    </div>

    <Footer v-if="!isDesktop" />
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Search from '@/components/Search.vue'
import Footer from '@/components/Footer.vue'

// Import Slick
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: 'Home',
  components: {
    VueSlickCarousel,
    Header,
    Search,
    Footer,
  },
  computed: {
    isDesktop() {
      if (screen.width >= 769) return true
      else return false
    },
  },
  data() {
    return {
      settingsMobile: {
        "dots": true,
        "arrows": false,
        "dotsClass": "slick-dots custom-dot-class",
        "edgeFriction": 0.35,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1
      },
      settingsDesktop: {
        "dots": true,
        "dotsClass": "slick-dots custom-dot-class",
        "edgeFriction": 0.35,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1
      },
      texts: {
        userName: 'Mehmed Al Fatih',
        discover: {
          title: 'Discover new book',
          cta: 'More'
        },
        current: {
          title: 'Currently Reading',
          cta: 'All'
        },
        review: {
          title: 'Review of The Days',
          cta: 'All Video'
        }
      },
      books: {
        firstBook: {
          name: 'Hooked',
          author: 'Nir Eyal',
          number: '120',
        },
        secondBook: {
          name: 'The One Thing',
          author: 'Gary Keller',
          number: '90',
        },
        thirdBook: {
          name: 'Originals',
          author: 'Adam Grant',
          chapterCurrent: '2',
          chapterTotal: '9',
        }
      }
    }
  },
}
</script>

<style lang="scss">
/* ============= Imports ============= */
@import '@/style/variables.scss';

.slick-prev:before,
.slick-next:before {
  color: $color-pink !important;
}

.home {
  padding: 0 1.25rem;
  max-height: calc(100vh - 60px);
  overflow: scroll;

  &-title {
    margin: 1.875rem 0;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 28.64px;

    strong {
      color: $color-pink;
      font-weight: 600;
    }
  }

  &-discover {
    margin-bottom: 2.813rem;
    position: relative;

    .asset {
      background: url('../assets/asset-3.svg') no-repeat;
      width: 69px;
      height: 69px;
      position: absolute;
      right: 0;
      top: 20px;
    }

    aside {
      position: relative;

      & > div {
        position: absolute;
      }

      .asset-path {
        left: -0.75rem;
        top: -0.625rem;
      }

      .asset-rectangle {
        left: -2.313rem;
        bottom: 1.563rem;
      }

      .asset-oval {
        left: -2.313rem;
        top: 0;
      }

      .home-discover_box--item_thumb {
        width: 72px;
      }
    }
    
    &_box {
      width: 95%;

      &--item {
        display: flex;
        justify-content: space-between;
        width: 100%;
        border-radius: 5px;
        color: $color-white;
        padding: 15px 20px;
        position: relative;

        &.book_1 {
          background: #00173D;
        }

        &.book_2 {
          background: #451475;
        }

        a {
          text-decoration: none;
          color: inherit;
          display: flex;
          justify-content: space-between;
          width: 100%;
        }

        .asset {
          background: url('../assets/asset-2.svg') no-repeat;
          width: 127px;
          height: 90px;
          position: absolute;
          bottom: 0;
          left: 0;
        }

        section {
          z-index: 1;
        }

        &_title {
          font-family: $font-secondary;
          font-size: 1.688rem;
          margin-bottom: 10px;
        }

        &_sub {
          font-style: italic;
          font-size: 0.875rem;
        }

        &_desc {
          font-size: 0.625rem;
          display: flex;
          align-items: center;
          font-weight: 400;
          margin-top: 2.5rem;

          p {
            margin-left: 5px;

            strong {
              font-weight: 700;
            }
          }
        }
      }
    }
  }

  &-current {
    position: relative;
    margin-bottom: 1.875rem;

    &_box {
      display: flex;
      align-items: center;
      position: relative;

      a {
        text-decoration: none;
        color: inherit;
        display: flex;
        width: 100%;
        align-items: center;
      }

      &--item {
        &_head {
          & > div {
            position: absolute;
          }

          .asset-rectangle {
            right: 0;
            bottom: 1.375rem;
          }

          .asset-oval {
            right: 20%;
            top: 0.75rem;
          }
        }

        &_title {
          font-family: $font-secondary;
          font-size: 1.688rem;
          margin-bottom: 10px;
        }

        &_sub {
          font-size: 0.875rem;
          color: #74776D;
        }

        &_desc {
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          font-weight: 400;
          margin-top: 1.25rem;
        
          p {
            strong {
              font-weight: 700;
              color: $color-pink;
            }
          }
        }
      }
    }

    .bg {
      background: $color-green;
      position: absolute;
      width: 100%;
      position: absolute;
      height: 100px;
      left: -1.25rem;
      bottom: 1.125rem;
    }

    aside,
    section {
      z-index: 1;
    }

    section {
      margin-left: 0.5rem;
    }
  }

  &-review {
    &_box {
      img {
        width: 100%;
      }
    }
  }

  .content-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.938rem;
  }

  .title-box {
    font-size: 1.125rem;
    letter-spacing: 0.5px;
    line-height: 21.09px;
    font-weight: 500;
  }

  .cta-box {
    color: $color-blue;
    font-family: $font-ProText;
    font-size: 0.875rem;
    text-decoration: none;
    z-index: 1;
  }
}


/* ============= Responsive ============= */
@media screen and (min-width: 769px) and (max-width: 1200px) {
  .home {
    padding: 0 3.125rem !important;
  }
}

@media screen and (min-width: 769px) {
  .home {
    max-height: initial;
    padding: 0;
    max-width: 1200px;
    margin: 0 auto;
    overflow: auto;

    &-title {
      font-size: 1.75rem;
      margin: 3.125rem 0 rem 0;
      text-align: center;
    }

    .title-box {
      font-size: 1.5rem;
      font-weight: 500;
    }

    .cta-box {
      font-size: 1rem;
    }

    .wrapper-desktop {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    &-discover {
      width: 45%;

      &_box {
        margin-left: 1.563rem;
      }
    }
    
    &-current {
      width: 45%;

      &_box {
        position: relative;
      }
    }

    &-review {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin: 3.125rem 0;

      &_info {
        align-items: center;
        justify-content: space-around;
        align-content: initial;
        width: 100%;
      }

      &_box {
        img {
          width: 100%;
          height: 340px;
          object-fit: cover;
        }
      }
    }
  }
}
</style>