﻿/*global jQuery, window*/
(function ($) {
    $(window).load(function () {
        $('.sp-wrap').smoothproducts();

        $('.product-attrs li').on('click', function () {
            var $variationDiv,
                selectedproductOptions = [],
                variationName,
                $form = $(this).closest("form"),
                $attrOptions = $form.find('.product-attr-options');

            $(this).find('input').prop('checked', true);

            $attrOptions.each(function () {
                selectedproductOptions.push($(this).find('input[type=radio]:checked').val());
            });
            variationName = selectedproductOptions.join('-');
            $variationDiv = $form.find('div.'+ variationName);
            if ($variationDiv.length > 0) {
                $('.variation-price').hide();
                $variationDiv.show();
                $form.find('input[name=productId]').val($form.find('input[name=' + variationName + 'Id]').val());
                $('.btn-add-cart').prop('disabled', false);
            } else {
                $('.btn-add-cart').prop('disabled', true);
            }
        });

        $('.quantity-button').on('click', function () {
            var quantityInput = $('.quantity-field');
            if ($(this).val() === '+')
            {
                quantityInput.val(parseInt(quantityInput.val(), 10) + 1);
            }
            else if (quantityInput.val() > 1) {
                quantityInput.val(quantityInput.val() - 1);
            }
        });
    });
})(jQuery);