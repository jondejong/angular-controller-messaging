Angular Controller Messaging
===========================

Demo using services and broadcast messaging to share data between controllers in AngualrJS

I recently [wrote a blog post with some basic lessons learned after using AngularJS for a while](http://www.objectpartners.com/2013/08/09/i-wish-i-knew-then-what-i-know-now-life-with-angularjs/). In it I briefly described a pattern of using broadcast messages with services to share data between controllers in AngularJS. I was asked if there were any examples online. Here is an example.

This consists of an index.html file, two JavaScript files (one for the controllers and one for the service), and a basic CSS file. You can just open the index.html file in a browser (I use Chrome. I have not tested this in IE) to see it work. The page consists of 3 divs, each controlled by its own controller, with all controllers sharing data via the service.

This pattern can be useful when you have multiple controllers on a page, some of which need to know when data managed by another controller has been changed.

  
