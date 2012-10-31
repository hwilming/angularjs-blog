/**
 * @author Till Hermsen
 * @date 31.10.12
 */

'use strict';

angular.module('app.filters', []).

    filter('blogPostPreview', function() {
        return function(input) {
            if (input.length > 300) {
                input = input.substring(0, 300)
                    .split(" ").slice(0, -1).join(" ") + "...";
            }
            return input;
        };
    }).

    filter('addLineBreaks', function() {
        return function(input) {
            return input.replace(/\n/g, '<br />');
        }
    });