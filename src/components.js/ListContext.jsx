import { createContext, useState } from "react"

const ListContext=createContext()

function ListContextProvider(data){

    const [studentList,setStudentList]=useState([
        {
            id:1,
            name:"Messi",
            favourite:true,
        },
        {
            id:2,
            name:"Ronaldo",
            favourite:false,
        },
        {
            id:3,
            name:"Neymar",
            favourite:true,
        },
        {
            id:4,
            name:"Gavi",
            favourite:false,
        },
        {
            id:5,
            name:"Pedri",
            favourite:false,
        },
        {
            id:6,
            name:"Yamal",
            favourite:false,
        },
        {
            id:7,
            name:"Ramos",
            favourite:false,
        },
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