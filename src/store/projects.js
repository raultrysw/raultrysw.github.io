let stateDescriptions = [
    'No empezado',
    'A punto de terminar',
    'Terminado'
]

const state = {
    projects: [
        {
            link: 'https://github.com/raultrysw/YLT',
            title: 'Web de adifia',
            state: stateDescriptions[1],
            description: [
                'Es un sitio web que hice para la asociación Adifia, esta hecho con vuejs, javascript, HTML y CSS',
                'Utilizé una plantilla llamada nuxt, y en el backend use el transpilador llamado babel'
            ]
        },
        {
            link: 'https://github.com/raultrysw/adifia',
            title: 'YLT',
            state: stateDescriptions[1],
            description: [
                'Es una aplicación que empezé queriendo hacer tres años atras',
                'En aquel entonces yo no sabía programar y tuve que aprender a programar por mi cuenta',
                'Empezé a quererla hacer con javascript crudo, pero al final, aparte de este al final acabe utilizando vuejs también',
                'Lo hize junto a una plantilla que ellos mismos dieron que se llama webpack'
            ]
        }
    ]
}

export default {namespaced: true, state}