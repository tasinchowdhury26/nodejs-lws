const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('Period started');

        setTimeout(() => {
            this.emit('bellRing', {
                task: 'run',
                time: 'now',
            });
        }, 3000);
    }
}

module.exports = School;
