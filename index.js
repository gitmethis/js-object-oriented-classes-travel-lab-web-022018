
let avenues =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


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
  
  avetoInt(avenue){
    return avenues.indexOf(avenue)
  }
  
  blocksTravelled(){
    // let vertical_amount = this.beginningLocation.vertical - this.endingLocation.vertical
    // let horizontal_amount = this.avetoInt(this.endingLocation.horizontal) - this.avetoInt(this.beginningLocation.horizontal)
    // return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
  }
}