const withDefaultValue = (target, value = 0) => {
    return new Proxy(target, {
        get: (t, p) => (p in t) ? t[p] : value
            // or 
            // get(t, p) {
            //     return (p in t) ? t[p] : 0
            // }
    })
}

const position = withDefaultValue({ x: 10, y: 12 }, 1);

const withHiddenPropertes = (target, prefix = '_') => {

    return new Proxy(target, {
        has: (target, prop) => ((prop in target) && !(prop.startsWith(prefix))),
        ownKeys: target => Reflect.ownKeys(target).filter(p => !p.startsWith(prefix)),
        get: (target, prop, receiver) => ((prop in receiver) ? target[prop] : void 0)

    })
}

const po = withHiddenPropertes({ a: 10, _b: 25 }, '_')


const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {

        const indexes = {};
        args.forEach(v => indexes[v.id] = v)
        return new Proxy(new target(...args), {
            get: (target, prop) => {

                switch (prop) {
                    case 'push':
                        return (v) => {
                            indexes[v.id] = v;
                            target[prop].call(target, v)
                        }
                    case 'findById':
                        id => indexes[id]

                    default:
                        return target[prop]
                }

            }
        })
    }
})

const pia = new IndexedArray([
    { id: 16, name: 'vvv' },
    { id: 12, name: 'trtte' },
    { id: 19, name: 'vvfd' }
])