const createJobQueue = () => {
  return {
    jobs: [],
    addJob(fn) {
      const job = { fn: fn }

      job.promise = new Promise((resolve,reject) => {
        job.resolve = resolve
        job.reject = reject
      })

      this.jobs.push(job)

      return job.promise
    },
    cancelJob(fn) {
    	this.jobs = this.jobs.filter(job => {
    		if(job.fn === fn) {
          job.reject()
          return false
    		} 
    		return true
    	})
    },

    processAllJobs() {
    	let count = 0;

    	return new Promise((resolve, reject) => {
        this.jobs.reduce((p, job) => {
          // previous value (acc) is the promise you need to wait on
          p.finally(() => {
            job.fn().then(val => {
              count++
              job.resolve(val)
            })
            .catch(err => {
              job.reject(err)
            })
          }).catch(() => {})

          return job.promise

      	}, Promise.resolve())
    		.finally(() => {  

    			resolve(count)

    		}).catch(() => {})
      })
    }
  }
}
module.exports = createJobQueue
/*
const createJobQueue = () => {
  return {
    jobs: [],
​
    addJob(fn) {
      const job = { fn }
​
      job.promise = new Promise((resolve, reject) => {
        job.resolve = resolve
        job.reject = reject
      })
​
      this.jobs.push(job)
​
      return job.promise
    },
​
    cancelJob(fn) {
      const index = this.jobs.findIndex(job => job.fn === fn)
​
      this.jobs[index].reject()
​
      this.jobs.splice(index, 1)
    },
​
    processAllJobs() {
      let successes = 0
​
      return this.jobs.reduce((chain, job) => {
        return chain.then(results => {
          job.fn().then(job.resolve).catch(job.reject)
​
          successes++
​
          return job.promise
        }).catch(err => {
          return Promise.resolve()
        })
      }, Promise.resolve()).then(() => successes ? successes - 1 : 0)
    }
  }
}
​
module.exports = createJobQueue

*/




/*
{
        fn: fn,
        resolve: val => this.resolver(val),
        reject: val => this.rejecter(val),
        promise: new Promise((resolve,reject) => {
          this.resolver = val => {
            resolve(val)
          }
          this.rejecter = val =>{
            reject(val)
          } 
        }),
        then: (onFulfilled, onRejected) => {this.promise.then(onFulfilled, onRejected)}
      }
*/



 // function Deffered() {
      //   this.resolve = null
      //   this.reject = null
      //   this.promise = new Promise((resolve, reject) => {
      //     this.resolve = resolve;
      //     this.reject = reject;
      //   }).bind(this);
      //   Object.freeze(this);
      // }

      // class Deferred {
      //   constructor() {
      //     this.canceled = false
      //     this.promise = new Promise((resolve, reject) => {
      //       this.resolver = (value) => {
      //         if(!this.canceled) resolve(value)
      //       }
      //       this.rejecter = (value) => {
      //         if(!this.canceled) reject(value)
      //       }
      //     })
      //   }

      //   resolve(value) {
      //     this.resolver(value)
      //   }

      //   reject(value) {
      //     this.rejecter(value)
      //   }

      //   then(onFulfilled, onRejected) {
      //     this.promise.then(onFulfilled, onRejected)
      //   }

      //   cancel() {
      //     this.conceled = true
      //   }
      // }
/*
q = [],
go = Promise.defer(),
p = [],
addJob: function(job){
	this.q.push(job)
	this.p.push(new Promise((resolve, reject) => {
		//job is a function that returns a promise
		return this.go.then(() => {
			job()
		})
	})) 
	return p
}
*/
/*
const applyAsync = function(acc, val) {
	return acc.then(val)
}
// accept any number of functions as arguments,
// will return a new function that accepts an 
// initial value to be passed through the composition pipline
const composeAsync = function(...funcs) {
	return function(x) {
		funcs.reduce(applyAsync, Promise.resolve(x))
	}
}

const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
*/