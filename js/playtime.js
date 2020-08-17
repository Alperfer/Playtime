/* eslint-env es6, browser */
/* global document */
   

let startTimer = 0;
const countDown = document.getElementById("countdown");
         document.getElementById("buttonMain").addEventListener("click", removeMain);
        document.getElementById("buttonBack").addEventListener("click", returnMain);
    document.getElementById("buttonRestart").addEventListener("click", returnMain);

    function countdown(min) {
            let totalTime = min * 60;
            startTimer = setInterval(update, 1000);


            function update() {
                let hour = Math.floor(totalTime / 3600);
                let minute = 0;
                if (totalTime >= 60)
                    minute = Math.floor((totalTime / 60) - hour * 60);
                else
                    minute = 0;
                let second = Math.floor(totalTime % 60);

                if (totalTime == 0) {
                    clearInterval(startTimer);
                    countDown.innerHTML = ": :";
                    endScreen();

                }
                totalTime--;
                let c = `${hour} : ${minute} : ${second}` ;
                countDown.innerHTML = c;

            }
        }
 function endScreen() {
            document.getElementById("alarm").play();
            document.getElementById("alarm").loop = true;
            document.getElementById("playTime").style.display = "none";
            document.getElementById("timer").style.display = "none";
            document.getElementById("end").style.display = "block";
        }

        function removeMain() {
            let x = parseInt(document.getElementById("minute").value);
            if (!isNaN(x) && x > 0) {
                document.getElementById("main").style.display = "none";
                document.getElementById("timer").style.display = "block";
                document.getElementById("end").style.display = "none";
                document.getElementById("error").innerHTML = ("");
                countdown(x);
            } else
                document.getElementById("error").innerHTML = ("Please enter a valid number");
        }

        function returnMain() {
            document.getElementById("timer").style.display = "none";
            document.getElementById("main").style.display = "block";
            document.getElementById("end").style.display = "none";
            document.getElementById("playTime").style.display = "block";
            document.getElementById("minute").value = "";
            document.getElementById("alarm").pause();
            clearInterval(startTimer);
            countDown.innerHTML = "";
        }


