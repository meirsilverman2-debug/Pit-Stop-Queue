import fs from "fs/promises";
// import { readJsonFile } from "./service.file_service";


export async function getRaceName() {
    console.log("ok")
    try {
         console.log("ok")
        const data = await readJsonFile();
        console.log("Race: "+data.raceName);
    } catch (err) {
        console.log("get the name of the race ERROR:");
        console.error(err.message);
    };
};

export async function getLap() {
     console.log("ok")
    try {
         console.log("ok")
        const data = await readJsonFile();
        console.log("Lap: "+data.currentLap+"/"+data.totalLaps);
    } catch (err) {
        console.log("get  ERROR:");
        console.error(err.message);
    };
};


