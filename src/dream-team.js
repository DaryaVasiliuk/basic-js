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
function createDreamTeam(members) {
  if(!Array.isArray(members)) 
    return false;
  var name = members.filter(members => { 
    if(typeof members === "string") {
      return true;
    }
  });
  name = name.map(name => name.replace(/\s/g, '')).sort((a, b) => a.localeCompare(b));
  const team = name.map(name => name[0])
  return team.join("").toUpperCase();
}

module.exports = {
  createDreamTeam
};
