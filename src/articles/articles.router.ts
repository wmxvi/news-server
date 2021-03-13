/**
 * Required External Modules and Interfaces
 */

 import express, { Request, Response } from "express";
 import * as ArticleService from "./articles.service";
 import { BaseArticle, Article } from "./article.interface";

/**
 * Router Definition
 */

 export const articlesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET articles

articlesRouter.get("/", async (req: Request, res: Response) => {
    try {
      const articles: Article[] = await ArticleService.findAll();
  
      res.status(200).send(articles);
    } catch (e) {
      res.status(500).send(e.message);
    }
});