import React from 'react';

export interface Task {
    completionTime: number;
    name: string;
    description: string;
    completeBy: Date;
    cost: number;
}