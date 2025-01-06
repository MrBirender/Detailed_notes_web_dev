import confi from "../configuration/config";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(confi.appWriteUrl)
      .setProject(confi.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  
}

const service = new Service();

export default service;
