import {getApiResponse, writeJsonFile, readJsonFile} from "./services/service.file_service.js";
import {} from "./services/service.function_service.js";

const URL = "https://server-for-test-week-13.onrender.com/api/race"

//Fetching data from API and making it into an object with .json() meaning receving two promises one after the other:
const data = await getApiResponse(URL)
// console.log(data)
// console.log(typeof data)

// Writing data into json file:
await writeJsonFile(data)

// Reading from json data:
const jsonData = await readJsonFile()
console.log(jsonData)