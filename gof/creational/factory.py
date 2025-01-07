from abc import ABC, abstractmethod

# Abstract Product
class Shape(ABC):
    @abstractmethod
    def draw(self):
        pass

# Concrete Product 1
class Circle(Shape):
    def draw(self):
        return "Drawing a Circle"

# Concrete Product 2
class Square(Shape):
    def draw(self):
        return "Drawing a Square"

# Concrete Product 3
class Rectangle(Shape):
    def draw(self):
        return "Drawing a Rectangle"

# Factory Class
class ShapeFactory:
    @staticmethod
    def get_shape(shape_type):
        if shape_type == "circle":
            return Circle()
        elif shape_type == "square":
            return Square()
        elif shape_type == "rectangle":
            return Rectangle()
        else:
            raise ValueError(f"Unknown shape type: {shape_type}")

# Client Code
if __name__ == "__main__":
    factory = ShapeFactory()

    # Create shapes using the factory
    shape1 = factory.get_shape("circle")
    print(shape1.draw())

    shape2 = factory.get_shape("square")
    print(shape2.draw())

    shape3 = factory.get_shape("rectangle")
    print(shape3.draw())

    # Uncommenting this will raise an error
    # shape4 = factory.get_shape("triangle")
