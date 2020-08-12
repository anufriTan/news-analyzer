export class CommitCardList {
    constructor(data, container, callback) {
        this.data = data;  
        this.container = container;         
        this.callback = callback;
        
    }

    addCommitCard(committerName, committerEmail, commitDate, commitMessage, authorAvatar) {
        this.container.appendChild(this.callback(committerName, committerEmail, commitDate, commitMessage, authorAvatar)); 
    }

    render() {        
        this.data.forEach((item) => {          
            this.addCommitCard(item.commit.committer.name, item.commit.committer.email, item.commit.committer.date, item.commit.message, item.author.avatar_url);            
        })
    }
}