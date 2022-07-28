interface ICar {
  name: string;
  year: number;
  broken: boolean;
  numberOfWheels: number;
  getCarInfo?: () => void;
}

const myCarInfo = (icar: ICar) => {
  console.log(icar.name, icar.year, icar.broken, icar.numberOfWheels);
};

let result = myCarInfo({
  name: 'BMW',
  year: 2020,
  broken: false,
  numberOfWheels: 4,
});
