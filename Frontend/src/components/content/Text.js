import React from "react"

import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import { Redirect } from "react-router-dom"

import "./Text.scss"

const ColorButton = withStyles(() => ({
  root: {
    textTransform: "none",
    borderRadius: 55,
    fontFamily: "Mulish",
    fontWeight: "bold",
    backgroundColor: "#6C63FF",
    "&:hover": {
      backgroundColor: "#13BADE",
      fontWeight: "bold",
    },
  },
}))(Button)

class Text extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      openChat: false
    }
  }

  openChat = () => {
    this.setState({
      openChat: true
    })
  }

  render(){
    const {openChat} = this.state

    return (
      <div className="text">
        <div className="title">
          Sistema de Recomendação de Conferências e revistas
        </div>
        <div className="description">
          Recomendação ontológica de conferências e revistas baseado no ontologia VODAN com integração com o catálogo OpenAlex
        </div>
        <ColorButton variant="contained" color="primary" className='button' disableElevation onClick={this.openChat}>
          Buscar Recomendações
        </ColorButton>
        {openChat && <Redirect to={{ pathname: "/search" }} />}
      </div>
    )
  }
}

export default Text
