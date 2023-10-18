import { useState } from "react";
import { openai } from "./openAI";

export const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState("");
  const [isloading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            'saya adalah seorang pedagang smartPhone, silahkan tanyakan mengenai handphone kepada saya "maaf saya tidak mengerti apa yang tanyakan"',
        },
        { role: "user", content: input },
      ],
      model: "gpt-3.5-turbo",
    });

    setIsLoading(false);

    setMessages(response.choices[0]?.message?.content)
  }
  return (
    <div className="max-w-md max-h-full mx-auto bg-gray-200 p-4">
      <h1 className="font-bold text-2xl mb-4">Chatbot</h1>
      <p className="mb-3">
        Silahkan tanya seputar smartPhone, silahkan bertanya disini!
      </p>
      <div id="chat-container">
        <div className="message-list flex justify-end mb-3">
          {input && (
            <div className=" text-right bg-green-400 rounded-br-none inline-block max-w-sm rounded-lg py-2 px-3 shadow-md">
              {input}
            </div>
          )}
        </div>

        <div className="mb-3">
          {messages && (
            <div
              className="bg-white rounded-bl-none
                 inline-block max-w-sm rounded-lg py-2 px-3 shadow-md"
            >
              {messages}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            name="user"
            id="user"
            className="w-full rounded-l-lg border border-gray-300 py-2 px-3 focus:outline-none"
            placeholder="Ketik pesan..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-r-lg bg-green-400 text-white px-3 py-2 hover:bg-green-500 focus:outline-none"
          >
            Kirim
          </button>
        </form>
      </div>
      {isloading && <div>Loading...</div>}
    </div>
  );
};

export default App;
