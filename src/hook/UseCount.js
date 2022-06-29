import { useEffect, useState } from "react";

const UseCount = (text) => {
    const [_count, _setCount] = useState(0);
    useEffect(() => {
        if (_count < 5) {
            _setCount(text.length);
        }
    }, [text]);

    return { _count };
};

export default UseCount;
