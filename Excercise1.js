//Balanced Words-Ben Fitzharris

console.log("This has run")


    function convertChar(char){

    }

    function Balanced(word){
        wordArr = word.toLowerCase()
        wordArr = word.split("");
        wordVals = []
        firstHalf = 0;
        secondHalf = 0;
    
        console.log(wordArr[0].charCodeAt())
        wordArr.forEach(element => {
            wordVals.push((element.charCodeAt()- 96))
        });
        console.log(wordVals);
        for (let i = 0; i < (wordArr.length/2); i++){
            firstHalf += wordVals[i]
            secondHalf += wordVals[wordVals.length - (i+1)]
            console.log(firstHalf)
            console.log(secondHalf)
        }
        if(firstHalf == secondHalf){
            console.log("True!")
        }
        else{
            console.log("False...")
        }
    
    }
    

input = "ogopogo"

Balanced(input)


