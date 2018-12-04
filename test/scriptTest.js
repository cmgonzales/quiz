var assert = require(`chai`).assert;
var index = require(`../script`)


describe(`script`, function(){
 
    it('should return alarm', function(){
        assert.equal(index(), `alarm`);
    })
});