const books = Vue.createApp({
  data(){
      return {
          showBooks: true,
          btitle: 'The Ledger',
          bauthor: 'Nickaella Notra',
          year: 2003
      }
  },
  methods: {
      toggleShowBooks(){
          this.showBooks = !this.showBooks
      }
  }
});

books.mount('#books')