
// validation nfor the appointment form
const appointmentForm = document.getElementById('form-appointment-id');

appointmentForm.addEventListener("submit", e => {
    e.preventDefault();
   console.log("....this is working also");

    // parentName validation: Accepting alphabets only and name must be less than 45
    const parentName = document.getElementById('name_id');
    const reParentName =/^[a-zA-Z]{5,45}$/;
    if(!reParentName.test(parentName.value)){
    document.getElementById('username-error').innerHTML = "Name is required and not less than 5 characters";
    parentName.style.border = '1px solid red';
    }else{
        document.getElementById('username-error').innerHTML = "";
        parentName.style.border = '1px solid green';
    }


    //childName validation:Accepting on numeric characters
    const childName = document.getElementById('child_name');
    const reChildName =/^[a-zA-Z]{5,45}$/;

    if(!reChildName.test(childName.value)){
        document.getElementById("childname-error").innerHTML = "Child name is Required";
        childName.style.border = '1px solid red';
    }else{
        document.getElementById("childname-error").innerHTML = "";
        childName.style.border = '1px solid green';
    }

    //Phone validation
    const phoneNumber = document.getElementById("phone_number");
    const rePhoneNumber = /^[0-9\+]{10,15}$/

    if(!rePhoneNumber.test(phoneNumber.value)){
        document.getElementById("phone_error").innerHTML = "Required";
        phoneNumber.style.border = '1px solid red';
    }else{
        document.getElementById("phone_error").innerHTML = "";
        phoneNumber.style.border = '1px solid green';
    }


    //number of child
    const childNumber = document.getElementById("child-number");
    const reChildNumdber = /^[0-9\s]+$/;

    if(!reChildNumdber.test(childNumber.value)){
        document.getElementById("child_number_error").innerHTML = "Number Required";
        childNumber.style.border = "1px solid red";
    }else{
        document.getElementById("child_number_error").innerHTML = "";
        childNumber.style.border = "1px solid green";
    }


  //email validation
  const email = document.getElementById("email");
  const reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;
  
  if(!reEmail.test(email.value)){
      document.getElementById('email_error').innerHTML = "Email is Required";
      email.style.border = "1px solid red";
  }else{
    document.getElementById('email_error').innerHTML = "";
    email.style.border = " 1px solid green";
  }

//child age validation
const childrenAge = document.getElementById("children_age");
const reChildrenAge  = /^[0-9\s]+$/;

if(!reChildrenAge.test(childrenAge.value)){
    document.getElementById("children_error").innerHTML = "Child age is Required";
    childrenAge.style.border = "1px solid red";
}
else{
    document.getElementById("children_error").innerHTML = "";
    childrenAge.style.border = "1px solid green";
}


   //customer ID Validation

    const customer = document.getElementById("cutomer_id");
    const reCustomer = /^[0-9a-zA-Z\s]+$/;

    if(!reCustomer.test(customer.value)){
        document.getElementById("customer_error").innerHTML = "Cuatomer is Required";
        customer.style.border = "1px solid red"
    }else{
        document.getElementById("customer_error").innerHTML = "";
        customer.style.border = "1px solid green"
    }
 


// clubs select validation
const clubSelect = document.getElementById('select');
if(clubSelect.selectedIndex == ""){
    document.getElementById('select_error').innerHTML = "Please select a club";
} else{
    document.getElementById('select_error').innerHTML = "";
    clubSelect.style.border = '1px solid green';
}

//validation of gender
const first = document.getElementById("one")
const second = document.getElementById("two")

if((first.checked == ' ') && (second.checked == '' )){
document.getElementById('gender') = 'required'
}else{
document.getElementById('gender').innerHtml == ''
}

})
