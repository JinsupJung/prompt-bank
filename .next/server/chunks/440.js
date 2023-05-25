"use strict";
exports.id = 440;
exports.ids = [440];
exports.modules = {

/***/ 5361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7216);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Breadcrumbs = ({ className  })=>{
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    const paths = pathname.split("/").filter((x)=>x);
    let parts = [
        {
            label: "Home",
            href: "/",
            "aria-label": pathname === "/" ? "page" : undefined
        }
    ];
    paths.forEach((label, i)=>{
        const href = `/${paths.slice(0, i + 1).join("/")}`;
        label !== "page" && parts.push({
            label: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .humanize */ .OI)(label.replace(/[-_]/g, " ")) || "",
            href,
            "aria-label": pathname === href ? "page" : undefined
        });
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        "aria-label": "Breadcrumb",
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
            className: "inline-flex",
            role: "list",
            children: parts.map(({ label , ...attrs }, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "mx-1 capitalize",
                    role: "listitem",
                    children: [
                        index > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "inlin-block mr-1",
                            children: "/"
                        }),
                        index !== parts.length - 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "text-primary dark:text-darkmode-primary",
                            ...attrs,
                            children: label
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-light dark:text-darkmode-light",
                            children: label
                        })
                    ]
                }, index))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumbs);


/***/ }),

/***/ 5436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ partials_PageHeader)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(5985);
;// CONCATENATED MODULE: ./src/layouts/components/Breadcrumbs.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/jinsup/Desktop/promptbank/nextplate-main/src/layouts/components/Breadcrumbs.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Breadcrumbs = (__default__);
// EXTERNAL MODULE: ./src/lib/utils/textConverter.ts
var textConverter = __webpack_require__(1665);
;// CONCATENATED MODULE: ./src/layouts/partials/PageHeader.tsx



const PageHeader = ({ title  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container text-center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "rounded-2xl bg-gradient-to-b from-body to-theme-light px-8 py-14 dark:from-darkmode-body dark:to-darkmode-theme-light",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: (0,textConverter/* humanize */.OI)(title)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumbs, {
                        className: "mt-6"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const partials_PageHeader = (PageHeader);


/***/ })

};
;