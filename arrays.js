var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
  ]
  
function addElementToBeginningOfArray (){
  chocolateBars.unshift("elementA")
}

function destructivelyAddElementToBeginningOfArray (){
  chocolateBars.shift('snickers')
}