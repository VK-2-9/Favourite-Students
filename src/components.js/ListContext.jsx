import { createContext, useState } from "react"

const ListContext=createContext()

function ListContextProvider(data){

    const [studentList,setStudentList]=useState([
        
    ])
   
    const[favStudentList,setFavStudentList]=useState([])

    return(
        
        <ListContext.Provider value={{studentList,setStudentList,favStudentList,setFavStudentList}}>
            {data.children}
        </ListContext.Provider>
    

    )
}

export default ListContextProvider

export {ListContext}