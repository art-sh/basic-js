const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members))
    return false;

  return members.reduce((out, member) => {
    typeof member === 'string' && out.push(member.trim()[0].toUpperCase());

    return out
  }, []).sort().join('');
};
