// const hashCode = str =>
//   (
//     [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
//   ).toString(36)

//   const random = Math.random()
//   const hash = hashCode(`21103f27{"random":${random}}`)

//   console.log(hash)
  function blockChain(data,prev = { index: 0, hash: '0' }){
      let obj  = {
          data,
          prev,
      }
      obj.index = obj.prev.index + 1
      obj.hash = hashCode(obj.index+prev.hash+JSON.stringify(data))
      obj.chain = (data) => blockChain(data,obj)
    return obj
  }
//   const first = blockChain({ a: 1 })
//   console.log(first.index) //           -> 1
//   console.log(first.data) //            -> { a: 1 }
//   console.log(first.prev) //            -> { index: 0, hash: "0" }
//   console.log(first.hash) //            -> '1103f27'
//   console.log(hashCode('10{"a":1}')) // -> '1103f27'