// @flow

import type { IssueType } from 'urbanoe-model';

/**
 * Function that returns an identifying picture for the issue type passed
 * in.  If the type is not recognied, the `other` image is used as unknown.
 */
export function getImageForIssueType(issueType: IssueType): number {
  switch (issueType) {
    case 'pothole': return require('../../assets/images/issues/pothole_icon_main.png');
    case 'graffiti': return require('../../assets/images/issues/graffiti_icon_main.png');
    case 'broken_light': return require('../../assets/images/issues/broken_light_icon_main.png');
    case 'full_garbage_can': return require('../../assets/images/issues/full_garbage_can_icon_main.png');
    case 'litter': return require('../../assets/images/issues/littering_icon_main.png');
    case 'other': return require('../../assets/images/issues/other_icon_main.png');
    case 'found_shopping_cart': return require('../../assets/images/issues/shopping_cart_icon_main.png');
    case 'lost_pet': return require('../../assets/images/issues/lost_pet_icon_main.png');
    case 'found_pet': return require('../../assets/images/issues/found_pet_icon_main.png');
    default: return require('../../assets/images/issues/other_icon_main.png');
  }
}
