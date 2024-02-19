const express = require('express')
const axios = require('axios')
const app = express()
//++++++++++++++++++++++++++++++++++++++++++++++
const port = 3000
//++++++++++++++++++++++++++++++++++++++++++++++
app.get('/ask', (req, res) => {
  //++++++++++++++++++++++++++++++++++++++++++++++
  //Respond
  //++++++++++++++++++++++++++++++++++++++++++++++
  let resData = {
    status: false,
    data: {},
    message: ''
  }
  //++++++++++++++++++++++++++++++++++++++++++++++
  axios.post('http://localhost:11434/api/generate', {
    model: "llama2",
    prompt: "What is the capital of India?",
    stream: false
  }).then(function(response) {
    resData.data.answare = response.data.response;
    resData.data.fullRespond = response.data;
    return res.status(200).json(resData);
  }).catch(function(error) {
    console.log(error);
  });
})
//++++++++++++++++++++++++++++++++++++++++++++++
//START SERVER
//++++++++++++++++++++++++++++++++++++++++++++++
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})