/* global can, $ */

var work = new can.ArrayList([
    'Currently working as a consultant at <h-data>Tera Analytics</h-data>. Specializing in building Big Data analytics tools using a ' +
    'Stream based programming',
    'Search Engineer at <h-data>Perficient</h-data>'
]);

var projects = new can.ArrayList([
    { url: "https://github.com/elasticsearch-dump/elasticsearch-dump", name: "elasticsearch-dump", description: "ETL tool for Elasticsearch"},
    { url: "https://github.com/danpaz/bodybuilder", name: "bodybuilder", description: "An elasticsearch query body builder. Easily build complex queries for elasticsearch with a simple, predictable api."},
    { url: "https://github.com/ferronrsmith/bash-template-engine", name: "shell template engine", description: "a very simple templating engine for posix shells"},
    {url: "https://github.com/ferronrsmith/tiny-template-engine", name: "tiny template engine", description: "a very simple templating engine"},
    {url: "https://github.com/ferronrsmith/bunyan-amqp", name: "Bunyan Log Extension", description: "AMQP (RabbitMQ) stream for the Bunyan logger"},
    {url: "https://github.com/ferronrsmith/tiny-date-formatter", name: "tiny date formatter", description: "a very simple date formatting library that developers can use to easily parse date"},
    // {url: "https://github.com/ferronrsmith/angularjs-memory-game", name: "angularjs memory game", description: "port of the jquery memory game to angularjs"},
    // {url: "https://github.com/ferronrsmith/anuglarjs-jasmine-matchers", name: "anuglarjs jasmine matchers", description: " a large set of jasmine matchers for angular js testing"},
    // {url: "https://github.com/ferronrsmith/angularjs-placeholder", name: "anuglarjs placeholders", description: "a simple pollfill for html5 placeholders for IE9 and lower"},
    // {url: "https://github.com/ferronrsmith/angular-pubnub-chat", name: "angular pubnub chat", description: "A simple implementation of chat client using pubnub for sending messages"},
    // {url: "https://github.com/lwhiteley/AngularLogExtender", name: "angular log extender", description: "AngularLogExtender is an AngularJS module that extends the Angular $log functionality"},
    {url: "https://github.com/ferronrsmith/httpcontext-simulator", name: "httpcontext-simulator", description: "A simple library used for simulating http context during unit or integration testing"},
    // {url: "https://github.com/ferronrsmith/angular-pubnub-chat-server", name: "angular pubnub server", description: "Backend component for the angular chat service"}
]);

var research = new can.ArrayList([
    'Enterprise Search Solutions: ' +
    '<ul>' +
        '<li>Solr</li>' +
        '<li>Elasticsearch</li>' +
        '<li>OpenSearch</li>' +
        '<li>Meilisearch</li>' +
        '<li>ZincSearch</li>' +
        '<li>Sonic</li>' +
    '</ul>',
    'NoSQL',
    // 'ArangoDB',
    'Graph Databases:' + 
    '<ul>' +
        '<li>ArangoDB</li>' +
        '<li>Neo4j</li>' +
        '<li>OrientDB</li>' +
        '<li>DGraph</li>' +
    '</ul>',
    'Apache Tika',
    'Compiler Design. Built a toy programming language : ' +
    '<ul>' +
        '<li>SMPL(functional programming language)</li>' +
        '<li>LOGO(subset of the <a href="https://en.wikipedia.org/wiki/Logo_(programming_language)">logo</a> programming language)</li>' +
        '<li> HPL (Graphics processing language for simple 2D transformations)</li>' +
    '</ul>',
    // 'Flo-Based Application Design',
    // 'MEAN Stack',
    'Node.JS Streams',
    '<a href="http://canjs.com/">CanJS</a> - simple, elegant javascript framework',
//    'Currently looking at Machine Learning and <a href="http://opencv.org">OpenCV</a>. Particularly around Image & Video Processing, object detection and classification. (Area of research for thesis)',
    // 'Building large applications in <a href="http://angularjs.org">AngularJS</a>',
    'Building large applications in <a href="https://reactjs.org/">React.JS</a>',
    "Improving Website performance",
    "Enterprise error handling",
    "Distributed Logging with Graylog",
    "Enterprise Monitoring with Prometheus",
    "Enterprise Ochestration with Docker Swarm"
]);

var recommendations = new can.ArrayList([
    // '<a href="http://angularjs.org">AngularJS</a> is a great framework for developers who want to build applications that scale',
    'Toby Segaran book, Programming Collective Intelligence. It\'s an awesome Introduction to the subject area',
    'Generating Parsers with JavaCC is a very good book (along with Dragon Book) to learning about parser design'
]);

var freebies = new can.ArrayList([
    '<a href="https://www.coursera.org/">https://www.coursera.org/</a> is offering free courses online from Ivy League schools. Persons should really take a look. I\'ve enrolled in the Machine Learning Course from Standford University.Now no one can say I never "went" to an Ivy League school',
    '<a href="http://pythonbooks.revolunet.com/">Free Python Books</a>',
    // '<a href="https://github.com/ferronrsmith/free-programming-books/blob/master/free-programming-books.md">Free Programming Books </a>',
    '<a href="http://jsbooks.revolunet.com/">Free JavaScript Books</a>'
]);

var books = new can.ArrayList([
    // {title: "Collection Intelligence", imageUrl: "images/books/pci.jpg"},
    {title: "Solr in Action", imageUrl: "images/books/grainger.png"},
    {title: "Elasticsearch The Definitive Guide", imageUrl: "images/books/es-def.jpg"},
    {title: "Nudge", imageUrl: "images/books/2527900.jpg"},
    {title: "Generating Parsers with JavaCC", imageUrl: "images/books/gpwj_second_edition_small.jpg"},
    // {title: "Collection Intelligence in Action", imageUrl: "images/books/1933988312.jpg"},
    {title: "Search Patterns", imageUrl: "images/books/cover.jpg"},
    // {title: "Autobiography of Malcolm X", imageUrl: "images/books/s.png"},
    // {title: "Up From Slavery", imageUrl: "images/books/000520.jpg"},
    {title: "The Introduction to Disciplined Agile Delivery", imageUrl: "images/books/idad.jpg"},
    {title: "The Pragmatic Programmer", imageUrl: "images/books/9780201616224.jpg"},
    {title: "Don't Make me Think", imageUrl: "images/books/9780321965516.jpg"},
    {title: "The Art of Unit Testing", imageUrl: "images/books/9781933988276.jpg"},
    {title: "Code Complete", imageUrl: "images/books/Code-Complete-9780735619678.jpg"},
    {title: "Running Lean", imageUrl: "images/books/running_lean-687x1024.png"},
    {title: "The Mythical Man Month", imageUrl: "images/books/fff7ff6694d3b5498685a088b127ab2f.jpg"},
    // {title: "Malcom X - By Any Means Necessary", imageUrl: "images/books/Malcolm-X-by-any-means-necessary.jpg"},
    // {title: "The Souls of Black Folk", imageUrl: "images/books/9781495341564.JPG"}
]);

$(function () {
    $("#work-area").html(can.view("templates/items.mustache", {items: work}));
    $("#research-area").html(can.view("templates/items.mustache", {items: research}));
    $("#project-area").html(can.view("templates/projects.mustache", {projects: projects}));
    $("#freebies-area").html(can.view("templates/items.mustache", {items: freebies}));
    $("#recommendations-area").html(can.view("templates/items.mustache", {items: recommendations}));

    var fstList = new can.ArrayList();
    var sndList = new can.ArrayList();

    books.each(function (elem, index) {
        if (index % 2 === 0) {
            sndList.push(elem);
        } else {
            fstList.push(elem);
        }
    });

    $("#fst-book-row").html(can.view("templates/books.mustache", {books: fstList.shuffle()}));
    $("#snd-book-row").html(can.view("templates/books.mustache", {books: sndList.shuffle()}));
});
