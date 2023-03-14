'use strict'


async function getUsers(names) {
    /* ваш код */
    let jobs = [];

    for (let i = 0; i < names.length; i++) {
        let name = names[i]

        let a = fetch(`https://api.github.com/users/${name}`).then(
            (z) => {
                if (z.status != 200) {
                    return null
                } else {
                    return z.json();
                }
            },
            (c) => {
                return null;
            }
        )
        jobs.push(a);

    }
    let results = await Promise.all(jobs);

}

let a = ['iliakan', 'remy', 'no.such.users'];

getUsers(a)
