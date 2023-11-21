import React from "react"

import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';
import { Navigate } from "react-router-dom";
import search from "./assets/search_app.svg"

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
    console.log('oi')
    this.setState({
      openChat: true
    })
  }

  render(){
    const {openChat} = this.state

    return (
        <div className="home-content">
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
                {openChat && <Navigate to="/search" replace={true} />}
            </div>
            <img src={search} className="doctors" alt="doctors" width={'40%'} />
        </div>
    )
  }
}

export default Text
