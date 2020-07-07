import { GitHubApiService} from "./GitHubApiService";
import { User } from "./User";
import { Repo } from "./Repo";
import _ from "lodash";

let service = new GitHubApiService();
if(process.argv.length < 3){
    console.log("Please pass the username as an argument");
}
else{
    let username = process.argv[2];
    service.getUserInfo(username, (user: User) => {
        service.getRepos(username, (repos: Repo[]) =>{
            let sortedRepos = _.sortBy(repos,[(repo: Repo) => repo.size * -1]);
            let filteredRepos = _.take(sortedRepos, 5);
            user.repos = filteredRepos;
            console.log(user);
        } )
    });
}


