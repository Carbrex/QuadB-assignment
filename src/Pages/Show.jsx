import { useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loader";
import { getShowWithID } from "../api/api";

function Show() {
  let { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const show = getShowWithID(id);
    show.then((data)=>{
      setItem(data);
      setLoading(false);
    })
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!item) {
    return (
      <h2 className="text-3xl capitalize tracking-[0.3rem] text-center mb-14 mt-4">
        No show to display
      </h2>
    );
  }
  const {
    name,
    image,
    officialSite,
    genres,
    rating,
    status,
    language,
    summary,
  } = item;
  return (
    <>
      <section className="px-0 text-center w-full text-white">
        <Link
          to="/"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize mb-2"
        >
          back home
        </Link>
        <h2 className="text-3xl capitalize tracking-[0.3rem] text-center mb-14 mt-4 font-semibold">
          {name}
        </h2>
        <div className="w-5/6 max-w-6xl my-0 mx-auto text-left lg:grid lg:grid-cols-[2fr_3fr] lg:gap-12 lg:items-center">
          <img
            src={
              image
                ? image.medium
                : "https://via.placeholder.com/210x295?text=No+Image"
            }
            alt={name}
            className="rounded w-full h-96 object-cover"
          />
          <div className="pt-8 lg:pt-0">
            <p className="font-bold capitalize leading-relaxed mb-5">
              <span className="mr-2 bg-gray-200 py-1 px-2 rounded text-gray-600">
                name :
              </span>
              {name}
            </p>
            <p className="font-bold capitalize leading-relaxed mb-5">
              <span className="mr-2 bg-gray-200 py-1 px-2 rounded text-gray-600">
                genres :
              </span>
              {genres?.length?genres.join(", "):"N/A"}
            </p>
            <p className="font-bold capitalize leading-relaxed mb-5">
              <span className="mr-2 bg-gray-200 py-1 px-2 rounded text-gray-600">
                rating :
              </span>
              {rating?.average?rating.average:"N/A"}
            </p>
            <p className="font-bold capitalize leading-relaxed mb-5">
              <span className="mr-2 bg-gray-200 py-1 px-2 rounded text-gray-600">
                language :
              </span>
              {language}
            </p>
            <p className="font-bold capitalize leading-relaxed mb-5">
              <span className="mr-2 bg-gray-200 py-1 px-2 rounded text-gray-600">
                official site:
              </span>
              <a
                href={officialSite}
                target="_blank"
                rel="noopener noreferrer"
                className="normal-case text-blue-200 font-medium	hover:text-purple-200"
              >
                {officialSite?officialSite:"N/A"}
              </a>
            </p>
            <p className="font-bold capitalize leading-relaxed mb-5">
              <span className="mr-2 bg-gray-200 py-1 px-2 rounded text-gray-600">
                status:
              </span>
              {status}
            </p>
            <p className="font-bold capitalize leading-relaxed mb-5">
              <span className="mr-2 bg-gray-200 py-1 px-2 rounded text-gray-600">
                summary:
              </span>
              <span className dangerouslySetInnerHTML={{ __html: summary }} />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Show;
