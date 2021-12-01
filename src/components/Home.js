import React from "react";
import { PropsAndState } from "./PropsAndState";

export const Home = () => (
  <>
    <address>
      <div>Visit Us at the Nashville North Location</div>
      <div>500 Puppy Way</div>
    </address>

    <h2>Nashville Kennels</h2>
    <small>Loving care when you're not there.</small>

    <PropsAndState yourName={"Brenda"} />
  </>
);
