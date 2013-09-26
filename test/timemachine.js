describe("check timemachine", function () {

  it("should default to December 24, 1990 12:25:00", function () {
    expect(new Date().toUTCString()).toBe('Mon, 24 Dec 1990 11:25:00 GMT');
  });

  it("should now be set to December 25, 1991 13:12:59", function () {
    timemachine.config({
      dateString: 'December 25, 1991 13:12:59'
    });
    expect(new Date().toUTCString()).toBe('Wed, 25 Dec 1991 12:12:59 GMT');
  });

});