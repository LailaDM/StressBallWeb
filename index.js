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
            Insult: [],
            dateTimeNow: null
        }
    },

    methods: {
        async helperGetFactos() {
            try {
                const response = await axios.get(baseUrl3)
                this.Insult = await response.data
                this.error = null
            } catch (ex) {
                alert(ex)
            }
        },
    }
}).mount("#app")