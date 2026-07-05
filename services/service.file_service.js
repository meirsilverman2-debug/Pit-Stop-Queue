import fs from "fs/promises"



console.log("Work");

export async function getApiResponse(URL) {
    try {
        console.log("Start");
        let response = await fetch(URL);
        let data = await response.json();
        // console.log(data);
        console.log("Finish");
        return data;

    } catch (err) {
        console.log("Fetch ERROR:");
        console.error(err.message)
    };
};


export async function writeJsonFile(data) {
    try {
        console.log("Started writing");
        const path = "./data/race_api.json";
        console.log("It will take a moment...")
        await fs.writeFile(path, JSON.stringify(data), "utf-8")
        console.log("Success!");

    } catch (err) {
        console.log("Write ERROR:");
        console.error(err.message);
    };
};

export async function readJsonFile(){
    try {
        const path = "./data/race_api.json";
        const data = await fs.readFile(path, "utf-8");
        // console.log(JSON.parse(data))
        return JSON.parse(data)

    } catch (err) {
        console.log("Read ERROR:");
        console.error(err.message);
    };
};



