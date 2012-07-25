goog.provide('ol.Store');

goog.require('ol.Extent');
goog.require('ol.Projection');



/**
 * @constructor
 * @param {ol.Projection} projection Projection.
 * @param {ol.Extent=} opt_extent Extent.
 */
ol.Store = function(projection, opt_extent) {

  /**
   * @private
   * @type {ol.Projection}
   */
  this.projection_ = projection;

  /**
   * @private
   * @type {ol.Extent}
   */
  this.extent_ = goog.isDef(opt_extent) ? opt_extent : projection.getExtent();

};


/**
 * @param {ol.Extent} extent Extent.
 * @param {number} resolution Resolution.
 * @return {string|undefined} Attribution.
 */
ol.Store.prototype.getAttribution = function(extent, resolution) {
  return undefined;
};


/**
 * @return {ol.Extent} Extent.
 */
ol.Store.prototype.getExtent = function() {
  return this.extent_;
};


/**
 * @return {ol.Projection} Projection.
 */
ol.Store.prototype.getProjection = function() {
  return this.projection_;
};


/**
 * @return {Array.<number>|undefined} Resolutions.
 */
ol.Store.prototype.getResolutions = goog.abstractMethod;


/**
 * @param {string|undefined} attribution Attribution.
 */
ol.Store.prototype.setAttribution = function(attribution) {
  this.attribution_ = attribution;
};


/**
 * @param {ol.Extent} extent Extent.
 */
ol.Store.prototype.setExtent = function(extent) {
  this.extent_ = extent;
};


/**
 * @param {ol.Projection} projection Projetion.
 */
ol.Store.prototype.setProjection = function(projection) {
  this.projection_ = projection;
};
