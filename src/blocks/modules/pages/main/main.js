import Vue from "vue";
import ExampleComponent from "./ExampleComponent.vue";

if(document.getElementById('example')){
    Vue.component('example-component',ExampleComponent);
    new Vue({
        el: '#example',
        template: '<example-component></example-component>',
    })
}