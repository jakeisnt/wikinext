// Generated by ReScript, PLEASE EDIT WITH CARE

import * as $$Array from "rescript/lib/es6/array.js";
import * as React from "react";
import * as Api from "/lib/api";
import Head from "next/head";
import Link from "next/link";

function $$default(props) {
  return React.createElement("main", undefined, React.createElement(Head, {
                  children: React.createElement("title", undefined, "Journals")
                }), React.createElement("h1", undefined, "Journals"), React.createElement("ul", undefined, $$Array.map((function (p) {
                        return React.createElement("li", {
                                    key: p.path
                                  }, React.createElement(Link, {
                                        href: p.path,
                                        children: p.title
                                      }));
                      }), props.posts)));
}

function getStaticProps(_ctx) {
  Promise.resolve(Api.getAllPosts());
  
}

export {
  $$default ,
  $$default as default,
  getStaticProps ,
  
}
/* react Not a pure module */