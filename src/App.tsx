import React, { FunctionComponent, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Task } from '@custom-types/task';
import { Grid, Checkbox, Paper, Button } from '@mui/material';
import { InvisibleButton, StyledPaper } from './AppStyles';
import { AppHeader } from './components/AppHeader';
import { AppSideMenu } from './components/side-menu/AppSideMenu';

const App: FunctionComponent = () => {
  const [showMenu, setShowMenu] = useState(true);
  const toggleDrawer = (open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setShowMenu(open);
  };
  const tasks: Task[] = [ 
    {
      name: 'CV',
      description: 'Update CV',
      completionTime: 2,
      completeBy: new Date(),
      cost: 0
    },
    {
      name: 'Driving course',
      description: 'Verify enrollment to L\'ecole Conduit',
      completionTime: 10,
      completeBy: new Date(),
      cost: 0
    }
  ];
  return (
        <StyledPaper>
        <InvisibleButton onMouseOver={() => setShowMenu(true)}/>
        <AppHeader/>
        <AppSideMenu menuOpen={showMenu} toggleMenu={toggleDrawer}/>
        <Grid container spacing={2}>
          {tasks.map((task: Task) => (
            <Grid item xs={6}>
              {task.name}
              <Checkbox defaultChecked />
            </Grid>))}
            
        </Grid>
        </StyledPaper>
    
  );
}

export default App;
