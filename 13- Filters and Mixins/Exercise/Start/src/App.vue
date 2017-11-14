<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p> Input 1 </p>
                <input v-model="text">
                <p> {{text | reverse}} </p>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p v-if="text.length >0"> {{text | add-length}} </p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p> Input 2 </p>
                <input v-model="newText" v-on:keyup="text2 = newText">
                <p> {{textReverse}} </p>
                <p v-if="text2.length >0"> {{textLength}} </p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                text: '',
                text2: ''
            }
        },
        methods: {
            changeValue(value){
            }
        },
        filters: {
            reverse(value){
                return value.split("").reverse().join("");
            }
        },
        computed: {
            textReverse(){
                return this.text2.split("").reverse().join("");
            },
            textLength(){
                return this.text2 + "(" + this.text2.length + ")";
            }
        }
    }
</script>

<style>
</style>
