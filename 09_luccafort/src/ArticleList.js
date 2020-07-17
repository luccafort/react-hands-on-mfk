import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useArticle, useArticles } from "./hooks/article";
import { Link, useLocation, useHistory } from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { useSelector } from "react-redux";
import { useGoodForArticle } from "./hooks/goodcount";

export function ArticleList(props) {
  const { articles } = useArticles();
  const location = useLocation();
  const history = useHistory();
  const { getGoodCount } = useGoodForArticle();

  useEffect(() => {
    if (articles && articles.length > 0 && location.pathname === "/") {
      history.replace(`/article/${articles[0].id}`);
    }
  }, [articles, history, location.pathname]);

  if (!articles) {
    return <div>Loading...</div>;
  }

  // パス（ex. /article/1）から記事IDを抽出する
  const match = location.pathname.match(/\/article\/([0-9]+)/);
  const articleId = match ? parseInt(match[1]) : null;

  return (
    <List component="nav">
      {articles.map((articleSummary) => {
        const goodCount = getGoodCount(articleSummary.id);
        return (
          <ListItem
            key={articleSummary.id}
            button
            selected={articleId == articleSummary.id}
            component={Link}
            to={`/article/${articleSummary.id}`}
          >
            <ListItemText
              primary={articleSummary.title}
              secondary={
                <>
                  {new Date(articleSummary.date).toLocaleString()}
                  <Chip
                    icon={<ThumbUpIcon style={{ fontSize: 16 }} />}
                    label={goodCount}
                    style={{ marginLeft: "8px" }}
                  />
                </>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
}
