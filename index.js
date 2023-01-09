const School = require('./school');

const school = new School();

school.on('bellRing', ({ task, time }) => {
    console.log(`Run boy run! ${task} ${time}`);
});

school.startPeriod();
