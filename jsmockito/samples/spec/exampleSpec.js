describe('mocking objects', function () {
    it('mock the push method in Array', function () {
        var mockedObject = mock(Array);

        // -- start code under test --
        mockedObject.push("one");
        // -- end code under test --

        verify(mockedObject).push("one");
    });
});