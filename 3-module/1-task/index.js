function namify(users) {
  return users.map(user => user.name);
}



//вопрос - а можно ли было написать так?
//let names = users.map((namify) => {
//  return namify.name;
//});