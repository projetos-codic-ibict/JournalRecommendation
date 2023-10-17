import React from "react"

import search from "../../assets/search_app.svg"
import Text from "./Text"

import "./Content.scss"

function Content() {
  return (
    <div className="home-content">
      <Text />
      <img src={search} className="doctors" alt="doctors" width={'40%'} />
    </div>
  )
}

export default Content
