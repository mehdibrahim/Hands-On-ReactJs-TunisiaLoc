import React,{Component} from 'react';


class Form extends Component {

  state={
      title: 'TunisiaLoc Input Data ',
      act: 0,
      index: '',
      datas: []
    }
  

  componentDidMount(){
    this.refs.FullName.focus();
  }
  

  fSubmit = (e) => {
    e.preventDefault();
    
    let datas = this.state.datas;
    let FullName = this.refs.FullName.value;
    let City = this.refs.City.value;
    let Adress = this.refs.Adress.value;
    let Price = this.refs.Price.value;
    let Phone = this.refs.Phone.value;
    let long = this.refs.long.value;
    let alt = this.refs.alt.value;
    let key = this.refs.key.value;
     if (!FullName || !City || !Adress || !Price || !Phone|| !long || !alt || !key){
       alert('please fill in all the boxes');
     }
     else if(this.state.act === 0){   
      
      let data = {
         FullName:FullName,
         City:City,
         Adress:Adress,
         Price:Price,
         Phone:Phone,
         long:long,
         alt:alt,
         key:key,
      }
      
      localStorage.setItem(data.key,JSON.stringify(data)) ;
      
      datas.push(data);
    }else{                    
      let index = this.state.index;
      datas[index].FullName = FullName;
      datas[index].City = City;
      datas[index].Adress = Adress;
      datas[index].Price = Price;
      datas[index].Phone= Phone;
      datas[index].long =long;
      datas[index].alt = alt;
      datas[index].key= key;


      localStorage.setItem(key,JSON.stringify(datas[index])) ;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.FullName.focus();
  }

  fRemove = (i) => {
    
    let datas = this.state.datas;
    localStorage.removeItem(datas[i].key);
   
    datas.splice(i,1);                      
      this.setState({
      datas: datas
    });
    
    this.refs.myForm.reset();
    this.refs.FullName.focus();
  }
   
  fEdit = (i) => {

    let data = this.state.datas[i];
    this.refs.FullName.value = data.FullName;
    this.refs.City.value = data.City;
    this.refs.Adress.value = data.Adress;
    this.refs.Price.value = data.Price;
    this.refs.Phone.value = data.Phone;
    this.refs.long.value = data.long;
    this.refs.alt.value = data.alt;
    this.refs.key.value = data.key;
    
    this.setState({
      act: 1,
      index: i
    });

    this.refs.FullName.focus();
  }  

  render() {
    
    let datas = this.state.datas;
    return (
      <div className="App">
        
        <form ref="myForm" className="myForm">
        <h1 >{this.state.title}</h1>
        
          <input type="text" ref = "FullName" placeholder = "Full Name" className="formField"/>
          <input type="text" ref = "City" placeholder = "City" className="formField" />
          <input type="text" ref = "Adress" placeholder = "Adress" className="formField" />
          <input type="text" ref = "Price" placeholder = "Price" className="formField" />
          <input type="number" ref = "Phone" placeholder = "Phone" className="formField" />
          <input type="number" ref = "long" placeholder = "Longitude (Google Maps)" className="formField" />
          <input type="number" ref = "alt" placeholder = "Latitude  (Google Maps)" className="formField" />
          <input type="number" ref = "key" placeholder = "Key" className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
          
         
   
        </form>
        
        <table className="table">
        
        <tr>
          
          <th>Full Name</th>
          <th>City</th>
          <th>Adress</th>
          <th>Price</th>
          <th>Phone</th>
          <th>Longitude</th>
          <th>Latitude</th>
          <th>Key</th>

        </tr>
        
          {datas.map((data,i) =>
          
            <tr key={i} className="myList">
            <td>{data.FullName}</td>
            <td>{data.City}</td>
            <td>{data.Adress}</td>
            <td>{data.Price}</td>
            <td>{data.Phone}</td>
            <td>{data.long}</td>
            <td>{data.alt}</td>
            <td>{data.key}</td>
            
            <td>
           
              <button onClick={()=>this.fRemove(i)} className="myListButton">remove </button>
            </td>
            
            <td>
              <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
            </td>
            </tr>
             
          )}
          </table>
          
        
      </div>
    );
  }
}

export default Form;