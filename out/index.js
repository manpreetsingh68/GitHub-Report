"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubApiService_1 = require("./GitHubApiService");
var lodash_1 = __importDefault(require("lodash"));
var service = new GitHubApiService_1.GitHubApiService();
if (process.argv.length < 3) {
    console.log("Please pass the username as an argument");
}
else {
    var username_1 = process.argv[2];
    service.getUserInfo(username_1, function (user) {
        service.getRepos(username_1, function (repos) {
            var sortedRepos = lodash_1.default.sortBy(repos, [function (repo) { return repo.size * -1; }]);
            var filteredRepos = lodash_1.default.take(sortedRepos, 5);
            user.repos = filteredRepos;
            console.log(user);
        });
    });
}
