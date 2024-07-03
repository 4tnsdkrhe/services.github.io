(function ($) {
    jQuery.fn.sendForm = function (options) {
        options = $.extend(
            {
                successTitle: "Спасибо, что выбрали нас!",
                successText: "Мы свяжемся с Вами в ближайшее время.",
                errorTitle: "Сообщение не отправлено!",
                errorSubmit: "Ошибка отправки формы!",
                mailUrl: "/submit.php",
                autoClose: !1,
                autoCloseDelay: 5000,
            },
            options
        );
        var make = function () {
            var $this = $(this);
            $(this).submit(function () {
                var data = $(this).serialize();
                $.ajax({
                    url: options.mailUrl,
                    type: "POST",
                    data: data,
                    beforeSend: function () {
                        $this.find(".btn-submit").parents(".form__form").addClass("sending");
                    },
                    success: function (res) {
                        if (res == 1) {
                            $this[0].reset();
                            $this.find(".form__hide-success").slideUp().delay(5000).slideDown();
                            $this.find(".btn-submit").parents(".form__form").removeClass("sending");
                            $this.find(".form__hide-success").after('<div class="form__sys-message"></div>');
                            $this.find(".form__sys-message").html('<div class="form__success-title">' + options.successTitle + '</div><p class = "form__success-text" >' + options.successText + "</p>");
                            setTimeout(function () {
                                $this.find(".form__sys-message").fadeOut().delay(3000).remove();
                                if (options.autoClose) {
                                    $.magnificPopup.close();
                                }
                            }, options.autoCloseDelay);
                        } else {
                            $this.find(".btn-submit").parents(".form__form").removeClass("sending");
                            $this.append('<div class="form__error">' + options.errorSubmit + "</div>");
                            setTimeout(function () {
                                $this.find(".form__error").remove();
                            }, 5000);
                        }
                    },
                    error: function () {
                        $this.find(".btn-submit").parents(".form__form").removeClass("sending");
                        $this.append('<div class="form__error">' + options.errorSubmit + "</div>");
                        setTimeout(function () {
                            $this.find(".form__error").remove();
                        }, 5000);
                    },
                });
                return !1;
            });
        };
        return this.each(make);
    };
})(jQuery);
