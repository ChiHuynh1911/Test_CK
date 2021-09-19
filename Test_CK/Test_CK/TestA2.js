function alternatingSums(arr){
    const output =[]
    let weight_team1 = 0
    let weight_team2 = 0
    for (let i = 0; i < arr.length; i++) {
      if (i%2 === 0 ){
        weight_team1 = arr[i] + weight_team1
      }
      else {
        weight_team2 = arr[i] + weight_team2
      }
    }
    output.push(weight_team1,weight_team2)
    return output
}