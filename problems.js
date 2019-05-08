/*
 * Find the median of 2 sorted arrays
 */

function getMedian(arr1, arr2) {
  let combinedArray = arr1.concat(arr2);
  combinedArray = combinedArray.filter( onlyUnique ).sort();
  const totalLength = combinedArray.length;
  if(totalLength === 1) {
    return combinedArray[0];
  } else if(totalLength === 2) {
    return calculateMedian(combinedArray[0], combinedArray[1]);
  } else {
    const median = (totalLength / 2);
    const sanitizedMedian = median % 1 === 0 ? median : Math.round(median) - 1; 
    const even = !(totalLength % 2);
    if(even) {
      return calculateMedian(combinedArray[sanitizedMedian], combinedArray[sanitizedMedian+1]);
    } else {
      return combinedArray[sanitizedMedian];
    }
  }
}

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

function calculateMedian(num, denom) {
  return (num + denom) / 2;
}

console.time("Time Taken");
console.log(getMedian([1, 2], [3, 4]));
console.timeEnd("Time Taken");
console.time("Time Taken2");
console.log(getMedian([1, 1], [1, 1, 1]));
console.timeEnd("Time Taken2");

/*
 *  Longest Palindrome substring
 */
var longestPalindrome = function(string) {

  let length = string.length;
  let result = "";

  let centeredPalindrome = function(left, right) {
    while (left >= 0 && right < length && string[left] === string[right]) {
      //expand in each direction.
      left--;
      right++;
    }

    return string.slice(left + 1, right);
  };

  for (var i = 0; i < length - 1; i++) {
    var oddPal = centeredPalindrome(i, i + 1);
    var evenPal = centeredPalindrome(i, i);

    if (oddPal.length > 1)
      console.log("oddPal: " + oddPal);
    if (evenPal.length > 1)
      console.log("evenPal: " + evenPal);

    if (oddPal.length > result.length)
      result = oddPal;
    if (evenPal.length > result.length)
      result = evenPal;
  }
  
  return "the palindrome is: " + result + " and its length is: " + result.length;
};

console.log(
  longestPalindrome("nan noon is redder")
);

function longestPalindrome2(str) {
  const length = str.length;
  let result = [];

  function centeredPalindrome(string, left, right) {
    const len = string.length;
    while(left >=0 && right <= len && string[left] === string[right]) {
      left--;
      right++;
    }
    return string.slice(left+1, right);
  }

  for(let i=0; i<length; i++) {
    const pal1 = centeredPalindrome(str, i, i+1);
    const pal2 = centeredPalindrome(str, i, i);
    if(pal1.length > 1) {
      console.log("pal1:", pal1);
    }
    if(pal2.length > 1) {
      console.log("pal2:", pal2);
    }
    if(pal1.length > result.length) {
      result = pal1;
    }
    if(pal2.length > result.length) {
      result = pal2;
    }
  }
  return "the palindrome is: " + result + " and its length is: " + result.length;
}

console.log(
  longestPalindrome2("nan noon is redder")
);