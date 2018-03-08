<template>
  <section>
    <h1>Bienvenido a mi currículum</h1>
    <p>Mi profesión principal es {{job}}</p>
    <section>
      <h2>Idiomas que hablo</h2>
      <ul>
        <li v-for="(lang, index) in languages" :key="index">{{lang}}</li>
      </ul>
    </section>
    <section>
      <h2>Lenguajes de programación aprendidos</h2>
      <ul>
        <li v-for="(codeLang, index) in codeLanguages" :key="index">{{codeLang}}</li>
      </ul>
    </section>
  </section>
</template>

<script>
import {mapState} from 'vuex'
// import Presentation from '~/components/presentation.vue'

export default {
  // components: {Presentation},
  computed: {
    ...mapState('cv', ['job', 'languages', 'works', 'codeLanguages'])
  }
}
</script>

<style></style>
