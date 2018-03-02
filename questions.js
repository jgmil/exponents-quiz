/*jslint es6:true*/
const questions = [
  {
    question: "$$(b^8)(b^4)$$", 
    ans1: "\\(b^2\\)", 
    ans2: "\\(b^{12}\\)", 
    ans3: "\\(b^4\\)", 
    ans4: "\\(b^{32}\\)", 
    answer: "\\(b^{12}\\)", 
    ansValue: 2
  },
  {
    question: "$$(12b^8)(-6b^6)$$", 
    ans1: "\\(6b^2\\)", 
    ans2: "\\(-72b^{48}\\)", 
    ans3: "\\(72b^{14}\\)", 
    ans4: "\\(-72b^{14}\\)", 
    answer: "\\(-72b^{14}\\)", 
    ansValue: 4
  }, 
  {
    question: "$$b^8 \\over b^2$$", 
    ans1: "\\(b^{6}\\)", 
    ans2: "\\(b^{10}\\)", 
    ans3: "\\(b^{4}\\)", 
    ans4: "\\(b^{16}\\)", 
    answer: "\\(b^{6}\\)", 
    ansValue: 1
  }, 
  {
    question: "$$18b^6 \\over 9b^3$$", 
    ans1: "\\(9b^{3}\\)", 
    ans2: "\\(2b^{3}\\)", 
    ans3: "\\(9b^{9}\\)", 
    ans4: "\\(2b^{2}\\)", 
    answer: "\\(2b^{3}\\)", 
    ansValue: 2
  }, 
  {
    question: "$$(b^8)^6$$", 
    ans1: "\\(b^{14}\\)", 
    ans2: "\\(b^{2}\\)", 
    ans3: "\\(b^{48}\\)", 
    ans4: "\\(b^{2}\\)", 
    answer: "\\(b^{48}\\)", 
    ansValue: 3
  }, 
  {
    question: "$$(5b^3)^2$$", 
    ans1: "\\(5b^{6}\\)", 
    ans2: "\\(25b^{5}\\)", 
    ans3: "\\(5b^{5}\\)", 
    ans4: "\\(25b^{6}\\)", 
    answer: "\\(25b^{6}\\)", 
    ansValue: 4
  }, 
  {
    question: "$$(a^4 b^3)^3$$", 
    ans1: "\\(a^4 b^3\\)", 
    ans2: "\\(a^7 b^6\\)", 
    ans3: "\\(a^{12} b^9\\)", 
    ans4: "\\(a^7 b^9\\)", 
    answer: "\\(a^{12} b^9\\)", 
    ansValue: 3
  }, 
  {
    question: "$$b^{-8}$$", 
    ans1: "\\(1 \\over b^8\\)", 
    ans2: "\\(1 \\over b^{-8}\\)", 
    ans3: "\\(b^{8}\\)", 
    ans4: "\\(-b^8\\)", 
    answer: "\\(1 \\over b^8\\)", 
    ansValue: 1
  }, 
  {
    question: "$$b^8 \\over b^{-6}$$", 
    ans1: "\\(b^{14}\\)", 
    ans2: "\\(b^{2}\\)", 
    ans3: "\\(b^{-48}\\)", 
    ans4: "\\(1 \\over b^{14}\\\)", 
    answer: "\\(b^{14}\\)", 
    ansValue: 1
  }, 
  {
    question: "$$(6a^{-4}b^8c^4)^0$$", 
    ans1: "\\(6b^8c^4 \\over a^{4}\\)", 
    ans2: "\\(6\\)", 
    ans3: "\\(6b^8 \\over a^{4}\\)", 
    ans4: "\\(1\\)", 
    answer: "\\(1\\)", 
    ansValue: 4
  }
];