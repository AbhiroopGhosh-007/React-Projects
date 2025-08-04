import { useState, useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState("");
  const [jokeloading, setJokeLoading] = useState(false);
  const getData = async () => {
    setJokeLoading(true);
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await res.json();
    setJokes(data);
    setJokeLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col  items-center justify-center bg-blue-300 min-h-screen">
      <div className="border border-black bg-white gap-2 flex flex-col rounded -3xl items-center justify-center ">
        <h1 className="text-2xl font-bold">Random Joke Generator</h1>
        {jokeloading ? (
          <p className="text-gray-500">Jokes Loading...</p>
        ) : (
          <div className="bg-white shadow-md rounded p-4 w-96 text-center">
            <p className="font-bold text-2xl mb-2">{jokes.setup}</p>
            <p className="text -lg">{jokes.punchline}</p>
          </div>
        )}
        <button
          onClick={getData}
          className="bg-blue-500 hover:bg-blue-700 text-white items-center rounded mt-2 transition justify-center flex flex-col mb-3 font-bold px-2 py-2.5"
        >
          Generate new Joke
        </button>
      </div>
    </div>
  );
}

export default App;
