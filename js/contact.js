// Listen to form
document.getElementById( 'contactForm' ).addEventListener( 'submit', submitForm );

function submitForm( e ) {
    e.preventDefault();

    console.log( 111 );
}