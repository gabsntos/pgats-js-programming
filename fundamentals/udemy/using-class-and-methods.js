import { CustumerDetails } from "./classAndMethods.js";
// OR import { custumerDetails } from "./classAndMethods.js";

let custumerDetails = new CustumerDetails() 
custumerDetails.printFirstName('Lucas')
custumerDetails.printLastName('Santos')

/**
 * IMPORTANT we can do the same thing by removing the constructor from here and taking it to where the class is.
 * and than import just the custumerDetail instance. Which is a more cleaner approach.
 * 
 * THIS FILE
 * 
 * import { custumerDetails } from "./classAndMethods.js";
 * 
 * custumerDetails.printFirstName('Lucas')
 * custumerDetails.printLastName('Santos')
 */

/**
 * FILE WHERE CLASS IS
 * 
 * class CustumerDetails {
 * 
 *     printFirstName(name) {
 *         console.log(name)
 *     }
 * 
 *     printLastName(lastName) {
 *         console.log(lastName)
 *     }
 * }
 * 
 * export const custumerDetails = new CustumerDetails()
 */