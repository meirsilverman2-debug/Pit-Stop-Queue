import { getApiResponse, writeJsonFile, readJsonFile } from "./services/service.file_service.js";
import {getRaceName,  getLap, getTotalCars, getWaitingCars, nextToEnterThePit } from "./services/service.function_service.js";
// import {} from "./URL_config.js" // It didnot work so I put the config right here.


 const URL = "https://server-for-test-week-13.onrender.com/api/race"

console.log(
    `
Pit Stop Queue - Race Team Management System
Race engineer: "Let's check the current queue status on the pit wall."

Loading queue data...
    `
);
console.log("========== PIT STOP QUEUE ==========");
await getRaceName(readJsonFile);
await getLap(readJsonFile);
await getTotalCars(readJsonFile);
await nextToEnterThePit(readJsonFile)

console.log("Cars waiting for pit stop:");

await getWaitingCars(readJsonFile);

//Fetching data from API and making it into an object with .json() meaning receving two promises one after the other:
const data = await getApiResponse(URL)
// console.log(data)
// console.log(typeof data)

// Writing data into json file:
await writeJsonFile(data)

// Reading from json data:
const jsonData = await readJsonFile()
console.log(jsonData)



console.log("Process completed successfully. The pit wall is up to date.");
       
    