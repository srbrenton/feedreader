/* feedreader.js *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds Array', function() {

	/* This is our first test - it tests to make sure that the
	 * allFeeds variable has been defined and that it is not
	 * empty. Experiment with this before you get started on
	 * the rest of this project. What happens when you change
	 * allFeeds in app.js to be an empty array and refresh the
	 * page?
	 */

	it('is defined', function() {
	    expect(allFeeds).toBeDefined();
	    expect(allFeeds.length).not.toBe(0);
	});

	/* This test loops through each feed
	 * in the allFeeds object and ensures it has a URL defined
	 * and that the URL is not empty.
	 */

	it('each feed URL is defined', function() {
		for ( var i in allFeeds ) {
			expect(allFeeds[i].url).toBeDefined();
			expect(allFeeds[i].url.length).toBeGreaterThan(0);
		}
	});

	/* This test loops through each feed
	 * in the allFeeds object and ensures it has a name defined
	 * and that the name is not empty.
	 */

	it('each feed name is defined', function() {
		for ( var i in allFeeds ) {
			expect(allFeeds[i].name).toBeDefined();
			expect(allFeeds[i].name.length).toBeGreaterThan(0);
		}
	});

    });

    /* This suite tests menu functionality */
    describe('The Menu', function() {

	/* This test that ensures the menu element is
	 * hidden by default. The <body> element has
	 * a class name of 'menu-hidden'.
	 */

	it('is hidden by default', function() {
		// var elements = document.getElementsByClassName('menu-hidden');
		// expect(elements.length).toBe(1);
		expect($('.menu-hidden').length).toBe(1);
	});

	 /* These tests ensure that the menu changes
	  * visibility when the menu icon is clicked. This test
	  * should have two expectations: does the menu display when
	  * clicked and does it hide when clicked again.
	  */

	it ('is shown on the first menu-icon-link click event', function() {
		spyEvent = spyOnEvent('.menu-icon-link', 'click');
		$('.menu-icon-link').trigger( "click" );
		expect('click').toHaveBeenTriggeredOn('.menu-icon-link');
		expect(spyEvent).toHaveBeenTriggered();
		expect($('.menu-hidden').length).toBe(0);
	});

	it ('is hidden on the next menu-icon-link click event', function() {
		spyEvent = spyOnEvent('.menu-icon-link', 'click');
		$('.menu-icon-link').trigger( "click" );
		expect('click').toHaveBeenTriggeredOn('.menu-icon-link');
		expect(spyEvent).toHaveBeenTriggered();
		expect($('.menu-hidden').length).toBe(1);
	});

    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

	/* TODO: Write a test that ensures when the loadFeed
	 * function is called and completes its work, there is at least
	 * a single .entry element within the .feed container.
	 * Remember, loadFeed() is asynchronous so this test will require
	 * the use of Jasmine's beforeEach and asynchronous done() function.
	 */

    });


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

	/* TODO: Write a test that ensures when a new feed is loaded
	 * by the loadFeed function that the content actually changes.
	 * Remember, loadFeed() is asynchronous.
	 */
    });

}());
