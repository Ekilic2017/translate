import axios from "axios";

export default axios.create({
    baseURL:"https://text-translator2.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': '74883c6017mshfd9b34233041822p187e6fjsn140e7142916f',
    'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
      },
});