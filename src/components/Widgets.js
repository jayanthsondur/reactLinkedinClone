import React from "react";
import "../CSS/Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "india inc returns gingerly to office",
        "5 day ago 5689 readers"
      )}
      {newsArticle(
        "Pay cut to work from a smaller town?",
        "1 day ago 5459 readers"
      )}
      {newsArticle(
        "Banglore fastest growing tech hub ",
        "4 day ago 5759 readers"
      )}
      {newsArticle("Why both sides lie in interview", "2 day ago 5489 readers")}
      {newsArticle("Google craks down on loan apps", "5 day ago 9129 readers")}
      {newsArticle("Will whatsapp do privacy update?", "1day ago 1289 readers")}
      {newsArticle("COS seek vaccines for employes", "5 day ago 1989readers")}
    </div>
  );
}

export default Widgets;
