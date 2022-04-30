$(document).ready(function () {
    var input = $('.username_field');
    input.focus();
    input.select();
    console.log("readyyyyy")
    var is_valid = true
    $(".login_form .confirm_password").hide();
    $(".login_form .small-description-area").hide();
    const phoneInputField = document.querySelector("#phone_input");
    const phoneInput = window.intlTelInput(phoneInputField, {
        initialCountry: "tr",
        hiddenInput :"deneme",
        preferredCountries: ["tr", "us"],
        utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
    $(".iti").hide()
    var small_description_text = "Sana nasıl hitap etmemizi istersin?"
    var small_description_length = 0;
    var small_description_interval;
    var small_description_erase_interval;

    var small_description_select_password_text = "Lütfen Bir Şifre Belirle"
    var small_description_select_password_length = 0;
    var small_description_select_password_interval;


    var name_type_text = "İsim"
    var name_type_text_length = 0;
    var name_type_text_interval;


    var username_type_text = "Kullanıcı Adı"
    var username_type_text_length = 0;
    var username_type_text_interval;

    var username_erase_text_interval;

    var forward_button_text = "İlerle"
    var forward_button_text_length = 0;
    var forward_button_text_interval;

    var login_button_text = "Oturum Aç"
    var login_button_text_length = 0;
    var login_button_text_interval;
    var login_forward_button_erase_text_interval;


    var register_select_text = "Kayıt Ol"
    var register_select_text_length = 0;
    var register_select_text_interval;

    var login_select_text = "Oturum Aç"
    var login_select_text_length = 0;
    var login_select_text_interval;
    var login_register_select_erase_text_interval;

    var social_login_erase_interval;
    var social_login_type_length = 0;
    var social_login_login_type_text = "giriş"
    var social_login_login_type_interval;
    var social_login_register_type_text = "kayıt"
    var social_login_register_type_interval;

    $(".toggle-password").click(function () {
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            $(this).html('&#x2031;')
            input.attr("type", "text");
        }
        else {
            $(this).html('&#x2030;')
            input.attr("type", "password");
        }
        console.log("hi")
    });

    $(".toggle-user-section").click(function () {
        if (this.id == "email") {
            $(".username_field").css('display', "none")
            $(".phone_field").css('display', "none")
            $(".email_field").css('display', "unset")
            var input = $('.email_field');
            input.focus();
            input.select();
            $(".iti").hide()
        }
        else if (this.id == "phone") {
            $(".username_field").css('display', "none")
            $(".phone_field").css('display', "unset")
            $(".email_field").css('display', "none")
            var input = $('.phone_field');
            input.focus();
            input.select();
            
            $(".iti").show()
        }
        else if (this.id == "username") {
            $(".username_field").css('display', "unset")
            $(".phone_field").css('display', "none")
            $(".email_field").css('display', "none")
            var input = $('.username_field');
            input.focus();
            input.select();
            $(".iti").hide()
        }
    });
    $(".remember_me_child").click(function () {
        var cb = $("#remember_me_cb");
        var icon = $("#check_icon_remember_me");
        if (cb.attr('custom_check') == "true") {
            cb.attr('custom_check', "false");
            icon.attr('hidden', 'true');
        }
        else {
            cb.attr('custom_check', "true");
            icon.removeAttr('hidden');
        }
    });
    function TypeSmallDescription() {
        if (small_description_length === 0) {
            small_description_interval = setInterval(TypeSmallDescription, 30);
        }
        console.log("type")
        $(".login_form .small-description-area label").html(small_description_text.substring(0, small_description_length++));

        if (small_description_length === small_description_text.length + 1) {
            clearInterval(small_description_interval);
            small_description_length = 0
            console.log("durdu")
        }
    }
    function TypeSmallDescriptionSelectPassword() {
        console.log("type scpass")
        console.log(small_description_select_password_length)
        console.log("====")
        console.log(small_description_select_password_text.length)
        $(".login_form .small-description-area label").html(small_description_select_password_text.substring(0, small_description_select_password_length++));

        if (small_description_select_password_length === small_description_select_password_text.length + 1) {
            clearInterval(small_description_select_password_interval);
            console.log("durdu")
        }
    }
    function EraseSmallDescription(start_text) {
        console.log("type sd")
        console.log(text.length)
        text = $(".login_form .small-description-area label").html()
        console.log(text.length)
        if (text.length === 2) {
            clearInterval(small_description_erase_interval)
            console.log("durdu")
            if (start_text === small_description_select_password_text) {
                small_description_select_password_length = 0
                small_description_select_password_interval = setInterval(TypeSmallDescriptionSelectPassword, 20)
            }
        }
        else {
            text = text.slice(0, -1);
            $(".login_form .small-description-area label").html(text);
        }
    }

    function TypeName() {
        console.log("type")
        $(".login_form .form_inputs .username_field").attr("placeholder", name_type_text.substring(0, name_type_text_length++));

        if (name_type_text_length === name_type_text.length + 1) {
            clearInterval(name_type_text_interval);
            console.log("durdu")
        }
    }

    function TypeUserName() {
        console.log("type")
        $(".login_form .form_inputs .username_field").attr("placeholder", username_type_text.substring(0, username_type_text_length++));

        if (username_type_text_length === username_type_text.length + 1) {
            clearInterval(username_type_text_interval);
            console.log("durdu")
        }
    }

    function EraseUsernamePlaceHolder(start_text) {
        console.log("type")
        text = $(".login_form .form_inputs .username_field").attr("placeholder")
        if (text === "") {
            clearInterval(username_erase_text_interval)
            console.log("durdu")
            if (start_text === username_type_text) {
                username_type_text_length = 0
                username_type_text_interval = setInterval(TypeUserName, 50)
            }
            if (start_text === name_type_text) {
                name_type_text_length = 0
                name_type_text_interval = setInterval(TypeName, 150)
            }
        }
        else {
            text = text.slice(0, -1);
            $(".login_form .form_inputs .username_field").attr("placeholder", text);
        }
    }

    function TypeForwardButton() {
        console.log("type")
        $(".login_form .login_button_field .login_button").html(forward_button_text.substring(0, forward_button_text_length++));

        if (forward_button_text_length === forward_button_text.length + 1) {
            clearInterval(forward_button_text_interval);
            console.log("durdu")
        }
    }

    function TypeLoginButton() {
        console.log("type")
        $(".login_form .login_button_field .login_button").html(login_button_text.substring(0, login_button_text_length++));

        if (login_button_text_length === login_button_text.length + 1) {
            clearInterval(login_button_text_interval);
            console.log("durdu")
        }
    }

    function EraseForwardLoginPlaceHolder(start_text) {
        console.log("type")
        text = $(".login_form .login_button_field .login_button").html()
        if (text === "") {
            clearInterval(login_forward_button_erase_text_interval)
            console.log("durdu")
            if (start_text === login_button_text) {
                login_button_text_length = 0
                login_button_text_interval = setInterval(TypeLoginButton, 50)
            }
            if (start_text === forward_button_text) {
                forward_button_text_length = 0
                forward_button_text_interval = setInterval(TypeForwardButton, 100)
            }
        }
        else {
            text = text.slice(0, -1);
            $(".login_form .login_button_field .login_button").html(text);
        }
    }

    function TypeLoginSelect() {
        console.log("type")
        $(".login_form .login_button_field .or_register_child label").html(login_select_text.substring(0, login_select_text_length++));

        if (login_select_text_length === login_select_text.length + 1) {
            clearInterval(login_select_text_interval);
            console.log("durdu")
        }
    }

    function TypeRegisterSelect() {
        console.log("type")
        $(".login_form .login_button_field .or_register_child label").html(register_select_text.substring(0, register_select_text_length++));

        if (register_select_text_length === register_select_text.length + 1) {
            clearInterval(register_select_text_interval);
            console.log("durdu")
        }
    }

    function EraseRegisterLoginSelectPlaceHolder(start_text) {
        console.log("type")
        text = $(".login_form .login_button_field .or_register_child label").html()
        if (text === "") {
            clearInterval(login_register_select_erase_text_interval)
            console.log("durdu")
            if (start_text === login_select_text) {
                login_select_text_length = 0
                login_select_text_interval = setInterval(TypeLoginSelect, 50)
            }
            if (start_text === register_select_text) {
                register_select_text_length = 0
                register_select_text_interval = setInterval(TypeRegisterSelect, 50)
            }
        }
        else {
            text = text.slice(0, -1);
            $(".login_form .login_button_field .or_register_child label").html(text);
        }
    }

    function SocialLoginType() {
        console.log("type login")
        text = social_login_login_type_text[social_login_type_length]
        $(".login_form .social-login-span .login_with_google label").append(text);
        $(".login_form .social-login-span .login_with_apple label").append(text);
        $(".login_form .social-login-span .login_with_facebook label").append(text);
        $(".login_form .social-login-span .login_with_twitter label").append(text);
        social_login_type_length++;
        if (social_login_type_length === social_login_login_type_text.length + 1) {
            clearInterval(social_login_login_type_interval);
            console.log("durdu")
        }
    }
    function SocialRegisterType() {
        console.log("type register")
        text = social_login_register_type_text[social_login_type_length]
        $(".login_form .social-login-span .login_with_google label").append(text);
        $(".login_form .social-login-span .login_with_apple label").append(text);
        $(".login_form .social-login-span .login_with_facebook label").append(text);
        $(".login_form .social-login-span .login_with_twitter label").append(text);
        social_login_type_length++;

        if (social_login_type_length === social_login_register_type_text.length + 1) {
            clearInterval(social_login_register_type_interval);
            console.log("durdu")
        }
    }
    function EraseSocialPlaceHolder(start_text) {
        console.log("type")
        text_google = $(".login_form .social-login-span .login_with_google label").html()
        text_apple = $(".login_form .social-login-span .login_with_apple label").html()
        text_facebook = $(".login_form .social-login-span .login_with_facebook label").html()
        text_twitter = $(".login_form .social-login-span .login_with_twitter label").html()
        if (text_google === "Google hesabıyla ") {
            clearInterval(social_login_erase_interval)
            console.log("durdu")
            if (start_text === social_login_login_type_text) {
                social_login_type_length = 0
                social_login_login_type_interval = setInterval(SocialLoginType, 50)
            }
            if (start_text === social_login_register_type_text) {
                social_login_type_length = 0
                social_login_register_type_interval = setInterval(SocialRegisterType, 50)
            }
        }
        else {
            text_google = text_google.slice(0, -1);
            text_apple = text_apple.slice(0, -1);
            text_facebook = text_facebook.slice(0, -1);
            text_twitter = text_twitter.slice(0, -1);
            $(".login_form .social-login-span .login_with_google label").html(text_google);
            $(".login_form .social-login-span .login_with_apple label").html(text_apple);
            $(".login_form .social-login-span .login_with_facebook label").html(text_facebook);
            $(".login_form .social-login-span .login_with_twitter label").html(text_twitter);
        }
    }
    function switch_to_ask_name_page() {

        $(".iti").hide()
        $(".login_form .form_title_section").css('margin-top', "0px")
        $(".js-validation-error").remove()
        $(".login_form .form_title_section .text-container").css('transform', "rotate3d(0,45,45,180deg)")
        $(".login_form").attr('show_type', "ask_name")

        $(".login_form .form_radio_field").hide("slow");

        $(".login_form .small-description-area").show();
        $(".login_form .small-description-area label").html("");
        small_description_interval = setTimeout(TypeSmallDescription, 300);

        username_erase_text_interval = setInterval(function () { EraseUsernamePlaceHolder(name_type_text) }, 50);

        var input = $('.login_form .form_inputs .username_field');
        if ($(".form_radio_field > #email").is(':checked')) {
            $(".login_form .form_inputs .email_field").hide()
            $(".login_form .form_inputs .username_field").show()
        }
        if ($(".form_radio_field > #phone").is(':checked')) {
            $(".login_form .form_inputs .phone_field").hide()
            $(".login_form .form_inputs .username_field").show()
        }
        input.focus();
        input.select();

        $(".login_form .normal-password").hide("slow");

        $(".login_form .remember_me").hide("slow");
        $(".login_form .forgot_password").hide("slow");
        login_forward_button_erase_text_interval = setInterval(function () { EraseForwardLoginPlaceHolder(forward_button_text) }, 50);
        login_register_select_erase_text_interval = setInterval(function () { EraseRegisterLoginSelectPlaceHolder(login_select_text) }, 50);
        social_login_erase_interval = setInterval(function () { EraseSocialPlaceHolder(social_login_register_type_text) }, 50);

        $(".login_form .confirm_password").hide("slow")
        $(".login_form .social-login-span").show("slow")
        $(".login_form .form_inputs").show("slow")
    }
    function switch_to_login_page() {
        $(".js-validation-error").remove()
        $(".login_form .form_title_section").css('margin-top', "30px")
        $(".login_form .form_title_section .text-container").css('transform', "rotate3d(0,45,45,0deg)")
        $(".login_form").attr('show_type', "login")
        $(".login_form .form_radio_field").show("slow");
        $(".login_form .small-description-area").hide("slow");
        username_erase_text_interval = setInterval(function () { EraseUsernamePlaceHolder(username_type_text) }, 50);
        var input = $('.login_form .form_inputs .username_field');

        if ($(".form_radio_field > #email").is(':checked')) {
            $(".login_form .form_inputs .email_field").show()
            $(".login_form .form_inputs .username_field").hide()
            input = $('.login_form .form_inputs .email_field');
        }
        if ($(".form_radio_field > #phone").is(':checked')) {
            $(".login_form .form_inputs .phone_field").show()
            $(".login_form .form_inputs .username_field").hide()
            input = $('.login_form .form_inputs .phone_field');
            $(".iti").show()
        }
        input.focus();
        input.select();
        $(".login_form .normal-password").show("slow");
        $(".login_form .remember_me").show("slow");
        $(".login_form .forgot_password").show("slow");
        login_forward_button_erase_text_interval = setInterval(function () { EraseForwardLoginPlaceHolder(login_button_text) }, 50);
        login_register_select_erase_text_interval = setInterval(function () { EraseRegisterLoginSelectPlaceHolder(register_select_text) }, 50);
        social_login_erase_interval = setInterval(function () { EraseSocialPlaceHolder(social_login_login_type_text) }, 50);

        $(".login_form .confirm_password").hide("slow")
        $(".login_form .social-login-span").show("slow")
        $(".login_form .form_inputs").show("slow")
    }
    $(".or_register_child").click(function () {
        if ($(".login_form").attr('show_type') == "login") {
            switch_to_ask_name_page()
        }
        else if ($(".login_form").attr('show_type') == "ask_name") {
            switch_to_login_page()
        }
        else if ($(".login_form").attr('show_type') == "select_passwords") {
            switch_to_login_page()
        }
    });
    function append_error_to_container(container, error) {
        error_item = $("<label>").text(error);
        error_item.attr('class', "js-validation-error");
        container.append(error_item)
        is_valid = false
    }
    $(".login_form .login_button_field .login_button").click(function () {
        if ($(".login_form").attr('show_type') == "login") {
            is_valid = true
            $(".js-validation-error").remove()
            var container = $("<div>")
            container.attr('class', "js-validation-error flex-center-col");
            container.hide("fast")
            $(".login_form .form_inputs").before(container)
            var username = $(".login_form .form_inputs .username_field").val()
            var email = $(".login_form .form_inputs .email_field").val()
            var phone = phoneInput.getNumber();
            var is_username = $(".form_radio_field > #username").is(':checked')
            var is_email = $(".form_radio_field > #email").is(':checked')
            var is_phone = $(".form_radio_field > #phone").is(':checked')
            var password = $(".login_form #password-field-normal").val()
            if (is_username) {
                if (username === "") {
                    append_error_to_container(container, "- Lütfen kullanıcı adınızı giriniz")
                }
                else if (username.length < 5) {
                    append_error_to_container(container, "- Kullanıcı adı en az 5 karakter olmalı")
                }
            }
            else if (is_email) {
                if (email === "") {
                    append_error_to_container(container, "- Lütfen emailinizi giriniz")
                }
                else if (email.length < 5) {
                    append_error_to_container(container, "- Email çok kısa")
                }
                else if (!email.includes("@")) {
                    append_error_to_container(container, "- Email formatı yanlış")
                }
                else {
                    email = email.split("@")
                    if (!email[1].includes(".")) {
                        append_error_to_container(container, "- Email formatı yanlış")
                    }
                }
            }
            else if (is_phone) {
                var error = phoneInput.getValidationError();
                if(error === 1){
                    append_error_to_container(container, "- Lütfen Ülke Kodu Seçiniz...")
                }
                else if(error === 2){
                    append_error_to_container(container, "- Numara Çok Kısa...")
                }
                else if(error === 3){
                    append_error_to_container(container, "- Numara Çok Uzun...")
                }
                else if(error === 4){
                    append_error_to_container(container, "- Hatalı Numara ...")
                }
                else if(error === 5){
                    append_error_to_container(container, "- Hatalı Numara...")
                }
            }
            if (is_valid === true) {
                if (password === "") {
                    append_error_to_container(container, "- Lütfen Şifre Giriniz...")
                }
                else {
                    if (password.length < 8) {
                        append_error_to_container(container, "- Minimum 8 Karakter Girilmeli...")
                    }
                    else {
                        var reg = new RegExp('^[0-9]*$');
                        if (reg.test(password) != false) {
                            append_error_to_container(container, "- Şifre Karakter İçermeli")
                        }
                    }
                }
            }

            if (is_valid === true) {
                $(".login_form").first().submit()
            }
            else {
                container.show("fast")
            }

        }
        if ($(".login_form").attr('show_type') == "ask_name") {
            is_valid = true
            $(".js-validation-error").remove()
            var container = $("<div>")
            container.attr('class', "js-validation-error flex-center-col");
            container.hide("fast")
            $(".login_form .form_inputs").before(container)
            var name = $(".login_form .form_inputs .username_field").val()
            if (name === "") {
                append_error_to_container(container, "- Lütfen isminizi Girin...")
            }
            if (name.length < 3) {
                append_error_to_container(container, "- En az 3 karakter girmelisiniz...")
            }

            if (is_valid === false) {
                container.show("fast")
            }
            else {
                switch_to_password_form(name)
            }
        }
        else if ($(".login_form").attr('show_type') == "select_passwords") {
            is_valid = true
            $(".js-validation-error").remove()
            var container = $("<div>")
            container.attr('class', "js-validation-error flex-center-col");
            container.hide("fast")
            $(".login_form .normal-password ").before(container)
            var password = $(".login_form .password_field_items #password-field-normal").val()
            var confirm_password = $(".login_form .password_field_items #password-field-confirm").val()
            console.log("---" + password + "=?" + confirm_password + "---")

            if (password === "") {
                append_error_to_container(container, "- Lütfen Şifre Giriniz...")
            }
            else {
                if (password.length < 8) {
                    append_error_to_container(container, "- Minimum 8 Karakter Girilmeli...")
                }
                else {
                    var reg = new RegExp('^[0-9]*$');
                    if (reg.test(password) != false) {
                        append_error_to_container(container, "- Şifre Karakter İçermeli")
                    }
                    else {
                        if (confirm_password === "") {
                            append_error_to_container(container, "- Lütfen Şifreyi Onaylayınız...")
                        }
                        else {
                            if (password != confirm_password) {
                                append_error_to_container(container, "- Girilen Şifreler Eşleşmiyor...")
                            }
                        }
                    }
                }
            }
            if (is_valid === false) {
                container.show("fast")
            }
            else {
                alert("form-posted")
            }
        }
    });
    
    function switch_to_password_form(name) {
        small_description_erase_interval = setInterval(function () { EraseSmallDescription(small_description_select_password_text) }, 20);
        $(".login_form .form_inputs").hide("slow")
        $(".login_form .password_field_items").show("slow")
        $(".login_form .social-login-span").hide("slow")
        $(".login_form .form_title_section").css('margin-top', "-150px")
        var input = $('.login_form .normal-password input');
        input.focus();
        input.select();
        $(".login_form").attr('show_type', "select_passwords")

    };
    function note_animation()
    {
        var total = window.innerWidth/15;
        var container = $("body")
        var i = 0;
        while(i<total){
            var item = document.createElement("i");
            var x = Math.floor(Math.random()*window.innerWidth-50)
            var y = Math.floor(Math.random()*window.innerHeight-50)
            item.classList.add("note-animation")
            let cap = Math.random() * 10;
            item.style.left=x+'px'
            // item.style.top=(-1*y -100) +'px' 
            item.style.top= y +'px' 
            item.style.marginTop = -y -100 + 'px'
            item.style.fontSize = 10+ 5*cap +'px';
            item.id = i
            if(i%2==1)
            {
                item.innerHTML = '&#x2022;';
            }
            else{
                item.innerHTML = '&#x2023;';
            }
            delay = Math.random() *5 
            duration = Math.random() *10 
            item.style.animationDelay = delay+ 's'
            item.style.animationDuration = 4+ duration + 's'
            container.append(item)
            i++
        }
        // var id= 0;
        // items = $(".note-animation")
        // items.hide();
        // items.show();
        // item = $(".note-animation").first().show( Math.random()*1000, function showNext() {
        //     $( this ).next( ".note-animation" ).show( Math.random()*1000, showNext );
        //   });
    }
    note_animation()
    //document end
});


