let state = { // el curriculum
    description: {
        'Nombre': 'Raúl Matías',
        'Apellidos': 'Contreras Morán',
        'Año de nacimiento': 1994
    },
    job: 'Programador',
    languages: ['Ingles', 'Español'],
    graduations: [
        {title: 'Sistemas Microinformáticos y Redes', ages: '2011 - 2015'},
        {title: 'Desarrollo de Aplicaciones Multiplataforma', ages: '2016 - Presente'},
    ],
    works: [
        'Fnac Bulevar Alicante'
    ],
    codeLanguages: ['Javascript', 'HTML', 'CSS', 'Vue', 'Sass', 'Ruby', 'Java']
}

const getters = {
    age(state) {
        let d = new Date()
        return  d.getFullYear() - state.description['Año de nacimiento']
    }
}

export default {namespaced: true, state, getters}