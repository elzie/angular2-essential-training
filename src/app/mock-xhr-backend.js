System.register(["@angular/common/http", "rxjs/Observable"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, Observable_1, MockXHRBackend;
    return {
        setters: [
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }
        ],
        execute: function () {
            MockXHRBackend = (function () {
                function MockXHRBackend() {
                    this._mediaItems = [
                        {
                            id: 1,
                            name: "Firebug",
                            medium: "Series",
                            category: "Science Fiction",
                            year: 2010,
                            watchedOn: 1294166565384,
                            isFavorite: false
                        },
                        {
                            id: 2,
                            name: "The Small Tall",
                            medium: "Movies",
                            category: "Comedy",
                            year: 2015,
                            watchedOn: null,
                            isFavorite: true
                        }, {
                            id: 3,
                            name: "The Redemption",
                            medium: "Movies",
                            category: "Action",
                            year: 2016,
                            watchedOn: null,
                            isFavorite: false
                        }, {
                            id: 4,
                            name: "Hoopers",
                            medium: "Series",
                            category: "Drama",
                            year: null,
                            watchedOn: null,
                            isFavorite: true
                        }, {
                            id: 5,
                            name: "Happy Joe: Cheery Road",
                            medium: "Movies",
                            category: "Action",
                            year: 2015,
                            watchedOn: 1457166565384,
                            isFavorite: false
                        },
                        {
                            id: 6,
                            name: "A Headbangers Journey",
                            medium: "Documentary",
                            category: "Other",
                            year: 2015,
                            watchedOn: 1457166565384,
                            isFavorite: true
                        },
                        {
                            id: 7,
                            name: "X-men: The Animated Series",
                            medium: "Cartoons",
                            category: "Action",
                            year: 1995,
                            watchedOn: 1457166565384,
                            isFavorite: true
                        }
                    ];
                }
                MockXHRBackend.prototype.handle = function (request) {
                    var _this = this;
                    return new Observable_1.Observable(function (responseObserver) {
                        var responseOptions;
                        switch (request.method) {
                            case 'GET':
                                if (request.urlWithParams.indexOf('mediaitems?medium=') >= 0 || request.url === 'mediaitems') {
                                    var medium_1;
                                    if (request.urlWithParams.indexOf('?') >= 0) {
                                        medium_1 = request.urlWithParams.split('=')[1];
                                        if (medium_1 === 'undefined')
                                            medium_1 = '';
                                    }
                                    var mediaItems = void 0;
                                    if (medium_1) {
                                        mediaItems = _this._mediaItems.filter(function (mediaItem) { return mediaItem.medium === medium_1; });
                                    }
                                    else {
                                        mediaItems = _this._mediaItems;
                                    }
                                    responseOptions = {
                                        body: { mediaItems: JSON.parse(JSON.stringify(mediaItems)) },
                                        status: 200
                                    };
                                }
                                else {
                                    var mediaItems = void 0;
                                    var id_1 = parseInt(request.url.split('/')[1]);
                                    mediaItems = _this._mediaItems.filter(function (mediaItem) { return mediaItem.id === id_1; });
                                    responseOptions = {
                                        body: JSON.parse(JSON.stringify(mediaItems[0])),
                                        status: 200
                                    };
                                }
                                break;
                            case 'POST':
                                var mediaItem = request.body;
                                mediaItem.id = _this._getNewId();
                                _this._mediaItems.push(mediaItem);
                                responseOptions = { status: 201 };
                                break;
                            case 'DELETE':
                                var id = parseInt(request.url.split('/')[1]);
                                _this._deleteMediaItem(id);
                                responseOptions = { status: 200 };
                        }
                        var responseObject = new http_1.HttpResponse(responseOptions);
                        responseObserver.next(responseObject);
                        responseObserver.complete();
                        return function () {
                        };
                    });
                };
                MockXHRBackend.prototype._deleteMediaItem = function (id) {
                    var mediaItem = this._mediaItems.find(function (mediaItem) { return mediaItem.id === id; });
                    var index = this._mediaItems.indexOf(mediaItem);
                    if (index >= 0) {
                        this._mediaItems.splice(index, 1);
                    }
                };
                MockXHRBackend.prototype._getNewId = function () {
                    if (this._mediaItems.length > 0) {
                        return Math.max.apply(Math, this._mediaItems.map(function (mediaItem) { return mediaItem.id; })) + 1;
                    }
                    else {
                        return 1;
                    }
                };
                return MockXHRBackend;
            }());
            exports_1("MockXHRBackend", MockXHRBackend);
        }
    };
});
//# sourceMappingURL=mock-xhr-backend.js.map