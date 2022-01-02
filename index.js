function myEach(collection, callback) {
    let arrayInput = []
    if(typeof collection === "object") {
        arrayInput = Object.values(collection)
    } else {
        arrayInput = collection
    }
    for (const element of arrayInput) {
        callback(element)
    }
    return collection
};


function myMap (collection, callback) {
    let arrayInput = []
    if(typeof collection === "object") {
        arrayInput = Object.values(collection)
    } else {
        arrayInput = collection
    }
    let newArray = []
    for (const element of arrayInput) {
        newArray.push(callback(element))
    }
    return newArray
};

function myReduce(collection, callback, accumulator) {
    let arrayInput = []
    if(typeof collection === "object") {
        arrayInput = Object.values(collection)
    } else {
        arrayInput = collection
    }
    if(typeof accumulator === "number") {
        for(const element of arrayInput){
            accumulator = callback(accumulator, element, arrayInput)
        }
    } else {
        accumulator = parseInt(arrayInput.slice(0,1))
        let newArray = arrayInput.slice(1)
        for(let element of newArray) {
            element = parseInt(element)
            accumulator = callback(accumulator, element, arrayInput)
        }
    }
    return accumulator 
};

function myFind(collection, callback) {
    let arrayInput = []
    if(typeof collection === "object") {
        arrayInput = Object.values(collection)
    } else {
        arrayInput = collection
    }
    for(const element of arrayInput) {
        if(callback(element)){
            return element
        }
    }
};

function myFilter(collection, callback) {
    let arrayInput = []
    if(typeof collection === "object") {
        arrayInput = Object.values(collection)
    } else {
        arrayInput = collection
    }
    let newArray = []
    for(const element of arrayInput) {
        if(callback(element)) {
            newArray.push(element)
        }
    }
    return newArray
};

function mySize(collection) {
    let arrayInput = []
    if(typeof collection === "object") {
        arrayInput = Object.values(collection)
    } else {
        arrayInput = collection
    }
    let counter = 0
    for(const element of arrayInput){
        counter++
    }
    return counter
};

function myFirst(array, integer) {
    if(typeof integer === "number") {
        return array.slice(0, integer)
    } else {
        return array[0]
    }
};

function myLast(array, integer) {
    if(typeof integer === "number") {
        return array.slice(-integer)
    } else {
        return array[mySize(array)-1]
    }
};

function myKeys(obj) {
    let newArray = []
    for(const element in obj) {
        newArray.push(element)
    }
    return newArray
};

function myValues(obj) {
    let newArray = []
    for(const element in obj) {
        newArray.push(obj[element])
    }
    return newArray
};