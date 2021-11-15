import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Repo } from '../pages/Repo';

export const Routes: React.FC = () => {
  return (
    <Switch>
        <Route element={<Dashboard />} path="/" />
        <Route element={<Repo />} path="/repositories" />
    </Switch>
  );
};

