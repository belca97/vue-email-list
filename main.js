const vue = new Vue({
    el : '#app',
    data : {
        listaEmail : [],

    },

    mounted () {
        for (let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.listaEmail.push(email.data.response);
                console.log(email)
            })
        }
    }
})
        