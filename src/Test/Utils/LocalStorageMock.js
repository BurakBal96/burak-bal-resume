export const LocalStorageMock = (function () {
    let store = {};
    return {
        getItem: function (key) {
            return store[key];
        },
        setItem: function (key, value) {
            store[key] = value.toString();
        },
        clear: function () {
            store = {};
        },
        removeItem: function (key) {
            delete store[key];
        }
    };
})();

let __cookies;

const initLocalStorage = () => {
    Object.defineProperty(window, 'localStorage', { value: LocalStorageMock });
};

const initCookies = () => {
    Object.defineProperty(window.document, 'cookie', {
        get: () => __cookies,
        set: (v) => (__cookies = v),
        split: (s) => __cookies.split(s)
    });
};
