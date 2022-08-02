//Factory Function

function GetBikes(size) {
  const mode = 'original';
  const type = 'Yamaha';
  const bikeSize = size;
  return {
    bike: () =>
      console.log(`Our ${type} of size ${bikeSize} has a good feeling `),
  };
}

let myBike = GetBikes('medium');
myBike.bike();
