import { matchPath } from "react-router-dom";
import { NewsType } from "./interfaces";

export function getActive(path: string, pathname: string): boolean {
  return path ? !!matchPath({ path, end: false }, pathname) : false;
}

export function getPath(root: string, sublink: string): string {
  return `${root}${sublink}`;
}

export const ParseNewsData = (res: any) => {
  const newsData: NewsType[] = [];

  res.articles.forEach((item: any) => {
    newsData.push({
      title: item.title,
      image: item.urlToImage,
      category: item.source.name,
      url: item.url,
    });
  });

  return newsData;
};
