describe('mocking objects', function () {
    it('mock the push method in Array', function () {
        var mockedObject = mock(Array);

        // -- start code under test --
        mockedObject.push("one");
        // -- end code under test --

        verify(mockedObject).push("one");
    });

    it('stubbing the toUTCString method in the Date object', function () {
        var mockedObject = mock(Date);

        // -- start code under test --
        when(mockedObject).now().thenReturn(999999999999999);
        // -- end code under test --

        expect(mockedObject.now()).toBe(999999999999999);
    });

    it('mocking a function without args', function () {
        var echo = function() { return "hello world"},
            mockEcho = mockFunction(echo);

        when(mockEcho)().then(function () {
           return "i changed this value yay!"
        });

        expect(mockEcho()).toBe('i changed this value yay!');
    });


    it('mocking a function with args', function () {
        var echo = function (msg) {return msg;},
            mockEcho = mockFunction(echo);

        when(mockEcho)(anything()).then(function (args) {
            return args + "_hello_world_";
        });

        expect(mockEcho('pete')).toBe('pete_hello_world_');
    });
});


describe('mocking objects with Jasmine spyOn', function () {
   it('stubbing the toUTCString method in the Date object', function () {

       var method1 = function () { return Date.now() },
           method2 = function () { return method1() },
           mockDate = mock(Date);

//       when(mockDate).now().thenReturn('You have been jacked');

       console.log(method1);

       //expect(method2()).toBe("You have been jacked");
   })
});


describe("Manually ticking the Jasmine Mock Clock", function() {
    var clock;

    beforeEach(function() {
        clock = sinon.useFakeTimers();
    });

    afterEach(function() {
        clock = sinon.restore();
    });


    it("causes a timeout to be called synchronously", function() {
        var callback = sinon.spy();

        clock.tick(99);

        clock.tick(1);
        // Also:
        expect(new Date().getTime()).toBe(100);
    });

    it("spies", function () {
        spyOn(window, 'alert').andCallFake(function (msg) {
            return "returning something";
        });



        expect(window.alert('msg')).toBe('returning something');


    });
});

describe("Manually ticking the Jasmine Mock Clock", function() {

    it("causes a timeout to be called synchronously", function() {
        var callback = sinon.spy();

        clock.tick(99);

        clock.tick(1);
        // Also:
        expect(new Date().getTime()).toBe(100);
    });

});

