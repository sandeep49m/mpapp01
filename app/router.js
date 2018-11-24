import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // window.console.log("Router.map() @ Router.js") ;
  // this.route("products",{ path: "/products" });
  // this.route("product",function(){
  //   this.route('new');
  // });  //alt way of defining route.
  // this.route("about",{ path: "/about" });

  // window.console.log("commits  --> Router.map() @ router.js") ;
    
    // this.route("commits",function(){
    //   this.route("commit",{path:":sha"});
    // });
    this.route('books', function(){
      this.route('book',{path: "/:id"});
      this.route('new');
    });
    this.route('question', {path: '/question/:question_id'});
});

export default Router;
