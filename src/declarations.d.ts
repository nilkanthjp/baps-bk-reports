declare module '*.png';

interface ISiteMetadata {
  title: string;
  author: string;
  description: string;
}

interface IRichText {
  json: any;
}

interface IBaseNode {
  slug: string;
  title: string;
}

interface IReport extends IBaseNode {
  section: ISection[];
  coverImage: {
    localFile: any;
  };
}

interface ISection extends IBaseNode {
  description: IRichText;
  articles: IArticle[];
}

interface IArticle extends BaseNode {
  text: IRichText;
}
