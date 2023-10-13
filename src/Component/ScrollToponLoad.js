import { useEffect } from 'react';
import {  useLocation } from 'react-router-dom';

const ScrollToponLoad = () => {
        const routePath = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [routePath]);
      
        return null; // This component doesn't render anything
}

export default ScrollToponLoad
