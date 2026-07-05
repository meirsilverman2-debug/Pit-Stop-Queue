import fs from "fs/promises";
// import { readJsonFile } from "./service.file_service";


export async function getRaceName(callback) {

    try {
        const data = await callback();
        console.log("Race: " + data.raceName);
    } catch (err) {
        console.log("get the name of the race ERROR:");
        console.error(err.message);
    };
};

export async function getLap(callback) {

    try {

        const data = await callback();
        console.log("Lap: " + data.currentLap + "/" + data.totalLaps);
    } catch (err) {
        console.log("get laps ERROR:");
        console.error(err.message);
    };
};

export async function getTotalCars(callback) {

    try {
        const data = await callback();
        console.log("Total cars in the race: " + data.cars.length);
    } catch (err) {
        console.log("get total cars ERROR:");
        console.error(err.message);
    };
};

// It does not work yet!
export async function getWaitingCars(callback) {
    try {
        const data = await callbackify();
        const cars = await data
            .map((data) => data.cars)
            .filter((cars) => { return cars.status === "waiting" });
        console.log(cars);

    } catch (err) {
        console.log("get waiting cars by order ERROR:");
        console.error(err);
    };
};


export async function nextToEnterThePit(callback) {
    try {
        const data = await callback();
        for (car of data.cars) {
            if (car.status === "waiting") {
                return console.log(car);
            };
        };

    } catch (err) {
        console.log("get the next in line ERROR!");
        console.log(err);
    };
};


await async function searchCarByNumber(num, callback){
    try {
        const data = callback();
        const foundCar = data.cars.find((car) => car.carNumber === num);
        console.log(foundCar);

    } catch (err){
        console.log("search ERROR:")
        console.error(err)
    }
}