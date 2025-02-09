const crypto =require('crypto');
//function to  find input string that produces an hash starting with '00000'
function bruteForce(prefix){
    let input=0;
    while (true){
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix))
        {
            return {
                input:inputStr ,hash:hash
            };
        }
        input++;
    }
} 
const result=bruteForce('00000');
console.log(`Input : ${result.input}`);
console.log(`Hash : ${result.hash}`);
