import UIKit

//this file shows examples of simple swift structures and functionality

var greeting: String  = "Hello, playground" //type declaration is optional in Swift

var count: Int = 0

//var array = {true, false}
//var stringsArrayu = []()

//array.append(true)
//array.count
//array.insert(false, at: 0)

//greeting = 'NewText'
//count += 1

//recall that vals are immutable while vars are mutable
//using vals is best practice to avoid unwanted variable changes

var name: String?

//if let url = URL(string: "https:sdfsdfsdfjf.com")

var dictionary = ["test": true, "value": false, "Jhon": true]

dictionary["tree"] = true
print(dictionary.keys)

for (key,value) in dictionary {
    print("for \(key) value is \(value)")
}
    
let something = dictionary["test"]

func calculateSomething(a: Int, b: Int) -> (Int, String) {
    return (a + b, "test")
}
print(calculateSomething(a: 3, b: 5))

let values = [2.0,4.0,5.0,7.0]
var squares = [Double] = []

for value in values {
    squares.append(value*value)
}

print(squares)

let square2 = values.map){ $0 * $0 })
print(square2)

let square3 = values.map { value in
    return value*value }
print(square3)



let milesToPoint = ["point1":120.0, "point2": 50.0, "point3": 70.0]


}


print(something)
    
print(greeting.count)
print(count)
