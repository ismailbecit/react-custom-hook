import React, { useState } from "react";
import UseCount from "./hook/UseCount";
const App = () => {
    const [text, setText] = useState("");
    const { _count } = UseCount(text);
    return (
        <div>
            <input
                type={"text"}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>
                Karakter Sayısı{" "}
                {_count === 5 ? "Maksimum Karakter Sayısına Ulaştınız" : _count}
            </p>
        </div>
    );
};

export default App;
