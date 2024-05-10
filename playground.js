function convertValue(responseFromOBD) {
    const arr = responseFromOBD.split(" ");
    let data = parseInt(arr[4] + arr[5], 16)
    console.log(data)
  }
  
convertValue("7E8 04 41 0C 12 34 AA AA AA")