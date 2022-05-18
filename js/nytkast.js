const complimentUrl = "https://complimentr.com/api";
const insultUrl = "https://insult.mattbas.org/api/insult";
const stressUrl = "https://newstressballweb.azurewebsites.net/api/StressBall";

Vue.createApp({
    data() {
        return {
            compliment: null,
            dataArray: [],
            message: null,
            oldID: 0,
        }
    },
    mounted() {
        //run initial load
        this.getData()
        //reload every 5s
        this.intervalUpdate()

    },

    updated() {
        this.changeColour()
        this.messageHandler()
    },

    methods: {
        async intervalUpdate() {
            setInterval(this.getData, 5000);      
        },

        async getData() {
            try {
                const response = await axios.get(stressUrl)
                this.dataArray = await response.data.slice(-1) //get last object in list with slice
                //console.log("data retrieved")
                this.error = null
            } catch (ex) {
                alert(ex)
            }
        },

        async getInsult() {
            try {
                const response = await axios.get(insultUrl)
                this.message = await response.data
                this.error = null
            } catch (ex) {
                alert(ex)
            }
        },

        async getCompliment() {
            try {
                const response = await axios.get(complimentUrl)
                string = await response.data.compliment
                this.message = string.charAt(0).toUpperCase() + string.slice(1)
                this.error = null
            } catch (ex) {
                alert(ex)
            }
        },

        async messageHandler() {
            let data = 0
            this.dataArray.forEach(element => {
                data = element
            });
            if(this.oldID != data.id) {
                this.oldID = data.id
                if(data.speed < 4) {
                    //console.log("message handler requested insult")
                    this.getInsult()
                } else {
                    //console.log("message handler requested compliment")
                    this.getCompliment()
                }
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

        async changeColour(){
            let data = 0
            this.dataArray.forEach(element => {
                data = element
            });
            console.log(data.speed)
            if(data.speed < 4.0) {
                this.$refs.StressBox.style.backgroundColor = "rgb(17, 252, 17)";
            } else if (data.speed <= 4.6) {
                this.$refs.StressBox.style.backgroundColor = "rgb(4, 201, 4)";
            } else if (data.speed <= 5.2) {
                this.$refs.StressBox.style.backgroundColor = "rgb(2, 171, 2)";
            } else if (data.speed <= 5.8) {
                this.$refs.StressBox.style.backgroundColor = "rgb(3, 142, 3)";
            } else if (data.speed <= 6.4) {
                this.$refs.StressBox.style.backgroundColor = "rgb(255, 255, 0)";
            } else if (data.speed <= 7.0) {
                this.$refs.StressBox.style.backgroundColor = "rgb(242, 242, 4)";
            } else if (data.speed <= 7.6) {
                this.$refs.StressBox.style.backgroundColor = "rgb(218, 218, 22)";
            } else if (data.speed <= 8.2) {
                this.$refs.StressBox.style.backgroundColor = "rgb(203, 203, 33)";
            } else if (data.speed <= 8.8) {
                this.$refs.StressBox.style.backgroundColor = "rgb(255, 0, 0)";
            } else if (data.speed <= 9.4) {
                this.$refs.StressBox.style.backgroundColor = "rgb(230, 4, 4, 0.995)";
            } else if (data.speed <= 10.0) {
                this.$refs.StressBox.style.backgroundColor = "rgb(201, 5, 5)";
            } else if (data.speed > 10.6) {
                this.$refs.StressBox.style.backgroundColor = "rgb(167, 3, 3)";
            }else{
                console.log("Colour box error")
            }
        },
    }
}).mount("#app")