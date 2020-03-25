// https://medium.com/@paabrown/the-hardest-thirty-lines-of-code-ive-ever-written-implementing-the-promise-class-in-js-ae7a36d77ed6

class Promise {
  constructor(initFunc) {
    this.initFunc = initFunc;
    this.isLastInChain = true;

    // this.callback = () => {}
    setTimeout(() => {
      if(this.isLastInChain) {
        initFn(() => {})
      }
    },0)

    // resolverFunc(data)
    // initFn(resolverFunc, rejectFunc)
  }

  then(nextFn) {
    this.isLastInChain = false;

    return new Promise((afterNextFn, reject) => {
      this.initFunc(data => {

        let answer = nextFn(data);

        if(answer.constructor === Promise) {
          answer.then(newData => afterNextFn(newData))
        } else {
          afterNextFn(answer)
        }
      })
    })
  }
}



function getDataPromise() {
  return new Promise((resolve, reject) => {
    // do something async
    getDataFromAPI((err, data) => {
      if(err) { return reject(err) }
      resolve(data)
    })
  })
}


getDataPromise().then(data => {
  // do something with data
})