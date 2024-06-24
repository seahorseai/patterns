import { House } from "./House";

export class HouseBuilder {
    
    public numberOfBaths: number;
    public numberOfRooms: number;
    public numberOfKitchens: number;
    public hasGarden: boolean;
    public numberOfResidents: number;

    constructor(
        numberOfBaths: number, 
        numberOfRooms: number,
        numberOfKitchens: number,
        numberOfResidents: number,
        hasGarden: boolean
        ) {

            this.numberOfBaths = numberOfBaths; 
            this.numberOfRooms = numberOfRooms;
            this.numberOfKitchens = numberOfKitchens;
            this.numberOfResidents = numberOfResidents;
            this.hasGarden = hasGarden;
           
         }

    public build(): House {
        return new House(this);
    }
}