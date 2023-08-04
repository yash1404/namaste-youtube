import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import ChatSlice from "../utils/ChatSlice";
import { generateRandomName } from "../helpersfunction/RandomName";
import { generateRandomMessage } from "../helpersfunction/RandomMsg";

const LiveChat = () => {
  const [msg, setMsg] = useState("");
  const liveMessages = useSelector((state) => state.chat.message);
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      // we have to call the api here but we don't have api so we need to use dummy data for showing purpose.
      dispatch({
        type: ChatSlice.actions.chatMessage.type,
        payload: {
          name: generateRandomName(),
          message: generateRandomMessage(25),
        },
      });
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="h-[400px] w-4/5 border-2 bg-slate-200 rounded-lg border-gray-400 flex flex-col-reverse overflow-y-scroll">
        {liveMessages.map((message, ind) => {
          return (
            <ChatMessage
              key={ind}
              name={message.name}
              message={message.message}
            />
          );
        })}
      </div>

      <div className="w-4/5 mt-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            dispatch({
              type: ChatSlice.actions.chatMessage.type,
              payload: {
                name: "Yash Singh",
                message: msg,
              },
            });
            setMsg("");
          }}
        >
          <input
            className="w-3/5 border-2 border-gray-400 outline-none"
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button className="bg-gray-300 rounded-lg px-4 ml-3">Sent</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default LiveChat;
