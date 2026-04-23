let bookTitle = document.querySelector("#book")


function bookLimit(){
 
   let text = "all good";
   if (bookTitle.validity.tooLong){
    text = "too long title..."
   }
   console.log(text)
 }

function isRequired(el){
  if (el.valueMissing){
    el.setCustomValidity("This field is required");
  }
 else{el.setCustomValidity("");
 }
}

bookTitle.check

export{bookLimit, isRequired}