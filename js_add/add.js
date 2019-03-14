let str = 'ACTGAAATTTCGC';


function DnkToRnk(str) {
    let arr = [];
    for (let i = 0; i < str.length - 1; i++) {
        arr.push(str[i]);
        if (arr[i] === 'G') {
            arr[i] = 'A';
            console.log(arr[i]);
        } else if (arr[i] === 'C') {
            arr[i] = 'G';
            console.log(arr[i]);
        } else if (arr[i] === 'T') {
            arr[i] = 'A';
            console.log(arr[i]);
        } else if (arr[i] === 'A') {
            arr[i] = 'U';
            console.log(arr[i]);
        }
    }

    return arr;
};

console.log(DnkToRnk(str));