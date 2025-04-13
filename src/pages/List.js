import { useContext, useState } from "react";
import { ListContext } from "../components.js/ListContext";
import { click } from "@testing-library/user-event/dist/click";

function List() {
  const { studentList, setStudentList, favStudentList, setFavStudentList } =
    useContext(ListContext);
  const [ename, setEname] = useState("");

  const addToFav = (item) => {
    item.clicked = true;
    setFavStudentList([
      ...favStudentList,
      { id: favStudentList.length + 1, name: item.name, clicked: item.clicked },
    ]);
    console.log(favStudentList);
  };

  const nameInput = (e) => {
    setEname(e.target.value);
  };

  const addStudent = () => {
    setStudentList([
      ...studentList,
      { id: studentList.length + 1, name: ename, clicked: false },
    ]);
    setEname("");
  };
  var newList=[]
  const removeFromList=(item)=>{
    studentList.map((x)=>{
      if(item.name===x.name){
          newList=[...newList]
      }
      else {
        newList=[...newList,{id:newList.length+1,name:x.name}]
      }
})

  setStudentList(newList)
  }

  return (
    <div className="m-5">
      <input
        className="w-80 border border-black rounded-md p-1 mr-1"
        type="text"
        placeholder="Add a student name"
        value={ename}
        onChange={nameInput}
      ></input>
      <button
        className="bg-[#4c4cea] p-1 w-24 border rounded-md"
        onClick={addStudent}
      >
        Add
      </button>

      {studentList.map((item) => {
        return (
          <div className="flex gap-4 my-4 ">
            <p className="w-56 text-xl mr-20">
              {item.id}. {item.name}{" "}
            </p>
            <button
              style={{ backgroundColor: item.clicked ? "lightgreen" : "green" }}
              className=" border rounded-xl text-white p-1 px-2 h-fit"
              onClick={() => addToFav(item)}
              disabled={item.clicked}
            >
              {item.clicked ? <p>Added</p> : <p>Add to Favourite</p>}
            </button>

            <button   className="bg-[#fd1e1e] border rounded-xl text-white p-1 px-2 h-fit"  onClick={() =>removeFromList(item)}>
           Remove
          </button> 
          </div>
        );
      })}
    </div>
  );
}

export default List;
