const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const app = (() => {
    const cars = ['BMW'];
    const root = $('#root');
    const button = $('#submit');
    const input = $('#input');
    return{
        add(car){
            cars.push(car);
        },
        delete(index){
            cars.splice(index, 1);
        },
        render(){
            const html = cars.map((car, index) => `
                <li>${car}<span class="delete" data-index="${index}">&times</span></li>
            `).join('');
            root.innerHTML = html;
        },
        handleDelete(event){
            const btnDelete = event.target.closest('.delete');
            if (btnDelete){
               const index = btnDelete.dataset.index;
               this.delete(index);
               this.render();
            }
        },
        init(){
            button.onclick = () => {
                if(input.value){
                    this.add(input.value);
                    this.render();
                    input.value = '';
                    input.focus();
                }
            }
            root.onclick = this.handleDelete.bind(this);
            this.render();
        }
    }
})();
app.init();