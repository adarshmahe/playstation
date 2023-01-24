import React, { useState, useEffect } from "react";
import "./DigitalGames.css";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

export default function DigitalGames({ gameItems }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(24);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = gameItems.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(gameItems.length / recordsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='my-5 text-start'>
      <div className='container'>
        <div className='row'>
          <h2>Digital Games</h2>

          <div className='sort-filter-wrapper'></div>

          <div className='game-list-wrapper'>
            <div className='total-item mt-4'>{gameItems.length} items</div>
            <ul className='my-5'>
              {currentRecords.map((game) => (
                <li key={game.ID} className='mb-2'>
                  <Link
                    className='text-black text-decoration-none'
                    to={`/shop/${game.ID}`}
                  >
                    <div className='games-cover mb-2 position-relative'>
                      <img src={game.image} alt='game image' />
                    </div>
                    <p className='me-2'>{game.Title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
