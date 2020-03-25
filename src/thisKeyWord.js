'use strict'
// global 

// console.log(this === global)
this.table = 'Global Table'

// console.log(table) // error not defined

console.log('this.table:', this.table) // Global Table

this.garage = {
  table: 'garage table',
  cleanTable() {
    console.log(`cleaning ${this.table}`)
  }
}

console.log(this.garage.table) // garage table
this.garage.cleanTable() // cleaning garage table

let johnsRoom = {
  table: 'johns table',
  cleanTable() {
    console.log(`cleaning ${this.table}`)
  }
}

console.log('johnsRoom:', johnsRoom.table) // johns table
johnsRoom.cleanTable() // cleaning johns table


const cleanTableFunc = function(item) {
  this.chair = 'outer function chair'

  const innerFunction = function() {
    console.log(`inner Function ..... cleaning ${this.table} using some ${item}`)
    console.log(`inner function chair:${this.chair}`)
  }

  let that = this
  const innerFunction2 = function() {
    console.log(`inner Function2 ..... cleaning ${that.table} using some ${item}`)
    console.log(`inner function2 chair:${that.chair}`)
  }

  const innerFunction3 = function() {
    this.chair = 'innerFunction chair'
    console.log(`inner Function3 ..... cleaning ${this.table} using some ${item}`)
    console.log(`inner function3 chair:${this.chair}`)
  }

  function innerFunction4() {
    console.log(`inner Function4 ..... cleaning ${this.table} using some ${item}`)
    console.log(`inner function4 chair:${this.chair}`)
  }

  console.log(`cleaning ${this.table} using some ${item}`)
  console.log('outter function chair:', this.chair)
  console.log('before innerFunction')
  console.log('\n')

  console.log('innerFunction()')
  innerFunction() // inner Function ..... cleaning undefined ....
  console.log('\n')

  console.log('innerFunction2()..... let this = that')
  innerFunction2()
  console.log('\n')

  console.log('innerFunction3.call(this, item)')
  innerFunction3.call(this, item)
  console.log('\n')

  console.log('innerFunction3.bind(this)(item)')
  innerFunction3.bind(this)(item)
  console.log('\n')

  console.log('innerFunction4()')
  // innerFunction4()
  console.log('\n')

  console.log('innerFunction4.call(this)')
  innerFunction4.call(this)
  console.log('\n')

  console.log('after innerFunction4 call')
  console.log(`cleaning ${this.table} using some ${item}`)
  console.log('outter function chair:', this.chair)
  console.log('\n')
}

console.log("**********************  cleanTableFunc('soap')")
// here it doesnt know what this is because its a function, not an object
// cleanTableFunc('soap') // cleaning undefined using some soap

console.log("**********************  cleanTableFunc.call(this,'soap')")
cleanTableFunc.call(this, 'soap');  // cleaning Global Table

console.log("**********************  cleanTableFunc.call(johnsRoom,'soap')")
cleanTableFunc.call(johnsRoom, 'soap') // cleaning johns table using some soap



















