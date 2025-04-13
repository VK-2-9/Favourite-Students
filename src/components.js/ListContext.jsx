import { createContext, useState } from "react"

const ListContext=createContext()

function ListContextProvider(data){

    const [studentList,setStudentList]=useState([
        {
            id:1,
            name:"Messi",
            clicked:false,
        },
        {
            id:2,
            name:"Ronaldo",
            clicked:false,
        },
        {
            id:3,
            name:"Neymar",
            clicked:false,
        },
        {
            id:4,
            name:"Gavi",
            clicked:false,
        },
        {
            id:5,
            name:"Pedri",
            clicked:false,
        },
        {
            id:6,
            name:"Yamal",
            clicked:false,
        },
        {
            id:7,
            name:"Ramos",
            clicked:false,
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