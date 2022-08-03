class Car():
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color

    def start_my_car(self):
        print('I am ready to drive!')


class Truck(Car):
    def __init__(self, brand, color, size):
        super().__init__(brand, color)
        self.size = size

    def start_my_car(self, key):
        if key == 'truck_key':
            print('I am ready to drive!')
        else:
            print('Key is not right')

    def stop_my_car(self, brake):
        if brake:
            print('The engine is stopped!')
        else:
            print('I am still running!')


truck1 = Truck('Toyota', 'Silver', 'Large')
truck1.start_my_car('truck_key')
truck1.stop_my_car(brake=False)
