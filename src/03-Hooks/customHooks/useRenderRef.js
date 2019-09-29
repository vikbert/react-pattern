import React, { useRef } from 'react';

export default function useRenderRef() {
  const renderRef = useRef();

  console.log('Getting rendered: ' + renderRef.current++);
}
