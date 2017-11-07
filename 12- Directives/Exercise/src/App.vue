<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-custom-directive:click="clicked">Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div style="width: 100px; height: 100px; background-color: lightgreen"
                v-custom-directive:mouseenter="mouseEnter"
                v-custom-directive:mouseleave="mouseLeave"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'custom-directive' : {
                bind(el, binding, vnode){
                    console.log(el);
                    console.log(binding);
                    console.log(vnode);
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn)
                }
            }
        },
        methods : {
            clicked(){
                alert("Clicked");
            },
            mouseEnter(){
                console.log('Mouse Entered!!!')
            },
            mouseLeave(){
                console.log('Mouse Leaved!!!')
            }
        }
    }
</script>

<style>
</style>
