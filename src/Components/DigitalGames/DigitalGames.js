import React, { useState, useEffect } from "react";
import "./DigitalGames.css";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../Features/ProductsAPI";

export default function DigitalGames() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(24);
  const { data, error, isLoading } = useGetAllProductsQuery();
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  let currentRecords;
  let nPages;

  if (isLoading) {
    console.log("Loading..");
  } else {
    currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    nPages = Math.ceil(data.length / recordsPerPage);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='my-5 text-start'>
      <div className='container'>
        <div className='row'>
          <h2>Digital Games</h2>

          <div className='game-list-wrapper'>
            {isLoading ? (
              <p>Loading..</p>
            ) : error ? (
              <p>An error occured..</p>
            ) : (
              <>
                <div className='total-item mt-4'>{data.length} items</div>
                <ul className='my-5'>
                  {currentRecords?.map((game) => (
                    <li key={game.ID} className='mb-2'>
                      <Link
                        className='text-black text-decoration-none'
                        to={`/shop/${game.ID}`}
                      >
                        <div className='games-cover mb-2 position-relative'>
                          <img src={game.image} alt={game.Title} />
                        </div>
                        <p className='me-2'>{game.Title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Pagination
                  nPages={nPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
