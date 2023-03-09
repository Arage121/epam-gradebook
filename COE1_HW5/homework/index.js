//task1
const zero = 0,one = 1, n_one = -1, two = 2, three = 3, n_three = -3, four = 4, five = 5, seven = 7, eight = 8, nine = 9
console.log('task-1')
function isEquals(a, b){
    return a === b
}
console.log(isEquals(three,three))

//task2
console.log('task-2')
function isBigger(a, b){
    return a > b
}
console.log(isBigger(five, n_one))

//task3
console.log('task-3')
function storeNames(...names){
    return names
}
const arr = storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy')
console.log(arr)

//task4
console.log('task-4')
function getDifference(a, b){
    if(a < b){
        [a , b] = [b , a]
    }
    return a-b
}
console.log(getDifference(five, three))
console.log(getDifference(five, eight))

//task5
console.log('task-5')
function negativeCount(arr){
   let count = 0
   for(let i=0;i<arr.length;i++){
    if(arr[i] < 0){
        count++
    }
   }
   return count
}

console.log(negativeCount([four, three, two, nine]))
console.log(negativeCount([zero, n_three, five, seven]))

//task6
console.log('task-6')
function letterCount(a, b){
    let count = 0
for(let i=0;i<a.length;i++){
    if(a[i] === b) {
        count++
    }
}
 return count
}
console.log(letterCount('Marry', 'r'))
console.log(letterCount('Barny', 'y'))
console.log(letterCount('', 'z'))

//task7
console.log('task-7')
function countPoints(ba_points){
   let points = 0
   for(let i=0;i<ba_points.length;i++){
    const [x, y] = ba_points[i].split(':').map(Number)
    if(x > y){
        points += three
    }else if(x === y){
        points += one
    }
   }
   return points
}
console.log(countPoints(['100:90', '110:98', '100:100', '95:46', '54:90', '99:44', '90:90', '111:100']))