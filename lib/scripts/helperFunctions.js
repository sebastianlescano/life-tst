/**
 * Converts given value to a string
 *
 * @param  {*}          s   Any value to convert
 * @return {string}     empty string if failure
 */
function cString(s) {
    const typ = typeof s;
    if (typ === 'string') return s;
    if (typ === 'number') {
        /* NaN check without calling function if number is not < 0 and not > 0 and does not eq 0 it must be NaN so default */
        if (s === 0) return '0';
        if (Number.isNaN(s)) return '0';
        return `${s}`;
    }
    if (typ === 'object' && s && typeof s.join === 'function') {
        return s.join('');
    }
    if (!s) return '';
    try {
        s = String(s);
    } catch (e) {
        s = '';
    }
    return s;
}

/**
 * Converts given value to a true boolean true/false
 * Values of "0", "false", "undefined", "null", "no" are all converted to false (normally these would evaluate to true since they are strings with some chars).
 *
 * @param  {*}              v       Any value to convert
 * @return {boolean}        true/false
 */
function cBoolean(v) {
    let tmp = v,
        typ = typeof tmp;
    if (tmp && typ === 'object') {
        tmp = cString(tmp);
        typ = 'string';
    }
    if (
        (typ === 'string' && tmp === '0') ||
        /^false$/i.test(tmp) ||
        /^no$/i.test(tmp) ||
        /^undefined$/i.test(tmp) ||
        /^null$/i.test(tmp)
    ) {
        return false;
    }
    return !!tmp;
}

/**
 * Function that splits a string
 *
 * @param  {string}         str         String to split
 * @param  {string}         splitStr    String to split string on
 * @return {array[string]}
 */
function splitString(str, splitStr) {
    if (str && splitStr) {
        return cString(str).split(cString(splitStr));
    }
    return [];
}

/**
 * Function that iterates over an array of classes and associates it with styles
 * defined in either component or section css-modules
 *
 * @param  {string}     sectionClasses     Section Classes
 * @param  {object}     sectionStyle       CSS Module
 * @return {string}
 */
function matchCSSModule(sectionClasses, sectionStyle) {
    return splitString(sectionClasses, ' ')
        .map((cls) => {
            const { moduleStyles } = sectionStyle;
            return sectionStyle[cls] || (moduleStyles && moduleStyles[cls]);
        })
        .join(' ')
        .trim();
}

/**
 * Function that takes in a url string and converts it to a relative url
 * Also converts phone numbers and email addresses to a (tel:+|mailto:) url
 *
 * @param  {string}     url
 * @return {string}
 */
function parseURL(url) {
    let retUrl = url;
    /* Currently don't need to make relative
        if (
            url &&
            (url.indexOf('//www.viome.com') > -1 || url.indexOf('viome.com') === 0)
        ) {
            return new URL(url).pathname;
        }
    */
    if (retUrl.indexOf('@') > -1 && retUrl.indexOf('mailto:') === -1) {
        retUrl = `mailto:${retUrl}`;
    } else if (
        !Number.isNaN(parseInt(retUrl, 10)) &&
        retUrl.indexOf('tel:') === -1
    ) {
        retUrl = `tel:+${retUrl}`;
    }
    return retUrl;
}

function GTMPageView(url) {
    const pageEvent = {
        event: 'pageview',
        page: url,
    };
    // eslint-disable-next-line no-unused-expressions
    window && window.dataLayer && window.dataLayer.push(pageEvent);
    return pageEvent;
}

function getViewport(width) {
    if (width >= 1200) {
        return 'DESKTOP';
    }
    if (width >= 768) {
        return 'TABLET';
    }
    return 'MOBILE';
}

function randomNumberGenerator(x) {
    if (!x) {
        return -1;
    }

    let newX = 0;

    for (let i = 0; i < x.length; i += 1) {
        newX += x.charCodeAt(i) * 10 ** i;
    }

    const y = Math.sin(newX) * 10000,
        id = y - Math.floor(y);
    return {
        id,
        hash: cString(Buffer.from(cString(id)).toString('base64')),
    };
}

export {
    cBoolean,
    cString,
    splitString,
    matchCSSModule,
    parseURL,
    GTMPageView,
    getViewport,
    randomNumberGenerator,
};
