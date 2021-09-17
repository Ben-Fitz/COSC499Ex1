//Balanced Words-Ben Fitzharris

console.log("This has run")


    function convertChar(char){

    }

    function Balanced(word){
        wordArr = word.toLowerCase()
        wordArr = word.split("");
        wordVals = []
        console.log(wordArr[0].charCodeAt())
        wordArr.forEach(element => {
        
            wordVals.push(element.charCodeAt())

            
        });
        console.log(wordVals);
    
    }

input = "ogopogo"

Balanced(input)


