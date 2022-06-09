import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListBlock = styled`
    box-sizeing : border-box;
    width : 768px;
    @media sreen and (max-width : 768px){
        width : 100%;
    } 
`;

const sampleArticle = {
    title : '제목',
    description : '내용',
    url : 'https://google.com',
    urlToImage : 'https://via.placeholder.com/160',
};

const NewsList=() => {
    return(
        <NewsListBlock>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
        </NewsListBlock>
    );
};

export default NewsList;
