var assert = {

  toEqual: function(actual, expected) {
    if(actual !== expected) {
      throw new Error("Error: expected " + expected + ", got " + actual);
    } else
    console.log("This test passed!");
  }

};
