console.log('This is client side javascript')

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
//const messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'Loading...'
weatherform.addEventListener('submit', (event) => 
{    
     event.preventDefault()   
     const location = search.value
     const url = 'http://localhost:3000/weather?address=' + location 
      
  
     fetch(url).then((response) => {
      response.json().then((data) => {
          if(data.error){
              messageOne.textContent = data.error
          }else{
              messageOne.textContent = data.Data
          }
      })
})

})