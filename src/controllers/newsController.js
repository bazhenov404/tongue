import {state} from '../models/newsModel.js';
import {getNewStoriesIds, getStoryById} from '../services/hackerNewsApi.js';
import {renderArticles} from '../views/newsView.js';

const ARTICLES_PER_PAGE = 10;

export async function init() {
    state.ids = await getNewStoriesIds();
    await loadMore();
}

export async function loadMore() {
    const nextIds = state.ids.slice(state.currentIndex, 
        state.currentIndex + ARTICLES_PER_PAGE);


    const articles = await Promise.all(nextIds.map(id => getStoryById(id)));

    state.articles.push(...articles);
    state.currentIndex += ARTICLES_PER_PAGE;

    renderArticles(articles);
};