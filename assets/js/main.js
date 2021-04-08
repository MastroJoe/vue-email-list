// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue(
  {
    el: '#root',
    data: {
      emails: []
    },
    methods: {
      // funzione per generare mail random con API
      generaEmails: function () {
        // ciclo e genero 10 volte
        for (var i = 1; i <= 10; i++) {
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) => {
            this.emails.push(response.data.response)
          });
        }
      }
    }
  }
);
