//task1
console.log('task1')
function reverseNumber(num) {
let isMin = num < 0
if(isMin){
    num = -num
}
let rev = 0
while(num > 0){
rev = rev*10 + num%10
num = Math.floor(num/10)
}
rev = isMin ? -rev : rev
return rev
}
console.log(reverseNumber(12345))
console.log(reverseNumber(-56789))

//task2
console.log('task2')
let arr= [2,5,8]
function forEach(arr, func){
    for(let i=0;i<arr.length;i++){
        func(arr[i])
    }
}

function func1(el){
    console.log(el)
}
forEach(arr, func1)

//task3
console.log('task3')
function map(arr, func){
    let ma = []
    forEach(arr, el => {
        ma.push(func(el))
    })
    return ma
}
let mapVal = map([2, 5, 8], el => {
  return el + 3
})
console.log(mapVal)
let mapVal1 = map([1,2,3,4,5], (el) => {
    return el * 2
})
console.log(mapVal1)

//task4
console.log('task4')
function filter(arr, func) {
 let fil = []
 forEach(arr, el => {
    if(func(el)){
        fil.push(el)
     }
 })
 return fil
}

let filVal = filter([2,5,1,3,8,6], (el) => {
    return el > 3
})
console.log(filVal)
let filVal1 = filter([1,4,6,7,8,10], (el) => {
    return el % 2 === 0
})
console.log(filVal1)

//task5
console.log('task5')
function getAdultAppleLovers(data) {
    let r_Age = 18
    let ftd = filter(data, el => el.age > r_Age && el.favoriteFruit === 'apple')
    let ans = map(ftd, el => el.name)
    return ans
    }
    const data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 17,
    "eyeColor": "green",
    "name": "Weiss",
    "favoriteFruit": "banana"
  }
]
let aL = getAdultAppleLovers(data)
console.log(aL)

//task6
console.log('task6')
const Obj = {
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
}

function getKeys(obj) {
   const keys = []
   for(let i in obj){
    keys.push(i)
   }
   return keys
}
const ans = getKeys(Obj)
console.log(ans)

//task7
console.log('task7')
function getValues(obj) {
    const val = []
    for(let i in obj){
     val.push(obj[i])
    }
    return val
}
const values = getValues(Obj)
console.log(values)

