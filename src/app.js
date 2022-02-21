const yargs = require("yargs");
const Movie = require("./utils");

// console.log(yargs.argv);

//node src/app.js --name="steve" makes key value pair - name: "steve"
//with .name will only output steve

const app = (yargsObj) =>{ //parameter should reflect what's given to it
    if(yargsObj.add){
        //add movie to array console log array
        const movie = new Movie(yargsObj.title, yargsObj.actor)
        movie.addMovie();
        console.log(movie.list())
    }else{
        console.log("incorrect")
    }
}

app(yargs.argv);