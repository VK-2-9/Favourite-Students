import { useContext, useState } from "react";
import { ListContext } from "../components.js/ListContext";

function List() {
  const { studentList, setStudentList, favStudentList, setFavStudentList } =
    useContext(ListContext);

    const addToFav=(item)=>{
        item.clicked=true
        setFavStudentList([...favStudentList,{id:favStudentList.length+1,name:item.name,clicked:item.clicked}])
        console.log(favStudentList) 
        
    }



  return (
    <div className="m-5">
      {studentList.map((item) => {
        return (
          <div className="flex gap-24 my-4 ">
            <p className="w-56 text-xl">
              {item.id}. {item.name}{" "}
            </p>
            <button className="bg-[#2bb626] border rounded-xl text-white p-1 px-2 h-fit"
             onClick={()=>addToFav(item)}  disabled={item.clicked}
            >
              Add to Favourite
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
