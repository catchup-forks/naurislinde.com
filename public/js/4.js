webpackJsonp([4],{

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__experience_vue_vue_type_template_id_4616ab72___ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__experience_vue_vue_type_script_lang_js___ = __webpack_require__(615);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(52);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__experience_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__experience_vue_vue_type_template_id_4616ab72___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__experience_vue_vue_type_template_id_4616ab72___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/home/nauris/Github/naurislinde.com/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('4616ab72', component.options)
    } else {
      api.reload('4616ab72', component.options)
    }
    module.hot.accept("./experience.vue?vue&type=template&id=4616ab72&", function () {
      api.rerender('4616ab72', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "resources/assets/js/pages/experience.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_experience_vue_vue_type_script_lang_js___ = __webpack_require__(616);
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_experience_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  layout: 'default',
  metaInfo: function metaInfo() {
    return { title: this.$t('experience') };
  },

  data: function data() {
    return {
      sem: __webpack_require__(630)
    };
  }
});

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_experience_vue_vue_type_template_id_4616ab72___ = __webpack_require__(629);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_experience_vue_vue_type_template_id_4616ab72___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_experience_vue_vue_type_template_id_4616ab72___["b"]; });


/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "v-container",
        { attrs: { "grid-list-md": "" } },
        [
          _c(
            "v-layout",
            { attrs: { "align-center": "" } },
            [
              _c(
                "v-flex",
                { staticClass: "text-xs-center", attrs: { xs12: "" } },
                [
                  _c("h2", { staticClass: "section-title mb-5" }, [
                    _vm._v(_vm._s(_vm.$t("education")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    {
                      staticClass: "text-xs-left",
                      attrs: { row: "", wrap: "" }
                    },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm6: "", "fill-height": "" } },
                        [
                          _c("v-hover", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var hover = ref.hover
                                  return _c(
                                    "v-card",
                                    { class: "elevation-" + (hover ? 12 : 1) },
                                    [
                                      _c("div", { staticClass: "edu-block" }, [
                                        _c(
                                          "div",
                                          { staticClass: "edu-session" },
                                          [_c("span", [_vm._v("2015 - 2017")])]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "pl-5" }, [
                                          _c(
                                            "h4",
                                            {
                                              staticClass: "block-title title"
                                            },
                                            [
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(
                                                    _vm.$t("rtu_education")
                                                  ) +
                                                  "\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "h5",
                                            {
                                              staticClass:
                                                "mb-4 mt-3 subheading"
                                            },
                                            [
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(
                                                    _vm.$t("rtu_address")
                                                  ) +
                                                  "\n                    "
                                              )
                                            ]
                                          )
                                        ])
                                      ])
                                    ]
                                  )
                                }
                              }
                            ])
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm6: "", "fill-height": "" } },
                        [
                          _c("v-hover", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var hover = ref.hover
                                  return _c(
                                    "v-card",
                                    { class: "elevation-" + (hover ? 12 : 1) },
                                    [
                                      _c("div", { staticClass: "edu-block" }, [
                                        _c(
                                          "div",
                                          { staticClass: "edu-session" },
                                          [_c("span", [_vm._v("2011 - 2015")])]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "pl-5" }, [
                                          _c(
                                            "h4",
                                            {
                                              staticClass: "block-title title"
                                            },
                                            [
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(
                                                    _vm.$t("lvt_education")
                                                  ) +
                                                  "\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "h5",
                                            {
                                              staticClass:
                                                "mb-4 mt-3 subheading"
                                            },
                                            [
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(
                                                    _vm.$t("lvt_address")
                                                  ) +
                                                  "\n                    "
                                              )
                                            ]
                                          )
                                        ])
                                      ])
                                    ]
                                  )
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-layout",
            { staticClass: "mt-5 mb-5", attrs: { "align-center": "" } },
            [
              _c(
                "v-flex",
                { staticClass: "text-xs-center", attrs: { xs12: "" } },
                [
                  _c("h2", { staticClass: "section-title mb-5" }, [
                    _vm._v(_vm._s(_vm.$t("experience")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    {
                      staticClass: "text-xs-left",
                      attrs: { row: "", wrap: "" }
                    },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm6: "" } },
                        [
                          _c("v-hover", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var hover = ref.hover
                                  return _c(
                                    "v-card",
                                    { class: "elevation-" + (hover ? 12 : 1) },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "work-exp-block" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "working-duration title d-block"
                                            },
                                            [
                                              _vm._v(
                                                "\n                    2016-" +
                                                  _vm._s(_vm.$t("present")) +
                                                  "\n                  "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "work-exp-logo" },
                                            [
                                              _c("img", {
                                                attrs: {
                                                  src: _vm.sem,
                                                  alt: "SIA Sem.lv"
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "h4",
                                            { staticClass: "headline mt-3" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t("sem_position"))
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "h6",
                                            {
                                              staticClass:
                                                "color-text title mt-2"
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  attrs: {
                                                    href: "https://sem.lv/",
                                                    target: "_blank"
                                                  }
                                                },
                                                [_vm._v("SIA Sem.lv")]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "/images/sem.png?8d45343ebe1f6ccec50d9e26a4423817";

/***/ })

});