// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers= function(){
    return[drivers[0],drivers[1]]
};
returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function(){
    return[drivers[2],drivers[3]]
};
returnLastTwoDrivers(drivers);

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num){
    function fareMultiplier (num) {
        return num * num;
}
return fareMultiplier(num)
}
createFareMultiplier(5);
console.log(createFareMultiplier(5));


const fareDoubler= function (createFareMultiplier){
    return createFareMultiplier*2
    }
const fareTripler= function (createFareMultiplier){
return createFareMultiplier*3
}

function selectDifferentDrivers(arrayOfDrivers, fun){
if (fun===returnFirstTwoDrivers){
return returnFirstTwoDrivers(arrayOfDrivers)}
else if (fun===returnLastTwoDrivers){
    return returnLastTwoDrivers(arrayOfDrivers)
}

}
selectDifferentDrivers()