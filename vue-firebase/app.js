const app = Vue.createApp({
    // template: '<h2>VUE Template</h2>'
    data() {
        return {
            url: 'https://www.roblox.com',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true },
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true }
            ]
        }
    },
    methods: {
        // changeTitle(_title) {
        //     this.title = _title;
        // },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        toggleFav(item) {
            item.isFav = !item.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter(x => x.isFav);
        }
    }
});

app.mount('#root');