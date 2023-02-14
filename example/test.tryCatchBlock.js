try {
    const testVar = "someData";
    console.log(testVar);
    throw testVar
} catch(err) {
    console.log(err)
}