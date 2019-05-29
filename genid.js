// Custom uid format
// n represents number and l represents letter
// Format:
// nnnnnllnn_lll_nlnl_nll

const randWithRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const rand = max => {
  return Math.floor(Math.random() * max);
};

const singleDigNum = () => {
  return rand(9);
};

const randomLet = len => {
  let res = [];
  let randomLet = [];
  let randomIdx = [];

  const max = len * 2 - 1;

  for (let i = 0; i < len; i++) {
    randomLet.push(randWithRange(97, 122));
    randomLet.push(randWithRange(65, 90));

    randomIdx.push(rand(max));
  }

  for (let i = 0; i < len; i++) {
    res.push(randomLet[randomIdx[i]]);
  }

  return bin2string(res);
};

const bin2string = array => {
  let result = "";

  for (let i = 0; i < array.length; ++i) {
    result += String.fromCharCode(array[i]);
  }

  return result;
};

module.exports = genUid = format => {
  return format_id(format);
};

const format_id = format => {
  let char = format.split("");
  let uid = "";

  //   if (!char.contains("n") || !char.contains("l") || !char.contains("_"))
  for (let i = 0; i < char.length; i++) {
    if (char[i] !== "n" && char[i] !== "l" && char[i] !== "_") {
      uid = "Error";
      break;
    } else {
      if (char[i] == "n") {
        uid += singleDigNum();
      } else if (char[i] == "l") {
        uid += randomLet(1);
      } else if (char[i] == "_") {
        uid += "_";
      }
    }
  }

  return uid;
};
