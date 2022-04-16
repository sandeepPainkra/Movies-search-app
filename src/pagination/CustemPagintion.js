import React from "react";
import { Pagination } from "@material-ui/lab";

const CustemPagintion = ({ setPage, page, numberPage = 10 }) => {
  const handleChange = (event, value) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div className="pagination">
      <Pagination
        hideNextButton
        hidePrevButton
        count={numberPage}
        color="primary"
        onChange={(e) => handleChange(e.target.textContent)}
      />
    </div>
  );
};

export default CustemPagintion;
