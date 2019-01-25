interface ISentence {
  id: string,
  body: string,
}

interface IArticle {
  author: string,
  created_at: string,
  fisk_count: number,
  id: string,
  image_url: string,
  paragraphs: any [],
  publisher: string,
  read_mins: number,
  share_count: number,
  title: string,
}

interface IArticleProps extends React.ReactPropTypes {
  article: IArticle,
}