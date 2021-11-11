// create function to determine the given expression is correct or not
// expression will be string of open bracket nor close bracket e.g ({[[()]]})
// your function should determine the expression is it correct or not
// examples:
// ({[]}) => true
// ([][]{})=> true
// ({)(]){[} => false
// [)()] => false

let bracket = "{()}"

function isBracket(string){
    let hasil = []
    let valid = ["{}", "()", "[]"]
    let count = 0
    let arrString = string.split("")
    if(arrString[0] != arrString[arrString.length-1]){
        
        while (arrString.length != 0){
            let test= []
            test.push(arrString.shift())
            test.push(arrString.shift())
            hasil.push(test.join(""))   
        }
        for(let i = 0; i < hasil.length; i++){
            for(let j = 0; j < valid.length; j++){
                if(hasil[i] == valid[j]){
                    count++
                }
            }
        }
        if(count == hasil.length){
            return true
        }else {
            return false
        }
    }else{
        while (arrString.length != 0){
            let test= []
            test.push(arrString.shift())
            test.push(arrString.pop())
            hasil.push(test.join(""))
            
        }
        for(let i = 0; i < hasil.length; i++){
            for(let j = 0; j < valid.length; j++){
                if(hasil[i] == valid[j]){
                    count++
                }
    
            }
        }
        console.log(count)
        if(count == hasil.length){
            return true
        }else {
            return false
        }
    }

   
    
}


console.log(isBracket(bracket))
console.log(isBracket("{)(}"))
console.log(isBracket("{}()[]"))



