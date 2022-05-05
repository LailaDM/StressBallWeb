const baseUrl1 = "https://complimentr.com/api";
const baseUrl2 = "https://insult.mattbas.org/api/insult";
const baseUrl3 = "https://stressballapi.azurewebsites.net/api/StressBall";

Vue.createApp({
    data() {
        return {
            Insult: null,
            Compliment: null,
        }
    },

    methods: {
        async helperGetCompliment() {
            try {
                const response = await axios.get(baseUrl1)
                this.posts = await response.data
                this.error = null
            } catch (ex) {
                alert(ex)
            }
        },
    }
}).mount("#app")