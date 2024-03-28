"use strict";
let laptop = {
    make: "Dell",
    model: "XPS 15",
    year: "2022",
    describe: function () {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();
