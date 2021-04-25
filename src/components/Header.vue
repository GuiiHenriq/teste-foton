<template>
  <header class="header">
    <div class="header-item header-item_active">
      <router-link to="/" title="Go to Homepage">
        <font-awesome-icon icon="home" />
        <p class="header-item_title">Home</p>
      </router-link>
    </div>

    <div class="header-item">
      <router-link to="#" title="Go to Libraries Page">
        <font-awesome-icon icon="book" />
        <p class="header-item_title">Libraries</p>
      </router-link>
    </div>

    <div class="header-item">
      <router-link to="#" title="Go to Profile Page">
        <font-awesome-icon icon="user" />
        <p class="header-item_title">Profile</p>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped lang="scss">
/* ============= Imports ============= */
@import '@/style/variables.scss';

.header {
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background: $color-white;

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-decoration: none;
    }
    
    &_icon {
      width: 1rem;
    }

    &_title {
      color: $color-silver;
      font-size: 0.625rem;
      margin-top: 0.625rem;

      &.title-active {
        color: $color-gray;
      }
    }
  }
}


/* ============= Responsive ============= */
@media screen and (min-width: 769px) {
.header {
  position: initial;

    &-item {
      flex-direction: row;

      a {
        flex-direction: row;
      }

      &_icon {
        width: 1rem;
      }

      svg {
        color: $color-silver;
      }

      &_title {
        color: $color-silver;
        font-size: 1.125rem;
        margin: 0 0 0 0.625rem;
      }

      &_active,
      &:hover {
        svg,
        .header-item_title {
          color: $color-gray;
        }
      }
    }
  }
}
</style>