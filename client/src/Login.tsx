import * as React from "react";
import { useState } from "react";
import { useLogin, useNotify, Notification, defaultTheme } from "react-admin";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import "./login.scss";
import logo from "./assets/logo.svg";
import graphql from "./assets/graphql.svg";
import rest from "./assets/rest.svg";

const CLASS_NAME = "login-page";

const Login = ({ theme }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const notify = useNotify();
  const BASE_URI = process.env.REACT_APP_SERVER_URL;
  const submit = (e: any) => {
    e.preventDefault();
    login({ username, password }).catch(() =>
      notify("Invalid username or password")
    );
  };

  return (
    <ThemeProvider theme={createTheme(defaultTheme)}>
      <div className={`${CLASS_NAME}`}>
        <div className={`${CLASS_NAME}__wrapper`}>
          <div className={`${CLASS_NAME}__box`}>
            <img
              src={graphql}
              alt="GraphQL API"
            />
            <h2>Try the backend via GraphQL</h2>
            <div className={`${CLASS_NAME}__box__message`}>
              Connect to the server using GraphQL API with a complete and
              understandable description of the data in your API
            </div>
            <Button
              type="button"
              variant="contained"
              color="primary"
              href={`${BASE_URI}/graphql`}
            >
              Continue
            </Button>
          </div>
          <div className={`${CLASS_NAME}__box`}>
            <img
              src={logo}
              alt="React-Admin"
            />
            <h2>Admin UI</h2>
            <div className={`${CLASS_NAME}__box__message`}>
              Sign in to the admin panel to manage your city
            </div>
            <form onSubmit={submit}>
              <label>
                <span>Username</span>

                <input
                  name="username"
                  type="textbox"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                <span>Password</span>

                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <Button type="submit" variant="contained" color="primary">
                Log in
              </Button>
            </form>
          </div>
          <div className={`${CLASS_NAME}__box`}>
            <img
              src={rest}
              alt="REST API"
            />
            <h2>Try out the REST API</h2>
            <div className={`${CLASS_NAME}__box__message`}>
              Connect to the server using REST API with a built-in Swagger
              documentation
            </div>
            <Button
              type="button"
              variant="contained"
              color="primary"
              href={`${BASE_URI}/api`}
            >
              Continue
            </Button>
          </div>

          <Notification />
        </div>
        <div className={`${CLASS_NAME}__read-more`}>
          <span>Read </span>
          <a href="https://github.com/Shurtu-gal/road-repair-tracking-system" target="_blank">
            the README
          </a>
          <span> to learn more</span>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
