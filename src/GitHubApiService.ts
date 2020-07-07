import * as request from "request";
import { User } from "./User";
import { Repo } from "./Repo";

const OPTIONS: any = {
    headers: {
        "User-Agent": "Request"
    },
    json: true
};

export class GitHubApiService{
    
    getUserInfo(userName: string, callBack: (user: User) => any){
       
        request.get("https://api.github.com/users/" + userName, OPTIONS, (error: any, response: any, body: any) => {
            let user = new User(body);
            callBack(user);
        })
    }

    getRepos(userName: string, callBack: (repos: Repo[]) => any){

        request.get("https://api.github.com/users/" + userName + "/repos", OPTIONS, (error: any, response: any, body: any) => {
           let repos = body.map((repo: any) => new Repo(repo));
           callBack(repos);
        })
    }
}