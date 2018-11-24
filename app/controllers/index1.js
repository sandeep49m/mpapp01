
import Controller from '@ember/controller'; 

export default Controller.extend({
    name: "Ember Controller",
    colorChange: true,
    edit: true,  // make data visible.
    actions:{ // trigger an event on the click.
        changeEdit: function(){
            window.console.log("changeEdit @ controller") ;
            this.toggleProperty('edit');
        },
        changeColor: function(){
            window.console.log("Triggerring");
            this.toggleProperty('colorChange');
        }
    }
});
// console.log("in Controller.") ;