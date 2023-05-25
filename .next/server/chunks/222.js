exports.id = 222;
exports.ids = [222];
exports.modules = {

/***/ 8029:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 53, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2221));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8013));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9211));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8485));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 387));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1390))

/***/ }),

/***/ 2237:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8203));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1913));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5461))

/***/ }),

/***/ 2221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable jsx-a11y/alt-text */ /* __next_internal_client_entry_do_not_use__ default auto */ 


const ImageFallback = (props)=>{
    const { src , fallback , ...rest } = props;
    const [imgSrc, setImgSrc] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(src);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setImgSrc(src);
    }, [
        src
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        ...rest,
        src: imgSrc,
        onError: ()=>{
            setImgSrc(fallback);
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageFallback);


/***/ }),

/***/ 7719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1584);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5176);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Logo = ({ src  })=>{
    // destructuring items from config object
    const { logo , logo_darkmode , logo_width , logo_height , logo_text , title  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site;
    const { theme , resolvedTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__/* .useTheme */ .F)();
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>setMounted(true), []);
    const resolvedLogo = mounted && (theme === "dark" || resolvedTheme === "dark") ? logo_darkmode : logo;
    const logoPath = src ? src : resolvedLogo;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/",
        className: "navbar-brand inline-block",
        children: logoPath ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            width: logo_width.replace("px", "") * 2,
            height: logo_height.replace("px", "") * 2,
            src: logoPath,
            alt: title,
            priority: true,
            style: {
                height: logo_height.replace("px", "") + "px",
                width: logo_width.replace("px", "") + "px"
            }
        }) : logo_text ? logo_text : title
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 8203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ partials_Footer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/layouts/components/Logo.tsx
var Logo = __webpack_require__(7719);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.js
var io5 = __webpack_require__(4437);
;// CONCATENATED MODULE: ./src/layouts/components/Social.tsx


const Social = ({ source , className  })=>{
    const { facebook , twitter , mastodon , instagram , youtube , linkedin , github , gitlab , discord , slack , medium , codepen , bitbucket , dribbble , behance , pinterest , soundcloud , tumblr , reddit , vk , whatsapp , snapchat , vimeo , tiktok , foursquare , rss , email , phone , address , skype , website  } = source || {};
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: className,
        children: [
            facebook && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "facebook",
                    href: facebook,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoFacebook */.egd, {})
                })
            }),
            twitter && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "twitter",
                    href: twitter,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoTwitter */.JUd, {})
                })
            }),
            mastodon && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "mastodon",
                    href: mastodon,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoMastodon */.oM0, {})
                })
            }),
            instagram && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "instagram",
                    href: instagram,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoInstagram */.oVe, {})
                })
            }),
            youtube && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "youtube",
                    href: youtube,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoYoutube */.tPx, {})
                })
            }),
            linkedin && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "linkedin",
                    href: linkedin,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoLinkedin */.gXb, {})
                })
            }),
            github && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "github",
                    href: github,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoGithub */.JOq, {})
                })
            }),
            gitlab && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "gitlab",
                    href: gitlab,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoGitlab */.Sa2, {})
                })
            }),
            discord && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "discord",
                    href: discord,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoDiscord */.rkH, {})
                })
            }),
            slack && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "slack",
                    href: slack,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoSlack */.zkG, {})
                })
            }),
            medium && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "medium",
                    href: medium,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoMedium */.zVX, {})
                })
            }),
            codepen && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "codepen",
                    href: codepen,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoCodepen */.Xlw, {})
                })
            }),
            bitbucket && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "bitbucket",
                    href: bitbucket,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoBitbucket */.Kat, {})
                })
            }),
            dribbble && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "dribbble",
                    href: dribbble,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoDribbble */.$yF, {})
                })
            }),
            behance && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "behance",
                    href: behance,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoBehance */.XAu, {})
                })
            }),
            pinterest && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "pinterest",
                    href: pinterest,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoPinterest */.Agc, {})
                })
            }),
            soundcloud && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "soundcloud",
                    href: soundcloud,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoSoundcloud */.DdD, {})
                })
            }),
            tumblr && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "tumblr",
                    href: tumblr,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoTumblr */.JKs, {})
                })
            }),
            reddit && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "reddit",
                    href: reddit,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoReddit */.Tup, {})
                })
            }),
            vk && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "vk",
                    href: vk,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoVk */.iCY, {})
                })
            }),
            whatsapp && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "whatsapp",
                    href: whatsapp,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoWhatsapp */.ff9, {})
                })
            }),
            snapchat && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "snapchat",
                    href: snapchat,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoSnapchat */.Tvv, {})
                })
            }),
            vimeo && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "vimeo",
                    href: vimeo,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoVimeo */.ZRw, {})
                })
            }),
            tiktok && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "tiktok",
                    href: tiktok,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoTiktok */.Px$, {})
                })
            }),
            foursquare && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "foursquare",
                    href: foursquare,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoFoursquare */._Vw, {})
                })
            }),
            skype && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "skype",
                    href: skype,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoSkype */.pi6, {})
                })
            }),
            website && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "website",
                    href: website,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoGlobeOutline */.$RS, {})
                })
            }),
            rss && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "rss feed",
                    href: rss,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLogoRss */.OdA, {})
                })
            }),
            email && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "email",
                    href: `mailto:${email}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoMail */.GYo, {})
                })
            }),
            phone && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "telephone",
                    href: `tel:${phone}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoCall */.DsV, {})
                })
            }),
            address && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    "aria-label": "location",
                    href: address,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoLocation */.D49, {})
                })
            })
        ]
    });
};
/* harmony default export */ const components_Social = (Social);

// EXTERNAL MODULE: ./src/config/config.json
var config = __webpack_require__(1584);
// EXTERNAL MODULE: ./src/config/menu.json
var menu = __webpack_require__(4940);
;// CONCATENATED MODULE: ./src/config/social.json
const social_namespaceObject = JSON.parse('{"facebook":"https://facebook.com/","twitter":"https://twitter.com/","mastodon":"https://mastodon.com/","instagram":"https://instagram.com/","youtube":"","linkedin":"","github":"","gitlab":"","discord":"","slack":"","medium":"","codepen":"","bitbucket":"","dribbble":"","behance":"","pinterest":"","soundcloud":"","tumblr":"","reddit":"","vk":"","whatsapp":"","snapchat":"","vimeo":"","tiktok":"","foursquare":"","rss":"","email":"","phone":"","address":"","skype":"","website":""}');
// EXTERNAL MODULE: ./src/lib/utils/textConverter.ts
var textConverter = __webpack_require__(7216);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layouts/partials/Footer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const Footer = ()=>{
    const { copyright  } = config.params;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "bg-theme-light dark:bg-darkmode-theme-light",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row items-center py-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mb-8 text-center lg:col-3 lg:mb-0 lg:text-left",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mb-8 text-center lg:col-6 lg:mb-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: menu.footer.map((menu)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "m-3 inline-block",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: menu.url,
                                            children: menu.name
                                        })
                                    }, menu.name))
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mb-8 text-center lg:col-3 lg:mb-0 lg:mt-0 lg:text-right",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Social, {
                                source: social_namespaceObject,
                                className: "social-icons"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border-t border-border py-7 dark:border-darkmode-border",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container text-center text-light dark:text-darkmode-light",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        dangerouslySetInnerHTML: (0,textConverter/* markdownify */.gI)(copyright)
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const partials_Footer = (Footer);


/***/ }),

/***/ 1913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ partials_Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/layouts/components/Logo.tsx
var Logo = __webpack_require__(7719);
// EXTERNAL MODULE: ./src/config/config.json
var config = __webpack_require__(1584);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(5176);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
;// CONCATENATED MODULE: ./src/layouts/components/ThemeSwitcher.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const ThemeSwitcher = ({ className  })=>{
    const { theme_switcher  } = config.settings;
    const [mounted, setMounted] = (0,react_.useState)(false);
    const { theme , setTheme , resolvedTheme  } = (0,dist/* useTheme */.F)();
    (0,react_.useEffect)(()=>setMounted(true), []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: theme_switcher && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `theme-switcher ${className}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    id: "theme-switcher",
                    type: "checkbox",
                    defaultChecked: mounted && (theme === "dark" || resolvedTheme === "dark"),
                    onClick: ()=>setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark")
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    htmlFor: "theme-switcher",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "sr-only",
                            children: "theme switcher"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "absolute left-[4px] top-[4px] z-10 opacity-100 dark:opacity-0",
                                    viewBox: "0 0 56 56",
                                    fill: "#fff",
                                    height: "16",
                                    width: "16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M30 4.6c0-1-.9-2-2-2a2 2 0 0 0-2 2v5c0 1 .9 2 2 2s2-1 2-2Zm9.6 9a2 2 0 0 0 0 2.8c.8.8 2 .8 2.9 0L46 13a2 2 0 0 0 0-2.9 2 2 0 0 0-3 0Zm-26 2.8c.7.8 2 .8 2.8 0 .8-.7.8-2 0-2.9L13 10c-.7-.7-2-.8-2.9 0-.7.8-.7 2.1 0 3ZM28 16a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-12-12Zm23.3 14c1.1 0 2-.9 2-2s-.9-2-2-2h-4.9a2 2 0 0 0-2 2c0 1.1 1 2 2 2ZM4.7 26a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4.9c1 0 2-.9 2-2s-1-2-2-2Zm37.8 13.6a2 2 0 0 0-3 0 2 2 0 0 0 0 2.9l3.6 3.5a2 2 0 0 0 2.9 0c.8-.8.8-2.1 0-3ZM10 43.1a2 2 0 0 0 0 2.9c.8.7 2.1.8 3 0l3.4-3.5c.8-.8.8-2.1 0-2.9-.8-.8-2-.8-2.9 0Zm20 3.4c0-1.1-.9-2-2-2a2 2 0 0 0-2 2v4.9c0 1 .9 2 2 2s2-1 2-2Z"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "absolute left-[4px] top-[4px] z-10 opacity-0 dark:opacity-100",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    height: "16",
                                    width: "16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fill: "#000",
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M8.2 2.2c1-.4 2 .6 1.6 1.5-1 3-.4 6.4 1.8 8.7a8.4 8.4 0 0 0 8.7 1.8c1-.3 2 .5 1.5 1.5v.1a10.3 10.3 0 0 1-9.4 6.2A10.3 10.3 0 0 1 3.2 6.7c1-2 2.9-3.5 4.9-4.4Z"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_ThemeSwitcher = (ThemeSwitcher);

// EXTERNAL MODULE: ./src/config/menu.json
var menu = __webpack_require__(4940);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.js
var io5 = __webpack_require__(4437);
;// CONCATENATED MODULE: ./src/layouts/partials/Header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








const Header = ()=>{
    // distructuring the main menu from menu object
    const { main  } = menu;
    const { navigation_button , settings  } = config;
    // get current path
    const pathname = (0,navigation.usePathname)();
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: `header z-30 ${settings.sticky_header && "sticky top-0"}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "navbar container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "order-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    id: "nav-toggle",
                    type: "checkbox",
                    className: "hidden"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                    id: "show-button",
                    htmlFor: "nav-toggle",
                    className: "order-3 flex cursor-pointer items-center text-dark dark:text-white lg:order-1 lg:hidden",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        className: "h-6 fill-current",
                        viewBox: "0 0 20 20",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                children: "Menu Open"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                    id: "hide-button",
                    htmlFor: "nav-toggle",
                    className: "order-3 hidden cursor-pointer items-center text-dark dark:text-white lg:order-1",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        className: "h-6 fill-current",
                        viewBox: "0 0 20 20",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                children: "Menu Close"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                points: "11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2",
                                transform: "rotate(45 10 10)"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    id: "nav-menu",
                    className: "navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8",
                    children: [
                        main.map((menu, i)=>/*#__PURE__*/ jsx_runtime_.jsx((react_default()).Fragment, {
                                children: menu.hasChildren ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "nav-item nav-dropdown group relative",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: `nav-link inline-flex items-center ${menu.children?.map(({ url  })=>url).includes(pathname) || menu.children?.map(({ url  })=>`${url}/`).includes(pathname) ? "active" : ""}`,
                                            children: [
                                                menu.name,
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    className: "h-4 w-4 fill-current",
                                                    viewBox: "0 0 20 20",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100",
                                            children: menu.children?.map((child, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "nav-dropdown-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: child.url,
                                                        className: `nav-dropdown-link block ${(pathname === `${child.url}/` || pathname === child.url) && "active"}`,
                                                        children: child.name
                                                    })
                                                }, `children-${i}`))
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: menu.url,
                                        className: `nav-link block ${(pathname === `${menu.url}/` || pathname === menu.url) && "active"}`,
                                        children: menu.name
                                    })
                                })
                            }, `menu-${i}`)),
                        navigation_button.enable && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mt-4 inline-block lg:hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "btn btn-outline-primary btn-sm",
                                href: navigation_button.link,
                                children: navigation_button.label
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "order-1 ml-auto flex items-center md:order-2 lg:ml-0",
                    children: [
                        settings.search && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "mr-5 inline-block border-r border-border pr-5 text-xl text-dark hover:text-primary dark:border-darkmode-border dark:text-white",
                            href: "/search",
                            "aria-label": "search",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoSearch */.eaK, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeSwitcher, {
                            className: "mr-5"
                        }),
                        navigation_button.enable && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "btn btn-outline-primary btn-sm hidden lg:inline-block",
                            href: navigation_button.link,
                            children: navigation_button.label
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const partials_Header = (Header);


/***/ }),

/***/ 5461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1584);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5176);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Providers = ({ children  })=>{
    const { default_theme  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.settings;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_2__/* .ThemeProvider */ .f, {
        attribute: "class",
        defaultTheme: default_theme,
        enableColorScheme: false,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Providers);


/***/ }),

/***/ 1390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1584);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7216);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const SeoMeta = ({ title , meta_title , image , description , canonical , noindex  })=>{
    const { meta_image , meta_author , meta_description  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.metadata;
    const { base_url  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site;
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site.title)
            }),
            canonical && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "canonical",
                href: canonical,
                itemProp: "url"
            }),
            noindex && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "robots",
                content: "noindex,nofollow"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "author",
                content: meta_author
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site.title)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: `${base_url}/${pathname.replace("/", "")}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:title",
                content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site.title)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:description",
                content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: `${base_url}${image ? image : meta_image}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: `${base_url}${image ? image : meta_image}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeoMeta);


/***/ }),

/***/ 8013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const Accordion = ({ title , children , className  })=>{
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `accordion ${show && "active"} ${className}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "accordion-header",
                onClick: ()=>setShow(!show),
                children: [
                    title,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        className: "accordion-icon",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 512 512",
                        xmlSpace: "preserve",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fill: "currentColor",
                            d: "M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "accordion-content",
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);


/***/ }),

/***/ 387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
function Tab({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "tab-content-panel",
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tab);


/***/ }),

/***/ 8485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Tabs({ children  }) {
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    //select tabItems
    const tabItemsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const [defaultFocus, setDefaultFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (defaultFocus) {
            //@ts-ignore
            tabItemsRef.current[active].focus();
        } else {
            setDefaultFocus(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        active
    ]);
    //change tab item on click
    const handleKeyDown = (event, index)=>{
        if (event.key === "Enter" || event.key === " ") {
            setActive(index);
        } else if (event.key === "ArrowRight") {
            setActive((active + 1) % children.length);
        } else if (event.key === "ArrowLeft") {
            setActive((active - 1 + children.length) % children.length);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "tab",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "tab-nav",
                role: "tablist",
                children: children.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: `tab-nav-item ${index === active && "active"}`,
                        role: "tab",
                        tabIndex: index === active ? 0 : -1,
                        onClick: ()=>setActive(index),
                        onKeyDown: (e)=>handleKeyDown(e, index),
                        //@ts-ignore
                        ref: (ref)=>tabItemsRef.current[index] = ref,
                        children: item.props.name
                    }, index))
            }),
            children.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `tab-content ${index === active ? "block" : "hidden"}`,
                    children: data.props.children
                }, index))
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);


/***/ }),

/***/ 9211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1054);
/* harmony import */ var react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lite_youtube_embed_dist_LiteYouTubeEmbed_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7130);
/* harmony import */ var react_lite_youtube_embed_dist_LiteYouTubeEmbed_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lite_youtube_embed_dist_LiteYouTubeEmbed_css__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Youtube = ({ id , title , ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1___default()), {
        wrapperClass: "yt-lite rounded-lg",
        id: id,
        title: title,
        ...rest
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Youtube);


/***/ }),

/***/ 7216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OI": () => (/* binding */ humanize),
/* harmony export */   "ab": () => (/* binding */ plainify),
/* harmony export */   "gI": () => (/* binding */ markdownify),
/* harmony export */   "lV": () => (/* binding */ slugify)
/* harmony export */ });
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9056);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1957);


marked__WEBPACK_IMPORTED_MODULE_1__/* .marked.use */ .TU.use({
    mangle: false,
    headerIds: false
});
// slugify
const slugify = (content)=>{
    return (0,github_slugger__WEBPACK_IMPORTED_MODULE_0__/* .slug */ .o)(content);
};
// markdownify
const markdownify = (content, div)=>{
    return {
        __html: div ? marked__WEBPACK_IMPORTED_MODULE_1__/* .marked.parse */ .TU.parse(content) : marked__WEBPACK_IMPORTED_MODULE_1__/* .marked.parseInline */ .TU.parseInline(content)
    };
};
// humanize
const humanize = (content)=>{
    return content.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/^[a-z]/, function(m) {
        return m.toUpperCase();
    });
};
// plainify
const plainify = (content)=>{
    const filterBrackets = content.replace(/<\/?[^>]+(>|$)/gm, "");
    const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
    const stripHTML = htmlEntityDecoder(filterSpaces);
    return stripHTML;
};
// strip entities for plainify
const htmlEntityDecoder = (htmlWithEntities)=>{
    let entityList = {
        "&nbsp;": " ",
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&#39;": "'"
    };
    let htmlWithoutEntities = htmlWithEntities.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, (entity)=>{
        return entityList[entity];
    });
    return htmlWithoutEntities;
};


/***/ }),

/***/ 9163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/layouts/components/TwSizeIndicator.tsx

const TwSizeIndicator = ()=>{
    if (false) {} else {
        return null;
    }
};
/* harmony default export */ const components_TwSizeIndicator = (TwSizeIndicator);

// EXTERNAL MODULE: ./src/config/config.json
var config = __webpack_require__(3613);
;// CONCATENATED MODULE: ./src/config/theme.json
const theme_namespaceObject = JSON.parse('{"R":{"k":{"T$":"Heebo:wght@400;600","BD":"Signika:wght@500;700"}}}');
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(5985);
;// CONCATENATED MODULE: ./src/layouts/partials/Footer.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/jinsup/Desktop/promptbank/nextplate-main/src/layouts/partials/Footer.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Footer = (__default__);
;// CONCATENATED MODULE: ./src/layouts/partials/Header.tsx

const Header_proxy = (0,module_proxy.createProxy)(String.raw`/Users/jinsup/Desktop/promptbank/nextplate-main/src/layouts/partials/Header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Header_esModule, $$typeof: Header_$$typeof } = Header_proxy;
const Header_default_ = Header_proxy.default;


/* harmony default export */ const Header = (Header_default_);
;// CONCATENATED MODULE: ./src/layouts/partials/Providers.tsx

const Providers_proxy = (0,module_proxy.createProxy)(String.raw`/Users/jinsup/Desktop/promptbank/nextplate-main/src/layouts/partials/Providers.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Providers_esModule, $$typeof: Providers_$$typeof } = Providers_proxy;
const Providers_default_ = Providers_proxy.default;


/* harmony default export */ const Providers = (Providers_default_);
// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__(8112);
;// CONCATENATED MODULE: ./src/app/layout.tsx








function RootLayout({ children  }) {
    // import google font css
    const pf = theme_namespaceObject.R.k.T$;
    const sf = theme_namespaceObject.R.k.BD;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        suppressHydrationWarning: true,
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: config/* site.favicon */.lz.favicon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-name",
                        content: "nextplate"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "msapplication-TileColor",
                        content: "#000000"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        media: "(prefers-color-scheme: light)",
                        content: "#fff"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        media: "(prefers-color-scheme: dark)",
                        content: "#000"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: `https://fonts.googleapis.com/css2?family=${pf}${sf ? "&family=" + sf : ""}&display=swap`,
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                suppressHydrationWarning: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_TwSizeIndicator, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Providers, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                                children: children
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9499:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ImageFallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1368);
/* harmony import */ var _components_MDXContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1952);
/* harmony import */ var _partials_SeoMeta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8610);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2585);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_MDXContent__WEBPACK_IMPORTED_MODULE_2__]);
_components_MDXContent__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const NotFound = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_SeoMeta__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
                title: "Page Not Found",
                image: "/images/404.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "section-sm",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row justify-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center sm:col-10 md:col-8 lg:col-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageFallback__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                    className: "mb-8 w-full",
                                    src: "/images/404.png",
                                    alt: "page not found",
                                    height: 320,
                                    width: 630
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "h2 mb-4",
                                    children: "Something Went Wrong!"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "content",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MDXContent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        content: "This page doesn't exist or has been removed, <br /> we suggest you go back to Home."
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "/",
                                    className: "btn btn-primary mt-8",
                                    children: "Back To Home"
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/jinsup/Desktop/promptbank/nextplate-main/src/layouts/components/ImageFallback.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 1952:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shortcodes_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4893);
/* harmony import */ var next_mdx_remote_rsc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4916);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_rsc__WEBPACK_IMPORTED_MODULE_2__]);
next_mdx_remote_rsc__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const MDXContent = ({ content  })=>{
    const mdxOptions = {
        remarkPlugins: [
            remark_gfm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
        ]
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote_rsc__WEBPACK_IMPORTED_MODULE_2__.MDXRemote, {
            source: content,
            components: _shortcodes_all__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            options: {
                mdxOptions
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/jinsup/Desktop/promptbank/nextplate-main/src/layouts/partials/SeoMeta.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 4893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ shortcodes_all)
});

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(5985);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/Accordion.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/jinsup/Desktop/promptbank/nextplate-main/src/layouts/shortcodes/Accordion.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Accordion = (__default__);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(2585);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/Button.tsx


const Button = ({ href , style , rel , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        target: "_blank",
        rel: `noopener noreferrer ${rel ? rel === "follow" ? "" : rel : "nofollow"}`,
        className: `btn mb-4 me-4 ${style === "outline" ? "btn-outline-primary" : "btn-primary"} border-primary no-underline hover:text-white`,
        children: children
    });
};
/* harmony default export */ const shortcodes_Button = (Button);

// EXTERNAL MODULE: ./src/lib/utils/textConverter.ts
var textConverter = __webpack_require__(1665);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(4212);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/Notice.tsx



function Notice({ type , children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `notice ${type}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "notice-head",
                children: [
                    type === "tip" ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 2.4C6.69807 2.4 2.4 6.69807 2.4 12C2.4 17.3019 6.69807 21.6 12 21.6C17.3019 21.6 21.6 17.3019 21.6 12C21.6 6.69807 17.3019 2.4 12 2.4ZM15.9515 7.55147L9.6 13.9029L8.04853 12.3515C7.5799 11.8828 6.8201 11.8828 6.35147 12.3515C5.88284 12.8201 5.88284 13.5799 6.35147 14.0485L8.75147 16.4485C9.2201 16.9172 9.9799 16.9172 10.4485 16.4485L17.6485 9.24853C18.1172 8.7799 18.1172 8.0201 17.6485 7.55147C17.1799 7.08284 16.4201 7.08284 15.9515 7.55147Z",
                            fill: "currentColor"
                        })
                    }) : type === "info" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 18 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M9.16109 0.993016C9.97971 1.03952 10.6611 1.42989 11.0721 2.22339L17.7981 15.8014C18.4502 17.1739 17.4403 19.0208 15.7832 19.0474H2.23859C0.730337 19.0234 -0.507163 17.3108 0.231587 15.7864L7.08321 2.20877C7.21146 1.96502 7.26996 1.89452 7.38059 1.76664C7.82534 1.25102 8.31171 0.975016 9.16109 0.993016ZM9.05046 2.49189C8.79284 2.50464 8.55696 2.64902 8.42834 2.87327C6.06134 7.36539 3.77946 11.9036 1.56546 16.4734C1.36071 16.9328 1.71209 17.5223 2.22621 17.547C6.74871 17.6201 11.2731 17.6201 15.7956 17.547C16.2925 17.523 16.666 16.953 16.459 16.4783C14.2866 11.9093 12.0471 7.37102 9.72171 2.87814C9.58446 2.63402 9.38309 2.48739 9.05046 2.49189Z",
                                fill: "currentColor"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M9.61323 13.2153H8.35773L8.21973 7.04688H9.75723L9.61323 13.2153ZM8.17773 15.1015C8.17773 14.8731 8.25161 14.6841 8.39973 14.5338C8.54823 14.3838 8.75036 14.3084 9.00648 14.3084C9.26298 14.3084 9.46511 14.3838 9.61323 14.5338C9.76136 14.6841 9.83561 14.8731 9.83561 15.1015C9.83561 15.3216 9.76323 15.5057 9.61923 15.6539C9.47486 15.802 9.27086 15.8762 9.00648 15.8762C8.74211 15.8762 8.53811 15.802 8.39373 15.6539C8.24973 15.5057 8.17773 15.3216 8.17773 15.1015Z",
                                fill: "currentColor"
                            })
                        ]
                    }) : type === "warning" ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10 0C15.522 0 20 4.478 20 10C20 15.522 15.522 20 10 20C4.478 20 0 15.522 0 10C0 4.478 4.478 0 10 0ZM10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18C14.411 18 18 14.411 18 10C18 5.589 14.411 2 10 2ZM12.293 6.293L13.707 7.707L11.414 10L13.707 12.293L12.293 13.707L10 11.414L7.707 13.707L6.293 12.293L8.586 10L6.293 7.707L7.707 6.293L10 8.586L12.293 6.293Z",
                            fill: "currentColor"
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M10 9V14M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10.0498 6V6.1L9.9502 6.1002V6H10.0498Z",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "my-0 ml-1.5",
                        children: (0,textConverter/* humanize */.OI)(type)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "notice-body",
                children: children
            })
        ]
    });
}
/* harmony default export */ const shortcodes_Notice = (Notice);

;// CONCATENATED MODULE: ./src/layouts/shortcodes/Tab.tsx

const Tab_proxy = (0,module_proxy.createProxy)(String.raw`/Users/jinsup/Desktop/promptbank/nextplate-main/src/layouts/shortcodes/Tab.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Tab_esModule, $$typeof: Tab_$$typeof } = Tab_proxy;
const Tab_default_ = Tab_proxy.default;


/* harmony default export */ const Tab = (Tab_default_);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/Tabs.tsx

const Tabs_proxy = (0,module_proxy.createProxy)(String.raw`/Users/jinsup/Desktop/promptbank/nextplate-main/src/layouts/shortcodes/Tabs.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Tabs_esModule, $$typeof: Tabs_$$typeof } = Tabs_proxy;
const Tabs_default_ = Tabs_proxy.default;


/* harmony default export */ const Tabs = (Tabs_default_);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/Video.tsx

function Video({ title , width =500 , height ="auto" , src , ...rest }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("video", {
        className: "overflow-hidden rounded-lg",
        width: width,
        height: height,
        controls: true,
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("source", {
                src: src.match(/^http/) ? src : `/videos/${src}`,
                type: "video/mp4"
            }),
            title
        ]
    });
}
/* harmony default export */ const shortcodes_Video = (Video);

;// CONCATENATED MODULE: ./src/layouts/shortcodes/Youtube.tsx

const Youtube_proxy = (0,module_proxy.createProxy)(String.raw`/Users/jinsup/Desktop/promptbank/nextplate-main/src/layouts/shortcodes/Youtube.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Youtube_esModule, $$typeof: Youtube_$$typeof } = Youtube_proxy;
const Youtube_default_ = Youtube_proxy.default;


/* harmony default export */ const Youtube = (Youtube_default_);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/all.tsx







const shortcodes = {
    Button: shortcodes_Button,
    Accordion: Accordion,
    Video: shortcodes_Video,
    Tab: Tab,
    Tabs: Tabs,
    Notice: shortcodes_Notice,
    Youtube: Youtube
};
/* harmony default export */ const shortcodes_all = (shortcodes);


/***/ }),

/***/ 1665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OI": () => (/* binding */ humanize),
/* harmony export */   "ab": () => (/* binding */ plainify),
/* harmony export */   "gI": () => (/* binding */ markdownify),
/* harmony export */   "lV": () => (/* binding */ slugify)
/* harmony export */ });
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8273);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5230);


marked__WEBPACK_IMPORTED_MODULE_1__/* .marked.use */ .TU.use({
    mangle: false,
    headerIds: false
});
// slugify
const slugify = (content)=>{
    return (0,github_slugger__WEBPACK_IMPORTED_MODULE_0__/* .slug */ .o)(content);
};
// markdownify
const markdownify = (content, div)=>{
    return {
        __html: div ? marked__WEBPACK_IMPORTED_MODULE_1__/* .marked.parse */ .TU.parse(content) : marked__WEBPACK_IMPORTED_MODULE_1__/* .marked.parseInline */ .TU.parseInline(content)
    };
};
// humanize
const humanize = (content)=>{
    return content.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/^[a-z]/, function(m) {
        return m.toUpperCase();
    });
};
// plainify
const plainify = (content)=>{
    const filterBrackets = content.replace(/<\/?[^>]+(>|$)/gm, "");
    const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
    const stripHTML = htmlEntityDecoder(filterSpaces);
    return stripHTML;
};
// strip entities for plainify
const htmlEntityDecoder = (htmlWithEntities)=>{
    let entityList = {
        "&nbsp;": " ",
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&#39;": "'"
    };
    let htmlWithoutEntities = htmlWithEntities.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, (entity)=>{
        return entityList[entity];
    });
    return htmlWithoutEntities;
};


/***/ }),

/***/ 8112:
/***/ (() => {



/***/ }),

/***/ 1584:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"site":{"title":"PromptMarket","base_url":"https://nextplate.netlify.app","base_path":"/","trailing_slash":false,"favicon":"/images/favicon.png","logo":"/images/logo.png","logo_darkmode":"/images/logo-darkmode.png","logo_width":"150","logo_height":"27","logo_text":"PromptMarket"},"settings":{"search":true,"sticky_header":true,"theme_switcher":true,"default_theme":"system","pagination":2,"summary_length":200,"blog_folder":"blog"},"params":{"contact_form_action":"#","copyright":"IT Heyoom"},"navigation_button":{"enable":false,"label":"Get Started","link":"https://github.com/zeon-studio/nextplate"},"disqus":{"enable":true,"shortname":"themefisher-template","settings":{}},"metadata":{"meta_author":"아이티혜윰","meta_image":"/images/og-image.png","meta_description":"고민하시는 프롬프트를 프롬프트 엔지니어의 도움으로 빠르고 정확하게 제작해 드립니다."}}');

/***/ }),

/***/ 3613:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"lz":{"title":"PromptMarket","base_url":"https://nextplate.netlify.app","base_path":"/","trailing_slash":false,"favicon":"/images/favicon.png","logo":"/images/logo.png","logo_darkmode":"/images/logo-darkmode.png","logo_width":"150","logo_height":"27","logo_text":"PromptMarket"},"Xd":{"search":true,"sticky_header":true,"theme_switcher":true,"default_theme":"system","pagination":2,"summary_length":200,"blog_folder":"blog"},"f":{"contact_form_action":"#","copyright":"IT Heyoom"}}');

/***/ }),

/***/ 4940:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"main":[{"name":"Home","url":"/"},{"name":"우리는","url":"/about"},{"name":"Elements","url":"/elements"},{"name":"Pages","url":"","hasChildren":true,"children":[{"name":"Contact","url":"/contact"},{"name":"블로그","url":"/blog"},{"name":"Founders","url":"/authors"},{"name":"카테고리","url":"/categories"},{"name":"검색","url":"/search"},{"name":"404 Page","url":"/404"}]}],"footer":[{"name":"서비스 이용약관","url":"/elements"},{"name":"개인정보 취급방침","url":"/privacy-policy"}]}');

/***/ })

};
;