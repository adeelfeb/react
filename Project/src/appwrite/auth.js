// import conf from "../conf/conf";

// import {Client, Account , ID} from "appwrite"

// class AuthService{
//     client = new Client()
//     account;
//     constructor(){
//         this.client
//         .setEndpoint(conf.appwriteUrl)
//         .setProject(conf.appwriteProjectId)

//         this.account = new Account(this.client)
//     }

//     async creatAccount({name, email, password}){
//         try {
//             const userAccount = await this.account.create(
//                 ID.unique(),
//                 email,
//                 password,
//                 name,
//             )
//             if(userAccount){
//                 //Login in the user when account is succefully created
//                 return this.login({email, password})
//             }
//             else{
//                 return userAccount
//             }
//         } catch (error) {
//             console.log("Error while creating user account:::", error)
//         }
//     }

//     async login({email, password}){
//         try {
//             return await this.account.createEmailSession(email, password)
//         } catch (error) {
//             throw error
//         }
//     }

//     async getCurrentUser(){
//         try {
//             return await this.account.get()
//         } catch (error) {
//             throw error
//         }
//         return null
//     }

//     async logout(){
//         try {
//             await this.account.deleteSessions()
//         } catch (error) {
//             throw error
//         }
//     }
// }


// const authService = new AuthService()

// export default authService




import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async creatAccount({ name, email, password }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (userAccount) {
                // Login the user when account is successfully created
                return await this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Error while creating user account:::", error);
        }
    }

    async login({ email, password }) {
        try {
            const session = await this.account.createEmailSession(email, password);
            // Store session info locally (if needed)
            return session;
        } catch (error) {
            console.log("Login failed:", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            // Before calling this, check if a session is already created
            const session = await this.account.getSession("current");
            if (session) {
                return await this.account.get();
            } else {
                throw new Error("User is not authenticated.");
            }
        } catch (error) {
            console.log("Error fetching current user:", error);
            throw error;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Logout failed:", error);
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;
