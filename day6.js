const book = {
    name:"Harry Potter",
    author:"J.K. Rowlling",
    publisher:"Bloomsbury Publishing",
    greet:function()
        {
        console.log("Welcome to the magical world of " + this.name + " by " + this.author + "!");
    }
};
book.greet();
