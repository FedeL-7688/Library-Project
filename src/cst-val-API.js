


function bookLimit(bookTitle){
 
   let text = "all good";
   if (bookTitle.validity.tooLong){
    text = "too long title..."
   }
   console.log(text)
 }



function isRequired(el){
  if (el.validity.valueMissing){
    el.setCustomValidity("This field is required,asshole")
    el.reportValidity()
    return false
  }
 else{el.setCustomValidity("");
  return true
 }
}




export{bookLimit, isRequired}