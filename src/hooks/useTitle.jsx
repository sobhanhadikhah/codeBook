/* in this hook i get title of page and set it to my single page appliction  */
import { useEffect } from "react";

export const useTitle = (title) =>
    useEffect(() => {
        document.title = `${title} | codeBook`
    }, [title])