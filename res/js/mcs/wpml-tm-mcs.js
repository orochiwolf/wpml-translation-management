jQuery(document).ready(function () {
    if (window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1) {
        jQuery('#icl_translation_pickup_mode').submit(icl_tm_set_pickup_method);
    } else {
        jQuery('#icl_translation_pickup_mode').on('submit', icl_tm_set_pickup_method);
    }

    function icl_tm_set_pickup_method(e) {
        e.preventDefault();

        var form = jQuery(this);
        var submitButton = form.find(':submit');

        submitButton.prop('disabled', true);
        var ajaxLoader = jQuery(icl_ajxloaderimg).insertBefore(submitButton);

        jQuery.ajax({
            type: "POST",
            url: icl_ajx_url,
            dataType: 'json',
            data: 'icl_ajx_action=set_pickup_mode&' + form.serialize(),
            success: function (msg) {
                if (!msg.error) {
                    var boxPopulation = new WpmlTpPollingPickupPopulateAction(jQuery, TranslationProxyPolling);
                    boxPopulation.run();
                }
            },
            complete: function () {
                ajaxLoader.remove();
                submitButton.prop('disabled', false);
            }
        });

        return false;
    }

    jQuery( '#js-translated_document-options-btn' ).click(function(){

		var document_status = jQuery( 'input[name*="icl_translated_document_status"]:checked' ).val(),
			page_url = jQuery( 'input[name*="icl_translated_document_page_url"]:checked' ).val(),
			response_text = jQuery( '#icl_ajx_response_tdo' ),
			spinner = '<span id="js-document-options-spinner" style="float: inherit; margin: 0" class="spinner is-active"></span>';

		response_text.html( spinner );
		response_text.show();

		jQuery.ajax({
			url: ajaxurl,
			type: 'POST',
			data: {
				action: 'wpml_translated_document_options',
				nonce: jQuery( '#wpml-translated-document-options-nonce' ).val(),
				document_status: document_status,
				page_url: page_url,
			},
			success: function ( response ) {
				if( response.success ) {
					response_text.text( icl_ajx_saved );
				} else {
					response_text.text( icl_ajx_error );
					response_text.show();
				}
				setTimeout(function () {
					response_text.fadeOut('slow');
				}, 2500);
			}
		});
	});
});