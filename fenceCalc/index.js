const x = 10  // fill in total length of fence here 

// variables that do the simple math for the project

const picketQtByLength = (x * 12)/5.75
const picketCost = picketQtByLength * 2.05 

const postQtByLength = x / 8
const postCost = postQtByLength * 12.96

const nailQtByLength = (picketQtByLength * 9)/1000
const nailCost = nailQtByLength * 45.8

const concreteQtByLength = postQtByLength * 3
const concreteCost = concreteQtByLength * 4.48

const twoByFour = postQtByLength * 2.5
const twoByFourCost = twoByFour * 7.39


const total = picketCost + postCost + nailCost + concreteCost + twoByFourCost 

//console logs to copy paste from terinal ========================================

console.log(`The project calls for - ${Math.round(picketQtByLength)} pickets`)
console.log(`This is the cost for the pickets - ${picketCost}`)

console.log(`The project calls for - ${Math.round(postQtByLength)} Posts`)
console.log(`This is the cost for the posts - ${postCost}`)

console.log(`The project calls for - ${nailQtByLength} boxes of nails`)
console.log(`This is the cost for the nails - ${nailCost}`)

console.log(`The project calls for - ${concreteQtByLength} bags of concrete`)
console.log(`This is the cost for the concrete - ${concreteCost}`)

console.log(`The project calls for - ${twoByFour} 2x4's `)
console.log(`This is the cost for the 2 x 4 - ${twoByFourCost}`)

console.log(`This is the total ${total}`)

//next steps would be to print to webpage for styling and ease of use