import React, { useState } from 'react'

import { RoutesApp } from './components/routes/RoutesApp'

export const Fungames = () => {

  const [online, setOnline] = useState(false);
  
  return (
    <div>
      <RoutesApp online={online} setOnline={setOnline} />
    </div>
  )
}
