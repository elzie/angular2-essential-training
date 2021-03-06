<<<<<<< HEAD
System.register(["@angular/core", "@angular/router", "./media-item.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, media_item_service_1, MediaItemListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (media_item_service_1_1) {
                media_item_service_1 = media_item_service_1_1;
            }
        ],
        execute: function () {
            MediaItemListComponent = (function () {
                function MediaItemListComponent(mediaItemService, activatedRoute) {
                    this.mediaItemService = mediaItemService;
                    this.activatedRoute = activatedRoute;
                    this.medium = '';
                    this.mediaItems = [];
                }
                MediaItemListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.activatedRoute.params
                        .subscribe(function (params) {
                        var medium = params['medium'];
                        if (medium.toLowerCase() === 'all') {
                            medium = '';
                        }
                        _this.getMediaItems(medium);
                    });
                };
                MediaItemListComponent.prototype.onMediaItemDelete = function (mediaItem) {
                    var _this = this;
                    this.mediaItemService.delete(mediaItem)
                        .subscribe(function () {
                        _this.getMediaItems(_this.medium);
                    });
                };
                MediaItemListComponent.prototype.getMediaItems = function (medium) {
                    var _this = this;
                    this.medium = medium;
                    this.mediaItemService.get(medium)
                        .subscribe(function (mediaItems) {
                        _this.mediaItems = mediaItems;
                    });
                };
                MediaItemListComponent = __decorate([
                    core_1.Component({
                        selector: 'lz-media-item-list',
                        templateUrl: 'app/media-item-list.component.html',
                        styleUrls: ['app/media-item-list.component.css']
                    }),
                    __metadata("design:paramtypes", [media_item_service_1.MediaItemService,
                        router_1.ActivatedRoute])
                ], MediaItemListComponent);
                return MediaItemListComponent;
            }());
            exports_1("MediaItemListComponent", MediaItemListComponent);
        }
    };
});
=======
System.register(["@angular/core", "@angular/router", "./media-item.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, media_item_service_1, MediaItemListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (media_item_service_1_1) {
                media_item_service_1 = media_item_service_1_1;
            }
        ],
        execute: function () {
            MediaItemListComponent = (function () {
                function MediaItemListComponent(mediaItemService, activatedRoute) {
                    this.mediaItemService = mediaItemService;
                    this.activatedRoute = activatedRoute;
                    this.medium = '';
                    this.mediaItems = [];
                }
                MediaItemListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.activatedRoute.params
                        .subscribe(function (params) {
                        var medium = params['medium'];
                        if (medium.toLowerCase() === 'all') {
                            medium = '';
                        }
                        _this.getMediaItems(medium);
                    });
                };
                MediaItemListComponent.prototype.onMediaItemDelete = function (mediaItem) {
                    var _this = this;
                    this.mediaItemService.delete(mediaItem)
                        .subscribe(function () {
                        _this.getMediaItems(_this.medium);
                    });
                };
                MediaItemListComponent.prototype.getMediaItems = function (medium) {
                    var _this = this;
                    this.medium = medium;
                    this.mediaItemService.get(medium)
                        .subscribe(function (mediaItems) {
                        _this.mediaItems = mediaItems;
                    });
                };
                MediaItemListComponent = __decorate([
                    core_1.Component({
                        selector: 'lz-media-item-list',
                        templateUrl: 'app/media-item-list.component.html',
                        styleUrls: ['app/media-item-list.component.css']
                    }),
                    __metadata("design:paramtypes", [media_item_service_1.MediaItemService,
                        router_1.ActivatedRoute])
                ], MediaItemListComponent);
                return MediaItemListComponent;
            }());
            exports_1("MediaItemListComponent", MediaItemListComponent);
        }
    };
});
>>>>>>> 01744e80458bd71127097f3467752037aad862fd
//# sourceMappingURL=media-item-list.component.js.map