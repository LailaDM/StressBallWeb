const baseUrl1 = "https://complimentr.com/api";
const baseUrl2 = "https://insult.mattbas.org/api/insult";
const baseUrl3 = "https://newstressballweb.azurewebsites.net/api/StressBall";

Vue.createApp({
    data() {
        return {
            data: null,
            Insult2: null,
            Compliment: null,
            id: null,
            speed: null,
            dataArray: [],
            dateTimeNow: null,
            Insult: [],
            dateTimeNow: null,
            StressBox: null,
        }
    },
    mounted() {
        //run initial load
        this.GetAllData()
        //reload every 5s
        this.intervalUpdateList()
        },

    computed: {
        parseDateComputed(time) {
            month = time.slice(5,6)
            date = time.slice(8,9)
            year = time.slice(0,3)
            return date + "-" + month + "-" + year + time.slice(11,18)
        }
    },

    methods: {
        async intervalUpdateList() {
            setInterval(this.GetAllData,5000);
        },

        async GetAllData() {
            try {
                const response = await axios.get(baseUrl3)
                this.dataArray = await response.data
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
        parseDate(time) {
            month = time.slice(5,7)
            date = time.slice(8,10)
            year = time.slice(0,4)
            convertedDate = date + "-" + month + "-" + year
            console.log("Converted date to:" + convertedDate)
            return convertedDate
        },
        parseTime(time) {
            convertedDate = time.slice(11,16)
            console.log("Converted date to:" + convertedDate)
            return convertedDate
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
                this.data = this.data[this.Insult.length - 1]
            } catch (ex) {
                alert(ex)
            }
            

            //console.log(this.Insult[this.Insult.length - 1])
          }
    }
}).mount("#app")