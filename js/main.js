$(document).ready(function() {
  $('.parallax-window').parallax({imageSrc: '../images/graphic.png'});

  $('.tooltip').tooltipster({
    
  });


  $("#quiz1").dlxQuiz({
      quizData: {
          questions: [
              {
                  q:'Where does the impeachment process start?',
                  a: "The House of Representatives",
                  options: [
                      "The House of Representatives",
                      "The Senate"
                  ]
              },
              {
                  q: "What removes a President from office?",
                  a: "A 2/3 conviction from Senate",
                  options: [
                      "A simple majority vote from the House",
                      "A 2/3 conviction from Senate"
                  ]
              },
              {
                  q: "True or False: Only one president has ever been impeached.",
                  a: "False",
                  options: ["True", "False"]
              }

          ]
      }
  });
  /* $("#number1"). */

  });

  var Page = (function() {

    var $navArrows = $( '#nav-arrows' ),
      $nav = $( '#nav-dots > span' ),
      slitslider = $( '#slider' ).slitslider( {
        onBeforeChange : function( slide, pos ) {

          $nav.removeClass( 'nav-dot-current' );
          $nav.eq( pos ).addClass( 'nav-dot-current' );

        }
      } ),

      init = function() {

        initEvents();

      },
      initEvents = function() {

        // add navigation events
        $navArrows.children( ':last' ).on( 'click', function() {

          slitslider.next();
          return false;
        } );

        $navArrows.children( ':first' ).on( 'click', function() {

          slitslider.previous();
          return false;
        } );

        $nav.each( function( i ) {

          $( this ).on( 'click', function( event ) {

            var $dot = $( this );

            if( !slitslider.isActive() ) {

              $nav.removeClass( 'nav-dot-current' );
              $dot.addClass( 'nav-dot-current' );
            }

            slitslider.jump( i + 1 );
            return false;

          } );
        } );
      };

      return { init : init };

  })();

  Page.init();
