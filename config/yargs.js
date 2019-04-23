const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const opts = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        default: true,
        alias: 'c'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'Actualiza un estado de una tarea', opts)
    .command('listar', 'Listar tareas por hacer')
    .command('borrar', 'Borra la tarea indicada', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}