import storage from './utils/storage.js';
const initialState = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    }
}

const actions = {
    add({todos}, title){
        todos.push({id: Math.floor(Math.random() * 10000),title, completed: false});
        storage.set(todos)
    },
    toggle({todos}, id){
        const todo = todos.find(todo => todo.id === id);
        todo.completed =! todo.completed;
        storage.set(todos);
    },
    toggleAll({todos}, completed){
        todos.forEach(todo => todo.completed = !todo.completed);
        storage.set(todos);
    },
    destroy({todos}, id){
        let todosNew = todos.filter(todo => todo.id !== id)
        storage.set(todosNew);
        location.reload();
    }
}

export default function reducer(state = initialState, action, args) {
    // console.log(action);
    actions[action] && actions[action](state, ...args);
    return state;
}