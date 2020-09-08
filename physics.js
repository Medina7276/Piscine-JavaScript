function getAcceleration(obj){
    let a = obj.f/obj.m
    let b = obj.Δv/obj.Δt
    let c = (2*obj.d)/(obj.t*obj.t)
    let e = 'impossible'

    if(typeof(obj.f) == 'number'&&typeof(obj.m) == 'number'){
        return obj.f/obj.m
    }else if(typeof(obj.Δv) == 'number'&&typeof(obj.Δt) == 'number'){
        return b
    }else if(typeof(obj.d) == 'number'&&typeof(obj.t) == 'number'){
        return c
    }else{
        return e
    }
}
// console.log(getAcceleration({}))
// console.log(getAcceleration({ d: 10, f: 2, Δv: 100 }))
// console.log(getAcceleration({ f: 10, Δv: 100 }))
// console.log(getAcceleration({ f: 10, m: 5 }))
// console.log(getAcceleration({ f: 10, m: 5, Δv: 100, Δt: 50 }))
// console.log(getAcceleration({ Δv: 100, Δt: 50 }))
// console.log(getAcceleration({ f: 10, Δv: 100, Δt: 50 }))
// console.log(getAcceleration({ f: 10, m: 5, Δt: 100 }))
// console.log(getAcceleration({ d: 10, t: 2, Δv: 100 }))
// console.log(getAcceleration({ d: 100, t: 2, f: 100 }))