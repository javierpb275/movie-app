import React from "react";

export interface IMyListPageProps {}

const MyListPage: React.FunctionComponent<IMyListPageProps> = (props) => {
  return (
    <main className="h-screen w-full">
      <h1>MyList Page</h1>
    </main>
  );
};

export default MyListPage;
