import React, { useEffect, useState } from "react";
import { useCategories } from "../library";
import OneCategory from "./OneCategory";

function AdminCategories() {
    
  const categories = useCategories();

  let onecategory = categories.map((category) => {
    return <OneCategory key={category.id} category={category} />;
  });
  return <div>
    <h2>Categories</h2>
    {onecategory}
    </div>;
}

export default AdminCategories;
