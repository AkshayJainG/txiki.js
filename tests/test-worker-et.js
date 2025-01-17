import assert from 'tjs:assert';
import path from 'tjs:path';


const w = new Worker(path.join(import.meta.dirname, 'helpers', 'worker.js'));
const timer = setTimeout(() => {
    w.terminate();
}, 1000);
w.addEventListener('message', event => {
    const recvData = JSON.stringify(event.data);
    assert.eq(data, recvData, 'Message received matches');
    w.terminate();
    clearTimeout(timer);
});
