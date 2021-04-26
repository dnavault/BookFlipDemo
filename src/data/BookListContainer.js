import React, { useState, useEffect } from "react";

function BookListContainer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        "https://hn.algolia.com/api/v1/search?query=redux"
      );
      response = await response.json();
      console.log(response);
      setData(response);
    }
    fetchData();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}

export default BookListContainer;
