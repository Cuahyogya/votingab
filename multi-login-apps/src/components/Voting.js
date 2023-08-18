import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Voting = () => {
  const [username, setUsername] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const handleVote = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/vote", {
        username,
      });
      console.log("Vote successful:", response.data);
      setShowSuccess(true);
    } catch (error) {
      console.error("Vote failed:", error);
    }
  };

  return (
    <div className="bg-slate-200">
      <Navbar />
      <h1 class="mt-10 text-center text-2xl font-bold">Voting CANDIDATE</h1>
      <form onSubmit={handleVote} class="rounded-xl mt-5 ">
        <div class="rounded-lg mt-4 mx-auto text-center ">
          <input
            class="mx-auto text-center overflow-auto"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ whiteSpace: "normal" }}
          />
        </div>

        <div class="rounded-xl mt-1 mx-auto p-10 flex flex-col gap-1 md:flex-row w-[50%]">
          <div class="md:w-1/3 mx-2 text-slate-600 hover:text-black text-center w-[80%]">
            <input
              type="radio"
              name="candidate"
              value="Prabowo Subianto Djojohadikusumo"
              checked={username === "Prabowo Subianto Djojohadikusumo"}
              onChange={() => setUsername("Prabowo Subianto Djojohadikusumo")}
              required
            />
            <img
              src="/prabowo.jpg"
              alt="Prabowo"
              class="rounded-lg mx-auto hover:scale-110 hover:shadow-lg w-full h-[200px] object-cover"
            />
          </div>
          <div class="md:w-1/3 mx-2 text-slate-600 hover:text-black text-center w-[80%]">
            <input
              type="radio"
              name="candidate"
              value="Anies Rasyid Baswedan"
              checked={username === "Anies Rasyid Baswedan"}
              onChange={() => setUsername("Anies Rasyid Baswedan")}
              required
            />
            <img
              src="/anies.jpg"
              alt="Anies"
              class="rounded-lg mx-auto hover:scale-110 w-full h-[200px] object-cover"
            />
          </div>
          <div class="md:w-1/3 mx-2 text-slate-600 hover:text-black text-center w-[80%]">
            <input
              type="radio"
              name="candidate"
              value="Ganjar Pranowo"
              checked={username === "Ganjar Pranowo"}
              onChange={() => setUsername("Ganjar Pranowo")}
              required
            />
            <img
              src="/ganjar.jpg"
              alt="Ganjar"
              class="rounded-lg mx-auto hover:scale-110 hover:shadow-lg w-full h-[200px] object-cover"
            />
          </div>
        </div>

        <div class="flex flex-auto rounded-xl h-autodrop-shadow-lg w-full">
          <button
            type="submit"
            class=" mb-20 px-6 py-2 text-center rounded-md border-spacing-2 bg-green-500 hover:bg-green-600
             active:bg-green-500 m-auto"
          >
            Pilih
          </button>
        </div>
      </form>
      <Footer />
      {showSuccess && (
        <div className="success-notification">
          Vote successful! Terima kasih telah berpartisipasi dalam pemilihan.
        </div>
      )}
    </div>
  );
};
export default Voting;
