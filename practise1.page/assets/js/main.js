fetch('https://646b5a2d7d3c1cae4ce3adf5.mockapi.io/api/JSON/PRODUCT',{
    method:'POST',
    headers:{
       'Content-type':'aplication/json'
    },
    body : JSON.stringify({
        
        name:'',
        img:'',
        text:'',
    })

}).then(res=>{
    console.log(res);
})