<template>
  <section>
    <h2>Bienvenido a mi currículum</h2>
    
    <section class="app__section">
      <h3>Presentación</h3>
      <ul class="no-list">
        <li  v-for="(value, key) in description" :key="key">
          <span><strong>{{key}}</strong>: </span><span>{{value}}</span>
        </li>
        <li>
          <span><strong>Edad</strong>: </span><span>{{age}}</span>
        </li>
      </ul>
    </section>
    <section class="app__section">
      <h3>Carta de Presentación</h3>
      <p>Mi profesión principal es {{job}}</p>
    </section>

    <section class="app__section">
      <h3>Idiomas que hablo</h3>
      <ul class="no-list no-list--horizontal">
        <li v-for="(lang, index) in languages" :key="index">{{lang}}</li>
      </ul>
    </section>
    <section class="app__section">
      <h3>Lenguajes de programación aprendidos</h3>
      <ul class="no-list no-list--horizontal">
        <li v-for="(codeLang, index) in codeLanguages" :key="index">{{codeLang}}</li>
      </ul>
    </section>
  </section>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
// import Presentation from '~/components/presentation.vue'

export default {
  // components: {Presentation},
  computed: {
    ...mapState('cv', ['job', 'languages', 'works', 'codeLanguages', 'description']),
    ...mapGetters('cv', ['age'])
  }
}
</script>

<style></style>
