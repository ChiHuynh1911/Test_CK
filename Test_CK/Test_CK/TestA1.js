function allLongestStrings(inputArray){
    var max_len = 0
    const output =[]
    for (const element of inputArray) {
      if (element.length > max_len){
        max_len = element.length
      }
    }
    for (const element of inputArray) {
      if (element.length === max_len){
        output.push(element)
      }
    }
    return output
}