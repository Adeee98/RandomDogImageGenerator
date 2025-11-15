    document.querySelector("button").addEventListener("click",async ()=>{
        const link = `https://api.thecatapi.com/v1/images/search`

            const responce = await fetch(link)
            console.log(responce)
            const data = await responce.json()
            console.log(data)

            document.querySelector("img").src = data[0].url
    })