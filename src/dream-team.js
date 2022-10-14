const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam( members ) {
  if (!Array.isArray(members)) return false;
  for (let i = 0; i < members.length; i++) {
      if (typeof members[i] !== 'string') {
          members.splice(i, 1);
          --i
          continue
      }
      members[i] = members[i].trim().toUpperCase();
  }
  return members.sort( (a, b) => a > b ? 1 : -1 ).reduce( (sum, item) => sum+item.slice(0,1), '')
}

module.exports = {
  createDreamTeam
};
