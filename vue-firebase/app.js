const app = Vue.createApp({
    // template: '<h2>VUE Template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0
        }
    },
    methods: {
        // changeTitle(_title) {
        //     this.title = _title;
        // },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, data) {
            console.log('Handled', e.type, e);
            if (data) {
                console.log(data);
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
});

app.mount('#root');