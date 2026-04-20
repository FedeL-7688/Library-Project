let bookTitle = document.querySelector("#book")


function bookLimit(){
 
   let text = "all good";
   if (bookTitle.validity.tooLong){
    text = "too long title..."
   }
   console.log(text)
 }


bookTitle.check

export{bookLimit}