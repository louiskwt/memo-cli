import {notionClient} from "./notion-clinet.js";

export async function getPageById(id) {
  const response = await notionClient.pages.retrieve({page_id: id});
  return response;
}

export async function createPage(properties) {
  const response = await notionClient.pages.create(properties);
  return response;
}
