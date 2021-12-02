/** Returns a randomly selected item from array of items */
function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

/** Removes the first matching item from items, if item exists, and returns it.
 *  Otherwise, returns undefined.
 */
function remove(items, item) {
    return items[items.indexOf(item)];
}

export { choice, remove }