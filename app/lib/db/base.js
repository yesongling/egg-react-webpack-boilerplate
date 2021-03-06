'use strict';
const path = require('path');
const shortid = require('shortid');
const dbpath = path.resolve(__dirname, 'blog.json');
module.exports = class DB {
  constructor(name = dbpath) {
    this.name = name;
  }
  getUniqueId() {
    return shortid.generate();
  }
  get(collectionName) {
    return null;
  }
  getByWhere(collectionName, json) {
    return null;
  }
  add(collectionName, json) {
    return null;
  }
  update(collectionName, where, json) {
    return null;
  }
  delete(collectionName, field) {
    return null;
  }
  getPager(collectionName, query) {
    return null;
  }
};