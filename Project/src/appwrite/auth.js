import conf from "../conf/conf";

import {Client, Account , ID} from "appwrite"

class AuthService{
    client = new Client()
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async creatAccount({name, email, password}){
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name,
            )
            if(userAccount){
                //Login in the user when account is succefully created
                return this.login({email, password})
            }
            else{
                return userAccount
            }
        } catch (error) {
            console.log("Error while creating user account:::", error)
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
        return null
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}


const authService = new AuthService()

export default authService