
var selectAll = _ => true;


function distinct(selector) {

    //var _selected = [];
    var _selected={};

    return v => {
        var current = selector(v);
        //var alreadySelected = _selected[current]!==undefined;

        //if selected is selected for the first time
        if (_selected[current]===undefined) {
            //step #1. remember that we have selected it
            //_selected.push(current);
            _selected[current]=true;
            //step #2. return true;
            return true;

        }

        //return false if selected item is already selected.
        return false;
    }
}

const take = (n, matcher) => {
    if (!matcher) matcher = selectAll;
    var count = 0;

    return v => {
        if (n && count === n)
            return; //break the loop
        var matched = matcher(v);
        if (matched)
            count++;
        return matched;
    }
}

const skip = (n, matcher) => {
    if (!matcher) matcher = selectAll;
    var count = 0;
    return v => {
        const matched = matcher(v);
        if (matched) {
            count++;
            if (count < n)
                return false;
        }

        return matched;
    }
}

// books.filter(all(b=>b.author.includes('Vivek'), b=>b.price<200));

//match({ $1: all(match({ author:contains('Vivek')),match( {price:lessThan(200)}))})


const all = (...matchers) => {
    return v=>{
        for (var matcher of matchers) {
            if (!matcher(v))
                return false;
        }
        return true;
    }
}

const and=all;

const any = (...matchers) => {

    return v=>{
        for (var matcher of matchers) {
            if (matcher(v))
                return true;
        }
        return false;
    }
}
const or=any;

const none = (...matchers) => {

    return v=>{
        for (var matcher of matchers) {
            if (matcher(v))
                return false;
        }
        return true;
    };    
}

const not = matcher => v => (!matcher(v));



const fill = (target, series) => {

    if (typeof series !== 'function')
        series = v => v;

    if (Array.isArray(target)) {
        var t = target;
        target = (v) => t.push(v);
    }

    while (true) {
        const value = series();
        if (value === undefined)
            return;
        target(value);
    }

}

const fixed = (n, value) => {
    var count = 0;
    return () => {
        count++;
        if (count <= n)
            return value;
    }
}


const range = (min, max = null, steps = 1) => {
    if (max == null) {
        max = min;
        min = 0;
    }
    var count = min;
    return () => {
        if (count >= max)
            return;
        const value = count;
        count += steps;
        return value;
    }

}


var match = (criteria) => {

    function matcher(object) {
        let keys= Object.getOwnPropertyNames(criteria);
        for (let key of keys) {
            var value = criteria[key];
            var data = key.startsWith("$") ? object : object[key]
            var result;
            if (typeof value === 'function') {
                result = value(data);
            } else {
                result = data === value;
            }

            if (!result)
                return false;
        }
        return true;
    }

    return matcher;
}

const equals= match=> value=> match===value;

var notEquals = match=> value=> match!==value;

const contains = text => value => value.toLowerCase().includes(text.toLowerCase());

const arrayContains=  item => array=> array.find(x=>x.toLowerCase()===item.toLowerCase())!==undefined;

const between = (min = 0, max) => value => {
    if (max === undefined) {
        max = min;
        min = 0;
    }

    return value >= min && value <= max;
}

const lessThan = max => value => value < max;

const greaterThan = min => value => value > min;

const containsAnyof = (...values) => value => {
    value=value.toLowerCase();
    for(var _value in values) {
        if(value.includes(_value.toLowerCase()))
            return true;
    }
    return false;
};

const containsNoneOf = (...candiates) => value => {
    value=value.toLowerCase();
    for(let candidate of candiates) {
        if(value.includes(candidate.toLowerCase()))
            return false;
    }
    return true;
}

const containsAllOf = (...candidates) => value => {
    value=value.toLowerCase();
    for (var candidate of candidates) {
        if (!value.includes(candidate.toLowerCase()))
            return false;
    }
    return true;
}
const hasAnyOf = (...candiates) => value => {
    for(var candiates in candiates) {
        if(value===(candidate))
            return true;
    }
    return false;
};

const hasNoneOf = (...candiates) => value => {
    for(let candiates of candiates) {
        if(value===(candidate))
            return false;
    }
    return true;
}

const hasAllOf = (...candidates) => value => {
    for (var candidate of candidates) {
        if (value!==(candidate))
            return false;
    }
    return true;
}



module.exports = {
    matchers: {
        distinct,
        all,
        and,
        any,
        none,
        not,
        take,
        skip,
        all,
        any,
        none,
        not,
        or,
        
        fill,
        fixed,
        range,
        match,
        contains,
        between,
        lessThan,
        greaterThan,
        arrayContains,
        containsAnyof,
        containsNoneOf,
        containsAllOf,
        selectAll,
        not,
        and,
        or,
        hasAllOf,
        hasAnyOf,
        hasNoneOf,
        
        match,
        contains,
        between,
        lessThan,
        greaterThan,
        anyof: containsAnyof,
        noneof: containsNoneOf,
        allOf: containsAllOf,
        selectAll,
    },
    generators:{
        fill,
        fixed,
        range,
    }
};




