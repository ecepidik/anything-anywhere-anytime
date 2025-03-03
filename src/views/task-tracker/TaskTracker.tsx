import React, { FunctionComponent, useState } from "react";
import { Task } from "@custom-types/task";
import { Grid, Checkbox } from "@mui/material";

export const TaskTracker: FunctionComponent = () => {
  const tasks: Task[] = [
    {
      name: "CV",
      description: "Update CV",
      completionTime: 2,
      completeBy: new Date(),
      cost: 0,
    },
    {
      name: "Driving course",
      description: "Verify enrollment to L'ecole Conduit",
      completionTime: 10,
      completeBy: new Date(),
      cost: 0,
    },
  ];
  return (
    <Grid container spacing={2}>
      {tasks.map((task: Task) => (
        <Grid item xs={6}>
          {task.name}
          <Checkbox defaultChecked />
        </Grid>
      ))}
    </Grid>
  );
};
