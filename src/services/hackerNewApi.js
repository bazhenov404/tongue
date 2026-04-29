import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export async function getNewStoriesIds() {
  const res = await axios.get(`${BASE_URL}/newstories.json`);
  return res.data;
}

export async function getStoryById(id) {
  const res = await axios.get(`${BASE_URL}/item/${id}.json`);
  return res.data;
}