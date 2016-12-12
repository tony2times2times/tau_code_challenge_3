console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  $( '#addJokeButton' ).on( 'click', function(){
    var objectToSend = {
      asdf: 'qwer'
    }; // end objectToSend
    $.ajax({
      url: '/testPost',
      type: 'POST',
      data: objectToSend,
      success: function( response ){
        console.log( 'back from ajax:', response );
      } //end success  
    });// end ajax
  });
});
