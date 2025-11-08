document.querySelector("button").addEventListener("click",async ()=>{
    const link = `https://dog.ceo/api/breeds/image/random`
    try{
        const responce = await fetch(link)
        const data = await responce.json()
        document.querySelector("div").style.backgroundImage = "url(" + data.message + ")"
        document.querySelector("a").href = data.message
    }
    catch(error){
        console.error(error)
    }
})