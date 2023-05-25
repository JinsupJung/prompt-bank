"use strict";
exports.id = 558;
exports.ids = [558];
exports.modules = {

/***/ 1558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ getListPage),
/* harmony export */   "i": () => (/* binding */ getSinglePage)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5872);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);



const contentPath = "src/content";
// Helper function to read file content
const readFile = (filePath)=>{
    return fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, "utf-8");
};
// Helper function to parse frontmatter
const parseFrontmatter = (frontmatter)=>{
    const frontmatterString = JSON.stringify(frontmatter);
    return JSON.parse(frontmatterString);
};
// get list page data, ex: _index.md
const getListPage = (filePath)=>{
    const pageDataPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(contentPath, filePath);
    if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(pageDataPath)) {
        return {
            notFound: true,
            frontmatter: {},
            content: ""
        };
    }
    const pageData = readFile(pageDataPath);
    const { content , data: frontmatter  } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(pageData);
    return {
        notFound: false,
        frontmatter: parseFrontmatter(frontmatter),
        content
    };
};
// get all single pages, ex: blog/post.md
const getSinglePage = (folder)=>{
    const folderPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(contentPath, folder);
    if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(folderPath) || !fs__WEBPACK_IMPORTED_MODULE_0___default().lstatSync(folderPath).isDirectory()) {
        return [
            {
                notFound: true,
                frontmatter: {},
                slug: "",
                content: ""
            }
        ];
    }
    const filesPath = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(folderPath);
    const sanitizeFiles = filesPath.filter((file)=>file.endsWith(".md"));
    const filterSingleFiles = sanitizeFiles.filter((file)=>file.match(/^(?!_)/));
    const singlePages = filterSingleFiles.map((filename)=>{
        const slug = filename.replace(".md", "");
        const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(folderPath, filename);
        const pageData = readFile(filePath);
        const { content , data: frontmatter  } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(pageData);
        const url = frontmatter.url ? frontmatter.url.replace("/", "") : slug;
        return {
            notFound: false,
            frontmatter: parseFrontmatter(frontmatter),
            slug: url,
            content
        };
    });
    const publishedPages = singlePages.filter((page)=>!page.frontmatter.draft && page);
    const filterByDate = publishedPages.filter((page)=>new Date(page.frontmatter.date || new Date()) <= new Date());
    return filterByDate;
};


/***/ })

};
;