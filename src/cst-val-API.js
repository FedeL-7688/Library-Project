


function bookLimit(bookTitle){
 
   let text = "all good";
   if (bookTitle.validity.tooLong){
    text = "too long title..."
   }
   console.log(text)
 }


function addTest(el){
  el.addEventListener("change",(e)=>{
    e.preventDefault()
    isValidText(el)
  })
}

function isValidText(el){
 const regex = /^[A-Za-z]+$/
 if(!regex.test(el.value)){
  el.setCustomValidity("Only letters allowed")
  el.reportValidity()
}
 else {
  el.setCustomValidity("")
 }
}

function isRequired(el){
  console.log(el.validity)
  if (el.validity.valueMissing){
    el.setCustomValidity("This field is required")
    el.reportValidity()
    return false
  }

 else{el.setCustomValidity("");
  return true
 }
 
}




export{bookLimit, isRequired, addTest}