//Balanced Words-Ben Fitzharris

console.log("This has run")


    function convertChar(char){

    }

    function Balanced(word){
        //setup
        wordArr = word.toLowerCase()
        wordArr = word.split("");
        wordVals = []
        firstHalf = 0;
        secondHalf = 0;
    
        //console.log(wordArr[0].charCodeAt())
        //for each letter in the word generate a number starting at 1 for a and incrementing by 1 by subsequent letters eg. b = 2
        wordArr.forEach(element => {
            wordVals.push((element.charCodeAt()- 96))
        });
        //console.log(wordVals);
        //add the values of the first and second halves of the word into seperate variables
        for (let i = 0; i < (wordArr.length/2); i++){
            firstHalf += wordVals[i]
            secondHalf += wordVals[wordVals.length - (i+1)]
            //console.log(firstHalf)
            //console.log(secondHalf)
        }
        //compare the first and second halves, if they are equal the string is balanced, else it is not.
        if(firstHalf == secondHalf){
            console.log("True!")
        }
        else{
            console.log("False...")
        }
    
    }

    function isPalindrome(word){
        //create a for loop to go through the word from the outside in
        for(let i = 0; i < (word.length/2); i++){
            if(word.charAt(i) != word.charAt(word.length - (i + 1))){ //if character at location i and location length - i are identical continue outherwise break the loop as this is not a palindrome
                console.log("No it is not a palindrome")
                return;
            }
        }
        console.log("Yes it is a palindrome")
    }

//change to the string you want to check here. 
input = "ogopogo"
//run
console.log("Is " + input + " balanced?")
Balanced(input)
console.log("Is " + input + " a palindrome?")
isPalindrome(input)
console.log();

input = "zips"
//run 2
console.log("Is " + input + " balanced?")
Balanced(input)
console.log("Is " + input + " a palindrome?")
isPalindrome(input)
console.log();

input = "Capstone"
//run 2
console.log("Is " + input + " balanced?")
Balanced(input)
console.log("Is " + input + " a palindrome?")
isPalindrome(input)
console.log();



//commit for the camera
