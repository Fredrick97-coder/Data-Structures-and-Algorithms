var myCarInfo = function (icar) {
    console.log(icar.name, icar.year, icar.broken, icar.numberOfWheels);
};
var result = myCarInfo({
    name: 'BMW',
    year: 2020,
    broken: false,
    numberOfWheels: 4
});
