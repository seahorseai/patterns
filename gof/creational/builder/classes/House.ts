import { HouseBuilder } from "./HouseBuilder";


export class House {

    public numberOfBaths: number;
    public numberOfRooms: number;
    public numberOfKitchens: number;
    public hasGarden: boolean;
    public numberOfResidents;

    constructor(builder: HouseBuilder) {
        this.numberOfBaths = builder.numberOfBaths;
        this.numberOfRooms = builder.numberOfRooms;
        this.numberOfKitchens = builder.numberOfKitchens;
        this.hasGarden = builder.hasGarden;
        this.numberOfResidents = builder.numberOfResidents;
    }

    public toString(): string {

        return `\n -Baths: ${this.numberOfBaths}
        \n -Rooms: ${this.numberOfRooms}
        \n -¿Garden?: ${this.hasGarden ? "Has a garden" : "No garden"}
        \n -Residents: ${this.numberOfResidents ? this.numberOfResidents : "No residents"}`;
    }
}
