// Question 12: Greetings: Use the array from Exercise 11. Instead of just
//  printing each person’s name, print a message to them. The message
//   should be the same for each person, but personalized
//    with their name.



let friendsNmae:string [] =['aleena','aqsa','huma','hina','saba']

let message:string =" would you u like to come  at my home today"

for (let i = 0; i < friendsNmae.length; i++) {
    console.log( friendsNmae[i]  + message)
    
}