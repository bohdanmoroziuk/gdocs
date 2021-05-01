import { Switch, Route, Redirect } from 'react-router-dom';
import { nanoid } from 'nanoid';

import TextEditor from 'components/TextEditor';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/documents/${nanoid()}`} />
        </Route>
        <Route path="/documents/:id">
          <TextEditor />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
