import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA
} from '../../../types';

const TareaReducer = (state, action) => {
    switch(action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        case AGREGAR_TAREA:
            return {
                ...state,
                tareas: [...state.tareas, action.payload]
            }

        default:
            return state;
    }
}

export default TareaReducer;