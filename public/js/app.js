var hellonode = angular.module('hellonode', []);

hellonode.controller('AppCtrl', function ($scope) {

    $scope.posts = [
        {
            "title": "hello",
            "author": "ashok",
            "body": "hello world",
            "_id": "52d698e08ea6de84369712f2",
            "__v": 0,
            "date": "2014-01-15T14:19:12.106Z",
            "comments": []
        },
        {
            "title": "testing",
            "author": "sahoo",
            "body": "something",
            "_id": "52d6a5208ea6de84369712f3",
            "__v": 0,
            "date": "2014-01-15T15:11:28.995Z",
            "comments": []
        },
        {
            "title": "testing",
            "author": "sahoo",
            "body": "something",
            "_id": "52d7784d005c96d41f513091",
            "__v": 0,
            "date": "2014-01-16T06:12:29.447Z",
            "comments": []
        },
        {
            "title": "ashok",
            "body": "ashok",
            "author": "ashok",
            "_id": "52deb22fafd0cbfc0e5a5c6e",
            "__v": 0,
            "date": "2014-01-21T17:45:19.452Z",
            "comments": []
        },
        {
            "title": "bootstraped",
            "body": "done",
            "author": "ashok",
            "_id": "52dec17fb022eadc01fd4a6d",
            "__v": 0,
            "date": "2014-01-21T18:50:39.743Z",
            "comments": []
        },
        {
            "title": "hello api",
            "body": "hello api post",
            "author": "Ashok",
            "_id": "52df8945cd035ef0194d8869",
            "__v": 0,
            "date": "2014-01-22T09:03:01.784Z",
            "comments": []
        }

    ];


    $scope.phones = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'}
    ];
});