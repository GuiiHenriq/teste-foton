<template>
  <div id="app">
    <transition mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
/* ============= Imports ============= */
@import '@/style/reset.scss';
@import '@/style/fonts.scss';
@import '@/style/variables.scss';


/* ============= Styled ============= */
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $font-family;
  color: $color-gray;
  background: $base-bg;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

button,
input,
select,
textarea {
  font: inherit;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: none;
}
</style>
