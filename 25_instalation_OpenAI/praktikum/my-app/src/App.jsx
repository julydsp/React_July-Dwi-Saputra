import { useState } from "react";
import { openai } from "./openAI";

export const App = () => {
  const [input, setInput] = useState("");
  const [isloading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const user = e.target.user.value;

    setIsLoading(true);
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: user }],
      model: "gpt-3.5-turbo",
    });

    setIsLoading(false);
    setInput(response?.choices[0]?.message?.content);
   
  }

  return (
    <div className="max-w-2xl mx-auto ">
      <h1 className="font-bold text-2xl my-7">Chatbot</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="mt-2">
          <input
            type="text"
            name="user"
            id="user"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pl-3"
            placeholder="masukkan pertanyaan anda ?"
          />
          <button
            type="submit"
            className="w-full mt-3 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500"
          >
            kirim
          </button>
        </div>
      </form>
      {isloading && <div>loading...</div>}
      {input && (
        <div>
          <h1 className="font-bold text-2xl my-3">Response</h1>
          <p>{input}</p>
        </div>
      )}
    </div>
  );
};
export default App;