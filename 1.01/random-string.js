const crypto = require("crypto");

const generateString = () => {
    return crypto.randomBytes(10).toString("hex");

}

const randomString = generateString();

const outputStringWithTimestamp = () => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Random String: ${randomString}`);
}

outputStringWithTimestamp();

setInterval(outputStringWithTimestamp, 5000);