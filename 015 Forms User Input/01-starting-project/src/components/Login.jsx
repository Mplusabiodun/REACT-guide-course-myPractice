import { useState } from "react";

export default function Login() {
  const [eneteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  // const [eneteredEmail, setEnteredEmail] = useState("");
  // const [eneteredPassword, setEnteredPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("User email: " + eneteredEmail);
    // console.log("User password: " + eneteredPassword);
    console.log("User email: " + eneteredValues.email);
    console.log("User password: " + eneteredValues.password);
    console.log(eneteredValues);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  function handleEmailChange(event) {
    setEnteredEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setEnteredPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            // onChange={handleEmailChange}
            // value={eneteredEmail}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={eneteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            // onChange={handlePasswordChange}
            // value={eneteredPassword}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={eneteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
