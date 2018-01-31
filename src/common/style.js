// @flow

type BaseStyle = number | Object;

/**
 * Type used to represent a React Native style construct.  A RN component
 * will generally accept a style id or an array of style ids.
 */
export type Style = BaseStyle | Array<BaseStyle>;
