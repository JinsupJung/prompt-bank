"use strict";
exports.id = 423;
exports.ids = [423];
exports.modules = {

/***/ 1423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ getAllTaxonomy),
/* harmony export */   "p": () => (/* binding */ getTaxonomy)
/* harmony export */ });
/* harmony import */ var _lib_contentParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1558);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1665);


// get all taxonomies from frontmatter
const getTaxonomy = (folder, name)=>{
    const singlePages = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_0__/* .getSinglePage */ .i)(folder);
    const taxonomyPages = singlePages.map((page)=>page.frontmatter[name]);
    let taxonomies = [];
    for(let i = 0; i < taxonomyPages?.length; i++){
        const taxonomyArray = taxonomyPages[i];
        for(let j = 0; j < taxonomyArray?.length; j++){
            taxonomies.push((0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .slugify */ .lV)(taxonomyArray[j]));
        }
    }
    const taxonomy = [
        ...new Set(taxonomies)
    ];
    return taxonomy;
};
const getAllTaxonomy = (folder, name)=>{
    const singlePages = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_0__/* .getSinglePage */ .i)(folder);
    const taxonomyPages = singlePages.map((page)=>page.frontmatter[name]);
    let taxonomies = [];
    for(let i = 0; i < taxonomyPages?.length; i++){
        const taxonomyArray = taxonomyPages[i];
        for(let j = 0; j < taxonomyArray?.length; j++){
            taxonomies.push((0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .slugify */ .lV)(taxonomyArray[j]));
        }
    }
    return taxonomies;
};


/***/ })

};
;