const profile = {
  username: 'Jacob',
  playTime: 300,
  //change name
  changeUsername(newName) {
    this.username = newName;
  },
  //change hours
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  //return result
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo());

profile.changeUsername('Marco');
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo());
