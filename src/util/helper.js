const getInfo={
    name: "Lithium",
    week: "W3D5",
    topic: "Today Node js Topic -- Now to create Module and Export it.",
};

function getBatchInfo(){
    console.log("batch name=" +(getInfo.name) + "week=" +(getInfo.week) + "topic="+(getInfo.topic))

const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

console.log("today date", today);
console.log("date is", day);
console.log("month is", month);
console.log("year is", year);
};

module.exports.getBatchInfo=getBatchInfo

