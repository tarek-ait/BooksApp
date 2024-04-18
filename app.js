const app = Vue.createApp({
    // data or function for reacting to events we want
    // if we have more complex template is by creating it inside the html app , outputting dynamic data
    // creating a data function 
    data(){
        return {
            url:'https://tarek-ait.github.io/ageCalculator/',
            showBooks: false,
            books :[
                { title: 'the final empire', author:'katia yami' ,image:'./assets/1.jpg', isFav: true },
                { title:'rich dad poor dad', author:'robert kyosaki',image:'./assets/2.jpg', isFav: false },
                { title:'name of the wind', author:'tarek ait ahmed',image:'./assets/3.jpg', isFav: true }
            ]
        }
    },
    methods : {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleIsFav(book){
            book.isFav= !book.isFav
        }
    },
    computed:{ // a computed property depends on other data 
        filteredBooks(){
            return this.books.filter((book) => book.isFav 
            )
        }
    }
})

// conditional rendering 
app.mount('#app') // take our app and mount it in the dom where we are having a div with an id of an app(html document)