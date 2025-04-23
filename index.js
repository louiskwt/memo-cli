import {config} from "dotenv";
import {getPageById} from "./src/index.js";

config();
const PAGE_ID = process.env.NOTION_PAGE_ID;
console.log(PAGE_ID);

async function main() {
  console.log("testing...");
  const res = await getPageById(PAGE_ID);
  console.log(res);
}
main();
