
add_action('init', function() {
	if (is_admin()) {
		return;
	}

	global $wp_scripts;
    if (isset($wp_scripts->registered['jquery']->ver)) {
        // Use the version included with WP instead of hard-coded value
        // $wp_scripts should always contain the version
        // This way we don't have to change the script any time we update WP
        $ver = $wp_scripts->registered['jquery']->ver;
	} else {
        // Else fall back to a safe version
        $ver = '1.12.4';
	}

	wp_deregister_script('jquery');
	wp_register_script('jquery', "//ajax.googleapis.com/ajax/libs/jquery/$ver/jquery.min.js", false, $ver);
});