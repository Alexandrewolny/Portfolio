function foo(obj) {
    obj.disabled = true;
    setTimeout(function() {
        obj.disabled = false;
    }, 2000);
}​