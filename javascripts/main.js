var projects = new can.List([
    {url: "https://github.com/ferronrsmith/tiny-template-engine", name: "tiny template engine", description: "a very simple templating engine"},
    {url: "https://github.com/ferronrsmith/tiny-date-formatter", name: "tiny date formatter", description: "a very simple date formatting library that developers can use to easily parse date"},
    {url: "https://github.com/ferronrsmith/angularjs-memory-game", name: "angularjs memory game", description: "port of the jquery memory game to angularjs"},
    {url: "https://github.com/ferronrsmith/anuglarjs-jasmine-matchers", name: "anuglarjs jasmine matchers", description: " a large set of jasmine matchers for angular js testing"},
    {url: "https://github.com/ferronrsmith/angularjs-placeholder", name: "anuglarjs placeholders", description: "a simple pollfill for html5 placeholders for IE9 and lower"},
    {url: "https://github.com/ferronrsmith/jso", name: "jso", description: "a fork rewrite of the Javascript OAuth Library. The new implementation adds authorization grant flow & password grant flow"},
    {url: "https://github.com/ferronrsmith/angular-pubnub-chat", name: "angular pubnub chat", description: "A simple implementation of chat client using pubnub for sending messages"},
    {url: "https://github.com/lwhiteley/AngularLogExtender", name: "angular log extender", description: "AngularLogExtender is an AngularJS module that extends the Angular $log functionality"},
    {url: "https://github.com/ferronrsmith/httpcontext-simulator", name: "httpcontext-simulator", description: "A simple library used for simulating http context during unit or integration testing"},
    {url: "https://github.com/ferronrsmith/angular-pubnub-chat-server", name: "angular pubnub server", description: "Backend component for the angular chat service"}
]);

var research = new can.List([
        'Enterprise Search with Solr & ElasticSearch',
        'NoSQL',
        '<a href="http://canjs.com/">CanJS</a> - simple, elegant javascript framework',
        'Currently looking at Machine Learning and <a href="http://opencv.org">OpenCV</a>. Particularly around Image & Video Processing, object detection and classification. (Area of research for thesis)',
        'Building large applications in <a href="http://angularjs.org">AngularJS</a>',
        "Improving Website performance",
        "Enterprise error handling" 
]);

var books = new can.List([
    {title: "Collection Intelligence", imageUrl: "images/books/pci.jpg"},
    {title: "Collection Intelligence in Action", imageUrl: "images/books/1933988312.jpg"},
    {title: "Search Patterns", imageUrl: "images/books/cover.jpg"},
    {title: "Autobiography of Malcolm X", imageUrl: "images/books/s.png"},
    {title: "Up From Slavery", imageUrl: "images/books/000520.jpg"},
    {title: "The Introduction to Disciplined Agile Delivery", imageUrl: "images/books/idad.jpg"},
    {title: "The Pragmatic Programmer", imageUrl: "images/books/9780201616224.jpg"},
    {title: "Don't Make me Think", imageUrl: "images/books/9780321965516.jpg"},
    {title: "The Art of Unit Testing", imageUrl: "images/books/9781933988276.jpg"},
    {title: "Code Complete", imageUrl: "images/books/Code-Complete-9780735619678.jpg"},
    {title: "Running Lean", imageUrl: "images/books/running_lean-687x1024.png"},
    {title: "The Mythical Man Month", imageUrl: "images/books/fff7ff6694d3b5498685a088b127ab2f.jpg"},
    {title: "Malcom X - By Any Means Necessary", imageUrl: "images/books/Malcolm-X-by-any-means-necessary.jpg"},
    {title: "The Souls of Black Folk", imageUrl: "images/books/9781495341564.JPG"}
]);

$(function () {
    $("#research-area").html(can.view("templates/research.mustache", {research: research}));
    $("#project-area").html(can.view("templates/projects.mustache", {projects: projects}));
    
    var fstList = new can.List();
    var sndList = new can.List();
    
    books.forEach(function(elem, index) {
        if(index % 2 === 0) {
            sndList.push(elem)
        } else {
            fstList.push(elem);
        }
    });
    
    function shuffle(array) {
        var counter = array.length, temp, index;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    }
    
    shuffle(fstList);
    shuffle(sndList);
    
    $("#fst-book-row").html(can.view("templates/books.mustache", {books: fstList}));
    $("#snd-book-row").html(can.view("templates/books.mustache", {books: sndList}));
});