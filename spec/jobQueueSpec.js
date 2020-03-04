const createJobQueue = require('../index')
const assert = require('assert')

describe('Requirements', () => {
  let goodJob, failJob, lastJob, jobRan, queue

  beforeEach(() => {      
    jobRan = false
    queue = createJobQueue()

    goodJob = () => new Promise((resolve) => resolve((lastJob = goodJob) && (jobRan = true) && 'good'))
    failJob = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        lastJob = failJob
        reject(jobRan = true)  
      }, 1)      
    })
  })

  describe('addJob', () => {
    it('should not trigger execution of a job', (done) => {
      queue.addJob(goodJob)

      assert.strictEqual(jobRan, false, 'job() was called')

      done()
    })

    it('should add a job to the end of the queue', (done) => {
      queue.addJob(goodJob)

      assert.equal(queue.jobs.length, 1, 'queue length incorrect')

      done()
    })

    it('should return a promise that resolves to the value returned by a job', (done) => {
      const jobPromise = queue.addJob(goodJob)

      assert.ok(typeof jobPromise === 'object', 'object not returned')
      assert.ok(typeof jobPromise.then === 'function', 'promise not returned')

      jobPromise.then(result => {
        assert.strictEqual(result, 'good', 'unexpected value from promise')
        done()
      })

      queue.processAllJobs()
    })

    it('should reject the return promised if job throws an error', (done) => {
      queue.addJob(failJob)
        .then(() => assert.fail('jobPromise succeeded'))
        .catch(() => done())

      queue.processAllJobs()        
    })
  })

  describe('cancelJob', () => {
    it('should reject the promise returned by addJob', (done) => {
      queue.addJob(goodJob)
        .then(() => assert.fail('jobPromise succeeded'))
        .catch(() => done())

      queue.cancelJob(goodJob)  
    })

    it('should remove a job from the queue', (done) => {
      queue.addJob(goodJob).catch(error => undefined)

      queue.cancelJob(goodJob)  

      assert.equal(queue.jobs.length, 0, 'queue length incorrect')
      done()
    })
  })

  describe('processAllJobs', () => {
    it('should return a promise that resolves to the number of successful jobs', (done) => {
      queue.addJob(failJob)
      queue.addJob(goodJob)

      const jobsPromise = queue.processAllJobs()

      assert.ok(typeof jobsPromise === 'object', 'object not returned')
      assert.ok(typeof jobsPromise.then === 'function', 'promise not returned')

      jobsPromise.then(jobsSucceeded => {
        assert.equal(jobsSucceeded, 1, 'successful job count incorrect')
        done()
      })      
    })

    it('should process jobs in order', (done) => {
      queue.addJob(failJob)
      queue.addJob(goodJob)

      queue.processAllJobs().then(() => {
        assert.strictEqual(lastJob, goodJob, 'jobs ran out of order')
        done()
      })      
    })
  })
})