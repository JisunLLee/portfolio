import { useEffect, useState } from "react";

 export const useTitle = initialTitle => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htlTitle = document.querySelector("title");
        htlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]);
    return setTitle
}

