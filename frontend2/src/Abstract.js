import React from "react"

// import axios from "axios"
import api from './api'

import TextField from '@mui/material/TextField'
// import Box from '@material-ui/core/Box';
import Button from '@mui/material/Button';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select, { SelectChangeEvent } from '@material-ui/core/Select';
// import Chip from '@material-ui/core/Chip';
import { useState, useEffect } from "react"
// import { withStyles } from "@mui/styles"
// import { forEach } from "lodash";
import Paper from '@mui/material/Paper'

import "./Abstract.scss"

function Abstract() {
  const [title, setTitle] = useState("")
  const [abstract, setAbstract] = useState("")
  const [names, setNames] = useState([])
  const [journals, setJournals] = useState([])

  useEffect(() => {
    api.get('/countries').then(res => setNames(res.data))
  }, [])

  console.log('nomes:', names)

  // const [countryName, setCountryName] = useState([])

  const handleClick = () => {
    console.log('oi')
    api.post('/works', {abstract: abstract, title:title})
    // api({
    //   method: "POST",
    //   url: "/works",
    //   data: {
    //     abstract: abstract,
    //     title: title
    //   },
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // })
      .then((res) => setJournals(res.data))
      .catch((error) => console.error(error))
    // axios.get('/works').then(res => console.log(res.data))
  }

  // const handleChange = (e) => {
  //   const {
  //     target: { value },
  //   } = e
  //   setCountryName(
  //     typeof value === 'string' ? value.split(',') : value,
  //   )
  // };

  return (
    <div className="main-div">
      <div style={{fontWeight: 800, fontSize: 32, textAlign: "center", marginTop: 40}} >Sistema de Recomendação de Conferências e revistas</div>
      <div style={{textAlign: "center"}} >Insira as informações detalhadas do seu artigo para ver uma lista de recomendação de conferências e revistas para ele</div>
      <Paper className='main-paper' elevation={3}>
        <div className='title'>
          <TextField
          id="outlined-required"
          label="Título do artigo"
          variant="outlined"
          onChange={e => setTitle(e.target.value)}
          style={{marginTop:"20px", width: "100%"}}
        />
        </div>
        <div className='summary'>
          <TextField
          required
          id="outlined-multiline-flexible"
          label="Resumo do artigo"
          multiline
          maxRows={4}
          value={abstract}
          onChange={e => setAbstract(e.target.value)}
          variant="outlined"
          style={{width: "100%"}}
          />
        </div>
      {/* <div style={{width:"100%", textAlign:"center"}}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">País</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={countryName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div> */}
        <Button variant="contained" disabled={abstract === '' ? true : false} color="primary" className='button' disableElevation onClick={handleClick}>
          Buscar recomendações
        </Button>
      </Paper>
      {
        journals.map((name) => <div>{name}</div>)
      }
    </div>
  )
}

export default Abstract
