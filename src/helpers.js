/** Returns a randomly selected item from array of items */
function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

/** Removes the first matching item from items, if item exists, and returns it.
 *  Otherwise, returns undefined.
 */
function remove(items, item) {
    const idx = items.indexOf(item);

    if (idx >= 0) {
        const removedItem = items[idx];
        items.splice(idx, 1);
        return removedItem;
    }
}

export { choice, remove }