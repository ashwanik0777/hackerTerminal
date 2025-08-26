
async function heackerTerminal(){
    return new Promise((resolve, reject) => {
        timeout=1+6*Math.random()
        setTimeout(()=>{
            resolve()
        },timeout*1000)
    })
}

const addItem= async(item)=>{
    await heackerTerminal()
    div=document.createElement("div");
    div.innerHTML=item;
    document.body.append(div);
    
}
async function main(){

    setInterval(()=>{
       let last=document.body.lastElementChild;
     if(last.innerHTML.endsWith("...")){
        last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3);
     }else{
        last.innerHTML=last.innerHTML+"."
     }
    },700);

let arr=["intilaising hacking","Reading your file","Password file Detected","Cracking password","Sending All pasward and secured file to server","Cleaning up"];


for (const item of arr) {
    await addItem(item)
}

}
main()