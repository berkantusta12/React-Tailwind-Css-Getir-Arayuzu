import {  useState, useEffect } from "react"
import categoryData from "./Api/categories.json"
// import Category from "components/ui/Category"
import Category from "./ui/Category"

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
//  setTimeout(() =>    setCategories(categoryData), 1000)
setCategories(categoryData);
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3">Kategoriler </h3>

        <div className="grid grid-cols-10">
          {/* {!categories.length && 'Yükleniyor..'}  */}
          {categories && categories.map((category, index) =>  <Category key={index} category={category} />)}
        </div>
      </div>
    </div>
  );
}
