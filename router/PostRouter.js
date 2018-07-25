"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Post_1 = require("../models/Post");
var PostRouter = (function () {
    function PostRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    PostRouter.prototype.all = function (req, res) {
        Post_1.default.find()
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.json({ error: error });
        });
    };
    PostRouter.prototype.one = function (req, res) {
        var slug = req.params.slug;
        Post_1.default.findOne({ slug: slug })
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    PostRouter.prototype.create = function (req, res) {
        console.log(req.body);
        var _a = req.body, title = _a.title, slug = _a.slug, content = _a.content, featuredImage = _a.featuredImage, category = _a.category, published = _a.published;
        var post = new Post_1.default({
            title: title,
            slug: slug,
            content: content,
            featuredImage: featuredImage,
            category: category,
            published: published,
        });
        post
            .save()
            .then(function (data) {
            res.status(201).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    PostRouter.prototype.update = function (req, res) {
        var slug = req.body.slug;
        Post_1.default.findOneAndUpdate({ slug: slug }, req.body)
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    PostRouter.prototype.delete = function (req, res) {
        var slug = req.body.slug;
        Post_1.default.findOneAndRemove({ slug: slug })
            .then(function () {
            res.status(204).end();
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    PostRouter.prototype.routes = function () {
        this.router.get('/', this.all);
        this.router.get('/:slug', this.one);
        this.router.post('/', this.create);
        this.router.put('/:slug', this.update);
        this.router.delete('/:slug', this.delete);
    };
    return PostRouter;
}());
exports.PostRouter = PostRouter;
var postRoutes = new PostRouter();
postRoutes.routes();
exports.default = postRoutes.router;
//# sourceMappingURL=PostRouter.js.map