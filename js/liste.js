const stressUrl = "https://newstressballweb.azurewebsites.net/api/StressBall";

Vue.createApp({
    data() {
        return {
            dataArray: [],
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
            month = time.slice(5, 6)
            date = time.slice(8, 9)
            year = time.slice(0, 3)
            return date + "-" + month + "-" + year + time.slice(11, 18)
        }
    },

    methods: {
        async intervalUpdateList() {
            setInterval(this.GetAllData, 5000);
        },
        async GetAllData() {
            try {
                const response = await axios.get(stressUrl)
                this.dataArray = await response.data
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
    }
}).mount("#app")