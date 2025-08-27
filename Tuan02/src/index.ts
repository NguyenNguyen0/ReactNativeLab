import { fetchUser } from "./async/fetchUser";
import { fetchUsers } from "./async/fetchUsers";
import { numberAsync } from "./async/numberAsync";
import { simulateTaskAsync } from "./async/simulateTaskAsync";
import { timeoutApi } from "./async/timeoutApi";
import { arrayPromise } from "./promise/arrayPromise";
import { errorPromise } from "./promise/errorPomise";
import { helloPromise } from "./promise/helloPromise";
import { numberPromise } from "./promise/numberPromise";
import { randomPromise } from "./promise/randomPromise";
import { simulateTask } from "./promise/simulateTask";

helloPromise.then(() => {
    console.log("1. Hello Async");
});

numberPromise.then(num => {
    console.log("2. Number Promise");
    console.log(num)
});

errorPromise.catch((err) => {
    console.log("3. Error Promise");
    console.log(err.message);
})

randomPromise
    .then((num) => {
        console.log("4. Random Promise");
        console.log(num);
    })
    .catch((err) => {
        console.log('4. Random Promise');
        console.log(err.message);
    });

simulateTask(1000).then((message) => {
    console.log("5. Simulate task");
    console.log(message);
});

Promise.all([
    simulateTask(100, "6. Promise all").then((message) => { console.log(message) }),
    simulateTask(100).then((message) => { console.log(message) }),
    simulateTask(100).then((message) => { console.log(message) }),
    simulateTask(100).then((message) => { console.log(message) })
]);

Promise.race([
    simulateTask(1000, "7. Promise race").then((message) => { console.log(message) }),
    simulateTask(1500).then((message) => { console.log(message) }),
    simulateTask(1020).then((message) => { console.log(message) })
]);

randomPromise
    .then(num => {
        console.log("8. Promise chain");
        return 2 * 2;
    })
    .then(num => {
        return num * 2;
    })
    .then(num => {
        return num + 2;
    })

arrayPromise([1, 2, 3, 4, 5, 6, 7, 8]).then(a => {
    console.log('9. Array Promise');
    console.log(a);
})

arrayPromise([1, 2, 3, 4, 5, 6, 7, 8])
    .then((a) => {
        return a;
    })
    .finally(() => {
        console.log("10. Finally");
    });

(async () => {
    // 12. Simulate task
    await simulateTaskAsync(2000);

    // 13. try/catch async
    try {
        const num = await randomPromise;
        console.log(`13. try/catch async ${num}`);
    } catch (error) {
        console.error(error);
    }

    // 14. number async 
    console.log(`14. Number async ${await numberAsync(2)}`);

    // 15. await
    await numberAsync(2)
    await numberAsync(3)
    await numberAsync(4)

    // 16. promise all
    Promise.all([
        simulateTask(1000, "16. promise all").then((message) => { console.log(message) }),
        numberAsync(21),
        numberAsync(10),
        numberAsync(20),
    ]);

    // 17. for await
    for await (const element of [numberPromise, numberPromise, numberPromise]) {
        console.log(`17. for await ${element}`);
    }

    // 18. fetch user
    console.log(await fetchUser(1));

    // 19. fetch users
    console.log(await fetchUsers([1, 2, 3, 4]));

    // 20. fetch timeout
    console.log(await timeoutApi("https://jsonplaceholder.typicode.com/todos/1"));
    
})();