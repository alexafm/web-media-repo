var choiceEnabled = false;
var instructions = [];
var level = 0;
var winLevel = 5;
var player = [];
var hard = 0;

function addToSequence() {
    var n = Math.floor((Math.random() * 4) + 1);
    console.log("pushing " + n);
    instructions.push(n);
    level += 1;
    console.log("new sequence: " + instructions)
    showSequence();
}

function delayShow(i, delay) {
    setTimeout(function() {
        showButton(instructions[i]);
    }, delay);
}

function msgChange(newtext) {
    $("#message").css("visibility", "hidden");
    $("#message").html(newtext);
    $("#message").css("visibility", "visible");
    setTimeout(function() {
        $("#message").slideUp(250);
    }, 1000);
}

function playerInput(button) {
    if (choiceEnabled) {
        player.push(button);
        if (player.length == instructions.length) {
            choiceEnabled = false;
            var correct = true;
            for (var k = 0; k < player.length; k++) {
                if (player[k] !== instructions[k]) {
                    correct = false;
                }
            }
            if (correct) {
                console.log("sequence was correct");
                msgChange("Right!");
                setTimeout(function() {
                    if (level === winLevel) {
                        win();
                    } else {
                        addToSequence();
                    }
                }, 2000);
            } else {
                wrong();
            }
        } else {
            choiceEnabled = false;
            setTimeout(function() {
                choiceEnabled = true;
            }, 400)
        }
    } else {
        console.log("Try again");
    }
}

function resetSequence() {
    setTimeout(function() {
        level = 0;
        instructions = [];
        console.log("Reset sequence");
        addToSequence();
    }, 500)
}

function showButton(num) {
    function bgChange(btn, highlight, normal) {
        setTimeout(function() {
            $("#btn" + btn).css("background-color", highlight);
            setTimeout(function() {
                $("#btn" + btn).css("background-color", normal);
            }, 250);
        }, 50);
    }
    switch (num) {
        case 1:
            bgChange(1, "#F00", "#F88");
            break;
        case 2:
            bgChange(2, "#00F", "#88F");
            break;
        case 3:
            bgChange(3, "#0F0", "#8F8");
            break;
        case 4:
            bgChange(4, "#FD0", "#FE8");
            break;
    }
}

function showSequence() {
    msgChange("Level " + level);
    choiceEnabled = false;
    for (var i = 0; i < instructions.length; i++) {
        delayShow(i, (1000 + (i * 1000)))
        if (i == instructions.length - 1) {
            setTimeout(function() {
                choiceEnabled = true;
            }, 1000 + (i * 1000))
        }
    }
    player = [];
}

function togglePlay() {
    if (play === 0) {
        hard = 1;
        $('#play').css({
            "color": "#00FBFF",
            "border": "2px solid #00FBFF"
        })
    } else {
        hard = 0;
        $('#play').css({
            "color": "#BBB",
            "border": "2px solid #DDD"
        })
    }
    resetSequence();
}

function win() {
    msgChange("You won!");
    setTimeout(function() {
        resetSequence();
    }, 2000)
}

function wrong() {
    msgChange("Try again");
    console.log("You made a mistake");
    if (hard) {
        setTimeout(function() {
            resetSequence();
        }, 2000);
    } else {
        setTimeout(function() {
            showSequence();
        }, 2000);
    }
}

$('document').ready(function() {
    msgChange("Ready to play?");
    setTimeout(function() {
        addToSequence();
    }, 2000);
})

$('#btnR').click(function() {
    if (choiceEnabled) {
        showButton(1);
        playerInput(1);
    }
})
$('#btnB').click(function() {
    if (choiceEnabled) {
        showButton(2);
        playerInput(2);
    }
})
$('#btnG').click(function() {
    if (choiceEnabled) {
        showButton(3);
        playerInput(3);
    }
})
$('#btnY').click(function() {
    if (choiceEnabled) {
        showButton(4);
        playerInput(4);
    }
})
$('#reset').click(function() {
    resetSequence()
})
$('#play').click(function() {
    togglePlay()
})
