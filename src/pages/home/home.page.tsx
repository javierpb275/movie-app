import React from "react";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <main className="h-screen w-full">
      <h1>Home Page</h1>
    </main>
  );
};

export default HomePage;
