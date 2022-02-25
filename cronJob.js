import cron from "node-cron";
import shell from "shelljs";

cron.schedule("0 0 * * * *", function(){
    console.log("Scheduler running...");
    if(shell.exec("node app.js").code !== 0) {
        console.log("Something went wrong");
    }
});