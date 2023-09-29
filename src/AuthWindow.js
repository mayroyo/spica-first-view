import { useState } from "react";
import background from "./login.png";
import { bucketInit, user } from "./services/bucket";

function AuthWindow() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // bucketInit();
    // user.addNew({ username: username, password: password }).then(console.log);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    bucketInit();
    user.addNew({ username: username, password: password }).then(console.log);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="AuthWindow">
      <img alt="" src={background} width={"100%"} height={"100%"} />
      <div className="AuthBlock">
        <h1>login</h1>
        <form className="Form">
          <input
            name="login"
            type="text"
            placeholder="Login"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            name="password"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="Buttons">
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignUp}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthWindow;
