var iframe          = document.getElementById( 'main-video' );
var player          = new Vimeo.Player( iframe );

var visitedCount    = Number( window.localStorage.getItem( 'biotox-gold' ) );
var header          = document.getElementById( 'header' );


function mainPage(){
    if ( visitedCount > 0 ) {
        header.classList.remove( 'video--fullscreen' );
        header.classList.add( 'hide-sound' );
        document.getElementById( 'content-after' ).classList.remove( 'd-none' );
        document.getElementById( 'content-after' ).classList.add( 'd-block' );
    } else {
        player.play();
        setTimeout(function(){ document.cookie = 'biotoxvisited=true; expires=Tue, 1 Jan 2030 00:00:00 UTC; path=/'; }, 5000);
        setTimeout(function () {
            document.getElementById( 'content-after' ).classList.remove( 'd-none' );
            document.getElementById( 'content-after' ).classList.add( 'd-block' );
        }, 4468000);
    }

    setTimeout(function(){ window.localStorage.setItem( 'biotox-gold', visitedCount + 1 ); }, 5000);

    document.getElementById( 'iframe-blocker' ).addEventListener( 'click', vimeoFunctions );

    function vimeoFunctions() {
        player.getPaused().then( function( paused ) {
            if ( paused ) {
                player.setVolume(1);
                player.play();
                header.classList.add( 'video--fullscreen' );
                header.classList.remove( 'video--paused' );
            } else {
                if ( ! header.classList.contains( 'hide-sound' ) ){
                    player.setVolume(1);
                    header.classList.add( 'hide-sound' );
                }
                else {
                    player.pause();
                    header.classList.remove( 'video--fullscreen' );
                    header.classList.add( 'video--paused' );
                }
            }
        }).catch(function( error ) {
            console.log( error );
        });
    }
}

function noAutoPage(){
    if ( visitedCount > 0 ) {
        document.getElementById( 'content-after' ).classList.remove( 'd-none' );
        document.getElementById( 'content-after' ).classList.add( 'd-block' );
    } else {
        setTimeout(function(){ document.cookie = 'biotoxvisited=true; expires=Tue, 1 Jan 2030 00:00:00 UTC; path=/'; }, 5000);
        setTimeout(function () {
            document.getElementById( 'content-after' ).classList.remove( 'd-none' );
            document.getElementById( 'content-after' ).classList.add( 'd-block' );
        }, 4468000);
    }

    setTimeout(function(){ window.localStorage.setItem( 'biotox-gold', visitedCount + 1 ); }, 5000);

    document.getElementById( 'iframe-blocker' ).addEventListener( 'click', vimeoFunctions );

    function vimeoFunctions() {
        player.getPaused().then( function( paused ) {
            if ( paused ) {
                player.setVolume(1);
                player.play();
                header.classList.add( 'video--fullscreen' );
                header.classList.remove( 'video--paused' );
            } else {
                if ( ! header.classList.contains( 'hide-sound' ) ){
                    player.setVolume(1);
                    header.classList.add( 'hide-sound' );
                }
                else {
                    player.pause();
                    header.classList.remove( 'video--fullscreen' );
                    header.classList.add( 'video--paused' );
                }
            }
        }).catch(function( error ) {
            console.log( error );
        });
    }
}