let url="http://universities.hipolabs.com/search?name=";

let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    
    let country=document.querySelector("input").value;
    console.log(country);

    let collage=await getColleges(country);
    show(collage);   
});
function show(college){
    let list=document.querySelector("#list");
    list.innerText="";
    for(coll of college){
     console.log(coll.name);

        let li=document.createElement("li");
        li.innerText=coll.name;
        list.appendChild(li);
    }
}
async function getColleges(country){
try{
 let res=await axios.get(url+country);
return res.data;
    }
    catch(err){
        return [];
    }

}