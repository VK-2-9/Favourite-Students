import { useContext } from "react";
import { ListContext } from "./ListContext";

function FavouriteList() {
  const { studentList, setStudentList, favStudentList, setFavStudentList } =
    useContext(ListContext);
    
    var newList=[]
    const removeFromFav=(item)=>{
        favStudentList.map((x)=>{
                if(item.name===x.name){
                    newList=[...newList]
                }
                else {
                  newList=[...newList,{id:newList.length+1,name:x.name}]
                }
         })
         setFavStudentList(newList)


        //  changing clicked value................................................
        studentList.map((x)=>{
          if(item.name===x.name){
            x.clicked=false
          }
          
   })

    }

  return (
    <div className="m-5">
      {favStudentList.map((item) => {
        return (
          <div className="flex gap-24 my-4 ">
            <p className="w-56 text-xl">{item.id}. {item.name} </p>
            <button className="bg-[#f72a2a] border rounded-xl text-white p-1 px-2 h-fit"
             onClick={()=>removeFromFav(item)} value={item.name}   
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
