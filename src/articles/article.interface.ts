export interface BaseArticle {
    author: string;
    title: string;
    description: string;
    image: string;
  }
  
  export interface Article extends BaseArticle {
    id: string;
  }