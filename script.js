console.log('Vue ok', Vue)
const root = new Vue({
    el: '#root',
    data: {
        
        mails: ''
    },
    created() {
        {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    const randomMails = res.data.response;
                    this.mails = randomMails

                })



            }
        }

    },
    methods: {


    },

})

