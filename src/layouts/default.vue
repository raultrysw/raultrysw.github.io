<template>
  <div class="app main-start flex-column">
    <section class="container">
      <header class="app__header main-justify cross-center">
        <h1 class="app__title">Raultrysw | Pagina personal</h1>
        <ul class="app__menu ed-menu l-horizontal site-menu">
          <li><nuxt-link to="/">Página principal</nuxt-link></li>
          <li><nuxt-link to="/blog">Blog</nuxt-link></li>
          <li><nuxt-link to="/projects">Proyectos</nuxt-link></li>
        </ul>
      </header>
    </section>
    <main class="app__main-section" is="nuxt" />
  </div>
</template>

<style lang="scss">
@import '../assets/ed-grid.min.css';
* {
  margin: 0;
  padding: 0;
}

.app {
  height: 100vh;
  width: 100vw;
  &__header {
    border-bottom: 1px solid;
  }
  &__section {
    padding: 0em 1em;
    &:not(:last-child) {
      padding-bottom: .5em;
      margin-bottom: 1em;
      border-bottom: 1px solid;
    }
  }
  &__main-section {
    // margin: 0 auto;
    // width: 80vw;
    // border-width: 0px 1px;
    // border-style: solid;
  }
}

.no-list {
  list-style-type: none;
  &--horizontal {
    display: flex;
    justify-content: flex-start;
    & > li {
      padding: .5em;
      margin: .25em;
    }
  }
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.site-menu {
  width: auto !important;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
