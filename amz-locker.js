/*
 * Amazon Locker JavaScript
 * Requirements:
 *  - Locker should be available in multiple size
 *  - 
 */

 // TODO add functionality for user to add code and empty locker
class Locker {
  constructor(locker) {
    if (!locker) throw "ERR: Locker cannot be created";
    this.id = locker.id;
    this.size = locker.size;
    this.location = locker.location;
    this.content = undefined;
    this.userNotified = false;
  }
}

class LockerDictionary {
  constructor() {
    this.lockers = [];
  }

  addLocker(locker) {
    if(!locker) throw "ERR: Locker cannot be added";
    const newLocker = new Locker(locker);
    this.lockers.push(newLocker);
    console.log("Locker added", newLocker);
  }

  getAllLockers() {
    return this.lockers;
  }

  getAvailableLockers() {
    return this.lockers.filter(locker => !locker.content);
  }

  getLockersAtLocation(location) {
    if(!location) throw "ERR: Location invalid";
    return this.lockers.filter(locker => location === locker.location);
  }

  getLockerById(lockerId) {
    if(!lockerId) throw "ERR: LockerId invalid";
    return this.lockers.find(locker => locker.id === lockerId);
  }

  getLockerByProductId(productId) {
    if(!productId) throw "ERR: ProductId invalid";
    return this.lockers.find(locker => locker.content === productId);
  }
}

class AmazonLocker {
  constructor() {
    this.lockerDict = new LockerDictionary();
  };

  addLocker(locker) {
    if(!locker) throw "ERR: Locker invalid";
    this.lockerDict.addLocker(locker);
  };

  getLockersAtLocation(location) {
    if(!location) throw "ERR: Location invalid";
    return this.lockerDict.getLockersAtLocation(location);
  };

  fillLocker(lockerId, productId) {
    if(!lockerId || !productId) throw "ERR: LockerId or ProductId invalid";
    const selectedLocker = this.lockerDict.getLockerById(lockerId);
    selectedLocker.content = productId;
    console.log("Filled locker", selectedLocker);
    this.sendEmailToUser(selectedLocker);
  };

  emptyLocker(lockerId) {
    if(!lockerId) throw "ERR: LockerId invalid";
    const selectedLocker = this.lockerDict.getLockerById(lockerId);
    selectedLocker.content = undefined;
    console.log("Emptied locker", selectedLocker);
  };

  emptyLockerByProduct(productId) {
    if(!productId) throw "ERR: ProductId invalid";
    const selectedLocker = this.lockerDict.getLockerByProductId(productId);
    selectedLocker.content = undefined;
    console.log("Emptied locker", selectedLocker);
  }

  sendEmailToUser(locker) {
    if(!locker) throw "ERR: Locker invalid";
    // logic to send email to user with code
    locker.userNotified = true;
    console.log("Email sent to user for locker", locker);
  }
};

const amazonLocker = new AmazonLocker();
const zipcodes = ["98005", "98006", "98007"];
const locker = zipcodes.map((z, id) => {
  return {
    id,
    size: "small",
    location: z
  }
});
locker.forEach(l => amazonLocker.addLocker(l));
console.log(amazonLocker.fillLocker(1, "guid"));
console.log(amazonLocker.fillLocker(2, "guid"));
console.log(amazonLocker.emptyLocker(1));
