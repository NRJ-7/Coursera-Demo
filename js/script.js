var me = {name: "Neeraj"}

me.greet = function () {
    console.log(this)
    console.log("Hey " + this.name)

    function b() {
        console.log(this)
        console.log("Hey " + this.name)
    }
    b()
}
console.log("Hey " + this.sda)