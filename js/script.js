const { createApp } = Vue;


createApp({
  data(){
    return{
      risultato: '',
      min:'10',
      max:'100',
      items:'10',
      apiUrl:'https://flynn.boolean.careers/exercises/api/array/integers'

    }
  },
  methods:{

    getApi(){
      this.risultato = 'Loading...'
      axios.get(this.apiUrl + `?min=${this.min}&max=${this.max}&items=${this.items}`)
      .then( (risposta) => {
        // della risposta a me ineressa data 
        console.log(risposta.data);
        this.risultato = risposta.data.response.join(', ')
      })  
      .catch( (errore) => {
        console.log(errore);
      })
    }


  },
  mounted(){




  }
}).mount('#app')