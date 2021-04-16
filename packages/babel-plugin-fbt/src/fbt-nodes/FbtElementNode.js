/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @emails oncall+internationalization
 * @flow
 */
/*eslint max-len: ["error", 100]*/
/* eslint-disable brace-style */ // Needed due to Flow types inlined in comments

'use strict';

/*::
import type {JSModuleNameType} from '../FbtConstants';
import type {AnyStringVariationArg} from './FbtArguments';
import type {
  FbtChildNode,
} from './FbtNode';

type Options = {|
  // Author of the strings generated by this fbt callsite
  author: ?string;
  // If `true`, the fbt text must match an entry from `FbtCommon`,
  // and the string description will be ignored
  common: boolean;
  // If `true`, do not extract strings from this fbt callsite.
  // We'll still transform this callsite to a regular fbt._() using untranslated texts though.
  doNotExtract: boolean;
  // We normally consolidates whitespace down to one space (`' '`).
  // Turn this off by setting this to `true`
  preserveWhitespace: boolean;
  // fbt project name
  project: string;
  // If defined, the translated string may depend on the gender of the sentence's subject.
  subject: ?BabelNode;
|};
*/

const {
  FbtBooleanOptions,
  ValidFbtOptions,
} = require('../FbtConstants');
const {
  collectOptionsFromFbtConstruct,
  enforceBabelNode,
  enforceBoolean,
  enforceString,
  errorAt,
} = require('../FbtUtil');
const {GenderStringVariationArg} = require('./FbtArguments');
const FbtNode = require('./FbtNode');
const {
  isArrayExpression,
  isCallExpression,
  isJSXElement,
  isNode,
  isSpreadElement,
} = require('@babel/types');

/**
 * Represents the main fbt() or <fbt> construct.
 * Every nested fbt construct will be reachable from the `children` property.
 *
 * E.g. When we have an fbt callsite like this:
 *
 *     fbt(
 *       [
 *         'Hello',
 *         <strong>
 *           World!
 *         </strong>
 *       ],
 *       'description',
 *     )
 *
 * We'll represent it like this:
 *
 * FbtElementNode                    // fbt()
 *   |
 *   *- FbtTextNode                  // 'Hello'
 *   *- FbtImplicitParamNode         // <strong/>
 *        |
 *        *- FbtTextNode             // 'World!'
 *
 */
class FbtElementNode
  extends FbtNode/*:: <
    AnyStringVariationArg,
    BabelNodeCallExpression,
    FbtChildNode
  > */ {

  /*::
  static +type: 'element';
  +options: Options;
  */

  getOptions() /*: Options */ {
    const {node} = this;
    const rawOptions = collectOptionsFromFbtConstruct(
      this.moduleName,
      node,
      ValidFbtOptions,
      FbtBooleanOptions,
    );

    try {
      return {
        author: enforceString.orNull(rawOptions.author),
        common: enforceBoolean.orNull(rawOptions.common) || false,
        doNotExtract: enforceBoolean.orNull(rawOptions.doNotExtract) || false,
        preserveWhitespace: enforceBoolean.orNull(rawOptions.preserveWhitespace) || false,
        project: enforceString(rawOptions.project || ''),
        subject: enforceBabelNode.orNull(rawOptions.subject),
      };
    } catch (error) {
      throw errorAt(node, error);
    }
  }

  getArgsForStringVariationCalc() /*: $ReadOnlyArray<AnyStringVariationArg> */ {
    const {subject} = this.options;
    return (isNode(subject) ? [new GenderStringVariationArg(subject)] : [])
      .concat(...this.children.map(c => c.getArgsForStringVariationCalc()));
  }

  getText() /*: string */ {
    throw errorAt(this.node, 'Not implemented yet');
  }

  getDescription() /*: string */ {
    throw errorAt(this.node, 'Not implemented yet');
  }

  /**
   * Create a new class instance given a BabelNode root node.
   * If that node is incompatible, we'll just return `null`.
   */
  static fromBabelNode({
    moduleName,
    node,
  } /*: {|
    moduleName: JSModuleNameType,
    node: BabelNode,
  |} */) /*: ?FbtElementNode */ {
    if (!isCallExpression(node)) {
      return null;
    }
    const fbtElement = new FbtElementNode({
      moduleName,
      node,
    });
    const {arguments: [fbtContentsNode]} = node;

    if (!isArrayExpression(fbtContentsNode)) {
      throw errorAt(
        node,
        `${moduleName}: expected callsite's first argument to be an array`,
      );
    }

    for (const elementChild of (fbtContentsNode.elements || [])) {
      if (elementChild == null) {
        throw errorAt(node, `${moduleName}: elementChild must not be nullish`);
      }
      if (isSpreadElement(elementChild)) {
        throw errorAt(elementChild, `Array spread syntax is not supported`);
      }
      fbtElement.appendChild(this.createChildNode({
        moduleName,
        node: elementChild,
      }));
    }
    return fbtElement;
  }

  /**
   * Create a child fbt node for a given BabelNode.
   */
  static createChildNode({
    moduleName,
    node,
  } /*: {|
    moduleName: JSModuleNameType,
    node: BabelNodeExpression,
  |} */) /*: FbtChildNode */ {
    // Some of these modules may cause dependency cycles with the current one.
    // So we must import them only on-demand rather than on initialization.
    // Don't worry, require() calls are cached.
    const FbtEnumNode = require('./FbtEnumNode');
    const FbtImplicitParamNode = require('./FbtImplicitParamNode');
    const FbtNameNode = require('./FbtNameNode');
    const FbtParamNode = require('./FbtParamNode');
    const FbtPluralNode = require('./FbtPluralNode');
    const FbtPronounNode = require('./FbtPronounNode');
    const FbtSameParamNode = require('./FbtSameParamNode');
    const FbtTextNode = require('./FbtTextNode');

    let fbtChildNode;
    const fbtChildNodeClasses = [
      FbtEnumNode,
      FbtNameNode,
      FbtParamNode,
      FbtPluralNode,
      FbtPronounNode,
      FbtSameParamNode,
      FbtTextNode,
    ];

    for (const Constructor of fbtChildNodeClasses) {
      fbtChildNode = Constructor.fromBabelNode({moduleName, node});
      if (fbtChildNode != null) {
        break;
      }
    }

    // Try to convert to FbtImplicitParamNode as a last resort
    if (fbtChildNode == null && isJSXElement(node)) {
      // Later on, we should only allow non-fbt JSX elements here for auto-wrapping.
      // fbt:param, fbt:pronoun, etc... should appear as children of it.
      fbtChildNode = FbtImplicitParamNode.fromBabelNode({moduleName, node});
    }

    if (fbtChildNode != null) {
      return fbtChildNode;
    }
    throw errorAt(node, `${moduleName}: unsupported babel node: ${node.type}`);
  }
}
// $FlowFixMe[cannot-write] Needed because node.js v10 does not support static constants on classes
FbtElementNode.type = 'element';

module.exports = FbtElementNode;
