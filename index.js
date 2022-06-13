// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}


function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name) {
    let newCat = [...cats, name]
    return newCat
}

function prependCat(name){
    let newCat = [name, ...cats]
    return newCat
}

function removeLastCat() {
    let newCat =[...cats]
    newCat.pop()
    return newCat
}

function removeFirstCat(){
    let newCat = [...cats]
    newCat.shift()
    return newCat
}

















/*
const cats = (["Milo", "Otis", "Garfield"]);



function destructivelyAppendCat(name) {
    cats.push(name);
};

function destructivelyPrependCat(name) {
    cats.unshift(name);
};

function destructivelyRemoveLastCat() {
    cats.pop();
};

function destructivelyRemoveFirstCat() {
    cats.shift();
};


function appendCat(name) {  
    let cats2 = (["Milo", "Otis", "Garfield"]);
    cats2.push(name);
    return (cats2);
};


function prependCat(name) {
    let cats2 = (["Milo", "Otis", "Garfield"]);
    cats2.unshift(name);
    return (cats2);
};

function removeLastCat() {
    let cats2 = (["Milo", "Otis", "Garfield"]);
    cats2.pop();
    return (cats2);
};

function removeFirstCat() {
    let cats2 = (["Milo", "Otis", "Garfield"]);
    cats2.shift();
    return (cats2);
};
*/
