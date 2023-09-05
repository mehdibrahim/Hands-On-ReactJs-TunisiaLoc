const database =[
    {
      AppartCity: "Nabeul",
      AppartRooms: 3,
      AppartPrice: 540,


    },

    {
        AppartCity: "Sousse",
        AppartRooms: 2,
        AppartPrice: 640,
  
  
      },


      {
        AppartCity: "Tunis",
        AppartRooms: 1,
        AppartPrice: 440,
  
  
      },


      {
        AppartCity: "Djerba",
        AppartRooms: 2,
        AppartPrice: 940,
  
  
      },
      
      /*async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch ('http://localhost:8080/?q=eniso');
        const data = await response.json();
        this.setState({ totalReactPackages: data.total })
    }*/

     
   










];
//select element passed in 
function selectElement(selector){
    
    return document.querySelector(selector);
}
//clears the content inside of the search-results div 
function clearResults(){
    selectElement('.search-results').innerHTML="";
}



function getResults(){
   
const search =selectElement('.searchbar').value ;
 const el = document.querySelector(".searchbar");
clearResults();
 if (search.length>0){

    for (let i=0;i<database.length;i++){
        if(
            database[i].AppartCity.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ){
           selectElement('.search-results').innerHTML += `
           <div class="search-results-item">
           <span class="search.item"> AppartCity= ${database[i].AppartCity}</span> </br>
           <span class="search.item">  AppartRooms= ${database[i].AppartRooms}</span> </br>
           <span class="search.item">  AppartPrice= ${database[i].AppartPrice}</span>
           
           </div>
            ` ;
           
        }
    }
    

} 

}
export {getResults};


