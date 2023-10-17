import React from "react"

import axios from "axios"

import TextField from '@material-ui/core/TextField'
// import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select, { SelectChangeEvent } from '@material-ui/core/Select';
// import Chip from '@material-ui/core/Chip';
import { useState, useEffect } from "react"
import { withStyles } from "@material-ui/core/styles"
// import { forEach } from "lodash";
import Paper from '@material-ui/core/Paper'

function Abstract() {
  const [title, setTitle] = useState("")
  const [abstract, setAbstract] = useState("")
  const [names, setNames] = useState([])
  const [journals, setJournals] = useState([])

  useEffect(() => {
    axios.get('/countries').then(res => setNames(res.data))
  }, [])

  console.log(names)

  // const [countryName, setCountryName] = useState([])

  const ColorButton = withStyles(() => ({
    root: {
      marginRight: 20,
      marginTop: 20,
      marginBottom: 20,
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

  const handleClick = () => {
    axios({
      method: "POST",
      url: "/works",
      data: {
        abstract: abstract,
        title: title
      },
      headers: {
        "content-type": "application/json",
      },
    })
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
    <div>
      <div style={{fontWeight: 800, fontSize: 32, textAlign: "center", marginTop: 40}} >Sistema de Recomendação de Conferências e revistas</div>
      <div style={{textAlign: "center"}} >Insira as informações detalhadas do seu artigo para ver uma lista de recomendação de conferências e revistas para ele</div>
      <Paper style={{backgroundColor:"#F7F2FA",width:"80%",margin:"auto",marginTop:"50px", textAlign: "right"}} elevation={3}>
        <div style={{width:"95%",textAlign:"left", marginLeft: 20}}>
          <TextField
          required
          id="outlined-required"
          label="Título do artigo"
          variant="outlined"
          onChange={e => setTitle(e.target.value)}
          style={{marginTop:"20px", width: "100%"}}
        />
        </div>
        <div style={{width:"95%",textAlign:"left", marginTop: "20px", marginLeft: 20}}>
          <TextField
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
        <ColorButton variant="contained" disabled={abstract === '' ? true : false} color="primary" className='button' disableElevation onClick={handleClick}>
          Buscar recomendações
        </ColorButton>
      </Paper>
      {
        journals.map((name) => <div>{name}</div>)
      }
    </div>
  )
}

export default Abstract
