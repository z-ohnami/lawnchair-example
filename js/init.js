var ppl = Lawnchair({name:'people', record:'person',data:'gggg'}, function(people){

    // Something to save...
    var me = {name:'brian'}

    // Anon fn bound to the instance
    this.save({a:1})

    // Hmm... but `this` won't work inside an anon handler
    document.getElementById('btn').addEventListener('click', function(){

        // Refer to the callback param (mapped to `name` in ctor options)
        // - also notice the terse callback in the second param 
        // - it uses the named variable person
        people.save({me:'brian'}, 'console.log(person)')

        // Or just use the orig reference created w/ the ctor
        ppl.destroy(me)

    }, false)

})
