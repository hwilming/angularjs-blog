/**
 * @author Till Hermsen
 * @date 25.10.12
 */

'use strict';

angular.module('BlogPostServices', ['ngResource']).
    factory('BlogPosts', function($resource){
        return $resource('../rest/blog/:blogPostId', {}, {});
    }).
    factory('Comments', function($resource) {
        return $resource('../rest/blog/:blogPostId/comment', {}, {});
    });

angular.module('UserServices', ['ngResource']).
    factory('Login', function($resource) {
        return $resource('../rest/authentication/:', {}, {});
    }).
    factory('IsLoggedIn', function() {
        if (sessionStorage.getItem('user')) {
            return true;
        } else {
            return false;
        }
    });

