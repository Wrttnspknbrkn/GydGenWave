import * as React from 'react';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };


function App() {
  return (
    <div className="flex justify-center items-center text-[4rem] font-[600] text-gray-500 h-screen">
     
     <Button variant="contained">Hello world</Button>
     <Switch {...label} disabled defaultChecked />
     <Switch {...label} disabled />
    </div>
  );
}

export default App;
