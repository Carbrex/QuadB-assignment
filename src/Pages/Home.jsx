import React from "react";
import Card from "../Components/Card";
import { useState } from "react";
import SearchForm from "../Components/SearchForm";
import { useEffect } from "react";
import { getShows } from "../api/api";
import Loading from "./Loader";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a");
  useEffect(() => {
    const shows = getShows(searchTerm);
    shows.then((data) => {
      setData(data);
      setIsLoading(false);
    });
  }, [searchTerm]);
  return (
    <>
      <div className="flex flex-col items-center	">
        <SearchForm setSearchTerm={setSearchTerm} />
        {isLoading && <Loading />}
        {data.length > 0 && (
          <div className="flex flex-wrap gap-10 justify-center bg-slate-700 min-h-screen">
            {data.map((item) => {
              return <Card item={item} key={item.show.id} />;
            })}
          </div>
        )}
        {data.length === 0 && !isLoading && (
          <h2 className="text-3xl capitalize tracking-[0.3rem] text-center mb-14 mt-4">
            No show to display
          </h2>
        )}
      </div>
    </>
  );
}

export default Home;
