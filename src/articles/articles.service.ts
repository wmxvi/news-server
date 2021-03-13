const fetch = require('node-fetch');
import * as dotenv from "dotenv";

/**
 * Data Model Interfaces
 */

// @todo: We do not make use of all of these, yet...

 import { BaseArticle, Article } from "./article.interface";
 import { Articles } from "./articles.interface";

/**
 * Service Methods
 */

 export const findAll = async (): Promise<Article[]> => {
    return fetch(`${process.env.API_URL}${process.env.API_KEY}`)
    .then((response: { ok: any; statusText: string | undefined; json: () => any; }) => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        
        return response.json<T>()
        
    }).then((data: { articles: Article; }) => {

        // @todo: Remove data that is not needed for each article item

        return data.articles
    })
 };