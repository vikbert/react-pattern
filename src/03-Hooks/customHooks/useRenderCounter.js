import { useRef } from 'react';

export const useRenderCounter = () => {
    const renders = useRef(0);

    console.log('renders: ', renders.current++);
};
