import html from '../core.js';
const TodoItem = (props) =>{
    const {todo} = props
    return html`
        <li class="${todo.completed && 'completed'}">
            <div class="view">
                <input class="toggle" type="checkbox" ${todo.completed && 'checked'} onchange="dispatch('toggle', ${todo.id})">
                <label>${todo.title}</label>
                <button class="destroy" onclick="dispatch('destroy', ${todo.id})"></button>
            </div>
            <input class="edit" value="${todo.title}">
        </li>
        `
}
export default TodoItem;