Find the smallest integer in the array.

Given an array of integers your solution should find the smallest integer. For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this exercise, that the supplied array will not be empty.

####Test Cases:

class SmallestIntegerFinder {
  findSmallestInt(args) {
    
  }
}

Test.describe("Smallest Integer Tests", _ => {
  Test.it("Fixed Tests", __ => {
    var sif = new SmallestIntegerFinder();
    Test.assertEquals(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
    Test.assertEquals(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
    Test.assertEquals(sif.findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
    Test.assertEquals(sif.findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
    Test.assertEquals(sif.findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');
  });
});  
