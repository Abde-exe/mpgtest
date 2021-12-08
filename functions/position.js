const position = (pos) => {
  switch (pos) {
    case 10:
      return "Gardien"
      break
    case 20:
      return "Défenseur central"
      break
    case 21:
      return "Défenseur latéral"
      break
    case 30:
      return "Milieu défensif"
      break
    case 31:
      return "Milieu offensif"
      break
    case 40:
      return "Attaquant"
      break
  }
}
export default position
