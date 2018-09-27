let bubble_Sort = (a=array) => {  //using default parameters

    let swapp;
	let n = a.length - 1;
	let x = a;
	do
	{
	    swapp = false;
		for(var i = 0; i < n; i++)
		{
            if (x[i] < x[i+1]) 
            {
            	let temp = x[i];
            	x[i] = x[i+1];
            	x[i+1] = temp;
            	swapp = true;
            }
		}
		n--;

	} while(swapp); //end of do-while loop

    return x;	
}//end of bubble_Sort

let array = [34,90,12,0,100,-46];
let array1 = [99,23,78,35,21];
let array2 = [89,67,7,22];

let sortedArray = bubble_Sort([...array1,...array2]) //using spread parameters

console.log(`Combined sorted array: ${sortedArray}`) //using template literals

console.log(bubble_Sort())