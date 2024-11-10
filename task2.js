function createCats() {
    let cats = [];
    var i = 0;
    while (i < 10) {
        let cat = (catIndex) => () => {
            console.log(`My index is ${catIndex}`);
        };
        
        cats.push(cat(i));
        i++;
    }
    return cats;
}

let animals = createCats();
animals[0]();
animals[5]();

// CONSOLE
//----------
// "My index is 10"
// "My index is 10"
