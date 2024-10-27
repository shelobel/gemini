import { createContext, useState } from "react";
import run from "../config/gemini";


export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const onSent = async (prompt) => {
        await run(prompt)
    }

    onSent("who is the father of the nation")

    const contextValue = {

    }

    return (
        <Context.Provider value = {contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider