var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
  ]
  
function addElementToBeginningOfArray (){
  chocolateBars.unshift('foo', 1)
}

function destructivelyAddElementToBeginningOfArray (){
  chocolateBars.shift('foo', 1)
}