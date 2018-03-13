<template>
  <div>
        <h2>Listado de proyectos hechos por mi</h2>
        <section class="app__section projects__section">
            <h3>Listado de proyectos</h3>
            <div class="projects__list grid-container grid-1234">
                <figure class="projects__item project" v-for="(project, index) in projects" :key="index">
                    <h4 class="project__title"><a target="_blank" :href="project.link">{{project.title}}</a></h4>
                    <figcaption class="project__frame main-start flex-column">
                        <ul class="no-list">
                            <li v-for="(text, index) in project.description" :key="index">{{text}}</li>
                        </ul>
                        <p class="project__state">Estado del proyecto <b>{{project.state}}</b></p>
                    </figcaption>
                </figure>
            </div>
        </section>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'



export default {
  computed: {
        ...mapState('projects', ['projects'])
  }
}
</script>

<style lang="scss">
.projects {
    &__list {
        margin: .25em;
        padding: 1em;
    }
}
.project {
    border: 1px solid;
    position: relative;
    &__title {
        border-bottom: 1px solid;
        text-align: center;
        font-size: 1.2em;
        margin-bottom: .25em;
    }
}
</style>
