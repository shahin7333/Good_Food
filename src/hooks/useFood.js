import { useEffect, useState } from "react";

const useFood = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('sixcomments.json')
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);
    return [comments, setComments];
}
export default useFood;