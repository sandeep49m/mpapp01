import Route from '@ember/routing/route'; 

export default Route.extend({
    // redirect: function(){
    //     window.console.log("redirect() @ routes/index.js")  ;
    //     this.transitionTo("commits.index");
    // },
    // model: function() {
    //     console.log("model fn @ Route.") ;
    //     let  companies = [{
    //         "name" : "Google",
    //         "headquarters": "Mountain View",
    //         "revenue":"59b"
    //         },{
    //           "name" : "Facebook",
    //           "headquarters":"Menlo Park",
    //           "revenue":"7b"
    //         },{
    //           "name" : "twitter",
    //           "revenue": "664m",
    //           "headquarters":"San Francisco"
    //         }];
    //     // return ['Android', 'iOS', 'Tizen'];
    //     return companies;
    // }
  model: function() {
    // return {
    //     name: "Ravi Kumar",
    //     avatar: "https://randomuser.me/api/portraits/thumb/lego/3.jpg",
    //     bio: "Famous painter"
    // };
    return this.store.findAll('question');
  },
  actions: {
    saveQuestion(params) {
        var newQuestion = this.store
                   .createRecord('question', params);
        newQuestion.save();
        this.transitionTo('index');
      },
  }
});
// console.log("in Route.") ;
