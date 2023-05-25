"use strict";
exports.id = 220;
exports.ids = [220];
exports.modules = {

/***/ 3827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2585);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4212);



const Pagination = ({ section , currentPage , totalPages  })=>{
    const indexPageLink = currentPage === 2;
    const hasPrevPage = currentPage > 1;
    const hasNextPage = totalPages > currentPage;
    let pageList = [];
    for(let i = 1; i <= totalPages; i++){
        pageList.push(i);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: totalPages > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            className: "flex items-center justify-center space-x-3",
            "aria-label": "Pagination",
            children: [
                hasPrevPage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: indexPageLink ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${currentPage - 1}`,
                    className: "rounded px-2 py-1.5 text-dark hover:bg-theme-light dark:text-darkmode-dark dark:hover:bg-darkmode-theme-light",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: "Previous"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            "aria-hidden": "true",
                            height: "30",
                            width: "30",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fillRule: "evenodd",
                                d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                clipRule: "evenodd"
                            })
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "rounded px-2 py-1.5 text-light",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: "Previous"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            "aria-hidden": "true",
                            height: "30",
                            width: "30",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fillRule: "evenodd",
                                d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                clipRule: "evenodd"
                            })
                        })
                    ]
                }),
                pageList.map((pagination, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                        children: pagination === currentPage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            "aria-current": "page",
                            className: "rounded bg-primary px-4 py-2 text-white dark:bg-darkmode-primary dark:text-dark",
                            children: pagination
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: i === 0 ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${pagination}`,
                            passHref: true,
                            "aria-current": "page",
                            className: "rounded px-4 py-2 text-dark hover:bg-theme-light dark:text-darkmode-dark dark:hover:bg-darkmode-theme-light",
                            children: pagination
                        })
                    }, `page-${i}`)),
                hasNextPage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `${section ? "/" + section : ""}/page/${currentPage + 1}`,
                    className: "rounded px-2 py-1.5 text-dark hover:bg-theme-light dark:text-darkmode-dark dark:hover:bg-darkmode-theme-light",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: "Next"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            "aria-hidden": "true",
                            height: "30",
                            width: "30",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fillRule: "evenodd",
                                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                clipRule: "evenodd"
                            })
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "rounded px-2 py-1.5 text-light",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: "Next"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            "aria-hidden": "true",
                            height: "30",
                            width: "30",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fillRule: "evenodd",
                                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                clipRule: "evenodd"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ }),

/***/ 4975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1665);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2585);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const PostSidebar = ({ tags , categories , allCategories  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "lg:col-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "mb-6",
                        children: "Categories"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "rounded bg-theme-light p-8 dark:bg-darkmode-theme-light",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "space-y-4",
                            children: categories.map((category)=>{
                                const count = allCategories.filter((c)=>c === category).length;
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "flex justify-between hover:text-primary dark:hover:text-darkmode-primary",
                                        href: `/categories/${category}`,
                                        children: [
                                            (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .humanize */ .OI)(category),
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    "(",
                                                    count,
                                                    ")"
                                                ]
                                            })
                                        ]
                                    })
                                }, category);
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "mb-6",
                        children: "Tags"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "rounded bg-theme-light p-6 dark:bg-darkmode-theme-light",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            children: tags.map((tag)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "inline-block",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "m-1 block rounded bg-white px-3 py-1 hover:bg-primary hover:text-white dark:bg-darkmode-body dark:hover:bg-darkmode-primary dark:hover:text-dark",
                                        href: `/tags/${tag}`,
                                        children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .humanize */ .OI)(tag)
                                    })
                                }, tag);
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostSidebar);


/***/ }),

/***/ 1695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ sortByDate)
/* harmony export */ });
/* unused harmony export sortByWeight */
// sort by date
const sortByDate = (array)=>{
    const sortedArray = array.sort((a, b)=>new Date(b.frontmatter.date && b.frontmatter.date).valueOf() - new Date(a.frontmatter.date && a.frontmatter.date).valueOf());
    return sortedArray;
};
// sort product by weight
const sortByWeight = (array)=>{
    const withWeight = array.filter((item)=>item.frontmatter.weight);
    const withoutWeight = array.filter((item)=>!item.frontmatter.weight);
    const sortedWeightedArray = withWeight.sort((a, b)=>a.frontmatter.weight - b.frontmatter.weight);
    const sortedArray = [
        ...new Set([
            ...sortedWeightedArray,
            ...withoutWeight
        ])
    ];
    return sortedArray;
};


/***/ })

};
;