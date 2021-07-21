import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

export default function Main() {
  return (
    <main>
      <Switch>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Switch>
    </main>
  );
}