const getData = ()=>{
    fetch('https://munnapassword.pythonanywhere.com/contact/').then((value)=>{
        console.log('hii')
        return value.json();
    }).then((val)=>{
        console.log(val);
       val.forEach(element => {
        document.getElementById("root").innerHTML += `<tr>
            <td> ${element.name}</td>    
            <td> ${element.email}</td>    
            <td> ${element.phone}</td>    
            <td> ${element.message}</td>    
        </tr>`
        });
    }).catch((err)=>{
        console.log(err);
    });
}


const getDataAgain = ()=>{
    fetch('https://munnapassword.pythonanywhere.com/contact/').then((value)=>{
        console.log('hii')
        return value.json();
    }).then((val)=>{
        console.log(val);
       val.forEach(element => {
        document.getElementById("root").innerHTML += `<tr>
            <td> ${element.name}</td>    
            <td> ${element.email}</td>    
            <td> ${element.phone}</td>    
            <td> ${element.message}</td>    
        </tr>`
        });
    }).catch((err)=>{
        console.log(err);
    });
}

getData();

const handleSubmit = ()=>{
    const data = {
        "name" : document.forms.form1.name.value,
        "email" : document.forms.form1.email.value, 
        "phone" : document.forms.form1.contact.value,
        "message" : document.forms.form1.message.value
    }
    fetch('https://munnapassword.pythonanywhere.com/contact/', {
        method : "POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data) 
    }).then((res)=>{
        console.log(res);
        return res.json();
    }).then((val)=>{
        // getData();
        location.reload()
    }).catch((err)=>{
        console.log(err);
    });
}