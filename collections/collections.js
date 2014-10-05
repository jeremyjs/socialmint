Stocks = new Mongo.Collection('stocks');
Perceptions = new Mongo.Collection('Perceptions');
/* perception = {
 *   symbol: string,
 *   sentiments: {
 *     userId: {
 *       bull: float,
 *       bear: null,
 *     }, ...
 *   }
 * }
 */