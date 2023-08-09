import React from 'react'
import { Outlet } from "react-router-dom";
function Topbar() {
  return (
    <div>
        {/* Topbar content comes here */}
        <h1>Topbar</h1>

        {/* rest of the content will render here */}
        <Outlet/>
    </div>
  )
}

export default Topbar