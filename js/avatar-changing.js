var myIndex = -1;
var i;

changeImg();

function changeImg() {
    var avatar = document.getElementsByClassName("avatar");
    for (i = 0; i < avatar.length; i++ ) {
        avatar[i].style.display = "none";
    };
    myIndex ++;
    if (myIndex >= avatar.length) {
        myIndex = 0;
    };
    avatar[myIndex].style.display = "block";
    setTimeout(changeImg, 3000);
};

// Function changeImg():
//     From top to bottom
//     for {i = 0
//     avatar[0] disappear
//     i = 1
//     avatar[1] disappear
//     i = 2
//     avatar[2] disappear
//     i = 3}
//     avatar[3] disappear}
//     myIndex = 0
//     avatar[myIndex = 0] display
//     wait 3s and do the function again
//     for {i = 0
//     avatar[0] disappear
//     i = 1
//     avatar[1] disappear
//     i = 2
//     avatar[2] disappear
//     i = 3
//     avatar[3] disappear}
//     myIndex = 1
//     avatar[myIndex = 1] display
//     wait 3s and do the function again