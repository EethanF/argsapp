const movieArray = [];

class Movie {
    constructor(title = "Not specified", actor = "Not specified"){//constructer is where parameters go, if actor is undefined assigning an option arguement
        this.title = title;
        this.actor = actor;
    };
    addMovie(){
        movieArray.push(this)
    };
    list(){
        return movieArray
    }
}

module.exports = Movie;