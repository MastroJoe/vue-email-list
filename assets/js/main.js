// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

var app = new Vue(
  {
    el: '#root',
    data: {
      mails: []
    },
    methods: {
      // axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      // .then((response) => {
      //   this.indirizzo.push(response.data.response)
      // });
    }
  }
);
