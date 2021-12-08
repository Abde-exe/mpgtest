import axios from "axios"

export default axios.create({
  baseURL: "https://api.mpg.football/api/data",
})
