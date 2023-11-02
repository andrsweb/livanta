<?php

/**
 * Clean incoming value from trash.
 *
 * @param	mixed	$value	Some value to clean.
 * @return	mixed	$value	The same value, but cleaned.
 */
function as_clean_value( $value )
{
	$value = trim( $value );
	$value = stripslashes( $value );
	$value = strip_tags( $value );

	return htmlspecialchars( $value );
}

/**
 * Function checks if value length is between min and max parameters.
 *
 * @param   string	$value  Specific string..
 * @param   int		$min    Minimum symbols value length.
 * @param   int		$max	Maximum symbols value length.
 * @return  bool            True if OK, false if value length is too small or large.
 */
function as_check_length( string $value, int $min, int $max ): bool
{
	return ! ( mb_strlen( $value ) < $min || mb_strlen( $value ) > $max );
}

/**
 * Function checks name symbols.
 *
 * @param   string  $name   Some name.
 * @return  bool            True if OK, false if string has bad symbols.
 */
function as_check_name( string $name ): bool
{
	return preg_match('/^[a-zа-я\s]+$/iu', $name );
}

/**
 * Function checks phone symbols.
 *
 * @param   string  $phone  Some phone number.
 * @return  bool            True if OK, false if string has bad symbols.
 */
function as_check_phone( string $phone ): bool
{
	return preg_match('/^[0-9()+\-\s]+$/iu', $phone );
}

if( ! empty( $_POST ) && isset( $_POST['func'] ) ){
	switch( $_POST['func'] ){
		case 'footer-form':
			as_send_footer_form();
			break;

		case 'contact-form':
			as_send_contact_form();
			break;

		default:
			as_send_contact_form();
	}
}

function as_send_footer_form(){
	$email		= isset( $_POST['footer-email'] ) ? as_clean_value( $_POST['footer-email'] ) : null;
	$title		= 'Email for subscribe from footer form';

	// Required fields.
	if( ! $email ){
		echo json_encode( [
			'success'	=> 0,
			'message'	=> 'Please complete all fields.'
		] );
		die();
	}

	// Prepare message for mail.
	$message = "You have new subscriber!\n" .
		"{$title}:\n\n" .
		"Email - $email\n\n\n";

	as_send_email( $title, $message );
}

function as_send_contact_form(){
	$name	 = isset( $_POST['name'] ) ? as_clean_value( $_POST['name'] ) : null;
	$phone	 = isset( $_POST['phone'] ) ? as_clean_value( $_POST['phone'] ) : null;
	$email	 = isset( $_POST['email'] ) ? as_clean_value( $_POST['email'] ) : null;
	$text	 = isset( $_POST['text'] ) ? as_clean_value( $_POST['text'] ) : null;
	$subject = isset( $_POST['business'] ) ? as_clean_value( $_POST['business'] ) : null;
	$title	 = 'Contacts form';

	// Required fields.
	if( ! $name || ! $phone ){
		echo json_encode( [
			'success'	=> 0,
			'message'	=> 'Please complete all fields.'
		] );
		die();
	}

	// Only letters & spaces in name.
	if( ! as_check_name( $name ) ){
		echo json_encode( [
			'success'	=> 0,
			'message'	=> 'Please enter correct name.'
		] );
		die();
	}

	// Check length to avoid very large text.
	if( ! as_check_length( $name, 1, 50 ) ){
		echo json_encode( [
			'success'	=> 0,
			'message'	=> 'The name must not exceed 50 characters'
		] );
		die();
	}

	if( ! as_check_length( $phone, 3, 30 ) ){
		echo json_encode( [
			'success'	=> 0,
			'message'	=> 'The phone number must not exceed 30 characters or be less than 3 characters.'
		] );
		die();
	}

	// Check phone symbols.
	if( ! as_check_phone( $phone ) ){
		echo json_encode( [
			'success'	=> 0,
			'message'	=> 'Please enter correct phone number'
		] );
		die();
	}


	// Prepare message for mail.
	$message = "Hello!You have a new mail!\n" .
		"{$title}:\n\n" .
		"Name - $name\n" .
		"Phone - $phone\n" .
		"Email - $email\n" .
		"Subject - $subject\n" .
		"Message - $text \n\n\n";
	as_send_email( $title, $message );
}

/**
 * @param string $subject
 * @param string $message
 * @return void
 */
function as_send_email( string $subject, string $message ){
	// Mail headers.
	$headers = "From: no-reply@" . $_SERVER['HTTP_HOST'] . "\r\n" .
		"Reply-To: no-reply@" . $_SERVER['HTTP_HOST'] . "\r\n" .
		"X-Mailer: PHP/" . phpversion();

	$result = mail('your email', $subject, $message, $headers );

	if( $result )
		echo json_encode( [
			'success'	=> 1,
			'message'	=> 'Thank you for your message! We will contact you as soon as possible.'
		] );	// Success.
	else
		echo json_encode( [
			'success'	=> 0,
			'message'	=> 'Sending error. Please try again later.'
		] );	// Failed.
}

die();