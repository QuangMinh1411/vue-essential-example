import axios from "axios"
export default {
    data() {
        return {
            personData: null,
        }
    },
    created() {
        axios.get('https://randomuser.me/api/')
        .then(res=>this.personData=res.data.results[0])
    }
}