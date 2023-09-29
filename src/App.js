import AuthWindow from "./AuthWindow";
import { bucketInit, user } from "./services/bucket";

function App() {
  // bucketInit();
  // user.getAll().then(console.log);
  return (
    <div className="App">
      <AuthWindow />
    </div>
  );
}

export default App;
