function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    var selectorRules = {};
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        // var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        // var errMessage = rule.test(inputElement.value);
        var errMessage;
        var rules = selectorRules[rule.selector];
        for (var i = 0; i < rules.length; i++) {
            switch(inputElement.type){
                case 'radio':
                case 'checkbox':
                    break;
                default:
                    errMessage = rules[i](inputElement.value);
            }
            if (errMessage) break;
        }

        if (errMessage) {
            errorElement.innerText = errMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        }
        else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errMessage;
    }
    var formElement = document.querySelector(options.form);

    if (formElement) {
        formElement.onsubmit = function (e) {
            var isFormValid = true;
            e.preventDefault();
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                // console.log(isValid);
                if (!isValid) {
                    isFormValid = false;
                }
            })
            if (isFormValid) {
                var enableInput = formElement.querySelectorAll('[name]');
                var formValues = Array.from(enableInput).reduce(function (values, input) {
                    //console.log(input.value)
                    //console.log(values) 
                    //console.log(input.name);
                    values[input.name] = input.value
                    return values;
                }, {})
                if (typeof options.onSubmit === 'function') {
                    options.onSubmit(formValues)
                }
                else {
                    inputElement.submit();
                }
            }
            else {
                console.log("Error");
            }
        }
        options.rules.forEach(function (rule) {
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            }
            else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                inputElement.onblur = function (e) {
                    validate(inputElement, rule);
                }
                inputElement.oninput = function (e) {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            }
        })
        // console.log(selectorRules)
    }
}

Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message || "Vui lòng nhập trường này"
        }
    }
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email'
        }
    }
}

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min}`;
        }
    }
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || `Giá trị nhập vào không chính xác`;
        }
    }
}