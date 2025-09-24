function showSalary(users, age) {

  const filteredUsers = [];
  for (let user of users) {
    if (user.age <= age) {
      filteredUsers.push(`${user.name}, ${user.balance}`); 
    } 
  }
  return filteredUsers.join('\n');
}