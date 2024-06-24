/*
The Builder design pattern is a creative pattern that is used to build a complex object 
step by step. It allows the creation of a composite object from the construction 
of its individual parts, so that the construction process can vary while the resulting 
object remains the same.
*/

import { HouseBuilder } from "./classes/HouseBuilder";

const houseBuilder = new HouseBuilder(3,1,2,2,true);
const house = houseBuilder.build()

console.log(house.toString());

