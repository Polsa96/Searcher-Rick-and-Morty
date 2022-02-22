import './Pagination.css';
import React from 'react';

function Pagination({changePageUp, changePageDown, pages}) {

  console.log(pages);  

  return (
      
      <div className="paginationDiv">

        {/* Això és un IF */}
        {pages>1 && <button className="paginationBtn" onClick={changePageDown}>&lt; &lt; Previous</button>}
        
        <button className="paginationBtn" onClick={changePageUp}>Next &gt; &gt;</button>

        
      </div>

    
    
  );
}

export default React.memo(Pagination);
