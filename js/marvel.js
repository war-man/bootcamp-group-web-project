class character{
	constructor(name,description,image){
  	this.name=name;
    this.description=description;
    this.image=image;
  }
  //getName is method , name is variable
  getName(){
    return this.name;
    
  }
  getDescription(){
  	return this.description;
  }
  getImage(){
   	return this.image;
  }

}
// to handle event 
find = (event) =>{
event.preventDefault();
var param= document.getElementById("name").value;
var marvelUrl="https://gateway.marvel.com/v1/public/characters?name="+param+"&ts=1&apikey=72469e3c574bb2c9b801a5a820cb1544&hash=c3943e7f8e5b58c6d62d81b7393fe03b";


$.ajax({
      url: marvelUrl,
      dataType:'json',
    }).then(resultAPI => {
     console.log(resultAPI);
     alert(resultAPI.data.results[0].name);
    }).catch( e  => console.log(e));

};
document.getElementById("marvelform").addEventListener('submit',find); 




