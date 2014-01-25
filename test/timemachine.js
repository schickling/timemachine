describe("check timemachine", function() {

  afterEach(function() {
    timemachine.reset();
    timemachine.config({});
  });

  it("should default to Thu, 01 Jan 1970 00:00:00 GMT", function() {
    expect(new Date().toUTCString()).toBe('Thu, 01 Jan 1970 00:00:00 GMT');
  });

  it("should now be set to December 25, 1991 13:12:59 via dateString", function() {
    timemachine.config({
      dateString: 'December 25, 1991 13:12:59'
    });
    expect(new Date().toUTCString()).toBe('Wed, 25 Dec 1991 12:12:59 GMT');
  });

  it("should now be set to December 25, 1991 13:12:59 via timestamp", function() {
    timemachine.config({
      timestamp: 693663179000
    });
    expect(new Date().toUTCString()).toBe('Wed, 25 Dec 1991 12:12:59 GMT');
  });

  it("should stay the same for instantiation with millisecond param", function() {
    expect(new Date(1).toUTCString()).toBe('Thu, 01 Jan 1970 00:00:00 GMT');
  });

  it("should stay the same for instantiation with dateString", function() {
    expect(new Date('December 25, 1991 13:12:59').toUTCString()).toBe('Wed, 25 Dec 1991 12:12:59 GMT');
  });

  it("should stay the same for instantiation with year, month, day, hours, minutes, seconds, milliseconds", function() {
    expect(new Date(1990, 12, 25, 12, 12, 59, 1).toUTCString()).toBe('Fri, 25 Jan 1991 11:12:59 GMT');
  });

  it("should return adjusted timestamp", function() {
    expect(Date.now()).toBe(0);
  });

  it("should reset", function() {
    timemachine.config({
      dateString: 'December 25, 1991 13:12:59'
    });
    timemachine.reset();
    expect(Date.now()).not.toBe(693663179000);
    expect(new Date().toUTCString()).not.toBe('Wed, 25 Dec 1991 13:12:59 GMT');
  });

});