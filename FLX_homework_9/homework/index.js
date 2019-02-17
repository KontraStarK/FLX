//Task 1
function findTypes() {
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        array.push(typeof arguments[i]);
    }
    return array;
}
findTypes(null, 5, "hello");
//Task 2
function executeforEach(array, object) {
    for (let i = 0; i < array.length; i++) {
        object(array[i]);
    }
}
executeforEach([1, 2, 3],
    function (el) {
        console.log(el);
    });
//Task 3
function mapArray(mas, func) {
    let array = [];
    executeforEach(mas, function (el) {
        array.push(func(el));
    });
    return array;
}
mapArray([2, 5, 8], function (el) {
    return el + 3
});
//Task 4
function filterArray(mas, func) {
    let newArray = [];
    executeforEach(mas, function (el) {
        if (func(el)) {
            newArray.push(el);
        }
    });
    return newArray;
}
filterArray([2, 5, 8], function (el) {
    return el > 3
});
//Task 5
let data = [{
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
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
]

function getAmountOfAdultPeople() {
    return filterArray(data, function (el) {
        return el.age > 18;
    }).length;
}
getAmountOfAdultPeople(data);
//Task 6 
function getGreenAdultBananaLovers() {
    let array = [];
    filterArray(data, function (el) {
        if (el.age > 18 && el.favoriteFruit === "bananna" && el.eyeColor === "green") {
            array.push(el.name);
        }
        return array;
    });
}
getGreenAdultBananaLovers(data);
//Task 7   
function keys(object) {
    let array = [];
    for (let key in object) {
        array.push(key);
    }
    return array;
}
keys({
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
});
//Task 8
function values(object) {
    let arrNew = [];
    for (let key in object) {
        arrNew.push(object[key]);
    }
    return arrNew;
}
values({
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
});
//Task 9
function showFormattedDate(date) {
    let day = date.getDate();
    let month = date.toLocaleString('en-US', {
        month: 'short'
    })
    let year = date.getFullYear();
    return ("Date: " + day + " of " + month + ", " + year);
}
showFormattedDate(new Date('2019-01-27T01:10:00'));
//Task 10
function isEvenYear(date) {
    let year = date.getFullYear();
    if (year % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
isEvenYear(new Date('2019-01-27T01:10:00'));
//Task 11
function isEvenMonth(date) {
    let month = date.getMonth() + 1;
    if (month % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
isEvenMonth(new Date('2019-02-27T01:10:00'));