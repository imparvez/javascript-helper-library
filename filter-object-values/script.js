// Filter Object Values

const usersPhoneNumber = {
    alex: '+1000203948',
    john: '+2384791238',
    alice: '+297490127',
}

function filterObjVal(obj, pattern) {
    return Object
            .values(obj) // ['+1000203948', '+2384791238', '+297490127']
            .reduce((res, v, i) => {
                if(v.includes(pattern)) {
                    res[Object.keys(obj)[i]] = v
                }
                return res
            }, {})
}

const { log } = console
log(filterObjVal(usersPhoneNumber, '+2'))