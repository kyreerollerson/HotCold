$(document).ready(function () {

    $('prepend')
         .css('opacity', 0)
        .slideDown('slow')
        .animate(
            { opacity: 1 },
            { queue: false, duration: 'slow' }
        );

    //Initial Variables

    var answer = Math.floor((Math.random() * 100) + 1);
    console.log("The secret number is: " + answer);
    var numberOfGuesses = 0;
    var guesses = [];
    var distance = null;
    var previousDistance = null;


    function getGuess() {
        $('#meta-game-area').prepend('<p class="dashed">Enter your guesses in the textbox below, then press enter</p>');
        $('#meta-game-area').prepend('<p class="dashed">Care to take a guess at it?</p>');
        $('#meta-game-area').prepend('<p class="dashed">I am thinking of a number that is between 1 and 100</p>');
        $("#submit").click(game);
        $("#guess").keydown(function (enter) {
            if (enter.keyCode == 13) {
                game();
            }
        });
    }

    getGuess();

    function game() {
        var guess = parseInt($('#guess').val());
        if (guess !== null && $.isNumeric(guess) && (1 < guess < 101)) {
            $('#guess').val('');
            numberOfGuesses += 1;
            guesses.push(guess);
            distance = Math.abs(answer - guess);
            previousDistance = Math.abs(answer - guesses[guesses.length - 2]);
            var polished = '<p>' + guess + '</p>';
            var polans = "null";
            $('#game-area').prepend(polished);
                $('#game-area p:first-child')
                  .css('opacity', "0")
                  .css("margin-top", "-20px")
                  .animate(
                    { opacity: "1" },
                    { duration: 'slow' }
                  )
                  .animate(
                    {marginTop: "0px"},
                    { queue: false, duration: 'slow' }
                  );
                    if (guess > 99 || guess < 2){
                            polans = '<p>Sorry, your guess must be a number between 1 and 100 </p>'
                            $('#game-area').prepend(polans);
                            $('#game-area p:first-child')
                                .css('opacity', "0")
                                .css("margin-top", "-20px")
                                .animate(
                                    { opacity: "1" },
                                    { queue: true, duration: 'slow' }
                                )
                                .animate(
                                    {marginTop: "0px"},
                                    { queue: false, duration: 'slow' }
                                );
                                 if (numberOfGuesses == 2){
                                    $('html, body').animate({ 
                                         scrollTop: $(document).height()-$(window).height()
                                    });
                                }
                    }
                    else if (guess === answer) {
                        polans = "<p>Congrats! You got it in " + numberOfGuesses + " attempts! The secret number was " + answer + "</p>"
                        $('#game-area').prepend(polans);
                            $('#game-area p:first-child')
                                .css('opacity', "0")
                                .css("margin-top", "-20px")
                                .animate(
                                    { opacity: "1" },
                                    { queue: true, duration: 'slow' }
                                )
                                .animate(
                                    {marginTop: "0px"},
                                    { queue: false, duration: 'slow' }
                                );
                                 if (numberOfGuesses == 2){
                                    $('html, body').animate({ 
                                         scrollTop: $(document).height()-$(window).height()
                                    });
                                }
                     } 
                    
                    else {
                    console.log(guess, answer, previousDistance, distance);
                        if (isNaN(previousDistance)) {
                            if (guess > answer) {
                                polans = '<p>Guess lower!</p>'
                                $('#game-area').prepend(polans);
                            $('#game-area p:first-child')
                                .css('opacity', "0")
                                .css("margin-top", "-20px")
                                .animate(
                                    { opacity: "1" },
                                    { queue: true, duration: 'slow' }
                                )
                                .animate(
                                    {marginTop: "0px"},
                                    { queue: false, duration: 'slow' }
                                );
                                 if (numberOfGuesses == 2){
                                    $('html, body').animate({ 
                                         scrollTop: $(document).height()-$(window).height()
                                    });
                                }

                            } 
                            else if (guess < answer) {
                                polans = '<p>Guess higher!</p>'
                                $('#game-area').prepend(polans);
                                $('#game-area p:first-child')
                                .css('opacity', "0")
                                .css("margin-top", "-20px")
                                .animate(
                                    { opacity: "1" },
                                    { queue: true, duration: 'slow' }
                                )
                                .animate(
                                    {marginTop: "0px"},
                                    { queue: false, duration: 'slow' }
                                );
                                 if (numberOfGuesses == 2){
                                    $('html, body').animate({ 
                                         scrollTop: $(document).height()-$(window).height()
                                    });
                                }
                            }

                        } 
                        else if (distance > previousDistance) {
                            if (guess > answer) {
                                polans = '<p class="colder">You\'re getting colder, guess lower!</p>'
                                $('#game-area').prepend(polans);
                                 $('#game-area p:first-child')
                                .css('opacity', "0")
                                .css("margin-top", "-20px")
                                .animate(
                                    { opacity: "1" },
                                    { queue: true, duration: 'slow' }
                                )
                                .animate(
                                    {marginTop: "0px"},
                                    { queue: false, duration: 'slow' }
                                );
                                 if (numberOfGuesses == 2){
                                    $('html, body').animate({ 
                                         scrollTop: $(document).height()-$(window).height()
                                    });
                                }
                            } 
                            else if (guess < answer) {
                                polans = '<p class="colder">You\'re getting colder, guess higher!</p>'
                                $('#game-area').prepend(polans);
                                $('#game-area p:first-child')
                                .css('opacity', "0")
                                .css("margin-top", "-20px")
                                .animate(
                                    { opacity: "1" },
                                    { queue: true, duration: 'slow' }
                                )
                                .animate(
                                    {marginTop: "0px"},
                                    { queue: false, duration: 'slow' }
                                );
                                 if (numberOfGuesses == 2){
                                    $('html, body').animate({ 
                                         scrollTop: $(document).height()-$(window).height()
                                    });
                                }
                            }
                        } 
                        else if (distance < previousDistance) {
                            if (guess > answer) {
                                polans = '<p class="warmer">You\'re getting hotter, guess lower!</p>'
                                $('#game-area').prepend(polans);
                                $('#game-area p:first-child')
                                .css('opacity', "0")
                                .css("margin-top", "-20px")
                                .animate(
                                    { opacity: "1" },
                                    { queue: true, duration: 'slow' }
                                )
                                .animate(
                                    {marginTop: "0px"},
                                    { queue: false, duration: 'slow' }
                                );
                                 if (numberOfGuesses == 2){
                                    $('html, body').animate({ 
                                         scrollTop: $(document).height()-$(window).height()
                                    });
                                }
                            }
                            else if (guess < answer) {
                                polans = '<p class="warmer">You\'re getting hotter, guess higher!</p>'
                                $('#game-area').prepend(polans);
                                 $('#game-area p:first-child')
                                .css('opacity', "0")
                                .css("margin-top", "-20px")
                                .animate(
                                    { opacity: "1" },
                                    { queue: true, duration: 'slow' }
                                )
                                .animate(
                                    {marginTop: "0px"},
                                    { queue: false, duration: 'slow' }
                                );
                                 if (numberOfGuesses == 2){
                                    $('html, body').animate({ 
                                         scrollTop: $(document).height()-$(window).height()
                                    });
                                }
                            }
                        } 
                        else if (distance === previousDistance) {
                            if (guess > answer) {
                                polans = '<p class="warmer">You\'re on fire, guess lower!</p>'
                                $('#game-area').prepend(polans);
                                 $('#game-area p:first-child')
                                .css('opacity', "0")
                                .css("margin-top", "-20px")
                                .animate(
                                    { opacity: "1" },
                                    { queue: true, duration: 'slow' }
                                )
                                .animate(
                                    {marginTop: "0px"},
                                    { queue: false, duration: 'slow' }
                                );
                                 if (numberOfGuesses == 2){
                                    $('html, body').animate({ 
                                         scrollTop: $(document).height()-$(window).height()
                                    });
                                }
                            } 
                            else if (guess < answer) {
                                polans = '<p class="warmer">You\'re on fire, guess higher!</p>'
                                $('#game-area').prepend(polans);
                                $('#game-area p:first-child')
                                .css('opacity', "0")
                                .css("margin-top", "-20px")
                                .animate(
                                    { opacity: "1" },
                                    { queue: true, duration: 'slow' }
                                )
                                .animate(
                                    {marginTop: "0px"},
                                    { queue: false, duration: 'slow' }
                                );
                                if (numberOfGuesses == 2){
                                    $('html, body').animate({ 
                                         scrollTop: $(document).height()-$(window).height()
                                    });
                                }
                            }
                        }
            }
        }
        $('#newgame').click(function (e) {
            e.preventDefault();
            answer = Math.floor((Math.random() * 100) + 1);
            console.log(answer);
            numberOfGuesses = 0;
            guesses = [];
            distance = null;
            previousDistance = null;
            $('#game-area').html('');
            $('#guess').val('');
        });
    }
});

