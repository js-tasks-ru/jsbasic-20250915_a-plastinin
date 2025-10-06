function makeFriendsList(friends) {
  return friends.reduce((ulList, friend) => {
    let liElement = document.createElement("li");
    liElement.innerHTML = `${friend.firstName} ${friend.lastName}`;
    ulList.append(liElement);
    return ulList;
  }, document.createElement("ul"));
}
