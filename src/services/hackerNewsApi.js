import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export async function getNewStoriesIds() {
  try {
    const response = await axios.get(`${BASE_URL}/newstories.json`);
    return response.data;
  } catch (error) {
    console.error("Errore nel recupero degli ID:", error);
    return [];
  }
}

export async function getStoryById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/item/${id}.json`);
    return response.data;
  } catch (error) {
    console.error(`Errore per ID ${id}:`, error);
    return null;
  }
}