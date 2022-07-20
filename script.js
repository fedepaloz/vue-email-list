console.log('Vue ok', Vue)
const root = new Vue({
    el: '#root',
    data: {
        items:5,
        mails: []
    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {

            this.mails = res.data.response;

        })
    },
    methods: {
        getRandomMails() {
            for (let i = 0; i < items; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    const randomMails = res.data.response;
                    this.mails.push(randomMails)

                })



            }
        }


    },

})

