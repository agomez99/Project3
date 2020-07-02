import React, { Component } from "react"
import Disqus2 from "disqus-react"


export default class extends Component {

    
  render() {
    const disqusShortname = "codesource-2"
    const disqusConfig = {
      url: "",
      identifier: "/nodejs-beginner",
      title: "Title of Your Article",
      language: "en"
    }

    
    
    return (
      <div className="article-container">
      <h4>Comments</h4>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}