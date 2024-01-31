import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg w-full h-56 object-cover"
          src={
            item.show.image
              ? item.show.image.medium
              : "https://via.placeholder.com/210x295?text=No+Image"
          }
          alt={item.show.name}
        />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
              {item.show.name}
            </h5>
          </a>
          <div className="flex flex-col gap-2">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="bg-gray-200 pb-1 font-semibold rounded px-2 mr-2 text-gray-600">
                Genres:
              </span>
              {/* only show 2 if more than 2 */}
              {item.show.genres.length > 2 ? (
                <>
                  {item.show.genres[0]}, {item.show.genres[1]}
                </>
              ) : (
                item.show.genres.join(", ")
              )}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="bg-gray-200 pb-1 font-semibold rounded px-2 mr-2 text-gray-600">
                Language:
              </span>
              {item.show.language}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="bg-gray-200 pb-1 font-semibold rounded px-2 mr-2 text-gray-600">
                Status:
              </span>
              {item.show.status}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="bg-gray-200 pb-1 font-semibold rounded px-2 mr-2 text-gray-600">
                Rating:
              </span>
              {item.show.rating.average?item.show.rating.average:"N/A"}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="bg-gray-200 pb-1 font-semibold rounded px-2 mr-2 text-gray-600">
                Premiered:
              </span>
              {item.show.premiered?item.show.premiered:"N/A"}
            </p>
          </div>
          <Link to={`/show/${item.show.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
