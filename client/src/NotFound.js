import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";

export default function NotFound() {
  const history = useHistory();
  React.useEffect(() => {
    history.push("/");
  }, []);
  return <div></div>;
}
