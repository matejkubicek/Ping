$(function () {
    $('form').submit(function () {
        let email = $('#subscribe-form__email'),
            valid = true;
        $(this).find('.wrong').removeClass('wrong');
        $(this).find('.subscribe-form__alert').hide();

        if (!email.val() || !email.val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
            email.addClass('wrong').next().fadeIn(1000);
            valid = false;
        }
        return valid;
    });
});
