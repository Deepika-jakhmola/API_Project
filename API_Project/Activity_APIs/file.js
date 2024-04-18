
let url="https://api.potterdb.com/v1/characters";
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{

     let character=document.querySelector("input").value;
    console.log(character);  

 getData(character);

});
function show(db){
    let list=document.querySelector("#list");
    list.innerText="";
    for (char  of db)
    {
      console.log(char.name);
        let li=document.createElement("li");
        li.innerText=char.name;
        list.appendChild(li);
    }

}
async function getData(character)
{
try{
let res=await axios.get(url+characters);
return res;
}
catch(e){
    return e;
}
}