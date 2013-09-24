describe('mocking objects', function () {
    it('mock the push method in Array', function () {
        var mockedObject = mock(Array);

        // -- start code under test --
        mockedObject.push("one");
        // -- end code under test --

        verify(mockedObject).push("one");
    });

    it('stubbing the get method in the Array object', function () {
        var mockedObject = mock(Date);

        // -- start code under test --
        when(mockedObject).toUTCString().thenReturn("Mon, 23 Sep 2013 01:31:00 GMT");
        // -- end code under test --

        expect(mockedObject.toUTCString()).toBe("Mon, 23 Sep 2013 01:31:00 GMT");
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