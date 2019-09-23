import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Pagination from 'react-hooks-paginator';

export default () => {
  useEffect(() => {
    fetchItems();
  }, []);
  const pageLimit = 20;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItem, setCurrentItem] = useState([]);
  const [items, setItems] = useState([
    {
      image: {}
    }
  ]);

  const fetchItems = async () => {
    const data = await fetch('https://api.tvmaze.com/shows/757/episodes');
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  useEffect(() => {
    setCurrentItem(items.slice(offset, offset + pageLimit));
  }, [offset, items]);

  return (
    /* <div>
      {items.map(item => (
        <p key={item.id}>
          <li>{item.name}</li>
        </p>
      ))} */
    <div>
      <Link className="Link" to="/">
        <p>Home</p>
      </Link>
      <h1>Batman Episodes List based on the Orginal Airdate:</h1>
      {currentItem.map(item => (
        <div key={item.airdate}>
          <li>
            <h1>{item.name}</h1>
            <p>Episode Number: {item.number}</p>
            <p>Season: {item.season}</p>
            <p>Airdate Order: {item.airdate}</p>
            <img
              src={item.image.original}
              alt="Batman"
              width="500"
              height="400"
            />
            <p>Episode Summary: {item.summary}</p>
          </li>
        </div>
      ))}
      <Pagination
        totalRecords={items.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
