import { Card } from './components/card';
import { MainPage } from './components/layout';

function App() {
  return (
    <div className="App">
      <MainPage>
        <Card>
          <p>Hello</p>
        </Card>
      </MainPage>
    </div>
  );
}

export default App;
