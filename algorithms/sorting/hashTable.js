/**
 * Sample Hash Table using arrays
 * - Implementing {}
 */
function hash(val) {
    // always assume hashing function will return the same hash
    // for 2 or more values
    let hashVal = 0;
    val.split("").forEach(v => {
        hashVal += v.charCodeAt();
    })
    return hashVal;
};

class HashTable {
    constructor() {
        this.list = [];
    };

    get(x) {
        let val = this.list[hash(x)];
        if(Array.isArray(this.list[hash(x)])) {
            this.list[hash(x)].forEach((value, i) => {
                if(i == hash(x+i)) {
                    val = value;
                }
            })
        }
        return val;
    };

    set (x, y) {
        if(this.list[hash(x)]) {
            let existingVal = this.list[hash(x)];
            if(!Array.isArray(existingVal)) {
                let _temp = existingVal;
                existingVal = [];
                existingVal[hash(x+existingVal.length)] = _temp;
            }
            existingVal[hash(x+existingVal.length)] = y;
        } else {
            this.list[hash(x)] = y;
        }
    };
};

let ht = new HashTable();
ht.set('a', 1);
ht.set('b', 2);
console.time('Optimized HashTable: with few records');
console.log(ht.get('blah'));
console.timeEnd('Optimized HashTable: with few records');


ht = new HashTable();
ht.set('a', 1);
ht.set('b', 2);
console.time('Optimized HashTable: with few records2');
console.log(ht.get('blah'));
console.timeEnd('Optimized HashTable: with few records2');

ht = new HashTable();
for (let x = 0; x < 1000000; x++) {
    ht.set(`element${x}`, x)
}
console.time('Optimized HashTable: with lots of records');
console.log(ht.get('blah'));
console.timeEnd('Optimized HashTable: with lots of records');