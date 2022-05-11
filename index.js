const baseUrl1 = "https://complimentr.com/api";
const baseUrl2 = "https://insult.mattbas.org/api/insult";
const baseUrl3 = "https://newstressballweb.azurewebsites.net/api/StressBall";

Vue.createApp({
    data() {
        return {
            Insult: null,
            Compliment: null,
            id: null,
            speed: null,
            Insults: [],
            dateTimeNow: null
        }
    },
    mounted() {
        //run initial load
        this.helperGetFactos()
        //reload every 5s
        this.intervalUpdateList()
        },

    methods: {
        async intervalUpdateList() {
            setInterval(this.helperGetFactos,5000);
        },

        async helperGetFactos() {
            try {
                const response = await axios.get(baseUrl3)
                this.Insults = await response.data
                this.error = null
            } catch (ex) {
                alert(ex)
            }
        },
    }
}).mount("#app")