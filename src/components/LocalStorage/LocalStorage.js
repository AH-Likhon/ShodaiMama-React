const addToCart = item => {
    const db = getCart();
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
    saveToCart(db);
}

const removeFromCart = item => {
    const db = getCart();
    if (item in db) {
        db[item] = db[item] - 1;
        if (db[item] === 0) {
            delete db[item];
        }
    }

    saveToCart(db);
}

const saveToCart = db => {
    const dbJSON = JSON.stringify(db);
    localStorage.setItem('shopping-cart', dbJSON);
}

const getCart = () => {
    let savedData = localStorage.getItem('shopping-cart');
    return savedData ? JSON.parse(savedData) : {};
}

export { addToCart, removeFromCart, getCart };