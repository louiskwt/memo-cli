import {Client} from "@notionhq/client";
import {config} from "dotenv";

config();

const apiKey = process.env.NOTION_API_KEY;

export const notionClient = new Client({auth: apiKey});
