"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
type Props = {
  chatId: string;
};
const ChatInput = ({ chatId }: Props) => {
  const [input, setInput] = useState("");
  const { data: session } = useSession();
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form className="flex space-x-5 p-5">
        <input
          className="focus:outline-none bg-transparent flex-1 disabled:text-gray-300"
          disabled={!session}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type your message here ..."
        />
        <button
          type="submit"
          disabled={!input || !session}
          className={`bg-[#11a37f] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed`}
        >
          <PaperAirplaneIcon className="w-4 h-4 -rotate-45" />
        </button>
      </form>
      <div>{/** Model Selection */}</div>
    </div>
  );
};

export default ChatInput;
