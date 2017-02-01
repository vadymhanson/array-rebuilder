(function () {
    var count = 0;
    var lengthCount = 0;
    var output = [];
    var input = {
        p1: {
            u1: 10,
            u2: {
                t1: [1, 2, 3],
                t2: [4, 5, 6]
            },
            u3: {
                t3: [7, 8, 9],
                t4: 10
            }
        },
        p2: {
            u2: [22, 33, 44],
            u4: 15
        },
        p3: 78
    };

    function converter(obj) {

        for(var prop in obj) {
            var buffer = [];
            buffer.length = count;


            if(typeof obj[prop] == 'number' ) {
                buffer.push(prop, obj[prop]);
            }

            if(Array.isArray(obj[prop])) {
                buffer.push(prop);
                obj[prop].forEach(function(elem){
                    buffer.push(elem)
                });
            }

            output.push(buffer);

            if(typeof obj[prop] == 'object' && !Array.isArray(obj[prop])) {
                buffer.push(prop);
                count++;
                converter(obj[prop])
            }

        }

        if(buffer.length > lengthCount){
            lengthCount = buffer.length
        }
        count--;
        return output
    }
    converter(input);

    output.forEach(function(array){
        array.length = lengthCount;
        console.log(JSON.stringify(array))
    });
})();
