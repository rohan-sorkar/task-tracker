import React from "react";
import { useState } from "react";

const BulkController = (props) => {
  const {bulkText, clearSelected, clearCompleted, reset} = props;
  return (
    <div className="flex gap-2 justify-center mt-5">
      <button onClick={clearSelected} className={`${bulkText === 'selected' && 'hover:bg-orange-900 bg-orange-800'} border-2 border-orange-800 rounded-full text-xs sm:text-base px-1 sm:px-5 py-2 sm:py-1 text-gray-400 shadow-sm shadow-gray-600`} >
        Clear selected
      </button>
      <button onClick={clearCompleted} className={`${bulkText === 'completed' && 'hover:bg-orange-900 bg-orange-800'} border-2 border-orange-800 rounded-full text-xs sm:text-base px-1 sm:px-5 py-2 sm:py-1 text-gray-400 shadow-sm shadow-gray-600`}>
        Clear Completed
      </button>
      <button onClick={reset} className={`${bulkText === 'reset' && 'hover:bg-orange-900 bg-orange-800'} border-2 border-orange-800 rounded-full text-xs sm:text-base px-1 sm:px-5 py-2 sm:py-1 text-gray-400 shadow-sm shadow-gray-600`} >
        Reset
      </button>
    </div>
  );
};

export default BulkController;
