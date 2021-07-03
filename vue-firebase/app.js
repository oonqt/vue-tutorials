const app = Vue.createApp({
    // template: '<h2>VUE Template</h2>'
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(_title) {
            this.title = _title;
        }
    }
});

app.mount('#root');