function makeFriendsList(friends) {
  let ul = document.createElement('UL');
  for (let element of friends) {
    ul.insertAdjacentHTML('beforeend', `<li>${element.firstName} ${element.lastName}</li>`)
  }
  return ul
}
