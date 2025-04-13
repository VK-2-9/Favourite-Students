import { useContext } from "react";
import { ListContext } from "./ListContext";

function FavouriteList() {
  const { studentList, setStudentList, favStudentList, setFavStudentList } =
    useContext(ListContext);
    
    var newList=[]
    const removeStudent=(item)=>{
        item.clicked=false
        newList= favStudentList.filter((x)=>{
                if(item.name===x.name){
                    return false
                }
                else return true
         })
         setFavStudentList(newList)
    }

  return (
    <div className="m-5">
      {favStudentList.map((item) => {
        return (
          <div className="flex gap-24 my-4 ">
            <p className="w-56 text-xl">{item.id}. {item.name} </p>
            <button className="bg-[#f72a2a] border rounded-xl text-white p-1 px-2 h-fit"
             onClick={()=>removeStudent(item)} value={item.name}   
            >
              Remove
            </button>
          </div>
        );
      })}

     
    </div>
  );
}

export default FavouriteList;
