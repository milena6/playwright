import * as dotenv from "dotenv";

function setup() {
  dotenv.config();

  const requiredVariableKeys = ["USERNAME", "PASSWORD"];

  for (const key of requiredVariableKeys) {
    const value = process.env[key];
    if (!value) {
      throw Error(`Missing required environment variable: ${key}`);
    }
  }
}
export default setup;
