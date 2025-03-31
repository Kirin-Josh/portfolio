"use client"
import React, { useEffect, useState } from 'react'
import { PinContainer } from './ui/PinContainer'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClientPinComponent = (props: any) => {
    const [isClient, setIsClient] = useState(false);

      useEffect(() => {
        setIsClient(true);
      }, []);

      if (!isClient) {
        return <p>Loading...</p>; // Or something that matches server-side HTML
      }
  return <PinContainer {...props} />
}

export default ClientPinComponent
