import React, {useState} from "react";
import "../App.css";

interface Props {
  handleSubmit: (input: string) => void;
  response: { message: string } | null;
}

const OpenAI: React.FC<Props> = ({handleSubmit, response}) => {
  const [input, setInput] = useState('');

  const reqData = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(input);
  }; 

  return (
    <div className="App">
      <form onSubmit={reqData}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
{response && <div>{response.message}</div>}
    </div>
  );
}

export default OpenAI;