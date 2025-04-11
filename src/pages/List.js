import { useContext } from "react";
import { ListContext } from "../components.js/ListContext";

function List() {
  const { studentList, setStudentList, favStudentList, setFavStudentList } =
    useContext(ListContext);

    const addToFav=(e)=>{
        setFavStudentList([...favStudentList,{id:favStudentList.length+1,name:e.target.value}])
       
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
             onClick={addToFav}   value={item.name}
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
