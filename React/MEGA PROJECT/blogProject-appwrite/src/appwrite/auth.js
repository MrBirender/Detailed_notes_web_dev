import { Client, Account, ID } from "appwrite";
import confi from "../configuration/config";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(confi.appWriteUrl)
      .setProject(confi.appWriteProjectId);
    this.account = new Account(this.client);
  }

  //creating account:
  async createAccount({ name, email, password }) {
    try {
      const account = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      //   check if the account is created then do the login also;
      if (account) {
        return this.login(email, password);
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }

  //login to the account:
  async login(email, pasword) {
    try {
      return await this.account.createEmailPasswordSession(email, pasword);
    } catch (error) {
      throw error;
    }
  }

  // cheking the current user:
  async getCurrentUser(){
    try {
        return await this.account.get()
        
    } catch (error) {
        console.log(`appwirte service :: getCurrentUser error: ${error}`)
    }

    return null // when the code breaks it's alternative for if else.
  }
  // logout the user:

  async logOut(){
    try {
        return await this.account.deleteSessions()
    } catch (error) {
        console.log(error)
    }
  }
}

const authservice = new AuthService();

export default authservice;
