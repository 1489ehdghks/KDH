import React from "react";
import styled from 'styled-components';

const NewsItemBlock = styled`
    display : flex;
    .thumbnail{
        margin-right : 1rem;
        img{
            display : block;
        }
    }
    .contents{
        h2{
            margin : 0;
            a{
                color:black;
            }
        }
        p{
            margin : 0;
        }
    }
    &+&{
        margin-top : 3rem;
    }
`;

const NewsItem =({article}) => {
    const {title, description, url, urlToImage} = article;
    return(
        <NewsItemBlock>
        {urlToImage && (
            <div className="thumbnail">
                <a href="url" target='_blank' rel='noopener noreferrer'>
                    <img src={urlToImage} alt= 'thumbnail'/>
                </a>
            </div>
        )}
        <div className="contents">
            <h2>
                <a href={url} target='_blank' rel='noopener noreferrer'>
                    {title}
                </a>
            </h2>
            <p>{description}</p>
        </div>
        </NewsItemBlock>
    );
};

export default NewsItem;