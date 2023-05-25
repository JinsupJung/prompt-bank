"use strict";
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 5221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3613);
/* harmony import */ var _lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6258);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1665);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2585);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7997);
/* harmony import */ var _ImageFallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1368);







const BlogCard = ({ data  })=>{
    const { summary_length , blog_folder  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .settings */ .Xd;
    const { title , image , author , categories , date  } = data.frontmatter;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-body dark:bg-darkmode-body",
        children: [
            image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageFallback__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                className: "mb-6 w-full rounded",
                src: image,
                alt: title,
                width: 445,
                height: 230
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "mb-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: `/${blog_folder}/${data.slug}`,
                    children: title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "mr-4 inline-block",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: `/authors/${(0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .slugify */ .lV)(author)}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa_index_js__WEBPACK_IMPORTED_MODULE_5__/* .FaRegUserCircle */ .wzp, {
                                    className: "-mt-1 mr-2 inline-block"
                                }),
                                (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .humanize */ .OI)(author)
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: "mr-4 inline-block",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa_index_js__WEBPACK_IMPORTED_MODULE_5__/* .FaRegFolder */ .IEK, {
                                className: "-mt-1 mr-2 inline-block"
                            }),
                            categories?.map((category, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: `/categories/${(0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .slugify */ .lV)(category)}`,
                                    children: [
                                        (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .humanize */ .OI)(category),
                                        index !== categories.length - 1 && ", "
                                    ]
                                }, index))
                        ]
                    }),
                    date && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "inline-block",
                        children: (0,_lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(date)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mb-6",
                children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(data.content.slice(0, Number(summary_length)))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                className: "btn btn-outline-primary btn-sm",
                href: `/${blog_folder}/${data.slug}`,
                children: "read more"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);


/***/ }),

/***/ 6258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);

const dateFormat = (date, format = "dd MMM, yyyy")=>{
    return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(date, "America/New_York", format);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dateFormat);


/***/ })

};
;