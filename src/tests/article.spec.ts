import { Article } from '../articles/article.interface';
import * as ArticleService from '../articles/articles.service';

describe('Article Tests', () => {
    it('Should fetch data from News API', async () => {
        const articles: Article[] = await ArticleService.findAll();
        expect(articles.length).toBeGreaterThan(0);
    });
});