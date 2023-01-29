import React, { useState } from 'react';
import { hydrate } from 'react-dom';
import axios from 'axios';
import OpenAI from './components/OpenAI';
function App() {
  const [response, setResponse] = useState(null);

  const handleSubmit = async (input: string) => {
    try {
        const res = await axios.post('/openai', input);
        console.log(res.data)
        setResponse(res.data);
    } catch (error) {
        console.error(error);
    }
}

return (
  <OpenAI handleSubmit={handleSubmit} response={response} />
)
}

export default App;