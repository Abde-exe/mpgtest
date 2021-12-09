import mpg from "../api/mpg"

const fetchOneClub = async (id) => {
  const response = await mpg.get("/championship-clubs")
  const club = response.data.championshipClubs[id]

  return club
}

export default fetchOneClub
