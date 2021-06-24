var globalEvents = {};

const globalEmit = (name: string, data: any) => {
    let callbacks = globalEvents[name];
    if (Array.isArray(callbacks)) {
        callbacks.map(tuple => {
            let self = tuple[0];
            let callback = tuple[1];
            callback.call(self, data);
        });
    }
};

const globalOn = (name: string, self: any, callback: any) => {
    let tuple = [self, callback];
    let callbacks = globalEvents[name];
    if (Array.isArray(callback)) {
        callbacks.push(tuple);
    } else {
        globalEvents[name] = [tuple];
    }
};

const globalRemove = (name: string, self: any) => {
    let callbacks = globalEvents[name];
    if (Array.isArray(callbacks)) {
        globalEvents[name] = callbacks.filter(tuple => {
            return tuple[0] != self;
        });
    }
};

export {globalOn, globalEmit, globalRemove};
