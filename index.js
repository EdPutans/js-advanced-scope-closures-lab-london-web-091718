function produceDrivingRange(allowedDistance){
    const finalResult = function result(firstStreet, secondStreet){
    let requestedDistance = parseInt(secondStreet) - parseInt(firstStreet)

    if (requestedDistance > allowedDistance)
    {return `${requestedDistance - allowedDistance} blocks out of range` }

    else if(requestedDistance < allowedDistance)
    {return `within range by ${requestedDistance}`}
  }
  return finalResult
}


function produceTipCalculator(percentage){
  const tipCalculator = function tipCalc(fare){
    return fare * percentage
  }
  return tipCalculator
}


function createDriver() {
  let driverId = 0
   return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
