import React, { useState, useEffect } from "react";

function BookListContainer() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        "https://fakerapi.it/api/v1/books?_quantity=100"
      );
      response = await response.json();
      console.log(response.data);
      setBooks(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
    {books.map(item => <div>{item.title}</div>)};
    </>
    );
  }
export default BookListContainer;
