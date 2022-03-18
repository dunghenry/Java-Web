import html from '../core.js';
import {connect} from '../store.js'
const Footer = ({todos, filters}) =>{
    return html`
    <footer class="footer">
				<span class="todo-count"><strong>${todos.filter(filters.active).length}</strong> item left</span>
				<!-- Remove this if you don't implement routing -->
				<ul class="filters">
					<li>
						<a class="selected" href="#">All</a>
					</li>
					<li>
						<a href="#">Active</a>
					</li>
					<li>
						<a href="#">Completed</a>
					</li>
				</ul>
				<!-- Hidden if no completed items are left ↓ -->
				<button class="clear-completed">Clear completed</button>
			</footer>
    `
}
export default connect()(Footer);