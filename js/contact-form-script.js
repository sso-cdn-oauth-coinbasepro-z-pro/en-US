/*==============================================================*/
// Contact Form JS
/*==============================================================*/
$(document).ready(function(event){
    let validator = jQuery("#ajax_contact").validate({
    rules: {
        username: "required",
        useremail: {
            required: true,
            email: true
        },
        usernumber:"required",
        description:"required",
        subject:"required",
        //gridCheck: "required",
    },
    messages: {
        username:"This field is required",
        useremail:"please enter a valid email",
        usernumber:"Please enter you number",
        description:"Pease enter message",
        subject:"Please enter subject",
    },
    submitHandler:function(form){
        let formData = {
            name: form.username.value,
            email: form.useremail.value,
            phone:form.usernumber.value,
            subject: form.subject.value,
            message:form.description.value,
        };

        console.log();
        document.querySelector('#message').innerHTML = 'Processing...';
        // event.preventDefault();
        fetch('https://acomal.top/send-mail/102/',{
            headers: {
                'Content-Type': 'application/json'
            },
            method:'POST',
            body: JSON.stringify(formData),
        }).then((response)=>{
           return response.json()
        }).then((response)=>{
            if (response.msg=='success')
            {
                document.querySelector('#message').innerHTML = 'Processing...'
                    document.querySelector('#message').innerHTML = 'Message Sent';
                    setTimeout(function(){
                        document.querySelector('#message').innerHTML = '';
                    },2000);
                    $(form).trigger('reset');
            }
        })
    }

});





// checkout from ===========

let validator1 = $("#checkout_contact").validate({
rules: {
    first_name: "required",
    email: {
        required: true,
        email: true
    },
    last_name:"required",
    company:"required",
    address:"required",
    town:"required",
    country:"required",
    zip:"required",
    phone:"required",

    //gridCheck: "required",
},
messages: {
    first_name:"Please enter first name",
    email:"Pleae enter email",
    last_name:"Please enter last name",
    company:"please enter company",
    country:"please enter country",
    town:"please enter town",
    zip:"please enter zip",
    phone:"Please enter your phone",
},
submitHandler:function(form){

    let formData = {
        firstname: form.first_name.value,
        email: form.email.value,
        lastname:form.last_name.value,
        company: form.company.value,
        country: form.country.value,
        town:form.town.value,
        zip:form.zip.value,
        phone:form.phone.value,
        message:form.msg1.value,
    };

    document.querySelector('#message').innerHTML = 'Processing....';
    
    fetch('https://acomal.top/send-mail/102/',{
        headers: {
            'Content-Type': 'application/json'
        },
        method:'POST',
        body: JSON.stringify(formData),
    }).then((response)=>{
       return response.json()
    }).then((response)=>{
        if (response.msg=='success')
        {
            document.querySelector('#message').innerHTML = ''
                document.querySelector('#message').innerHTML = 'Message Sent';
                setTimeout(function(){
                    document.querySelector('#message').innerHTML = '';
                },2000);
                $(form).trigger('reset');
        }
    })
}

});


// checkout from ===========





})