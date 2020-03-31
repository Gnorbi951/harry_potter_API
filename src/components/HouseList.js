import React, { useEffect, useState } from "react";
import axios from "axios";

const HouseList = () => {
  const [key, setKey] = useState(
    "?&key=$2a$10$k64D2VOaGCBynzK6r9E4GeAZKmgXwdSWjJwFdiicclaHlo6EPJmkO"
  );

  useEffect(() => {
    axios
      .get("https://www.potterapi.com/v1/houses" + key)
      .then(resp => console.log(resp));
  }, []);

  return <div>kek</div>;
};

export default HouseList;
