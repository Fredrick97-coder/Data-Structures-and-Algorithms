class Bike():
    def __init__(self, name, weight, cost, speed):
        self.name = name
        self.weight = weight
        self.cost = cost
        self.__speed = speed

    def add_bike(self):
        # self.speed = speed
        print(f'{self.name} is now going {self.__speed} mph and costs ${self.cost}')


# instantiate a new bike

myBike = Bike('Mountain', '10lbs', '$100', 90)
myBike.cost = '$200'
myBike.add_bike()
