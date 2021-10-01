let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnSubmit.onclick = function(){
let username = InptName.value
if (members.includes(username))
  lblResults.textContent= `${username}, you are already a member.`
 else {
  members.push(username)
  lblResults.textContent =`${username}, you have been added to the membership roster. `
}
}
