
class Driver{
  constructor(name, day){
    this.name = name
    this.startDate = new Date(startDate)
  }
  
 yearsExperienceFromBeginningof(year){
    let endDate = new Date(year, 1, 1)
    let totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
    return parseInt(totalYears)
 }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  
  blocksTravelled(){
    
  }
}