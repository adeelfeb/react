// import conf from "../conf/conf";

// import {Client, Databases, Storage, Query , ID} from "appwrite"


// export class Service{
//     client = new Client()
//     databases;
//     bucket;
//     constructor(){
//         this.client
//         .setEndpoint(conf.appwriteUrl)
//         .setProject(conf.appwriteProjectId);
//         this.databases = new Databases(this.client);
//         this.bucket = new Storage(this.client);

        
//     } 

//     async createPost({title, featureImage, slug, content, status, userId}){
//         try {
//             return await this.databases.createDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug,
//                 {
//                     title,
//                     content,
//                     status, userId,
//                     featureImage
//                 }
//             )
//         } catch (error) {
//             throw error
//         }
//     }

//     async updatePost(slug, {title, featureImage,  content, status}){
//         try {
//             await this.databases.updateDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug,
//                 {
//                     title,
//                     featureImage,
//                     content,
//                     status
//                 }
//             )
//         } catch (error) {
//             throw error
//         }

//     }

//     async deleteDocument(slug){
//         try {
//             await this.databases.deleteDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug
//             )
//             return true
//         } catch (error) {
//             throw error
//             return false
//         }
//     }

//     async getPost(slug){
//         try {
//             return await this.databases.getDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug
//             )
//         } catch (error) {
//             throw error
//             return false
//         }
//     }

//     async getPosts(queries = [Query.equal("status", "active")]){
//         try {
//             return await this.databases.listDocuments(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 queries
//             )
//         } catch (error) {
//             throw error
//             return false
//         }
//     }


//     //Uploading file service

//     async uploadFile(file){
//         try {
//             return await this.bucket.createFile(
//                 conf.appwriteBucketId,
//                 ID.unique(),
//                 file
//             )            
//         } catch (error) {
//             throw error
//             return false
//         }
//     }

//     async deleteFile(fileId){
//         try {
//             await this.bucket.deleteFile(
//                 conf.appwriteBucketId,
//                 fileId
//             )
//             return true
//         } catch (error) {
//             console.log("Error while deleting", error)
//         }
//     }

//     getFilePreview(fileId){
//         return this.bucket.getFilePreview(
//             conf.appwriteBucketId,
//             fileId
//         )
//     } 

// }


// const service = new Service()

// export default service

import conf from "../conf/conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // async createPost({ title, featureImage, slug, content, status, userId }) {
  //   try {
  //     return await this.databases.createDocument(
  //       conf.appwriteDatabaseId,
  //       conf.appwriteCollectionId,
  //       slug,
  //       {
  //         title,
  //         content,
  //         status,
  //         userId,
  //         featureImage,
  //       }
  //     );
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  async createPost({ title, featureImage, slug, content, status, userId }) {
    try {
        // Ensure featuredImage is passed correctly to match your Appwrite collection schema
        if (!featureImage) {
            throw new Error("featuredImage is required");
        }

        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                status,
                userId,
                featuredImage: featureImage, // Ensure it matches the schema
            }
        );
    } catch (error) {
        throw error;
    }
}


  async updatePost(slug, { title, featureImage, content, status }) {
    try {
      await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          featureImage,
          content,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteDocument(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      throw error;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      throw error;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      throw error;
    }
  }

  // Uploading file service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Error while deleting", error);
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;