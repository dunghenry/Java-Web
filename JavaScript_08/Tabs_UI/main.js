const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const tabsActive = $('.tab-item.active');
const line = $('.tabs .line')
line.style.left = tabsActive.offsetLeft + 'px';
line.style.width = tabsActive.offsetWidth + 'px';
tabs.forEach(function (tab, index) {
    tab.onclick = function () {
        const pane = panes[index];
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
        this.classList.add('active');
        pane.classList.add('active');
    }
})