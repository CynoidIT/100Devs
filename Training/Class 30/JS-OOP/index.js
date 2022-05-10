console.log('Hello')

const sw = new Stopwatch()

function Stopwatch(){

    let startTime = 0;
    let endTime = 0;
    let running = false;
    let duration = 0;

    this.start = function(){
        if (running === false){
            running = true
            startTime = new Date();
        } else console.log('error')
    }

    this.stop = function(){
        if (running === true){
            running = false
            endTime = new Date();
            const seconds = (endTime.getTime() - startTime.getTime())/1000;
            duration += seconds;
        } else console.log('error')
    }

    this.reset = function(){
        startTime = 0;
        endTime = 0;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this,'duration', {
        get: function() {return duration;}
    });

}
