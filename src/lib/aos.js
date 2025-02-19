import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

export const AosInit = ({ children }) => {
    useEffect(() => {
        Aos.init();
    }, []);

    return children;
};
