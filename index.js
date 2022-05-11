const baseUrl1 = "https://complimentr.com/api";
const baseUrl2 = "https://insult.mattbas.org/api/insult";
const baseUrl3 = "https://newstressballweb.azurewebsites.net/api/StressBall";

Vue.createApp({
    data() {
        return {
            Insult: null,
            Insult2: null,
            Compliment: null,
            id: null,
            speed: null,
            Insult: [],
            dateTimeNow: null,
            StressBox: null,
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
                this.Insult = await response.data
                this.error = null
            } catch (ex) {
                alert(ex)
            }
        },
        async helperGetFactos2() {
            try {
                const response = await axios.get(baseUrl2)
                this.Insult2 = await response.data
                this.error = null
            } catch (ex) {
                alert(ex)
            }
        },

        async ChangeColour(){
            if(this.Insult.speed <= 3.2) {
                this.StressBox.backgroundColor = rgb(17, 252, 17);
            } else if (this.Insult.speed <= 3.8) {
                this.StressBox.backgroundColor = rgb(4, 201, 4);
            }
        },
        async showMyDiv(){
            try{
                const response = await axios.get(baseUrl2)
                this.Insult = await response.data
                this.error = null
                this.Insult = this.Insult[this.Insult.length - 1]
            } catch (ex) {
                alert(ex)
            }
            

            //console.log(this.Insult[this.Insult.length - 1])
          }
        
    }
}).mount("#app")