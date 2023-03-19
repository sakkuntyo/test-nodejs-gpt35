import axios from "axios";
let data = {
  model:"gpt-3.5-turbo",
  messages: [
    {
      role:"user",
      content:"これはテストです"
    }
  ],
  temperature:0.7
}

let headers = {
  "Content-Type":'application/json',
  "Authorization":"Bearer <トークン>"
}

var gptres = await axios.post("https://api.openai.com/v1/chat/completions", data, {headers: headers})
console.log(JSON.stringify(gptres.data,null,2))
