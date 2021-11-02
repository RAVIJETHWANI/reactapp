import React from "react"
import CocktailList from "./CocktailList"
import SearchForm from "./CocktailSearch"

const Home =()=>{
    return (
       <main>
       
        <SearchForm />
           <CocktailList />
          
       </main>
    )
}

export default Home
