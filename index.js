//create prompt
const userInput = prompt("Enter Froyo flavors separated by commas:");

//userInput --> vanilla,vanilla,vanilla,strawberry,coffee,coffee

//spilt userInput using ,
const order = userInput.split(",");
//console.log(userInput)
//console.log(order)

//create function
function orderQty(order) {
  /** 
    //create empty obj
    //loop over array
        //add the flavor as a key, with a value of 1 if the key doesn't exist otherwise add 1 to the current value
            //ways to add 1 to current value obj[key] = obj[key]++ || obj[key]+=1 ***key will be the flavor

    //return obj created above
*/
        let count = {};

        for (const userInput of order) {
            
            if (count[userInput]) {
                count[userInput]++; 
            }
            else {
                count[userInput] = 1; 
            }
        }
        return count;
}

console.log(orderQty(order));