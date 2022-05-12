const complimentUrl = "https://complimentr.com/api";
const insultUrl = "https://insult.mattbas.org/api/insult";
const stressUrl = "https://newstressballweb.azurewebsites.net/api/StressBall";

Vue.createApp({
    data() {
        return {
            compliment: null,
            dataArray: [],
            insult: null,
        }
    },
    mounted() {
        //run initial load
        this.getData()
        //reload every 5s
        this.intervalUpdateList()
    },

    computed: {
        parseDateComputed(time) {
            month = time.slice(5, 6)
            date = time.slice(8, 9)
            year = time.slice(0, 3)
            return date + "-" + month + "-" + year + time.slice(11, 18)
        }
    },

    methods: {
        async intervalUpdateList() {
            setInterval(this.getData, 5000);
        },

        async getData() {
            try {
                const response = await axios.get(stressUrl)
                this.dataArray = await response.data.slice(-1) //get last object in list with slice
                console.log(this.dataArray)
                this.error = null
            } catch (ex) {
                alert(ex)
            }
        },

        async getInsult() {
            try {
                const response = await axios.get(insultUrl)
                this.insult = await response.data
                this.error = null
            } catch (ex) {
                alert(ex)
            }
        },

        parseDate(time) {
            month = time.slice(5, 7)
            date = time.slice(8, 10)
            year = time.slice(0, 4)
            convertedDate = date + "-" + month + "-" + year
            //console.log("Converted date to:" + convertedDate)
            return convertedDate
        },

        parseTime(time) {
            convertedDate = time.slice(11, 16)
            //console.log("Converted date to:" + convertedDate)
            return convertedDate
        },

        // async ChangeColour(){
        //     if(this.Insult.speed <= 3.2) {
        //         this.StressBox.backgroundColor = rgb(17, 252, 17);
        //     } else if (this.Insult.speed <= 3.8) {
        //         this.StressBox.backgroundColor = rgb(4, 201, 4);
        //     }
        // },
    }
}).mount("#app")