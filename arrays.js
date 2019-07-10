var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
  ]
  
function addElementToBeginningOfArray (){
  chocolateBars.unshift('mars')
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray (){
  chocolateBars.shift('snickers')
  return chocolateBars
}