class User {
  constructor(name, password) {
    this.name = name, 
    this.password = password
  }

  get name(){
    return `your registered name is: ${this._name}`
  }

  set name(value){
    this._name = value
  }

  get password(){
    return `your registered password is: sdfsad${this._password}jhfkfasdjfhf`
  }

  set password(value){
    this._password = value
  }
}

const user1 = new User('birender', 12323423)

console.log(user1)
console.log(user1.name)
console.log(user1.password)