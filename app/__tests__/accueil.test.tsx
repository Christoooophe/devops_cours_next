(async () => {
    const res = await fetch("http://localhost:3000/");

    if (res.status === 200) {
        console.log("test ok");
    } else {
        console.log("test failed");
        process.exitCode = 1;
    }
})();
