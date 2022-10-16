const m = require("lodash");
function lodash() {
    let month1 = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "Decmber",
    ];

    console.log(m.chunk(month1, 3));

    const oddnum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    console.log(m.tail(oddnum, 9));
    const number = [2, 8, 9, 6, 2, 9]
    console.log(m.union(number))
    const key = [["horror", "The Shining"],
    ["drama", "Titanic"],
    ["thriller", "Shutter Island"],
    ["fantasy", "Pans Labyrinth"],
    ];
    console.log(m.fromPairs(key));
};

module.exports.lodash=lodash;