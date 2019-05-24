/* feedreader.js
 *
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
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

       
        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have URLs', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
                
        });


        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have URLs', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
                
        }); 
    });

    /* This test suite is called "The menu" */
    describe('Menu', function() {
        /* This is a test that ensures the menu element is
         * hidden by default. 
         */
         it('is initially hidden', function() {
            expect(bodyMenu).toHaveClass('menu-hidden');
         });

        /* This is a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
         it('changes visibility when the menu icon is clicked', function() {
            $(icon).trigger('click');
            expect(bodyMenu).not.toHaveClass('menu-hidden');
            $(icon).trigger('click');
            expect(bodyMenu).toHaveClass('menu-hidden');
         });
    });
     

    /* This test suite is called "Initial Entries" */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* This is a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('should have at least one entry when the loadFeed function is complete', function(done) {
            const feed = $('.feed');
            const entry = $('.entry');
            expect(feed.is(':empty')).toBe(false);
            expect(feed).toContainElement(entry);
            expect(entry.length).toBeGreaterThan(0);
            done();
        });
    });
        

    /* This test suite is called "New Feed Selection" */
    describe('New Feed Selection', function() {
        let oldLoad, newLoad;
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldLoad = $('.feed').html();
                loadFeed(1, done);
            });
        });

        /* This is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('content changes when a new feed is loaded', function() {
            newLoad = $('.feed').html();
            expect(oldLoad).not.toBe(newLoad);
        });
    });
       
        
}());



        
