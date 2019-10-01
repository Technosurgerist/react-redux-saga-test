export function getCookie(name,checkValue) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    parts.shift();
    var values = parts.map(function(i){return i.split(";").shift()});
    if (checkValue) {
        return values.indexOf(checkValue) !== -1
    } else if (values.length == 1) {
        return values[0]
    } else {
        return (values.length) ? values : null
    }
}
export function fixNumber(num,len = 5,dec) {
    if (!num) {
        return 0;
    }
    // visual shortener
    // len — overall lenght 
    // dec — decimal digits count
    const arr = num.toString().split('.');
    len = (dec) ? arr[0].length + dec : len;

    arr[1] = (arr[1]) ? arr[1].slice(0,(len-arr[0].length > 0) ? len-arr[0].length : 0) : null;
    while (arr[1] && arr[1].length && arr[1].slice(-1) === '0') {
        arr[1] = arr[1].slice(0,-1);
    }
	return (arr[1]) ? arr[0] + '.' + arr[1] : arr[0];
}

export function parseError(error) {
    const children = (error.errors) ? error.errors.children : {_error: {errors: [error.message]}};
    return Object.keys(children).reduce((result, key) => {
        const value = children[key];
        if (value.errors) {
            result[key] = value.errors[0];
        }
        return result;
    }, {});
}


export function getCaretPosition (ctrl) {
	// IE < 9 Support
	if (document.selection) {
		ctrl.focus();
		var range = document.selection.createRange();
		var rangelen = range.text.length;
		range.moveStart ('character', -ctrl.value.length);
		var start = range.text.length - rangelen;
		return {'start': start, 'end': start + rangelen };
	}
	// IE >=9 and other browsers
	else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
		return {'start': ctrl.selectionStart, 'end': ctrl.selectionEnd };
	} else {
		return {'start': 0, 'end': 0};
	}
}


export function setCaretPosition(ctrl, start, end) {
	// IE >= 9 and other browsers
	if(ctrl.setSelectionRange)
	{
		ctrl.focus();
		ctrl.setSelectionRange(start, end);
	}
	// IE < 9
	else if (ctrl.createTextRange) {
		var range = ctrl.createTextRange();
		range.collapse(true);
		range.moveEnd('character', end);
		range.moveStart('character', start);
		range.select();
	}
}
